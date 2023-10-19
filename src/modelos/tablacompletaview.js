const DataTypes = require("sequelize");
const sequelize = require("../conexion/connection");
const TablaCompletaView = sequelize.define('TablaCompletaView', {
    
    id: {
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

}, {
    tableName: 'tablacompletaview',
    timestamps: false, 
}) 

module.exports = TablaCompletaView;