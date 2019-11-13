const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');

let port = process.env.PORT || 3000;

// Load in mongoose Models
const { Categories, Recipe } = require('./db/models/model_index');

//Load in Middleware
app.use(bodyParser.json());

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

app.listen(port, () => {
    console.log("Server is listening on port", port);
})