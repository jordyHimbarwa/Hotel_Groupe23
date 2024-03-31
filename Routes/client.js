const router = require('express').Router();
const clientController = require('../Controllers/clientController');

router.get('/client', clientController.getAllclient);
router.post('/client', clientController.create)
module.exports = router;
