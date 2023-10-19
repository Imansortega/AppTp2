const DataTypes = require("sequelize");
const sequelize = require("../conexion/connection");
const Generosdisponibles = sequelize.define(
  "Generosdisponibles",
  {
    todoslosgeneros: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "",
      freezeTableName: true,
    },
  },
  {
    tableName: "generosdisponibles",
    timestamps: false,
  }
);

module.exports = Generosdisponibles;
