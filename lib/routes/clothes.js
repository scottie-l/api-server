'use strict';

const express = require('express');
const { ClothesCollection } = require('../models/collection.js');
const router = express.Router();

router.get('/clothes', async (req, res) => {
  try {
    let clothes = await ClothesCollection.read();
    res.status(200).send(clothes);
  } catch (err) {
    res.status(404).send(err);
  };
});

router.get('/clothes/:id', async (req, res) => {
  try {
    let clothes = await ClothesCollection.read(req.params.id);
    res.status(200).send(clothes);
  } catch (err) {
    res.status(404).send(err);
  };
});

router.post('/clothes', async (req, res) => {
  try {
    let clothes = await ClothesCollection.create(req.body);
    res.status(201).send(clothes);
  } catch (err) {
    res.status(404).send(err);
  };
});

router.put('/clothes/:id', async (req, res) => {
  try {
    let clothes = await ClothesCollection.update(req.params.id, req.body);
    res.status(200).send(clothes);
  } catch (err) {
    res.status(404).send(err);
  };
});

router.delete('/clothes/:id', async (req, res) => {
  try {
    let clothes = await ClothesCollection.destroy(req.params.id);
    res.status(204).send(clothes.body);
  } catch (err) {
    res.status(404).send(err);
  };
});

module.exports = router;
