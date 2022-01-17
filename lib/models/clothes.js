'use strict';

const postgres = require('postgres');
const clothesModel = postgres.model('clothes', clothesSchema);

const clothesSchema = postgres.Schema({
  name: { type: String, required: true },
  color: { type: String },
});

module.exports = clothesModel;

const {Sequelize, DataType} = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:');

const Clothes = sequelize.define('clothes', {
  text: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING,
  },
});
