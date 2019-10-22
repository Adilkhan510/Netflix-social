// -------Set up Express environment ---------//
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;

// ------Import Database----//
const db = require('./models');


// ----------Set up Middle Ware----------//

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));




// -------ROUTES--------/

// ---------route to landing page---------//
app.get('/',(req,res)=>{
    res.sendfile('views/landing.html' , {
        root:__dirname,
    });
});

// --------route to log in page--------//

app.get('/login',(req,res)=>{
    res.sendFile('views/login.html',{
        root:__dirname,
    });
});

app.get('/signup', (req,res)=>{
    res.sendFile('views/signup.html',{
        root:__dirname,
    })
})

app.get('/browse', (req,res)=>{
    res.sendFile('views/browse.html',{
        root:__dirname,
    })
})

// -------------Modifying database routes------//

// ---show users database--//
app.get('/api/v1/users',(req,res)=>{
    db.Users.find({},(error,allUsers)=>{
        if(error) return console.log(error);
        res.json({
            status: 200,
            count: allUsers.length,
            data: allUsers,
            requestedAt: new Date().toLocaleString()
        });
    });
});

// ----Post data to User Database----/
app.post('/api/v1/users',(req,res)=>{
    db.Users.create(req.body,(error,newUser)=>{
        if(error) return console.log(error);
        res.json({
            status: 201,
            data: newUser,
            dateCreated: new Date().toLocaleString()
        });
    });
});

// ------delete user from database---//
app.delete('/api/v1/users/delete/:userId',(req,res)=>{
    db.Users.findOneAndDelete(req.params.userId,(error,deletedUser)=>{
        if(error)return console.log(error);
        res.json({
            status: 200,
            count: 1,
            data : deletedUser,
            requestedAt: new Date().toLocaleString()
        });
    });
});


// -------update User------//

app.put('/api/v1/users/update/:userId',(req,res)=>{
    db.Users.findByIdAndUpdate(req.params.userId,req.body,{new:true},(error,updatedUser)=>{
        if(error)return console.log(error);
        res.json({
            status: 200,
            data: updatedUser,
            requestedAt: new Date().toLocaleString(),
        });
    });
});


// ---show movie database--//
app.get('/api/v1/movies',(req,res)=>{
    db.Movies.find({},(error,allMovies)=>{
        if(error) return console.log(error);
        res.json({
            status: 200,
            count: allMovies.length,
            data: allMovies,
            requestedAt: new Date().toLocaleString()
        });
    });
});

// ----Post data to movies Database----/
app.post('/api/v1/movies' , (req, res)=>{
    db.Movies.create(req.body,(error,newMovies)=>{
        if(error) return console.log(error);
        res.json({
            status: 201,
            data: newMovies,
            dateCreated: new Date().toLocaleString()
        });
    });
});
//-----------------delete movie from db ------------------
app.delete('/api/v1/movies/delete/:moviesId',(req,res)=>{
    db.Movies.findOneAndDelete(req.params.moviesId, (error,deletedMovie)=>{
    if(error) return console.log(error);
    res.json({
        status:200,
        count:1,
        data:deletedMovie,
        requestedAt: new Date().toLocaleString(),
        });
    });
});

//-----------------update movies-----------------------

app.put('/api/v1/movies/update/:movieId', (req,res)=>{
    db.Movies.findByIdAndUpdate(req.params.movieId, req.body, {new :true}, (error,updatedmovie)=>{
        if(error) return console.log(error);
        res.json({
            status: 200,
            data:updatedmovie,
            requestedAt: new Date().toLocaleString(),

        })
    })
})






// set up server


app.listen(PORT, ()=>{
    console.log(`server started on ${PORT}`)
})