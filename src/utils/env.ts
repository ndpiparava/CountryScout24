import {z} from 'zod';

const environmentSchema = z.object({
  API_BASE_URL: z.string().trim().min(1),
});

export const env = environmentSchema.parse({
  API_BASE_URL: process.env.API_BASE_URL!,
});
