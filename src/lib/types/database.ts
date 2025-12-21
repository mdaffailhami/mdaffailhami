import {
  experiencesTable,
  projectsTable,
  socialsTable,
  techsTable,
} from "@/lib/db/schema";
import { InferSelectModel } from "drizzle-orm";

// Base types directly from schema
export type Tech = InferSelectModel<typeof techsTable>;
export type Project = InferSelectModel<typeof projectsTable>;
export type Experience = InferSelectModel<typeof experiencesTable>;
export type Social = InferSelectModel<typeof socialsTable>;

// Public types (Omit sensitive or internal fields if necessary)
export type PublicTech = Omit<Tech, "id">;

// Projects might need `techs` array manually added since it's a relation
export type PublicProject = Omit<Project, "id"> & {
  techs: PublicTech[];
};

export type PublicExperience = Omit<Experience, "id">;

export type PublicSocial = Omit<Social, "id">;
