const vehicleService = require("../services/vehicleService")

const create = async (req, res) => {
  const vehicle = req.body;
  const createVehicle = await vehicleService.create(vehicle);

  res.status(201).json(createVehicle);
}

const getAllVehicles = async (_req, res) => {
  const allVehicles = await vehicleService.getAllVehicles();

  res.status(200).json(allVehicles);
}

module.exports = {
  create,
  getAllVehicles,
}