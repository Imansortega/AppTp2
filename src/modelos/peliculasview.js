const DataTypes = require("sequelize");
const sequelize = require("../conexion/connection");
const Peliculasview = sequelize.define(
  "Peliculasview",
  {
    idpeli: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    poster: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "",
    },

    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "",
    },

    resumen: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "",
    },

    temporadas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    trailer: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "",
    },
  },
  {
    tableName: "peliculasview",
    timestamps: false,
  }
);

module.exports = Peliculasview;
