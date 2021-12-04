const express=require('express');
const router=express.Router();
const userController=require('../controller/userController');

router.post('/createUser',userController.create);

router.get('/listOfUsers',userController.getListOfUsers);

router.get('/detailsOfOneUser/:id',userController.onUser);

module.exports=router;