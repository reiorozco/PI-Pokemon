const { DataTypes } = require("sequelize");
const sequelize = require("../database/dataBase");

const Type = sequelize.define(
  "type",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Type;
