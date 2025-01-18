import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({ required_error: "Full name is required" })
    .min(1, "Full name is required"),
  user_email: z.string().email("Invalid email address"),
  message: z
    .string({ required_error: "Message is required" })
    .min(1, "Message is required"),
  subject: z.string().min(1, "Subject is required"),
});

export type TcontactSchema = z.infer<typeof contactSchema>;
