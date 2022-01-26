'use strict';

const { app } = require('../lib/server.js');
const supertest = require('supertest');
const request = supertest(app);
const { db } = require('../lib/models');

beforeAll(async () => {
  await db.drop();
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Testing the food router', () => {
  it('Should create new food data', () => {
    const testArray = [
      { 'dishName': 'pizza', 'quantity': '8' },
      { 'dishName': 'soup', 'quantity': '1' },
      { 'dishName': 'salad', 'quantity': '3' },
    ];
    testArray.forEach(async (testObj) => {
      const response = await request.post('/food').send(testObj);
      expect(response.status).toEqual(201);
      expect(response.body.quantity).toEqual(testObj.quantity);
      expect(response.body.dishName).toEqual(testObj.dishName);
      console.log(response.body);
    });
  });

  it('Should read all from food data', async () => {
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined;
  });

  it('Should read one from food data by id', async () => {
    const response = await request.get('/food/1');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  it('Should find one by id and update', async () => {
    const amendedDish = { 'dishName': 'ice cream', 'quantity': '12' };
    const response = await request.put('/food/3').send(amendedDish);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([1]);
    const updatedRow = await request.get('/food/3');
    expect(updatedRow.body.dishName).toEqual('ice cream');
  });

  it('Should find one by id and remove', async () => {
    const deleteResponse = await request.delete('/food/2');
    const updatedTable = await request.get('/food');
    expect(deleteResponse.status).toEqual(204);
    expect(updatedTable.body.length).toEqual(2);
  });
});
