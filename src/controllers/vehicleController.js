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

const getById = async (req, res) => {
  const { id } = req.params;
  const getVehicleById = await vehicleService.getById(id);

  res.status(200).json(getVehicleById);
}

module.exports = {
  create,
  getAllVehicles,
  getById,
}