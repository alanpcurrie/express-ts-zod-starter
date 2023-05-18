import { z, ZodError } from 'zod';

import type { Request, Response } from 'express';

const exampleSchema = z.object({
    id: z.number().positive(),
    userId: z.string().nonempty(),
    slug: z.string().nonempty(),
    title: z.string().nonempty(),
    text: z.string().nonempty(),
    createdAt: z.string().nonempty(),
});

const createExample = (req: Request, res: Response) => {
    try {
        const { title, userId } = exampleSchema.parse(req.body);
        res.json({ message: `Post: ${title} by ${userId}` });
    } catch (error: unknown) {
        if (error instanceof ZodError) {
            const validationErrors = error.errors.map((err) => err.message);
            res.status(400).json({
                message: 'Invalid input.',
                errors: validationErrors,
            });
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};

const getAllExamples = (req: Request, res: Response) => {
    // Logic to fetch all examples
    // ...
    res.json({ message: 'Get all examples' });
};

const getExampleById = (req: Request, res: Response) => {
    const exampleId = req.params.id;
    // Logic to fetch example by ID
    // ...
    res.json({ message: `Get example by ID: ${exampleId}` });
};

const updateExample = (req: Request, res: Response) => {
    const exampleId = req.params.id;
    const exampleData = req.body;
    // Logic to update example by ID
    // ...
    res.json({ message: `Update example: ${exampleId}`, data: exampleData });
};

const deleteExample = (req: Request, res: Response) => {
    const exampleId = req.params.id;
    // Logic to delete example by ID
    // ...
    res.json({ message: `Delete example: ${exampleId}` });
};

export {
    createExample,
    getAllExamples,
    getExampleById,
    updateExample,
    deleteExample,
};
