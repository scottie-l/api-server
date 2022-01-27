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

describe('Testing the clothes router', () => {
  it('Should create new clothes data', () => {
    const testArray = [
      { 'clothesName': 'Jeans', 'clotheSize': '28' },
      { 'clothesName': 'shirt', 'clothesSize': 'M' },
      { 'clothesName': 'shoes', 'clothesSize': '10' },
    ];
    testArray.forEach(async (testObj) => {
      const response = await request.post('/clothes').send(testObj);
      expect(response.status).toEqual(201);
      expect(response.body.quantity).toEqual(testObj.quantity);
      expect(response.body.dishName).toEqual(testObj.dishName);
      console.log(response.body);
    });
  });

  it('Should read all from clothes data', async () => {
    const response = await request.get('/clothes');
    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined;
  });

  it('Should read one from clothes data by id', async () => {
    const response = await request.get('/clothes/1');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  it('Should find one by id and update', async () => {
    const amendedDish = { 'clothesName': 'Levis', 'clothesSize': '30' };
    const response = await request.put('/clothes/3').send(amendedDish);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([1]);
    const updatedRow = await request.get('/clothes/3');
    expect(updatedRow.body.dishName).toEqual('Levis');
  });

  it('Should find one by id and remove', async () => {
    const deleteResponse = await request.delete('/clothes/2');
    const updatedTable = await request.get('/clothes');
    expect(deleteResponse.status).toEqual(204);
    expect(updatedTable.body.length).toEqual(2);
  });
});
