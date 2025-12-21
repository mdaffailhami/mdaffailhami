import { relations } from "drizzle-orm";
import {
  pgTable,
  text,
  jsonb,
  uuid,
  timestamp,
  unique,
} from "drizzle-orm/pg-core";

export const techs = pgTable("techs", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").unique().notNull(), // Using slug like 'react', 'nextjs'
  label: text("label").notNull(),
  url: text("url").notNull(),
  icon: jsonb("icon")
    .$type<{ lightTheme: string; darkTheme: string }>()
    .notNull(),
});

export const projects = pgTable("projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  images: jsonb("images").$type<string[]>().notNull(),
  links: jsonb("links")
    .$type<
      {
        type: "github" | "website" | "download" | "other";
        url: string;
        label: string;
        icon?: string;
      }[]
    >()
    .notNull(),
});

export const projectsTechs = pgTable(
  "projects_techs",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    projectId: uuid("project_id")
      .notNull()
      .references(() => projects.id, { onDelete: "cascade" }),
    techId: uuid("tech_id")
      .notNull()
      .references(() => techs.id, { onDelete: "cascade" }),
  },
  (t) => [unique().on(t.projectId, t.techId)]
);

export const experiences = pgTable("experiences", {
  id: uuid("id").defaultRandom().primaryKey(),
  company: text("company").notNull(),
  role: text("role").notNull(),
  start: timestamp("start").notNull(),
  end: timestamp("end"), // Nullable for "Present"
  description: text("description").notNull(),
  images: jsonb("images").$type<string[]>().notNull(),
  links: jsonb("links")
    .$type<
      {
        type: "website" | "linkedin" | "other";
        url: string;
        label: string;
        icon?: string;
      }[]
    >()
    .notNull(),
});

// Relational Definitions
export const projectsRelations = relations(projects, ({ many }) => ({
  projectsTechs: many(projectsTechs),
}));

export const techsRelations = relations(techs, ({ many }) => ({
  projectsTechs: many(projectsTechs),
}));

export const projectsTechsRelations = relations(projectsTechs, ({ one }) => ({
  project: one(projects, {
    fields: [projectsTechs.projectId],
    references: [projects.id],
  }),
  tech: one(techs, {
    fields: [projectsTechs.techId],
    references: [techs.id],
  }),
}));
