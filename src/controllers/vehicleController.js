const vehicleService = require("../services/vehicleService")

const create = async (req, res) => {
  const vehicle = req.body;
  const createVehicle = await vehicleService.create(vehicle);

  res.status(201).json(createVehicle);
}

module.exports = {
  create,
}