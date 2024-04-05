const router = require('express').Router();
const locationController = require('../Controllers/locationController');

router.get('/location', locationController.getAlllocation);
router.post('location', locationController.create)
module.exports = router;