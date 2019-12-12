const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');
const jwt = require('jsonwebtoken');
const path = require('path');

const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

let port = process.env.PORT || 8080;

// Load in mongoose Models
const { Categories, Recipe, User } = require('./db/models/model_index');
const checkUserData  = require('./db/models/user.model');

/**
 * Load in Middleware
 */
// app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.use('/public', express.static('public'));

// Mongo URI
// const mongoURI = 'mongodb://localhost:27017/RecipeCollector';

/** Setting up Middleware for Uploading Images */
// Create mongo connection
// const conn = mongoose.createConnection(mongoURI);

// Init gfs
// let gfs;

// conn.once('open', () => {
//   // Init stream
//   gfs = Grid(conn.db, mongoose.mongo);  
// //   gfs.collection('uploads');
// });

// Create storage engine
// const storage = new GridFsStorage({
//     url: mongoURI,
//     file: (req, file) => {
//       return new Promise((resolve, reject) => {
//           const filename = file.originalname;
//           const fileInfo = {
//             filename: filename          
//         };
//           resolve(fileInfo);
//       });
//     }
//   });
  
//   const upload = multer({ storage });

const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
      },
    filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, fileName)
    }
  });

  let upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    }
  });

// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});

// check whether the request has a valid JWT access token
let authenticate = (req, res, next) => {
    let token = req.header('x-access-token');

    // verify the JWT
    jwt.verify(token, User.getJWTSecret(), (err, decoded) => {
        if (err) {
            // there was an error
            // jwt is invalid - * DO NOT AUTHENTICATE *
            res.status(401).send(err);
        } else {
            // jwt is valid
            req.user_id = decoded._id;
            next();
        }
    });
}

// Verify Refresh Token Middleware (which will be verifying the session)
let verifySession = (req, res, next) => {
    // grab the refresh token from the request header
    let refreshToken = req.header('x-refresh-token');

    // grab the _id from the request header
    let _id = req.header('_id');

    User.findByIdAndToken(_id, refreshToken).then((user) => {
        if (!user) {
            // user couldn't be found
            return Promise.reject({
                'error': 'User not found. Make sure that the refresh token and user id are correct'
            });
        }


        // if the code reaches here - the user was found
        // therefore the refresh token exists in the database - but we still have to check if it has expired or not

        req.user_id = user._id;
        req.userObject = user;
        req.refreshToken = refreshToken;

        let isSessionValid = false;

        user.sessions.forEach((session) => {
            if (session.token === refreshToken) {
                // check if the session has expired
                if (User.hasRefreshTokenExpired(session.expiresAt) === false) {
                    // refresh token has not expired
                    isSessionValid = true;
                }
            }
        });

        if (isSessionValid) {
            // the session is VALID - call next() to continue with processing this web request
            next();
        } else {
            // the session is not valid
            return Promise.reject({
                'error': 'Refresh token has expired or the session is invalid'
            })
        }

    }).catch((e) => {
        res.status(401).send(e);
    })
}

/* END MIDDLEWARE  */
/**
 * ROUTE HANDLERS
 */

/** RECIPE ROUTES */

/**
 * GET /categories
 * purpose: get all categories
 */
app.get('/categories', authenticate, (req, res) => {
    // Want to return an array of all the lists in the database
    Categories.find({
        _userId: req.user_id
    })
    .then((categories) => {
        res.send(categories);
    })
});

// Return a single Category based on categoryId
app.get('/categories/:categoryId', authenticate, (req, res) => {

    Categories.findOne({
        _id: req.params.categoryId,
        _userId: req.user_id
    })
    .then((singleCategory) => {
        res.send(singleCategory);
    })
})

/**
 * POST /categories
 * Purpose: Create a category
 */
app.post('/categories', authenticate, (req, res) => {
    // Want to create a new recipe and return the new recipe back to the user (including id)
    // The recipe information (fields) will be passed in via the JSON request body
    let categoryName = req.body.categoryName;

    let newCategory = new Categories({
        categoryName,
        _userId: req.user_id
    })

    newCategory.save().then((categoryDoc) => {
        res.send(categoryDoc);
    })

});

/**
 * PATCH /categories/:id
 * purpose: Update a specified category
 */
