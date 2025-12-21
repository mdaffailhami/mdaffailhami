"use server";

import { db } from "@/lib/db";
import { socialsTable } from "@/lib/db/schema";
import { Social } from "@/lib/db/types";
import { ServerResponse } from "@/lib/types";
import { asc } from "drizzle-orm";

/**
 * Fetches all social media links ordered by their preferred display order.
 */
export async function getSocials(): Promise<ServerResponse<Social[]>> {
  try {
    const socials = await db
      .select()
      .from(socialsTable)
      .orderBy(asc(socialsTable.order));

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
