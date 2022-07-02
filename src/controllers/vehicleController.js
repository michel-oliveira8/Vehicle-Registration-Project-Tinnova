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

const updateDataVehicles = async (req, res) => {
  const { id } = req.params;
  const { veiculo,marca, ano, descricao, vendido } = req.body;
  const updateVehicles = await vehicleService.updateDataVehicles(id, veiculo,marca, ano, descricao, vendido);

  res.status(200).json(updateVehicles);
}

const removeVehicle = async (req, res) => {
  const { id } = req.params;
  await vehicleService.removeVehicle(id);

  res.status(200).end();
}

module.exports = {
  create,
  getAllVehicles,
  getById,
  updateDataVehicles,
  removeVehicle,
}