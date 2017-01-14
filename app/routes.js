const express = require('express');
const router = express.Router();
const mainController = require('./controllers/main.controller');

module.exports = router;

// main route for home page
router.get('/', mainController.showHome);

//maybe for other page
