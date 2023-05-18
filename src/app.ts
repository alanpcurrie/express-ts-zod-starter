import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { handleJsonBody } from '~middleware/body-parser';
import { setupSwagger } from '~middleware/swagger';
import exampleRoutes from '~routes/exampleRoutes';
import { logger } from '~utils/logger';

import type { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();
// Load environment variables from a .env file into process.env
dotenv.config();
// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
// Add security headers to the HTTP response
app.use(helmet());
// Log HTTP requests to the console in a combined format
app.use(morgan('combined'));
// Custom middleware to handle JSON request body
app.use(handleJsonBody);
// Parse JSON request bodies
app.use(express.json());
// Mount the example routes
app.use(exampleRoutes);
// Setup Swagger documentation for the app
setupSwagger(app);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(`❌ Error ${err.stack}`);
    res.status(500).json({ message: 'Internal Server Error' });
});

export default app;
