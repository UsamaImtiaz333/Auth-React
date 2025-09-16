// src/validations/SchemaForms/OtpSchema.ts
import { z } from "zod";

export const OtpSchema = z.object({
  otp: z
    .string()
    .min(6, "OTP must be 6 digits")
    .max(6, "OTP must be 6 digits"),
});

// TypeScript type
export type OtpFormData = z.infer<typeof OtpSchema>;
