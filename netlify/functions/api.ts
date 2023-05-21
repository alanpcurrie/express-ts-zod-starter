import express, { Router } from 'express';
import serverless from 'serverless-http';

import type { HandlerContext, HandlerEvent } from '@netlify/functions';

export async function handler(event: HandlerEvent, context: HandlerContext) {
    const api = express();
    const router = Router();
    router.get('/hello', (req, res) => res.send('Hello World!'));
    api.use('/api/', router);
    return serverless(api)(event, context);
}
