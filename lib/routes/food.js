'use strict';

const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator.js');
const FoodClass = require('../models/collection-class.js');
const foodModel = require('../models/food.js');
const foodEl = new FoodClass(foodModel);

router.get('/food', getFood);
router.get('/food/:id', validator, getFood);
router.post('/food', createFood);
router.put('/food/:id', validator, updateFood);
router.delete('/food/:id', validator, removeFood);

function getFoods(req, res, next) {
  let resObj = food.findAll();
  res.json(resObj);
}

function getFoodById(req, res, next) {
  const id = parseInt(req.params.id);
  let resObj = food.findAll({ where: { id }});
  res.json(resObj);
}

function createFood(req, res, next) {
  const foodObj = req.body;
  let resObj = food.create({ where: { id }});
  res.json(resObj);
} 

function updateFood(req, res, next) {
  const id = parseInt(req.params.id);
  const foodObj = req.body;
  let resObj = food.findAll({ where: { id }});
  resObj = foodObj;
  resObj.save();
    res.json(resObj);
}  

function removeFood(req, res, next) {
  const id = parseInt(req.params.id);
  let resObj = food.destroy({ where: { id });
  res.json(resObj);
} 

module.exports = router;
