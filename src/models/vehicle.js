const Vehicle = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define("Vehicle", {
    veiculo: DataTypes.STRING,
    marca: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    vendido: DataTypes.BOOLEAN,
  });

  return Vehicle;
};

module.exports = Vehicle;