const express = require('express');
const request = require('supertest');

const productRoutes = require('../src/infrastructure/routes/productRoutes');

describe('GET /api/v1/products', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/api/v1/products', productRoutes);
  });

  it('should return 200 and a JSON body with data array', async () => {
    const res = await request(app).get('/api/v1/products');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});
