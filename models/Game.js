const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    creator: {
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    minPlayers: {
        type: Number,
        required: true
    },
    maxPlayers: {
        type: Number,
        required: true
    },
    link: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;