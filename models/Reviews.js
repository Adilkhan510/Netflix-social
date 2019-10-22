const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    Type: String,
    user : {
        type : Schema.Types.ObjectId,
        ref : 'Users'
    }
})

const Reviews = mongoose.model('MovieReviews', ReviewSchema);

module.exports = Reviews;

