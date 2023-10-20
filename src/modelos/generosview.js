const DataTypes = require("sequelize");
const sequelize = require("../conexion/connection");
const Generoview = sequelize.define(
  "Generoview",
  {
    idgenero: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    genero: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "",
    },
  },
  {
    tableName: "generosdisponiblesview",
    timestamps: false,
  }
);

module.exports = Generoview;
