module.exports = (sequelize, DataTypes) => {
  const Historical = sequelize.define('Historical', {
    ObjectId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Historical.associate = (models) => {
    Historical.hasMany(models.Attribute, {
      foreignKey: 'historicalId',
      as: 'Attributes',
    });
  };

  return Historical;
};
