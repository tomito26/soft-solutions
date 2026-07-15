import validator from "validator";
import * as z from "zod";

// Shared by the contact form (client) and the /api/contact route (server)
// so both validate the payload identically.
export const ContactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z
    .string()
    .min(1, "Email is required")
    .refine(validator.isEmail, "Enter a valid email address"),
  message: z.string().min(10, "Tell us a little more (at least 10 characters)"),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;
