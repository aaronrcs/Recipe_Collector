const mongoose = require('mongoose');

const RecipeCategoriesSchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    // with auth
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

const Categories = mongoose.model('Categories', RecipeCategoriesSchema);

module.exports = { Categories }