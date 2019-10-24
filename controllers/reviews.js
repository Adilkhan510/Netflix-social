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
    db.Reviews.findOneAndDelete(req.params.ReviewsId, (error,deletedReviews)=>{
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
    db.Reviews.findByIdAndUpdate(req.params.movieId, req.body, {new :true}, (error,updatedReviews)=>{
        if(error) return console.log(error);
        res.json({
            status: 200,
            data:updatedReviews,
            requestedAt: new Date().toLocaleString(),

        })
    })
};

module.exports ={
    show,
    create,
    update,
    destroy
}