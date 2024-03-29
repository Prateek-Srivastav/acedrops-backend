const Sequelize = require("sequelize");
const sequelize = require("../utils/db");
const cart = sequelize.define(
  "cart",
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
  },
  {
    tableName: "cart",
  }
);

module.exports = cart;
