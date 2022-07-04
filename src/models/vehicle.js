module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define(
    'Vehicle',
    {
      veiculo: DataTypes.STRING,
      marca: DataTypes.STRING,
      ano: DataTypes.INTEGER,
      descricao: DataTypes.STRING,
      vendido: DataTypes.BOOLEAN,
    },
    {
      timestamps: true,
    },
  );

  return Vehicle;
};
