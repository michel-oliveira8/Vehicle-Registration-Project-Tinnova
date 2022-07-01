'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Vehicles',
    [
      {
        id:1,
        veiculo:"HB20",
        marca: "Hyundai",
        ano: 2019,
        descricao:"Este modelo mantém a sua posição em relação ao último ano, em que foi o segundo carro mais vendido. Até abril de 2021, havia 30.514 novos Hyundai HB20 nas ruas do país.",
        vendido: false,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id:2,
        veiculo:"Gol",
        marca: "Volkswagen",
        ano: 2022,
        descricao:" modelo que segura a sua colocação de 2020 e fecha o pódio dos mais vendidos deste ano. Foram 25.435 emplacamentos de novos Volkswagen Gol no Brasil, o que é um grande feito para um veículo cuja geração é mais antiga, se comparado aos demais da categoria.",
        vendido: false,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id:3,
        veiculo:"Onix",
        marca: "Chevrolet",
        ano: 2019,
        descricao:"Sedan compacto, o Chevrolet Onix Plus foi lançado em 2019 e, atualmente, está fazendo sucesso entre os brasileiros. Em 2021, segundo dados reunidos até o mês de abril, foram emplacadas 23.986 unidades.",
        vendido: false,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id:4,
        veiculo:"Mobi",
        marca: "Fiat",
        ano: 2021,
        descricao:"Único modelo da Fiat que está no TOP5 de 2021, o Mobi é um dos cotados para assumir o lugar do antigo Mille como o modelo mais barato da marca no Brasil. Até abril deste ano, o número de vendas atingiu 24.385 unidades.",
        vendido: false,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id:5,
        veiculo:"Fusca",
        marca: "Volkswagen",
        ano: 1930,
        descricao:"O Fusca foi um projeto lançado nos anos 1930 pelo governo alemão com o objetivo de criar um automóvel popular. O nome Volkswagen deriva desse modelo pioneiro e significa literalmente carro do povo em alemão",
        vendido: false,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface, _Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
