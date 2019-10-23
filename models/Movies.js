const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Reviews = require('./Reviews')

const MoviesSchema = new Schema({

    tmdbID: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref : 'Reviews',
    }]
});

const Movies = mongoose.model('Movies' , MoviesSchema);
module.exports = Movies;