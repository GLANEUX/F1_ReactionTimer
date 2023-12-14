const express = require('express');
const router = express.Router();

const timerController = require('../controllers/timerController');
const jwtMiddleware = require('../middlewares/jwtMiddleware')


// /:user_id/timer
router
    .route('/:user_id/timer')
    .post(jwtMiddleware.verifyToken, timerController.NewTimer)
    .get(jwtMiddleware.verifyToken, timerController.listTimer)

// /:user_id/timer/avg
router
    .route('/:user_id/timer/avg')
    .get(jwtMiddleware.verifyToken, timerController.avgTime)

module.exports = router;

