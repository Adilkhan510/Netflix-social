const db = require('../models');

const show = (req,res)=>{
    db.Movies.find({},(error,allMovies)=>{
        if(error) return console.log(error);
        res.json({
            status: 200,
            count: allMovies.length,
            data: allMovies,
            requestedAt: new Date().toLocaleString()
        });
    });
}



const create = (req, res)=>{
    db.Movies.create(req.body,(error,newMovies)=>{
        if(error) return console.log(error);
        res.json({
            status: 201,
            data: newMovies,
            dateCreated: new Date().toLocaleString()
        });
    });
};


const destroy = (req,res)=>{
    db.Movies.findOneAndDelete(req.params.moviesId, (error,deletedMovie)=>{
    if(error) return console.log(error);
    res.json({
        status:200,
        count:1,
        data:deletedMovie,
        requestedAt: new Date().toLocaleString(),
        });
    });
};

const update = (req,res)=>{
    db.Movies.findByIdAndUpdate(req.params.movieId, req.body, {new :true}, (error,updatedmovie)=>{
        if(error) return console.log(error);
        res.json({
            status: 200,
            data:updatedmovie,
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