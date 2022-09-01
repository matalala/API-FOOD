const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:true,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumen:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    nivel:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    pasos:{
      type: DataTypes.TEXT,
      allowNull:false
    },
    img:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },
  {
    createdAt: false,
    updatedAt:false
  });
};
