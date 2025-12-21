import { z } from "zod";
import { InferSelectModel } from "drizzle-orm";
import {
  experiencesTable,
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

export const Message = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must be less than 100 characters." }),
  email: z
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email must be less than 255 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(5000, { message: "Message must be less than 5000 characters." }),
});

export type Message = z.infer<typeof Message>;
