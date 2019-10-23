const db = require('../models');

const create = (req,res)=>{
    db.Users.create(req.body,(error,newUser)=>{
        if(error) return console.log(error);
        res.json({
            status: 201,
            data: newUser,
            dateCreated: new Date().toLocaleString()
        });
    });
};

const destroy = (req,res)=>{
    db.Users.findOneAndDelete(req.params.userId,(error,deletedUser)=>{
        if(error)return console.log(error);
        res.json({
            status: 200,
            count: 1,
            data : deletedUser,
            requestedAt: new Date().toLocaleString()
        });
    });
}

const index = (req,res)=>{
    db.Users.find({}).populate('favoriteMovies').exec((error,allUsers)=>{
        if(error) return console.log(error);
        res.json({
            status: 200,
            count: allUsers.length,
            data: allUsers,
            requestedAt: new Date().toLocaleString()
        });
    });
}

const update =(req,res)=>{
    db.Users.findByIdAndUpdate(req.params.userId,req.body,{new:true},(error,updatedUser)=>{
        if(error)return console.log(error);
        res.json({
            status: 200,
            data: updatedUser,
            requestedAt: new Date().toLocaleString(),
        });
    });
}

const show = (req,res)=>{
    db.Users.findOne(req.params.id, (error,foundUser)=>{
        if(error) console.log(error);
        res.json({
            status: 201,
            data: foundUser,
            requestedAt: new Date().toLocaleString(),
        })
    })
}; 

module.exports ={
    show,
    update,
    create,
    destroy,
    index,
}