const express = require('express');
const userRouter = express.Router();

userRouter.post('/signup', require('../controllers/user.auth').signUp);
userRouter.post('/login', require('../controllers/user.auth').login);
userRouter.get('/logout', require('../controllers/user.auth').logout);

module.exports = userRouter;