"use server";

import { forwardMessageToGoogleAppsScript } from "@/lib/server/services/messages";
import { MessageInsert } from "./schema";
import type { ServerResponse } from "@/lib/server/types";

const defaultErrorMessage = "Something went wrong. Please try again.";

export async function sendMessage(
  data: MessageInsert,
): Promise<ServerResponse<null>> {
  const result = MessageInsert.safeParse(data);

  if (!result.success) {
    return { success: false, message: result.error.message, data: null };
  }

  try {
    const sendMessageUrl = process.env.GS_SEND_MESSAGE_URL;

    if (!sendMessageUrl) {
      throw new Error(defaultErrorMessage);
    }

    await forwardMessageToGoogleAppsScript(
      sendMessageUrl,
      result.data,
    );

    return { success: true, message: "Message sent successfully", data: null };
  } catch (error) {
    let message = defaultErrorMessage;
    if (error instanceof Error) message = error.message;
    return { success: false, message, data: null };
  }
}
