const router = require('express').Router();
const employeController = require('../Controllers/employeController');

router.get('/employe', employeController.getAllemploye);
router.post('/employe', employeController.createemploye);

module.exports = router;
