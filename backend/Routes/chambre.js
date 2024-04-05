const router = require('express').Router();
const chambreController = require('../Controllers/chambreController');

router.get('/chambre', chambreController.getAllchambre);
router.post('chambre', chambreController.create)
module.exports = router;
