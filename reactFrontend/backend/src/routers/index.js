const express=require('express');
const router=express.Router();
const userController=require('../controller/userController');

// route to create user
router.post('/createUser',userController.create);

// route to list the users
router.get('/listOfUsers',userController.getListOfUsers);

// route to get details of one user
router.get('/detailsOfOneUser/:id',userController.onUser);

module.exports=router;