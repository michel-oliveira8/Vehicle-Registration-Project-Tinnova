const express = require('express');
const vehicleController = require('../controllers/vehicleController')

const vehicleRouter = express.Router()

vehicleRouter.post('/veiculos', vehicleController.create);

module.exports = vehicleRouter;
