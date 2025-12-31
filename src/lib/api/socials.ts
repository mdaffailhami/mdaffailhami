"use server";

import { db } from "@/lib/db";
import { Social } from "@/lib/db/types";
import { ServerResponse } from "@/lib/types";

/**
 * Fetches all social media links ordered by their preferred display order.
 */
export async function getSocials(): Promise<ServerResponse<Social[]>> {
  try {
    const socials = await db.query.socialsTable.findMany({
      orderBy: (t, { asc }) => [asc(t.order)],
    });

    return {
      success: true,
      message: "Socials fetched successfully",
      data: socials,
    };
  } catch (error) {
    console.error("Error fetching socials:", error);
    return {
      success: false,
      message: "Failed to fetch socials",
      data: null,
    };
  }
}
