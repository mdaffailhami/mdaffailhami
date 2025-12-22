import { z } from "zod";
import { createSelectSchema } from "drizzle-zod";
import { InferSelectModel } from "drizzle-orm";
import {
  experiencesTable,
  messagesTable,
  projectsTable,
  settingsTable,
  socialsTable,
  techsTable,
} from "@/lib/db/schema";

export type Tech = InferSelectModel<typeof techsTable>;

export type Social = InferSelectModel<typeof socialsTable>;

export type Experience = InferSelectModel<typeof experiencesTable>;

export type Project = InferSelectModel<typeof projectsTable> & {
  techs: Tech[];
};

export type Setting = InferSelectModel<typeof settingsTable>;
export type Settings = Record<Setting["key"], Setting["value"]>;

export const Message = createSelectSchema(messagesTable, {
  name: (s) =>
    s
      .trim()
      .min(1, { message: "Name cannot be empty" })
      .max(100, { message: "Name must be at most 100 characters long" }),
  message: (s) =>
    s
      .min(10, { message: "Message must be at least 10 characters long" })
      .max(5000, { message: "Message must be at most 5000 characters long" }),
}).extend({
  // Use extend for "email" to solve "string().email()" deprecation
  email: z
    .email()
    .max(255, { message: "Email must be at most 255 characters long" }),
});

export const MessageInsert = Message.omit({ id: true, createdAt: true });
export const MessageUpdate = MessageInsert.partial(); // For future example on creating an Update Type

export type Message = z.infer<typeof Message>;
export type MessageInsert = z.infer<typeof MessageInsert>;
export type MessageUpdate = z.infer<typeof MessageUpdate>;
