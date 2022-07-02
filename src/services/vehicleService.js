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

const updateDataVehicles = async (id, veiculo, marca, ano, descricao, vendido) => {
  await Vehicle.findOne({ where: { id } });
  await Vehicle.update(
    {veiculo,marca, ano, descricao, vendido },
    {where: { id } },
  );
}

const updateSaleVehicle = async (vendido, id) => {
  return await Vehicle.update({ vendido }, { where: { id }})
}

const removeVehicle = async (id) => {
  const remove = await Vehicle.destroy({where: {id} });

  return remove;
}

module.exports = {
  create,
  getAllVehicles,
  getById,
  updateDataVehicles,
  removeVehicle,
  updateSaleVehicle,
};