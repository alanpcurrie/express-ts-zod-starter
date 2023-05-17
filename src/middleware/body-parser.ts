import type { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';

export const jsonBodyParser = bodyParser.json();

export function handleJsonBody(req: Request, res: Response, next: NextFunction) {
    jsonBodyParser(req, res, next);
}
