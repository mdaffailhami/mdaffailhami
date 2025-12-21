"use server";

import { db } from "@/lib/db";
import { projectsTable, projectsTechsTable, techsTable } from "@/lib/db/schema";
import { Project } from "@/lib/db/types";
import { ServerResponse } from "@/lib/types";
import { desc, eq } from "drizzle-orm";

/**
 * Fetches all projects with their associated technologies.
 */
export async function getProjects(): Promise<ServerResponse<Project[]>> {
  try {
    // 1. Fetch all projects
    const allProjects = await db
      .select()
      .from(projectsTable)
      .orderBy(desc(projectsTable.id));

    // 2. Fetch all tech associations
    const allProjectTechs = await db
      .select({
        projectId: projectsTechsTable.projectId,
        tech: {
          id: techsTable.id,
          label: techsTable.label,
          url: techsTable.url,
          icon: techsTable.icon,
        },
      })
      .from(projectsTechsTable)
      .innerJoin(techsTable, eq(projectsTechsTable.techId, techsTable.id));

    // 3. Map techs to projects
    const projects = allProjects.map((project) => {
      const techs = allProjectTechs
        .filter((pt) => pt.projectId === project.id)
        .map((pt) => pt.tech);

      return { ...project, techs };
    });

    return {
      success: true,
      message: "Projects fetched successfully",
      data: projects,
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      success: false,
      message: "Failed to fetch projects",
      data: null,
    };
  }
}
