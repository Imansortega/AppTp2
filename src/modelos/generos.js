const DataTypes = require("sequelize");
const sequelize = require("../conexion/connection");
const Genero = sequelize.define('Genero', {
    
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
}, {
    tableName: 'generos',
    timestamps: false, 
}) 

module.exports = Genero;