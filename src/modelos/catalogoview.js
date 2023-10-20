const DataTypes = require("sequelize");
const sequelize = require("../conexion/connection");
const Catalogoview = sequelize.define(
  "Catalogoview",
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

    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "",
    },

    genero: {
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

    reparto: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    trailer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "catalogoview",
    timestamps: false,
  }
);

module.exports = Catalogoview;
