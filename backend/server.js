const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');

let port = process.env.PORT || 3000;

// Load in mongoose Models
const { Categories, Recipe } = require('./db/models/model_index');

/**
 * Load in Middleware
 */
app.use(bodyParser.json());

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
/**
 * ROUTE HANDLERS
 */

/** RECIPE ROUTES */

/**
 * GET /categories
 * purpose: get all categories
 */
app.get('/categories', (req, res) => {
    // Want to return an array of all the lists in the database
    Categories.find({}).then((categories) => {
        res.send(categories);
    })
});

/**
 * POST /categories
 * Purpose: Create a category
 */
app.post('/categories', (req, res) => {
    // Want to create a new recipe and return the new recipe back to the user (including id)
    // The recipe information (fields) will be passed in via the JSON request body
    let categoryName = req.body.categoryName;

    let newCategory = new Categories({
        categoryName
    })

    newCategory.save().then((categoryDoc) => {
        res.send(categoryDoc);
    })

});

/**
 * PATCH /categories/:id
 * purpose: Update a specified category
 */
app.patch('/categories/:id', (req, res) => {
    // Want to update the specified recipe (recipe id in the url) with new values specified in the JSON body of request
    Categories.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.send('Updated Successfully!');
    })
});

/**
 * DELETE /categories/:id
 * purpose: Delete specified category
 */
app.delete('/categories/:id', (req, res) => {
    // Want to delete the specified Recipe (recipe id in url)
    Categories.findOneAndDelete({ _id: req.params.id})
    .then((removedCategory) => {
        res.send(removedCategory);
    })
});


/**
 * GET /categories/:categoryId/recipes
 * purpose: Get all recipes for a specified category
 */
app.get('/categories/:categoryId/recipes', (req, res) => {
    // Want to return all recipes that belong to a certain category
    Recipe.find({
        _categoryId: req.params.categoryId
    })
    .then((recipes) => {
        res.send(recipes);
    })
});

// Purpose: Return one recipe based on recipeId
app.get('/categories/:categoryId/recipes/:recipeId', (req, res) => {
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
app.post('/categories/:categoryId/recipes', (req, res) => {
    // Want to create a new recipe and return the new recipe back to the user (including id)
    // The recipe information (fields) will be passed in via the JSON request body
    let recipeName = req.body.recipeName;
    let ingredientsInfo = req.body.ingredientsInfo;
    let directions = req.body.directions;

    let newRecipe = new Recipe({
        recipeName,
        ingredientsInfo,
        directions,
        _categoryId: req.params.categoryId
    })

    newRecipe.save().then((recipeDoc) => {
        res.send(recipeDoc);
    })

});

/**
 * PATCH /categories/:categoryId/recipes/:recipeId
 * purpose: Update an existing recipe
 */
app.patch('/categories/:categoryId/recipes/:recipeId', (req, res) => {
    // Want to update an existing recipe (specified by recipeId)
    Recipe.findOneAndUpdate({
        _id: req.params.recipeId,
        _categoryId: req.params.categoryId
    },{
        $set: req.body
    }
    ).then(() => {
        res.send("Updated Successfully!")
    })
});

/**
 * DELETE /categories/:categoryId/recipes/:recipeId
 * purpose: Delete an existing recipe
 */
app.delete('/categories/:categoryId/recipes/:recipeId', (req, res) => {
    // Want to update an existing recipe (specified by recipeId)
    Recipe.findOneAndRemove({
        _id: req.params.recipeId,
        _categoryId: req.params.categoryId
    }).then((removedRecipe) => {
        res.send(removedRecipe);
    })
});

app.listen(port, () => {
    console.log("Server is listening on port", port);
})