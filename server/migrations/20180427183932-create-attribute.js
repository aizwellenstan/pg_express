module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Attributes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Value: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Timestamp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      historicalId: {
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'Historicals',
          key: 'ObjectId',
          as: 'historicalId',
        },
      },
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('Attributes'),
};