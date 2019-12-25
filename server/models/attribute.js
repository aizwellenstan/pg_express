module.exports = (sequelize, DataTypes) => {
  const Attribute = sequelize.define('Attribute', {
    Value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Timestamp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Attribute.associate = (models) => {
    Attribute.belongsTo(models.Historical, {
      foreignKey: 'historicalId',
      onDelete: 'CASCADE',
    });
  };

  return Attribute;
};
