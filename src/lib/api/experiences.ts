"use server";

import { db } from "@/lib/db";
import { experiencesTable } from "@/lib/db/schema";
import { Experience } from "@/lib/db/types";
import { ServerResponse } from "@/lib/types";
import { desc } from "drizzle-orm";

/**
 * Fetches all work experiences ordered by start date (descending).
 */
export async function getExperiences(): Promise<ServerResponse<Experience[]>> {
  try {
    const experiences = await db
      .select()
      .from(experiencesTable)
      .orderBy(desc(experiencesTable.start));

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
