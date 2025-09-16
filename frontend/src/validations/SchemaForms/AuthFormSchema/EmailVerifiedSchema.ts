// src/validations/SchemaForms/EmailVerifiedForm.ts
import { z } from "zod";

// Strict email regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const EmailVerifiedSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(emailRegex, "Invalid email format"),
});

// TypeScript type for form data
export type EmailVerifiedFormData = z.infer<typeof EmailVerifiedSchema>;
