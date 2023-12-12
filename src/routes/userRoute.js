const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');


// /user/register
router
    .route('/register')
    .post(userController.userRegister)

// /user/login
router
    .route('/login')
    .post(userController.userLogin)
 


module.exports = router;

