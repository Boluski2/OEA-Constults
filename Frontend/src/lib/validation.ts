import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[0-9]\d{0,14}$/, "Invalid phone number").optional(),
  subject: z.string().min(1, "Subject is required"),
  droneDetail: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export type ContactFormData = z.infer<typeof contactSchema>;