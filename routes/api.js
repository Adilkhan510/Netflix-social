const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');



// ------show one user------
router.get('/users/:id', ctrl.users.show)

// show all users

router.get('/users', ctrl.users.index);

// delete user

router.delete('/users/:id', ctrl.users.destroy);

// create User

router.post('/users', ctrl.users.create)

// update

router.put('/users/update/:userId', ctrl.users.update);


// movies Api ///

//show all movies 
// router.get('/movies',ctrl.movies.index);
//show one movie






module.exports = router;