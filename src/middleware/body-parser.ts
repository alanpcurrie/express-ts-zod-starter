import bodyParser from 'body-parser';

import type { NextFunction, Request, Response } from 'express';

export const jsonBodyParser = bodyParser.json();

export function handleJsonBody(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    jsonBodyParser(req, res, next);
}
