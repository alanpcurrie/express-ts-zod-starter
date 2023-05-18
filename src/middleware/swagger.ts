import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import type { Application } from 'express';

export function setupSwagger(app: Application) {
    const options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'API Documentation',
                version: '1.0.0',
                description: 'API documentation for your Express application',
            },
        },
        apis: ['./src/routes/*.ts'],
    };

    const specs = swaggerJsdoc(options);

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}