app.patch('/categories/:id', authenticate, (req, res) => {
    // Want to update the specified recipe (recipe id in the url) with new values specified in the JSON body of request
    Categories.findOneAndUpdate({ _id: req.params.id, _userId: req.user_id }, {
        $set: req.body
    }).then(() => {
        res.send({
            message: "Updated Category Successfully!"
        });
    })
});

/**
 * DELETE /categories/:id
 * purpose: Delete specified category
 */
app.delete('/categories/:id', authenticate, (req, res) => {
    // Want to delete the specified Recipe (recipe id in url)
    Categories.findOneAndDelete({ 
        _id: req.params.id,
        _userId: req.user_id
    })
    .then((removedCategory) => {
        res.send(removedCategory);
        
        // Delete all recipes from a certain Category
        deleteRecipesFromCategories(removedCategory._id);
    })
});


/**
 * GET /categories/:categoryId/recipes
 * purpose: Get all recipes for a specified category
 */
app.get('/categories/:categoryId/recipes', authenticate, (req, res) => {
    // Want to return all recipes that belong to a certain category
    Recipe.find({
        _categoryId: req.params.categoryId
    })
    .then((recipes) => {
        res.send(recipes);
    })
});

// Purpose: Return one recipe based on recipeId
app.get('/categories/:categoryId/recipes/:recipeId', authenticate, (req, res) => {
    // Want to return all recipes that belong to a certain category
    Recipe.findOne({
        _id: req.params.recipeId,
        _categoryId: req.params.categoryId
    })
    .then((recipe) => {
        res.send(recipe);
    })
});

/**
 * POST /categories/:categoryId/recipes
 * Purpose: Create a new recipe in a specified category
 */
app.post('/categories/:categoryId/recipes', upload.single('recipeImage'), authenticate, (req, res) => {
    // Want to create a new recipe and return the new recipe back to the user (including id)
    // The recipe information (fields) will be passed in via the JSON request body

            const url = req.protocol + '://' + req.get('host')
            let recipeName = req.body.recipeName;
            let ingredientsInfo = req.body.ingredientsInfo;
            let directions = req.body.directions;
            let recipeImage = url + '/public/' + req.file.filename;            
            let recipeImageBlob = req.body.recipeImageBlob

            // console.log("Recipe Image: ", recipeImage);
            // console.log("Recipe Blob: ", recipeImageBlob);

            let newRecipe = new Recipe({
                recipeName,
                ingredientsInfo,
                directions,
                recipeImage,
                recipeImageBlob,
                _categoryId: req.params.categoryId
            })
    
    Categories.findOne({
        _id: req.params.categoryId,
        _userId: req.user_id
    }).then((category) => {
        if (category) {
            // category object with the specified conditions was found
            // therefore the currently authenticated user can create new tasks
            return true;
        }

        // else - the category object is undefined
        return false;
    }).then((canCreateRecipe) => {
        if (canCreateRecipe) {
            
        
            newRecipe.save().then((recipeDoc) => {
                res.send(recipeDoc);
            })
        } else {
            res.sendStatus(404);
        }
    })

});

/**
 * PATCH /categories/:categoryId/recipes/:recipeId
 * purpose: Update an existing recipe
 */
app.patch('/categories/:categoryId/recipes/:recipeId', authenticate, (req, res) => {
    // Want to update an existing recipe (specified by recipeId)

    Categories.findOne({
        _id: req.params.categoryId,
        _userId: req.user_id
    }).then((category) => {
        if (category) {
            // category object with the specified conditions was found
            // therefore the currently authenticated user can make updates to recipes within specified category
            return true;
        }

        // else - the category object is undefined
        return false;
    }).then((canUpdateRecipes) => {
        if(canUpdateRecipes){
            // The currently authenticated user can update recipes

            Recipe.findOneAndUpdate({
                _id: req.params.recipeId,
                _categoryId: req.params.categoryId
            },{
                $set: req.body
            }
            ).then(() => {
                res.send({
                    message: "Updated Recipe Successfully!"
                });
            })
        } else {
            res.sendStatus(404);
        }
    })
    
});

/**
 * DELETE /categories/:categoryId/recipes/:recipeId
 * purpose: Delete an existing recipe
 */
