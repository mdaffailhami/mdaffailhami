import {
  experiencesTable,
  projectsTable,
  socialsTable,
  techsTable,
} from "@/lib/db/schema";
import { InferSelectModel } from "drizzle-orm";

export type Tech = InferSelectModel<typeof techsTable>;
export type Social = InferSelectModel<typeof socialsTable>;
export type Experience = InferSelectModel<typeof experiencesTable>;

// For projects, we often want the techs relation included
export type Project = InferSelectModel<typeof projectsTable> & {
  techs: Tech[];
};
