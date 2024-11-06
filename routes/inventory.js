var express = require('express');
var router = express.Router();

let inventoryController = require('../controllers/inventory');
let authController = require('../controllers/auth');

router.get('/', inventoryController.inventoryList);
router.put('/edit/:id', authController.requireSignin, inventoryController.processEdit);
router.delete('/delete/:id', authController.requireSignin, inventoryController.processDelete);
router.post('/add', inventoryController.processAdd);

module.exports = router;