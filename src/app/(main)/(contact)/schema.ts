import { z } from "zod";

export const MessageInsert = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name cannot be empty" })
    .max(100, { message: "Name must be at most 100 characters long" }),
  email: z
    .email()
    .max(255, { message: "Email must be at most 255 characters long" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(5000, { message: "Message must be at most 5000 characters long" }),
});

export type MessageInsert = z.infer<typeof MessageInsert>;
