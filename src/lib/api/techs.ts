"use server";

import { db } from "@/lib/db";
import { Tech } from "@/lib/db/types";
import { ServerResponse } from "@/lib/types";

/**
 * Fetches the list of favorite technologies for the About section.
 */
export async function getFavoriteTechs(): Promise<ServerResponse<Tech[]>> {
  try {
    const results = await db.query.favoriteTechsTable.findMany({
      with: {
        tech: true,
      },
      orderBy: (favoriteTechs, { asc }) => [asc(favoriteTechs.order)],
    });

    const techs: Tech[] = results.map((result) => result.tech);

    return {
      success: true,
      message: "Favorite techs fetched successfully",
      data: techs,
    };
  } catch (error) {
    console.error("Error fetching favorite techs:", error);
    return {
      success: false,
      message: "Failed to fetch favorite techs",
      data: null,
    };
  }
}
