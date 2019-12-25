module.exports = (sequelize, DataTypes) => {
  const Attribute = sequelize.define('Attribute', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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