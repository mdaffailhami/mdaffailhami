import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

import {
  experiencesTable,
  favoriteTechsTable,
  projectsTable,
  projectsTechsTable,
  socialsTable,
  techsTable,
  settingsTable,
} from "../schema";

import { techs } from "./data/techs";
import { projects } from "./data/projects";
import { experiences } from "./data/experiences";
import { favoriteTechs } from "./data/favorite-techs";
import { socials } from "./data/socials";
import { settings } from "./data/settings";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

async function main() {
  const conn = postgres(process.env.POSTGRES_URL!);
  const db = drizzle(conn, {
    schema: {
      experiencesTable,
      favoriteTechsTable,
      projectsTable,
      projectsTechsTable,
      socialsTable,
      techsTable,
      settingsTable,
    },
  });

  console.log("🌱 Seeding database with dummy data...");

  try {
    // 1. Clear existing data
    console.log("🧹 Clearing old data...");
    await db.delete(favoriteTechsTable);
    await db.delete(projectsTechsTable);
    await db.delete(socialsTable);
    await db.delete(experiencesTable);
    await db.delete(projectsTable);
    await db.delete(techsTable);
    await db.delete(settingsTable);

    // 2. Insert Techs
    console.log("🚀 Inserting dummy technologies...");
    const techIdByKey: Record<string, string> = {};

    for (const [key, tech] of Object.entries(techs)) {
      const [{ id }] = await db
        .insert(techsTable)
        .values(tech)
        .returning({ id: techsTable.id });

      techIdByKey[key] = id;
    }

    // 3. Insert Favorite Techs
    console.log("⭐ Inserting dummy favorite technologies...");
    for (let i = 0; i < favoriteTechs.length; i++) {
      const tech = favoriteTechs[i];
      const key = Object.keys(techs).find((k) => techs[k] === tech);
      if (key && techIdByKey[key]) {
        await db.insert(favoriteTechsTable).values({
          techId: techIdByKey[key],
          order: i + 1,
        });
      }
    }

    // 4. Insert Socials
    console.log("📱 Inserting dummy socials...");
    for (const social of socials) {
      await db.insert(socialsTable).values(social);
    }

    // 5. Insert Projects
    console.log("📂 Inserting dummy projects...");
    for (const project of projects) {
      const { techs: projectTechsList, ...projectData } = project;

      const [{ id: projectId }] = await db
        .insert(projectsTable)
        .values(projectData)
        .returning({ id: projectsTable.id });

      // Link Techs to Projects
      for (let i = 0; i < projectTechsList.length; i++) {
        const tech = projectTechsList[i];
        const key = Object.keys(techs).find((k) => techs[k] === tech);

        if (key && techIdByKey[key]) {
          await db.insert(projectsTechsTable).values({
            projectId,
            techId: techIdByKey[key],
            order: i + 1,
          });
        }
      }
    }

    // 6. Insert Experiences
    console.log("💼 Inserting dummy experiences...");
    for (const experience of experiences) {
      await db.insert(experiencesTable).values(experience);
    }

    // 7. Insert Settings
    console.log("⚙️ Inserting dummy settings...");
    for (const setting of settings) {
      await db.insert(settingsTable).values(setting);
    }

    console.log("✅ Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
  process.exit(0);
}

main();
