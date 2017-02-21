const express = require('express');
const router = express.Router();

const mainController = require('./controllers/main.controller');
const assetsController = require('./controllers/get.assets.controller');
const priceAssetsController = require('./controllers/priceassets.controller');
const counterblockController = require('./controllers/counterblock.controller');
const counterblockAssetsController = require('./controllers/counterblock.assets.controller');



module.exports = router;

// main route for home page
router.get('/', mainController.showHome);

//maybe for other page
router.use('/assets', assetsController.presentAssets);


// test router for query of counterblock
router.get('/address', counterblockController.getCounterblockAddress);
router.use('/usdvalue', counterblockAssetsController.retrieveAssets);
