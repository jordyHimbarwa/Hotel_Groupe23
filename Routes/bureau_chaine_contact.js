const router = require('express').Router();
const bureau_chaine_contactController = require('../Controllers/bureau_chaine_contactController');

router.get('/bureau_chaine_contact', bureau_chaine_contactController.getAllcontactChaine);
router.post('/bureau_chaine_contact', bureau_chaine_contactController.create)
router.put('/bureau_chaine_contact/:id', bureau_chaine_contactController.updatecontactchaine);


module.exports = router;