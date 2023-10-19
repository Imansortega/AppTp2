const DataTypes = require("sequelize");
const sequelize = require("../conexion/connection");
const Generosdisponibles = sequelize.define('Generosdisponibles', {
    /* idgenero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        }, */
    
    todoslosgeneros: {
        type: DataTypes.STRING,
        allowNull: false,
        default: "",
        freezeTableName: true,
    },

}, {
    tableName: 'generosdisponibles',
    timestamps: false, 
}) 

module.exports = Generosdisponibles;