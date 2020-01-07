// This file will handle connection logic to the MongoDB Database

const mongoose = require('mongoose');
// const connectionString = 'mongodb+srv://romeroaaron:romeroaaron1234@cluster0-biv2s.mongodb.net/test?retryWrites=true&w=majority'
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/RecipeCollector'
// const connectionString = 'mongodb://localhost:27017/RecipeCollector'
// Using Bluebird for promises currently
// For now using the global promise for javascript
mongoose.Promise = global.Promise;

mongoose.connect(connectionString, { useNewUrlParser: true }).then(() => {
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