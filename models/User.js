'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: {
      field:'first_name',
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: true,
        notNull: true,
        // min:1,
        // max:200
  }},
    lastName: {
      field:'last_name',
      type:DataTypes.STRING,
      allowNull:false},
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate:{
        isEmail: true
    }},
    password: {
      type:DataTypes.TEXT,
      allowNull:false
    },
    birthday: {
      type:DataTypes.DATEONLY,
      allowNull:false,
      validate: {
        notNull:true,
        isDate:true,
        isValidDate (value) {
          if(ifAfter(new Date(value), new Date())) {
            throw new Error('Your birthday must be earlier today')
          }
        }
      }},
    gender: {
      type:DataTypes.STRING}
  }, 
  {
    sequelize,
    modelName: 'User',
    tableName:'users',
    underscored: true
  });
  return User;
};