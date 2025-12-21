"use server";

import { db } from "@/lib/db";
import { Experience } from "@/lib/db/types";
import { ServerResponse } from "@/lib/types";

/**
 * Fetches all work experiences ordered by start date (descending).
 */
export async function getExperiences(): Promise<ServerResponse<Experience[]>> {
  try {
    const experiences = await db.query.experiencesTable.findMany({
      orderBy: (t, { desc }) => [desc(t.start)],
    });

    return {
      success: true,
      message: "Experiences fetched successfully",
      data: experiences,
    };
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return {
      success: false,
      message: "Failed to fetch experiences",
      data: null,
    };
  }
}
