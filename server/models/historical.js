module.exports = (sequelize, DataTypes) => {
  const Historical = sequelize.define('Historical', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Historical.associate = (models) => {
    Historical.hasMany(models.Attribute, {
      foreignKey: 'historicalId',
      as: 'attributes',
    });
  };

  return Historical;
};