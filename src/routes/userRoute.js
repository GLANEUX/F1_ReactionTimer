const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const jwtMiddleware = require('../middlewares/jwtMiddleware')


// /user/register
router
    .route('/register')
    .post(userController.userRegister)

// /user/login
router
    .route('/login')
    .post(userController.userLogin)
 
router
    .route('/:user_id')
    .delete(jwtMiddleware.verifyToken, userController.userDelete)
    .put(jwtMiddleware.verifyToken, userController.userPut)

module.exports = router;

