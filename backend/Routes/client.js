const router = require('express').Router();
const clientController = require('../Controllers/clientController');


router.get('/', clientController.getAllclient);
router.get('/:id', clientController.getclientbyIdent);
router.post('/', clientController.create)
router.put('/:id', clientController.update)
router.delete('/:id', clientController.delete)
module.exports = router;
