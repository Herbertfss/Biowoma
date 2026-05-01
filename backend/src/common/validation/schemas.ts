import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const plantIdentificationSchema = z.object({
  name: z.string().min(3).max(120),
  description: z.string().min(10).max(1024),
  imageUrl: z.string().url(),
});

export type PlantIdentificationInput = z.infer<typeof plantIdentificationSchema>;
