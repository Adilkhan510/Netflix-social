const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Reviews = require('./Reviews')

const MoviesSchema = new Schema({

    name: String,
    type: String,
    actors:[String],
    length: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref : 'Reviews',
    }]
});

const Movies = mongoose.model('Movies ' , MoviesSchema);
module.exports = Movies;