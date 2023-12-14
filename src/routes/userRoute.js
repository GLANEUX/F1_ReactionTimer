const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const jwtMiddleware = require('../middlewares/jwtMiddleware')


// /users/register
router
    .route('/register')
    .post(userController.userRegister)

// /users/login
router
    .route('/login')
    .post(userController.userLogin)
 
// /users/:user_id
router
    .route('/:user_id')
    .delete(jwtMiddleware.verifyToken, userController.userDelete)
    .put(jwtMiddleware.verifyToken, jwtMiddleware.verifyUserToken, userController.userPut)

module.exports = router;

