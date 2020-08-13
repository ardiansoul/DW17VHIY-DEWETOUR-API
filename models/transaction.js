"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      transaction.belongsTo(models.trip, {
        foreignKey: "tripId",
        as: "trips",
      });
      transaction.belongsTo(models.user, {
        foreignKey: "userId",
        as: "users",
      });
    }
  }
  transaction.init(
    {
      countryQty: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      status: DataTypes.STRING,
      attachment: DataTypes.STRING,
      tripId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "transaction",
    }
  );
  return transaction;
};
