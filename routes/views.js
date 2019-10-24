const express = require('express');
const router = express.Router();

// const ctrl = require('../controllers');


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

module.exports = router