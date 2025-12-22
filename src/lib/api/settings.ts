"use server";

import { db } from "@/lib/db";
import { ServerResponse } from "@/lib/types";
import { Settings } from "@/lib/db/types";

/**
 * Fetches all settings and reduces them into a key-value map.
 */
export async function getSettings(): Promise<ServerResponse<Settings>> {
  try {
    const rows = await db.query.settingsTable.findMany();

    const settings = rows.reduce(
      (acc, row) => ({
        ...acc,
        [row.key]: row.value,
      }),
      {} as Settings
    );

    return {
      success: true,
      message: "Settings fetched successfully",
      data: settings,
    };
  } catch (error) {
    console.error("Error fetching settings:", error);
    return {
      success: false,
      message: "Failed to fetch settings",
      data: null,
    };
  }
}
