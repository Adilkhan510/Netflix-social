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
    age : {
        type : Number,
        required : true, 
    },
    gender : String,
    favoriteMovies : [String],

})