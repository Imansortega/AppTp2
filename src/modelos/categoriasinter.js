const DataTypes = require("sequelize");
const sequelize = require("../conexion/connection");
const Categoriainter = sequelize.define('Categoriainter', {
    
    idcategoriainter: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },

    idpeli: {
        type: DataTypes.INTEGER,
        allowNull: false,
        }, 
    
    idcategoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },   
}, {
    tableName: 'categoriasinter',
    timestamps: false, 
}) 

module.exports = Categoriainter;