const express = require('express');
const router = express.Router();

// make public folder here so its lighter on the request 
// show landing page

router.get('/',(req,res)=>{
    res.sendfile('views/landing.html' , {
        root:`${__dirname}/../`,
    });
})
// ---- show sign up page

router.get('/signup',(req,res)=>{
    res.sendFile('views/signup.html',{
        root:`${__dirname}/../`,
    })
});

// ------- show browse------

router.get('/browse',(req,res)=>{
    res.sendFile('views/browse.html',{
        root:`${__dirname}/../`,
    })
})

// -show login page-

router.get('/login',(req,res)=>{
    res.sendFile('views/login.html',{
        root:`${__dirname}/../`,
    })
})

//show profile 
router.get('/profile',(req,res)=>{
    res.sendFile('views/profile.html',{
        root:`${__dirname}/../`,
    })
})

router.get('/review',(req,res)=>{
    res.sendFile('views/review.html',{
        root:`${__dirname}/../`,
    })
})

router.get('/favorites',(req,res)=>{
    res.sendFile('views/favorites.html',{
        root :`${__dirname}/../`,
    })
})

module.exports = router