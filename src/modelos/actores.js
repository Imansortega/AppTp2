const DataTypes = require("sequelize"); //*
const sequelize = require("../conexion/connection");
const Actor = sequelize.define(
  "Actor",
  {
    idactor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nombreyapellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "actores",
    timestamps: false,
  }
);

module.exports = Actor;
