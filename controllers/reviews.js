const db = require('../models');

const show = (req,res)=>{
    db.Reviews.find({}).populate('user')
    .exec((error,allReviews)=>{
        if(error) return console.log(error);
        res.json({
            status: 200,
            count: allReviews.length,
            data: allReviews,
            requestedAt: new Date().toLocaleString()
        });
    });
}



const create = (req, res)=>{
    db.Reviews.create(req.body,(error,newReviews)=>{
        if(error) return console.log(error);
        res.json({
            status: 201,
            data: newReviews,
            dateCreated: new Date().toLocaleString()
        });
    });
};


const destroy = (req,res)=>{
    db.Reviews.findByIdAndDelete(req.params.id, (error,deletedReviews)=>{
    if(error) return console.log(error);
    res.json({
        status:200,
        count:1,
        data:deletedReviews,
        requestedAt: new Date().toLocaleString(),
        });
    });
};

const update = (req,res)=>{
    db.Reviews.findByIdAndUpdate(req.params.id, req.body, {new :true}, (error,updatedReviews)=>{
        if(error) return console.log(error);
        res.json({
            status: 200,
            data:updatedReviews,
            requestedAt: new Date().toLocaleString(),
        })
    })
};
const showAllReviews = (req,res)=>{
    db.Reviews.find({user: req.params.userId},(error,foundUserReview)=>{
        if(error) return console.log(error);
        res.json({
            status: 200,
            data: foundUserReview
        })
    })
}

module.exports = {
    show,
    create,
    update,
    destroy,
    showAllReviews
}