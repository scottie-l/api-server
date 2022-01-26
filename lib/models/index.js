'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

// Bring in models
const Collection = require('./collection.js');
const foodSchema = require('./food.schema.js');
const clothesSchema = require('./clothes.schema.js');

// create connection instance / singleton
let db = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const FoodModel = foodSchema(db, DataTypes);
const ClothesModel = clothesSchema(db, DataTypes);

module.exports = {
  db,
  FoodCollection: new Collection(FoodModel),
  ClothesCollection: new Collection(ClothesModel),
};
