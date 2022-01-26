'use strict';

const express = require('express');
const { FoodCollection } = require('../models/collection.js');
const router = express.Router();

router.get('/food', async (req, res) => {
  try {
    let food = await FoodCollection.read();
    res.status(200).send(food);
  } catch (err) {
    res.status(404).send(err);
  };
});

router.get('/food/:id', async (req, res) => {
  try {
    let food = await FoodCollection.read(req.params.id);
    res.status(200).send(food);
  } catch (err) {
    res.status(404).send(err);
  };
});

router.post('/food', async (req, res) => {
  try {
    let food = await FoodCollection.create(req.body);
    res.status(201).send(food);
  } catch (err) {
    res.status(404).send(err);
  };
});

router.put('/food/:id', async (req, res) => {
  try {
    let food = await FoodCollection.update(req.params.id, req.body);
    res.status(200).send(food);
  } catch (err) {
    res.status(404).send(err);
  };
});

router.delete('/food/:id', async (req, res) => {
  try {
    let food = await FoodCollection.destroy(req.params.id);
    res.status(204).send(food.body);
  } catch (err) {
    res.status(404).send(err);
  };
});

module.exports = router;
