import * as z from 'zod';

export const registerSchema = z
  .object({
    username: z.string().min(5),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })