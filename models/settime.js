'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SetTime.init({
  setTime_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  stageId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  
} , {
    sequelize,
    modelName: 'SetTime',
    tableName: 'set_time',
    timestamps: false,
  });
  return SetTime;
};