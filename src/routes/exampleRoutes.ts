import { Router as createRouter } from 'express';

import { createExample } from '~controllers/exampleController';

import type { Router } from 'express';

const router: Router = createRouter();

/**
 * @swagger
 * components:
 *   schemas:
 *     ExampleError:
 *       type: object
 *     ErrorResponse:
 *       type: object
 *     ExampleInput:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         userId:
 *           type: string
 *         slug:
 *           type: string
 *         title:
 *           type: string
 *         text:
 *           type: string
 *         createdAt:
 *           type: string
 *       required:
 *         - id
 *         - userid
 *         - slug
 *         - title
 *         - text
 *         - createdAt

 *     ExampleResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *
 */

/**
 * @openapi
 * /example:
 *   post:
 *     summary: Create an example
 *     description: Create a new example resource.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExampleInput'
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ExampleResponse'
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

router.post('/example', createExample);

export default router;
