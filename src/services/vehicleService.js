const { Vehicle } = require("../models/")

const create = async (obj) => {
  const createVehicle = await Vehicle.create(obj);

  return createVehicle;
}
const getAllVehicles = async () => {
  const allVehicles = await Vehicle.findAll();

  return allVehicles;
}

module.exports = {
  create,
  getAllVehicles,
};