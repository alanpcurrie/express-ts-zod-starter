import request from 'supertest';

import app from '~src/app';

const PAYLOAD = {
    id: 1,
    userId: '__test-user',
    slug: '__test-slug',
    title: '__test-title',
    text: '__test-text',
    createdAt: '__test-date',
};

describe('Example Routes', () => {
    it('should respond with "Invalid input." for invalid POST request', async () => {
        const response = await request(app).post('/example').send({});
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Invalid input.');
    });
    it('should respond with the correct message for valid POST request', async () => {
        const response = await request(app).post('/example').send(PAYLOAD);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Post: __test-title by __test-user');
    });
});
