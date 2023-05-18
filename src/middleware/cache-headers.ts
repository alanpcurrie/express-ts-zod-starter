import type { NextFunction, Request, Response } from 'express';

export function cacheMiddleware(maxAge: number) {
    return (req: Request, res: Response, next: NextFunction) => {
        res.set('Cache-Control', `public, max-age=${maxAge}`);
        next();
    };
}

export function setETagHeader(res: Response, etag: string) {
    res.set('ETag', etag);
}

export function setLastModifiedHeader(res: Response, lastModified: Date) {
    res.set('Last-Modified', lastModified.toUTCString());
}
