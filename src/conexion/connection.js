const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DBUSER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    pool: {
      max: 5, // Maximo de conexiones en el grupo
      min: 0, // Minimo de conexiones en el grupo
      acquire: 30000, // Tiempo maximo, para lLiberar conexiones inactivas
      idle: 10000, // Tiempo maximo para cerrar conexiones inactivas
    },
  }
);

module.exports = sequelize;
