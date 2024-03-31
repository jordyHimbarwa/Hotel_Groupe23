const router = require('express').Router();
const bureau_chaine_hoteliereController = require('../Controllers/bureau_chaine_hoteliereController');

router.get('/bureau_chaine_hoteliere', bureau_chaine_hoteliereController.getAllbureauHoteliere);
router.post('/bureau_chaine_hoteliere', bureau_chaine_hoteliereController.create);
router.delete('/bureau_chaine_hoteliere', bureau_chaine_hoteliereController.deletebureauChaine)
module.exports = router;