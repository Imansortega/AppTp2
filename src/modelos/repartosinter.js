const DataTypes = require("sequelize");
const sequelize = require("../conexion/connection");
const Reparto = sequelize.define('Reparto', {

    idrep: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },

    idpeli: {
        type: DataTypes.INTEGER,
        allowNull: false,
        }, 

    idactor1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },

    idactor2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        
    idactor3: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },

    idactor4: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },


    idactor5: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },

    idactor6: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },

    idactor7: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
}, {  
    tableName: 'repartosinter',
    timestamps: false,   
}) 
    
module.exports = Reparto;