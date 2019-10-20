const mongoose = require('mongoose');
const schema = mongoose.schema;

const userSchema = new schema({
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
    favoriteMovies : [String],
})