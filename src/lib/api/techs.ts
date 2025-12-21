"use server";

import { db } from "@/lib/db";
import { favoriteTechsTable, techsTable } from "@/lib/db/schema";
import { Tech } from "@/lib/db/types";
import { ServerResponse } from "@/lib/types";
import { asc, eq } from "drizzle-orm";

/**
 * Fetches the list of favorite technologies for the About section.
 */
export async function getFavoriteTechs(): Promise<ServerResponse<Tech[]>> {
  try {
    const techs = await db
      .select({
        id: techsTable.id,
        label: techsTable.label,
        url: techsTable.url,
        icon: techsTable.icon,
      })
      .from(favoriteTechsTable)
      .innerJoin(techsTable, eq(favoriteTechsTable.techId, techsTable.id))
      .orderBy(asc(favoriteTechsTable.order));

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
