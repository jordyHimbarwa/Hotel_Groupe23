const router = require('express').Router();
const chaine_hotelierController = require('../Controllers/chaine_hotelierController');

router.get('/chaine_hoteliere', chaine_hotelierController.getAllchainehoteliere);
router.post('/chaine_hoteliere', chaine_hotelierController.create)
module.exports = router;

