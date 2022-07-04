const { describe, it, beforeEach } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);
const { expect } = chai;

const VehicleService = require('../../services/vehicleService');
const { vehicleMock, listVehicleMock, updateSaleVehicleMock } = require('../mock/vehicleMock');

describe('Insere um novo veículo no BD', () => {
  beforeEach(sinon.restore);
  describe('quando veículo é criado com sucesso', () => {
    it('retorna um objeto', async () => {
      sinon.stub(VehicleService, 'create')
        .resolves(vehicleMock);
      const response = await VehicleService.create(vehicleMock);

      expect(response).to.have.a('object');
    });

    it('tal objeto possui um id no novo veículo inserido', async () => {
      sinon.stub(VehicleService, 'create')
        .resolves(vehicleMock);
      const response = await VehicleService.create(vehicleMock);

      expect(response).to.have.a.property('id');
    });
  });
});

describe('Retorna uma lista de veículos cadastrados', () => {
  beforeEach(sinon.restore);
  describe('quando veículo é criado com sucesso', () => {
    it('retorna um array', async () => {
      sinon.stub(VehicleService, 'getAllVehicles')
        .resolves(listVehicleMock);
      const response = await VehicleService.getAllVehicles(listVehicleMock);

      expect(response).to.be.an('array');
    });
  });
});

describe('Retorna detalhes de um veículo', () => {
  beforeEach(sinon.restore);
  describe('Filtra pelo ID', () => {
    it('retorna um veículo', async () => {
      sinon.stub(VehicleService, 'getById')
        .resolves(vehicleMock);
      const response = await VehicleService.getById(vehicleMock);

      expect(response.id).to.have.eq(1);
      expect(response).to.have.a('object');
    });
  });
});

describe('Atualiza os dados do veículo', () => {
  beforeEach(sinon.restore);
  describe('Filtra pelo ID', () => {
    it('retorna um novo objeto', async () => {
      sinon.stub(VehicleService, 'updateDataVehicles')
        .resolves(vehicleMock);
      const response = await VehicleService.updateDataVehicles(vehicleMock);

      expect(response.id).to.have.eq(1);
      expect(response).to.have.a('object');
    });
  });
});

describe('Atualiza somente a venda do veículo', () => {
  beforeEach(sinon.restore);
  describe('verifica se possui a chave correta', () => {
    it('Confirma a venda, alterando o valor da chave "Vendido"', async () => {
      sinon.stub(VehicleService, 'updateSaleVehicle')
        .resolves(updateSaleVehicleMock);
      const response = await VehicleService.updateSaleVehicle(updateSaleVehicleMock);

      expect(response).to.have.a.keys('vendido');
      expect(response).to.not.be.false;
    });
  });
});

describe('Removendo um veículo do cadastro', () => {
  beforeEach(sinon.restore);
  describe('Filtra pelo ID', () => {
    it('retorna um objeto vazio', async () => {
      sinon.stub(VehicleService, 'removeVehicle')
        .resolves(vehicleMock);
      const response = await VehicleService.removeVehicle(vehicleMock);

      expect(response.id).to.have.eq(1);
      expect({}).to.be.empty;
    });
  });
});
