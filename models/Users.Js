const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Reviews = require('./Reviews')
const Movies = require('./Movies')

const UserSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    dateOfBirth : {
        type : String,
        required : true, 
    },
    cardNumber: {
        type: Number,
        required: true,
    },
    cardType : {
        type : String,
        required : true,
    },
    favoriteMovies : [{
        type: Schema.Types.ObjectId,
        ref: 'Movies'
    }],

    // embedded data
    reviews : [Reviews.schema],
})

const User = mongoose.model('User', UserSchema);

module.exports = User;