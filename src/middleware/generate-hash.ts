import { createHash } from 'crypto';

export function generateHash(content: string): string {
    const hash = createHash('sha256');
    hash.update(content);
    return hash.digest('hex');
}
