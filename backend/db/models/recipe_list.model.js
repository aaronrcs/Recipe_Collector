const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    ingredientsInfo: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    directions: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    _listId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = { Recipe }