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
    db.Users.findByIdAndDelete(req.params.userId,(error,deletedUser)=>{
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
    db.Users.find({},(error,allUsers)=>{
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

const createSession = (req,res)=>{
    console.log('req sessssion---->Creating session');
    db.Users.findOne({email: req.body.email},(err,foundUser)=>{
        if(err) return res.status(500).json({
            status: 500,
            Message: "something went wrong"
        })
        if(!foundUser) return res.status(200).json({
            status: 201,
            message: "incorrect password or email"
        })
        if(req.body.password === foundUser.password){
            req.session.currentUser = foundUser._id;
            res.status(201).json({
                status: 201,
                data: {
                    id: foundUser._id,
                    name: foundUser.name,
                    email: foundUser.email,
                    cardNumber: foundUser.cardNumber,
                    cvc: foundUser.cvc
                }
            })
        }
    })

}

const addMovie = (req,res) => {
    const movie = req.body.movie
    console.log(movie);
    db.Users.findById(req.params.userId, (error, foundUser)=>{
        if(error)return console.log(error);
        db.Movies.findOne({tmdbID: movie}, (error, foundMovie)=>{
            if(error)return console.log(error);
            if(foundMovie){
                foundUser.favoriteMovies.push(foundMovie._id);
            } else {
                db.Movies.create({tmdbID:movie}, (error, createdMovie)=>{
                    if(error)return console.log(error);
                    foundUser.favoriteMovies.push(createdMovie._id);
                })
            }
            foundUser.save((error, savedUser)=>{
                if(error)return console.log(error);
                res.json({
                    status: 200,
                    data: savedUser,
                    requestedAt: new Date().toLocaleString(),
                });
            });
        })
    });
}

const getFavorites=(req,res)=>{
    console.log('Req Came thru')
    db.Users.findById(req.params.id,(error,foundUser)=>{
        if(error) console.log(error);
        if(foundUser){
            const data = foundUser.favoriteMovies
            console.log(data)
            res.json({
                status : 200,
                data : {data}
            })
        }
    })
}


module.exports ={
    show,
    update,
    create,
    destroy,
    index,
    createSession,
    addMovie,
    getFavorites
}