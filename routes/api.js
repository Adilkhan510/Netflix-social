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
router.post('/auth/users', ctrl.users.createSession)

// update

router.put('/users/update/:userId', ctrl.users.update);
router.put('/users/update/:userId/addmovie', ctrl.users.addMovie);

// movies Api ///

// create movie
router.post('/movies', ctrl.movies.create)
//show one movie
router.get('/movies',ctrl.movies.show)


// review route

router.get('/review', ctrl.reviews.show)
router.post('/review/create', ctrl.reviews.create)

router.get('/review/:userId', ctrl.reviews.showAllReviews)
router.delete('/review/delete/:id', ctrl.reviews.destroy)
router.put('/review/update/:id', ctrl.reviews.update)


module.exports = router;