const Sequelize = require("sequelize");
const sequelize = require("../utils/db");

const order = sequelize.define(
  "order",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: "processing",
    },
    paymentMode: {
      type: Sequelize.ENUM,
      values: ["pod", "online"],
    },
    paymentStatus: {
      type: Sequelize.ENUM,
      values: ["pending", "online successful", "pod successful"],
    },
  },
  {
    tableName: "order",
  }
);

module.exports = order;
