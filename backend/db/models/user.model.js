const mongoose = require('mongoose');
const validate = require('mongoose-validator')
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const Joi = require('joi');
const dotenv = require('dotenv');

// Load config( or env)
dotenv.config({path:"./config.env"});

// console.log("Secret: ", process.env.JWTEXPIRES);


// JWT Secret
// const jwtSecret = "51778657246321226641fsdklafjasdkljfsklfjd7148924065";

// Personally customed made validation
// Check if the email exists in database
// extend(
//     'isEmailExists',
//     async function(value) {
//         const emailCount = await mongoose.models.User.countDocuments({email: value });
//         return !emailCount;
//     },
//     'Email already exists'
//   )

// // Custom Validations for Email and Password
// var emailValidator = [
//     validate({
//       validator: 'isEmail',
//       message: 'This is not a valid email address.',
//     }),
//     validate({
//         validator: 'isEmailExists',
//     })
//   ]

// var passwordValidator = [
//     validate({
//       validator: 'isLength',
//       arguments: [1, 12],
//       message: 'Password should be {ARGS[0]} and {ARGS[1]} characters long',
//     })
//   ]

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    },
    sessions: [{
        token: {
            type: String,
            required: true
        },
        expiresAt: {
            type: Number,
            required: true
        }
    }]
});

// Function that validates 
const validateUserSignUp = (user) => {
    const schema = {
        email: Joi.string().min(5).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().error(errors => {
            errors.forEach(err => {
              switch (err.type) {
                case "any.empty":
                    err.message = "Email should not be empty!";
                    break;
                case "string.email":
                    err.message = "Email must be a valid!";
                    break;
                case "string.min":
                    err.message = `Email should have at least ${err.context.limit} characters!`;
                    break;
                default:
                  break;
              }
            });
            return errors;
          }),
          password: Joi.string().min(8).required().error(errors => {
            errors.forEach(err => {
              switch (err.type) {
                case "any.empty":
                    err.message = "Password should not be empty!";
                    break;
                case "string.min":
                    err.message = `Password should have at least ${err.context.limit} characters!`;
                    break;
                case "string.regex.base":
                    err.message = `Password fails to match required pattern!`;
                    break;
                default:
                  break;
              }
            });
            return errors;
          })
    };
    return Joi.validate(user, schema, {abortEarly: false});
}

// make sure the email is unique when signing up
// UserSchema.path('email').validate(async (value) => {
//     const emailCount = await mongoose.models.User.countDocuments({email: value });
//     return !emailCount;
// }, 'Email already exists');


// *** Instance methods ***

UserSchema.methods.generateAccessAuthToken = function () {
    const user = this;
    return new Promise((resolve, reject) => {
        // Create the JSON Web Token and return that
        jwt.sign({ _id: user._id.toHexString() }, process.env.JWTSECRET, { expiresIn: process.env.JWTEXPIRES | 0 }, (err, token) => {
            if (!err) {
                resolve(token);
            } else {
                // there is an error
                // reject();
                return response.status(400).json({ notValideJWT: "Could not generate JWT!" });
            }
        })
    })
}

UserSchema.methods.generateRefreshAuthToken = function () {
    // This method simply generates a 64byte hex string - it doesn't save it to the database. saveSessionToDatabase() does that.
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (!err) {
                // no error
                let token = buf.toString('hex');

                return resolve(token);
            } else {
                return response.status(400).json({ notValidHexString: "Could not generate valid hex string!" });
            }
        })
    })
}

UserSchema.methods.createSession = function () {
    let user = this;

    return user.generateRefreshAuthToken().then((refreshToken) => {
        return saveSessionToDatabase(user, refreshToken);
    }).then((refreshToken) => {
        // saved to database successfully
        // now return the refresh token
        return refreshToken;
    }).catch((e) => {
        return response.status(400).json({ notValidSafeSession: "Faild to save sessions to database!" });
    })
}



/* MODEL METHODS (static methods) */

UserSchema.statics.getJWTSecret = () => {
    return process.env.JWTSECRET;
}



UserSchema.statics.findByIdAndToken = function (_id, token) {
    // finds user by id and token
    // used in auth middleware (verifySession)

    const User = this;

    return User.findOne({
        _id,
        'sessions.token': token
    });
}


UserSchema.statics.findByCredentials = function (email, password, response) {
    let User = this;

    return User.findOne({ email }).then((user) => {

        // if (!user) return Promise.reject();

        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password).then(passwordMatch => {
                if (passwordMatch) {
                    resolve(user);
                }
                else {
                    return response.status(400).json({ passwordnotfound: "Incorrect password!" });
                    // reject(new Error("Incorrect password!"));
                }
            })
        })
        // .catch(alert)
    })
}

UserSchema.statics.hasRefreshTokenExpired = (expiresAt) => {
    let secondsSinceEpoch = Date.now() / 1000;
    if (expiresAt > secondsSinceEpoch) {
        // hasn't expired
        return false;
    } else {
        // has expired
        return true;
    }
}


/* MIDDLEWARE */
// Before a user document is saved, this code runs
UserSchema.pre('save', function (next) {
    let user = this;
    let costFactor = 10;

    if (user.isModified('password')) {
        // if the password field has been edited/changed then run this code.

        // Generate salt and hash password
        bcrypt.genSalt(costFactor, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
});


/* HELPER METHODS */
let saveSessionToDatabase = (user, refreshToken) => {
    // Save session to database
    return new Promise((resolve, reject) => {
        let expiresAt = generateRefreshTokenExpiryTime();

        user.sessions.push({ 'token': refreshToken, expiresAt });

        user.save().then(() => {
            // saved session successfully
            return resolve(refreshToken);
        }).catch((e) => {
            return response.status(400).json({ notValidRefreshToken: "Refresh Token Error!" });
        });
    })
}

let generateRefreshTokenExpiryTime = () => {
    let daysUntilExpire = "10";
    let secondsUntilExpire = ((daysUntilExpire * 24) * 60) * 60;
    return ((Date.now() / 1000) + secondsUntilExpire);
}

const User = mongoose.model('User', UserSchema);

module.exports = { User, validateUserSignUp }
// exports.validateUser = validateUser;