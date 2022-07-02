const { Vehicle } = require("../models/")

const create = async (obj) => {
  const createVehicle = await Vehicle.create(obj);

  return createVehicle;
}

module.exports = {
  create,
};