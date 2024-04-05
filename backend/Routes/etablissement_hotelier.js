const router = require('express').Router();
const etablissementController = require('../Controllers/etablissement_hotelierController');

router.get('/etablissement_hotelier', etablissementController.getAlletablissement_hotelier);
router.post('/etablissement_hotelier', etablissementController.create);
module.exports = router;
