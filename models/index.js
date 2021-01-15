const mongoose = require('mongoose');
require("dotenv").config();

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/recs-db';
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}

mongoose.connect(connectionString, configOptions);

mongoose.connection.on('connected', () => {
    console.log(`MongoDB connected at ${connectionString}`)
})

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
})

mongoose.connection.on('error', err => {
    console.log(`Mongoose error: ${err}`);
})

module.exports = {
    User: require('./User'),
    Game: require('./Game'),
    Comment: require('./Comment')
}