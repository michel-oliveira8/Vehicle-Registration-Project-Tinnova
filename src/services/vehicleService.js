const { Vehicle } = require('../models');

const create = async (obj) => {
  const createVehicle = await Vehicle.create(obj);

  return createVehicle;
};

const getAllVehicles = async () => {
  const allVehicles = await Vehicle.findAll();

  return allVehicles;
};

const getById = async (id) => {
  const getVehicleById = await Vehicle.findByPk(id);

  return getVehicleById;
};

const getBySearch = async (q) => {
  const getQuery = await Vehicle.findAll({
    where: { marca: q },
  });

  return getQuery;
};

const updateDataVehicles = async (id, veiculo, marca, ano, descricao, vendido) => {
  await Vehicle.findOne({ where: { id } });
  const updateAllData = await Vehicle.update(
    {
      veiculo, marca, ano, descricao, vendido,
    },
    { where: { id } },
  );

  return updateAllData;
};

const updateSaleVehicle = async (vendido, id) => {
  const vehicleSaled = await Vehicle.update({ vendido }, { where: { id } });
  return vehicleSaled;
};

const removeVehicle = async (id) => {
  const remove = await Vehicle.destroy({ where: { id } });

  return remove;
};

module.exports = {
  create,
  getAllVehicles,
  getById,
  getBySearch,
  updateDataVehicles,
  removeVehicle,
  updateSaleVehicle,
};
