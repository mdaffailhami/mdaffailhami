import { relations } from "drizzle-orm";
import {
  pgTable,
  text,
  jsonb,
  uuid,
  timestamp,
  unique,
  integer,
} from "drizzle-orm/pg-core";

export const techsTable = pgTable("techs", {
  id: uuid("id").defaultRandom().primaryKey(),
  label: text("label").notNull(),
  url: text("url").notNull(),
  icon: jsonb("icon").$type<{ light: string; dark: string }>().notNull(),
});

export const projectsTable = pgTable("projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  start: timestamp("start").notNull(),
  end: timestamp("end"), // Nullable for "Ongoing"
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

export const projectsTechsTable = pgTable(
  "projects_techs",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    projectId: uuid("project_id")
      .notNull()
      .references(() => projectsTable.id, { onDelete: "cascade" }),
    techId: uuid("tech_id")
      .notNull()
      .references(() => techsTable.id, { onDelete: "cascade" }),
  },
  (t) => [unique().on(t.projectId, t.techId)]
);

export const experiencesTable = pgTable("experiences", {
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

export const favoriteTechsTable = pgTable("favorite_techs", {
  id: uuid("id").defaultRandom().primaryKey(),
  techId: uuid("tech_id")
    .notNull()
    .references(() => techsTable.id, { onDelete: "cascade" }),
  order: integer("order").notNull(),
});

export const socialsTable = pgTable("socials", {
  id: uuid("id").defaultRandom().primaryKey(),
  label: text("label").notNull(),
  url: text("url").notNull(),
  icon: jsonb("icon").$type<{ light: string; dark: string }>().notNull(),
  order: integer("order").notNull(),
});

export const messagesTable = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const settingsTable = pgTable("settings", {
  key: text("key").primaryKey(),
  value: jsonb("value").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Relational Definitions
export const projectsRelations = relations(projectsTable, ({ many }) => ({
  projectsTechs: many(projectsTechsTable),
}));

export const techsRelations = relations(techsTable, ({ many }) => ({
  projectsTechs: many(projectsTechsTable),
  favoriteTechs: many(favoriteTechsTable),
}));

export const favoriteTechsRelations = relations(
  favoriteTechsTable,
  ({ one }) => ({
    tech: one(techsTable, {
      fields: [favoriteTechsTable.techId],
      references: [techsTable.id],
    }),
  })
);

export const projectsTechsRelations = relations(
  projectsTechsTable,
  ({ one }) => ({
    project: one(projectsTable, {
      fields: [projectsTechsTable.projectId],
      references: [projectsTable.id],
    }),
    tech: one(techsTable, {
      fields: [projectsTechsTable.techId],
      references: [techsTable.id],
    }),
  })
);
