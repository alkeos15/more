// tests/app.test.js
const request = require('supertest');
const app = require('../index'); // Import the Express app

describe('GET /api/message', () => {
  it('should respond with status 200 and JSON message', async () => {
    const response = await request(app).get('/api/message');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Hello from the backend!');
  });
});

