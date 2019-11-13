// This file will handle connection logic to the MongoDB Database

const mongoose = require('mongoose');

// Using Bluebird for promises currently
// For now using the global promise for javascript
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/RecipeCollector', { useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDB successfully!');
}).catch((error) => {
    console.log("Could not connect to MongoDB database");
    console.log(error);
});

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


module.exports = {
    mongoose
};