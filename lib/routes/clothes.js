'use strict';

const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator.js');
const ClothesClass = require('../models/collection-class.js');
const clothesModel = require('../models/clothes.js');
const clothesEl = new ClothesClass(clothesModel);

router.get('/clothes', getClothes);
router.get('/clothes/:id', validator, getClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', validator, updateClothes);
router.delete('/clothes/:id', validator, removeClothes);

function getClothes(req, res, next) {
  let resObj = food.findAll();
  res.json(resObj);
}

function createClothes(req, res, next) {
  const foodObj = req.body;
  let resObj = food.create({ where: { id }});
  res.json(resObj);
} 

function updateClothes(req, res, next) {
  const id = parseInt(req.params.id);
  const foodObj = req.body;
  let resObj = food.findAll({ where: { id }});
  resObj = foodObj;
  resObj.save();
    res.json(resObj);
}  

function removeClothes(req, res, next) {
  const id = parseInt(req.params.id);
  let resObj = food.destroy({ where: { id });
  res.json(resObj);
} }

module.exports = router;
