const vehicleService = require('../services/vehicleService');

const create = async (req, res) => {
  const vehicle = req.body;
  await vehicleService.create(vehicle);

  res.status(201).json({ message: 'Veículo cadastrado com sucesso' });
};

const getAllVehicles = async (_req, res) => {
  const allVehicles = await vehicleService.getAllVehicles();

  res.status(200).json(allVehicles);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const getVehicleById = await vehicleService.getById(id);

  res.status(200).json(getVehicleById);
};

const getBySearchMarca = async (req, res) => {
  const { q } = req.query;
  const getQueryMarca = await vehicleService.getBySearchMarca(q);
  res.status(200).json(getQueryMarca);
};

const getBySearchAno = async (req, res) => {
  const { q } = req.query;
  const getQueryAno = await vehicleService.getBySearchAno(q);
  res.status(200).json(getQueryAno);
};

const getBySearchVendido = async (req, res) => {
  const { q } = req.query;
  const trueOrFalse = q === 'true';
  const getQueryVendido = await vehicleService.getBySearchVendido(trueOrFalse);
  res.status(200).json(getQueryVendido);
};

const updateDataVehicles = async (req, res) => {
  const { id } = req.params;
  const {
    veiculo, marca, ano, descricao, vendido,
  } = req.body;
  await vehicleService.updateDataVehicles(id, veiculo, marca, ano, descricao, vendido);

  res.status(200).json({ message: 'Veículo atualizado com sucesso' });
};

const updateSaleVehicle = async (req, res) => {
  const { id } = req.params;
  const { vendido } = req.body;
  await vehicleService.updateSaleVehicle(vendido, id);

  res.status(200).json({ message: 'Produto vendido' });
};

const removeVehicle = async (req, res) => {
  const { id } = req.params;
  await vehicleService.removeVehicle(id);

  res.status(204).end();
};

module.exports = {
  create,
  getAllVehicles,
  getById,
  getBySearchMarca,
  getBySearchAno,
  getBySearchVendido,
  updateDataVehicles,
  removeVehicle,
  updateSaleVehicle,
};
