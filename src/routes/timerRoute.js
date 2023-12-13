const express = require('express');
const router = express.Router();

const timerController = require('../controllers/timerController');
const jwtMiddleware = require('../middlewares/jwtMiddleware')


// /:user_id/timer
router
    .route('/:user_id/timer')
    .post(jwtMiddleware.verifyToken, timerController.NewTimer)


module.exports = router;

