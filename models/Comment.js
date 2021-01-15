const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    game: {
        type: Schema.Types.ObjectId,
        ref: 'Game'
    },
    content: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;