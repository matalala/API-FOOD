const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Visitas', {
    ip: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cantidad:{
        type: DataTypes.INTEGER,
      allowNull: false,
    }
    
  },
  {
    createdAt: false,
    updatedAt:false
  });
};