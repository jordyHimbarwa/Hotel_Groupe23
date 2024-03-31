const router = require('express').Router();
const reservationController = require('../Controllers/reservationController');

router.get('/reservation', reservationController.getAllreservation);

module.exports = router;