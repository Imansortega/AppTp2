const DataTypes = require("sequelize");
const sequelize = require("../conexion/connection");
const Generointer = sequelize.define('Generointer', {
    
    idgenerointer: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },

    idpeli: {
        type: DataTypes.INTEGER,
        allowNull: false,
        }, 
    
    idgenero1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
    
    idgenero2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        
    idgenero3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
    
}, {
    tableName: 'generosinter',
    timestamps: false, 
}) 

module.exports = Generointer;