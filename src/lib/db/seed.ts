import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

import {
  experiencesTable,
  favoriteTechsTable,
  projectsTable,
  projectsTechsTable,
  socialsTable,
  techsTable,
} from "./schema";

import { techs } from "./dummy-data/techs";
import { projects } from "./dummy-data/projects";
import { experiences } from "./dummy-data/experiences";
import { favoriteTechs } from "./dummy-data/favorite-techs";
import { socials } from "./dummy-data/socials";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

async function main() {
  const conn = postgres(process.env.DATABASE_URL!);
  const db = drizzle(conn, {
    schema: {
      experiencesTable,
      favoriteTechsTable,
      projectsTable,
      projectsTechsTable,
      socialsTable,
      techsTable,
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
      for (const tech of projectTechsList) {
        const key = Object.keys(techs).find((k) => techs[k] === tech);

        if (key && techIdByKey[key]) {
          await db.insert(projectsTechsTable).values({
            projectId,
            techId: techIdByKey[key],
          });
        }
      }
    }

    // 6. Insert Experiences
    console.log("💼 Inserting dummy experiences...");
    for (const experience of experiences) {
      await db.insert(experiencesTable).values(experience);
    }

    console.log("✅ Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
  process.exit(0);
}

main();
