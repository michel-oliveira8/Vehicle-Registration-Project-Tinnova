const { Vehicle } = require("../models/")

const create = async (obj) => {
  const createVehicle = await Vehicle.create(obj);

  return createVehicle;
}
const getAllVehicles = async () => {
  const allVehicles = await Vehicle.findAll();

  return allVehicles;
}

const getById = async (id) => {
  const getVehicleById = await Vehicle.findByPk(id);

  return getVehicleById;
}

module.exports = {
  create,
  getAllVehicles,
  getById,
};