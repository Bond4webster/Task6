const express = require('express');

const userValidation = require('../middleware/validation/UserValidation');
const validation = require('../middleware/validation/validation');
const UserController = require('../controllers/UserController');
const user_controller = new UserController();

const userRouter = new express.Router();

userRouter.get('/User',user_controller.getAllUsers);
userRouter.get('/User/:id',user_controller.getUser);
userRouter.get('/User/City/:id',user_controller.getUserWithCity);
userRouter.post('/User',validation(userValidation),user_controller.addUser);
userRouter.put('/User/:id',validation(userValidation),user_controller.updateUser);
userRouter.delete('/User/:id',user_controller.deleteUser);

module.exports = userRouter;