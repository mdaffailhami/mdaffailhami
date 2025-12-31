"use server";

import { MessageInsert } from "@/lib/db/types";
import { db } from "@/lib/db";
import { messagesTable } from "@/lib/db/schema";
import { ServerResponse } from "@/lib/types";

const defaultErrorMessage = "Something went wrong. Please try again.";

/**
 * Saves a contact message to the database and triggers an email notification.
 * This is a universal server function (RPC) that can be called directly
 * from components or wrapped in a REST API route.
 */
export async function sendMessage(
  data: MessageInsert
): Promise<ServerResponse<null>> {
  const result = MessageInsert.safeParse(data);

  if (!result.success) {
    return { success: false, message: result.error.message, data: null };
  }

  const validatedData = result.data;

  try {
    // 1. Persist to database
    await db.insert(messagesTable).values(validatedData);

    // 2. Send email/notification (currently via external URL)
    const res = await fetch(process.env.GS_SEND_MESSAGE_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedData),
    });

    if (!res.ok) {
      throw new Error(defaultErrorMessage);
    }

    return await res.json();
  } catch (error) {
    let message = defaultErrorMessage;
    if (error instanceof Error) message = error.message;
    return { success: false, message: message, data: null };
  }
}
