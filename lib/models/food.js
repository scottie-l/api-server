'use strict';

const postgres = require('postgres');
const foodModel = postgres.model('food', foodSchema);

const foodSchema = postgres.Schema({
  name: { type: String, required: true },
  type: { type: String },
});

module.exports = foodModel;

const {Sequelize, DataType} = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:');

const Food = sequelize.define('food', {
  food: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  mealTime: {
    type: DataTypes.STRING,
  },
});
