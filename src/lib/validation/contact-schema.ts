import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(100, "Your name is too long."),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(254, "Your email address is too long."),

  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(30, "Your phone number is too long.")
    .regex(
      /^[+\d\s()-]+$/,
      "Use only numbers, spaces, brackets, + or -.",
    ),

  facilityName: z
    .string()
    .trim()
    .min(2, "Enter your company or facility name.")
    .max(120, "The company or facility name is too long."),

  subject: z
    .string()
    .trim()
    .min(3, "Enter an enquiry subject.")
    .max(150, "The subject is too long."),

  message: z
    .string()
    .trim()
    .min(10, "Please give us more information.")
    .max(3000, "The message cannot exceed 3,000 characters."),

  /*
   * Honeypot field.
   * Real users should leave this empty.
   */
  website: z
    .string()
    .max(200)
    .optional(),

  /*
   * Used to detect forms submitted too quickly.
   */
  startedAt: z
    .string()
    .regex(/^\d+$/, "Invalid form timestamp."),
});

export type ContactFormValues =
  z.infer<typeof contactFormSchema>;