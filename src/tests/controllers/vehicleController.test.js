const { describe, it, beforeEach } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);
const { expect } = chai;

const VehicleController = require('../../controllers/vehicleController');
const VehicleService = require('../../services/vehicleService');

beforeEach(sinon.restore);
describe('ROTA POST /veiculos', () => {
  const response = {};
  const request = {};

  it('quando veículo é criado com sucesso, retorna status 201', async () => {
    request.body = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);

    sinon.stub(VehicleService, 'create').resolves({});
    await VehicleController.create(request, response);
    expect(response.status.calledWith(201)).to.be.equal(true);
    expect(response.json.calledWith({
      message: 'Veículo cadastrado com sucesso',
    })).to.be.equal(true);
  });
});

describe('ROTA GET /veiculos', () => {
  const response = {};
  const request = {};

  it('listar todos os veículo com status 200', async () => {
    request.body = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);

    sinon.stub(VehicleService, 'getAllVehicles').resolves([]);
    await VehicleController.getAllVehicles(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
    expect(response.json.calledWith([])).to.be.equal(true);
  });
});

describe('ROTA GET /veiculos/find/search', () => {
  const response = {};
  const request = {};

  it('listar todos os veículo com status 200', async () => {
    request.query = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);

    sinon.stub(VehicleService, 'getBySearch').resolves([]);
    await VehicleController.getBySearch(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
    expect(response.json.calledWith([])).to.be.equal(true);
  });
});

describe('ROTA GET /veiculos/:id', () => {
  const response = {};
  const request = {};

  it('retorna os detalhes do veículo com status 200', async () => {
    request.params = { id: 'abcd' };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);

    sinon.stub(VehicleService, 'getById').resolves({});
    await VehicleController.getById(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
    expect(response.json.calledWith({})).to.be.equal(true);
  });
});

describe('ROTA PUT /veiculos/:id', () => {
  const response = {};
  const request = {};

  it('atualiza os dados do veículo com status 200 e mensagem de sucesso', async () => {
    request.body = {};
    request.params = { id: 'abcd' };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);

    sinon.stub(VehicleService, 'updateDataVehicles').resolves({});
    await VehicleController.updateDataVehicles(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
    expect(response.json.calledWith({
      message: 'Veículo atualizado com sucesso',
    })).to.be.equal(true);
  });
});

describe('ROTA PATCH /veiculos/:id', () => {
  const response = {};
  const request = {};

  it('atualiza a venda do veículo com status 200 e mensagem de sucesso', async () => {
    request.body = { vendido: 'abcd' };
    request.params = { id: 'abcd' };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);

    sinon.stub(VehicleService, 'updateSaleVehicle').resolves({});
    await VehicleController.updateSaleVehicle(request, response);
    expect(response.status.calledWith(200)).to.be.equal(true);
    expect(response.json.calledWith({ message: 'Produto vendido' })).to.be.equal(true);
  });
});

describe('ROTA DELETE /veiculos/:id', () => {
  const response = {};
  const request = {};

  it('apaga um veículo e retorna status 204', async () => {
    request.params = { id: 'abcd' };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);
    response.end = sinon.stub().returns(response);

    sinon.stub(VehicleService, 'removeVehicle').resolves({});
    await VehicleController.removeVehicle(request, response);
    expect(response.status.calledWith(204)).to.be.equal(true);
  });
});
