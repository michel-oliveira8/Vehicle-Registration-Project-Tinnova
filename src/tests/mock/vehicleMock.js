const listVehicleMock = [{
  id: 1,
  veiculo: 'Kombi',
  marca: 'Volkswagen',
  ano: 2013,
  descricao: 'O Volkswagen Kombi foi um veículo comercial ligeiro produzido pela empresa automotiva alemã Volkswagen, entre 1950 e 2013.',
  vendido: false,
  updatedAt: '2022-07-02T20:42:57.809Z',
  createdAt: '2022-07-02T20:42:57.809Z',
},
{
  id: 2,
  veiculo: 'S10',
  marca: 'Chevrolet',
  ano: 2022,
  descricao: 'A nova S10 Cabine Dupla é a picape que combina a força da experiência. Quem procura performance e tecnologia escolhe Chevrolet S10',
  vendido: false,
  updatedAt: '2022-07-02T22:42:57.809Z',
  createdAt: '2022-07-02T22:42:57.809Z',
},
];

const vehicleMock = {
  id: 1,
  veiculo: 'Kombi',
  marca: 'Volkswagen',
  ano: 2013,
  descricao: 'O Volkswagen Kombi foi um veículo comercial ligeiro produzido pela empresa automotiva alemã Volkswagen, entre 1950 e 2013.',
  vendido: false,
  updatedAt: '2022-07-02T20:42:57.809Z',
  createdAt: '2022-07-02T20:42:57.809Z',
};

const updateSaleVehicleMock = {
  vendido: true,
};

module.exports = {
  listVehicleMock,
  vehicleMock,
  updateSaleVehicleMock,
};
