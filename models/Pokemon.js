const { DataTypes } = require("sequelize");
const sequelize = require("../database/dataBase");

const Type = require("./Type");

const Pokemon = sequelize.define(
  "pokemon",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    height: {
      type: DataTypes.INTEGER,
      defaultValue: "50",
    },

    weight: {
      type: DataTypes.INTEGER,
      defaultValue: "50",
    },

    health: {
      type: DataTypes.INTEGER,
      defaultValue: "50",
    },

    attack: {
      type: DataTypes.INTEGER,
      defaultValue: "50",
    },

    defense: {
      type: DataTypes.INTEGER,
      defaultValue: "50",
    },

    speed: {
      type: DataTypes.INTEGER,
      defaultValue: "50",
    },

    fromDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },

  {
    timestamps: false,
    freezeTableName: true,
  }
);

// Associations
Pokemon.belongsToMany(Type, { through: "pokemon_type" });
Type.belongsToMany(Pokemon, { through: "pokemon_type" });

module.exports = Pokemon;
