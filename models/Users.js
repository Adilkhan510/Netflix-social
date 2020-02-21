const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type: String,
    },
    lastName: {
        type: String,
    },
    email : {
        type: String
    },
    password: String,
    favoriteMovies : [{
        type: String,
    }],
})

const User = mongoose.model('User', UserSchema);

module.exports = User;