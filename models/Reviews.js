const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Users = require('./');

const ReviewSchema = new Schema({
    movieName: String,
    notes : String,
})

const Reviews = mongoose.model('MovieReviews', ReviewSchema);

module.exports = Reviews;

