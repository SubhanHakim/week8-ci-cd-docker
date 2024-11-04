const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('example test suite', () => {
    it('example test case', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });
});

module.exports = app;
