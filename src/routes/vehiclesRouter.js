const express = require('express');
const vehicleController = require('../controllers/vehicleController');

const vehicleRouter = express.Router();

vehicleRouter.post('/veiculos', vehicleController.create);
vehicleRouter.get('/veiculos', vehicleController.getAllVehicles);

vehicleRouter.get('/veiculos/find/search', vehicleController.getBySearchMarca);
vehicleRouter.get('/veiculos/find/year', vehicleController.getBySearchAno);
vehicleRouter.get('/veiculos/find/sale', vehicleController.getBySearchVendido);

vehicleRouter.get('/veiculos/:id', vehicleController.getById);
vehicleRouter.put('/veiculos/:id', vehicleController.updateDataVehicles);
vehicleRouter.patch('/veiculos/:id', vehicleController.updateSaleVehicle);
vehicleRouter.delete('/veiculos/:id', vehicleController.removeVehicle);

module.exports = vehicleRouter;