app.delete('/categories/:categoryId/recipes/:recipeId', authenticate, (req, res) => {
    // Want to update an existing recipe (specified by recipeId)
    Categories.findOne({
        _id: req.params.categoryId,
        _userId: req.user_id
    }).then((category) => {
        if (category) {
            // category object with the specified conditions was found
            // therefore the currently authenticated user can make updates to recipes within specified category
            return true;
        }

        // else - the category object is undefined
        return false;
    }).then((canRemoveRecipe) => {
        if(canRemoveRecipe){
            Recipe.findOneAndRemove({
                _id: req.params.recipeId,
                _categoryId: req.params.categoryId
            }).then((removedRecipe) => {
                res.send(removedRecipe);
            })
        } else {
            res.sendStatus(404);
        }
    })
    
});

/** USER ROUTES */

/**
 * POST /users
 * Purpose: sign up
 */
app.post('/users', async (req, res) => {
    // User sign up
    let body = req.body;
    let newUser = new User(body);
    const { error } = checkUserData.validateUserSignUp(body);

    if(error){
        return res.status(400).send(error.details)
    }

    // Check if this user already exisits
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({duplicateUser: 'This email already exisits!'});
    } else {
        // else create a new user
        newUser.save().then(() => {
            return newUser.createSession();
        }).then((refreshToken) => {
            // Session created successfully - refreshToken returned.
            // now we geneate an access auth token for the user
    
            return newUser.generateAccessAuthToken().then((accessToken) => {
                // access auth token generated successfully, now we return an object containing the auth tokens
                return { accessToken, refreshToken }
            });
        }).then((authTokens) => {
            // Now we construct and send the response to the user with their auth tokens in the header and the user object in the body
            res
                .header('x-refresh-token', authTokens.refreshToken)
                .header('x-access-token', authTokens.accessToken)
                .send(newUser);
        }).catch((e) => {
            res.status(400).send(e);
        })
    }

    

});

/**
 * POST /users/login
 * Purpose: Login
 */
app.post('/users/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findByCredentials(email, password, res).then((user) => {
        
        return user.createSession().then((refreshToken) => {
            // Session created successfully - refreshToken returned.
            // now we geneate an access auth token for the user

            return user.generateAccessAuthToken().then((accessToken) => {
                // access auth token generated successfully, now we return an object containing the auth tokens
                return { accessToken, refreshToken }
            });
        }).then((authTokens) => {
            // Now we construct and send the response to the user with their auth tokens in the header and the user object in the body
            res
                .header('x-refresh-token', authTokens.refreshToken)
                .header('x-access-token', authTokens.accessToken)
                .send(user);
        })
    }).catch((e) => {
        // res.status(400).json({error: e});

        // Check if this email exists
        User.findOne({ email }).then(email => {
            // Will return 400 status if email does not exist
            if(!email){
                return res.status(400).json({ emailnotfound: "Email not found" });
            }
        })
    });
})

/**
 * GET /users/me/access-token
 * Purpose: generates and returns an access token
 */
app.get('/users/me/access-token', verifySession, (req, res) => {
    // we know that the user/caller is authenticated and we have the user_id and user object available to us
    req.userObject.generateAccessAuthToken().then((accessToken) => {
        res.header('x-access-token', accessToken).send({ accessToken });
    }).catch((error) => {
        res.status(400).send(error);
    });
})

/* HELPER METHODS */
let deleteRecipesFromCategories = (_categoryId) => {
    Recipe.deleteMany({
        _categoryId
    }).then(() => {
        console.log("Recipes from " + _categoryId + " were deleted!");
    })
}

// Code for production
// if(process.env.NODE_ENV === 'production'){
//     // Set static path
//     app.use(express.static(__dirname + '/dist/'))

//     // redirecting to index.html to display our project
//     app.get(/.*/,(req,res) => res.sendFile(__dirname + '/dist/frontend/index.html'))
// }

// app.use(express.static(path.join(__dirname, 'dist')));
// app.get('*',(req,res) => res.sendFile(path.join(__dirname + '/dist/index.html')))

app.listen(port, () => {
    console.log("Server is listening on port", port);
})