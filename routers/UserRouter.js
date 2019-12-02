const express = require('express');

const auth = require('../middleware/auth');
const userValidation = require('../middleware/validation/UserValidation');
const validation = require('../middleware/validation/validation');
const UserController = require('../controllers/UserController');
const user_controller = new UserController();

const userRouter = new express.Router();

userRouter.get('/User',auth,user_controller.getAllUsers);
userRouter.get('/User/:id',auth,user_controller.getUser);
userRouter.get('/User/City/:id',user_controller.getUserWithCity);
userRouter.post('/User',validation(userValidation),user_controller.addUser);
userRouter.post('/User/login',user_controller.loginUser);
userRouter.post('/User/logout',auth,user_controller.logoutUser);
userRouter.put('/User/:id',auth,validation(userValidation),user_controller.updateUser);
userRouter.delete('/User/:id',auth,user_controller.deleteUser);

module.exports = userRouter;