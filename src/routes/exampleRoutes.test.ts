import request from 'supertest';
import app from '../app';

describe('Example Routes', () => {
    it('should respond with "Hello, World!"', async () => {
        const response = await request(app).get('/example');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello, World!');
    });

    it('should respond with "Invalid input." for invalid POST request', async () => {
        const response = await request(app).post('/example').send({});
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Invalid input.');
    });

    it('should respond with the correct message for valid POST request', async () => {
        const response = await request(app).post('/example').send({ name: 'John', age: 30 });
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello, John! You are 30 years old.');
    });
});