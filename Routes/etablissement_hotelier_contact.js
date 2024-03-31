const router = require('express').Router();
const et_cController = require('../Controllers/etablissement_hotelier_contactController');

router.get('/etablissement_hotelier_contact', et_cController.getAlletablissement_contact);
router.post('/etablissement_hotelier_contact', et_cController.create);

module.exports = router;
