const DataTypes = require("sequelize");
const sequelize = require("../conexion/connection");
const Categoria = sequelize.define('Categoria', {
    
    idcategoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
        default: "",
        },
}, {
    tableName: 'categorias',
    timestamps: false, 
}) 

module.exports = Categoria;