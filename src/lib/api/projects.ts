"use server";

import { db } from "@/lib/db";
import { Project } from "@/lib/db/types";
import { ServerResponse } from "@/lib/types";

/**
 * Fetches all projects with their associated technologies.
 */
export async function getProjects(): Promise<ServerResponse<Project[]>> {
  try {
    // Optimized relational query to fetch projects with their techs in one go
    const projectResults = await db.query.projectsTable.findMany({
      with: {
        projectsTechs: {
          with: {
            tech: true,
          },
        },
      },
      orderBy: (t, { asc, desc }) => [asc(t.order), desc(t.end)],
    });

    // Map to the expected flat Project type structure
    const projects: Project[] = projectResults.map((project) => ({
      ...project,
      techs: project.projectsTechs.map((pt) => pt.tech),
    }));

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
