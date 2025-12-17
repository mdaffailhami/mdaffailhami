"use server"; // 1. Server Directive: Marks this file as Server Actions.
// Functions exported here can be called directly from Client Components.

import { ContactForm } from "@/lib/types/contact";

type Response<T = unknown> = {
  success: boolean;
  message: string;
  data: T | null;
};

const defaultErrorMessage = "Something went wrong. Please try again.";

// 2. Server Action Definition
export async function sendMessage(data: ContactForm): Promise<Response<null>> {
  // 3. Server-Side Validation
  // Even though the client validated it, never trust client data.
  // We re-validate using the same shared Zod schema for security.
  const result = ContactForm.safeParse(data);

  if (!result.success) {
    return { success: false, message: result.error.message, data: null };
  }

  try {
    // 4. External API Call
    // Securely access environment variables (process.env) which are only available on the server.
    const res = await fetch(process.env.GS_SEND_MESSAGE_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(defaultErrorMessage);
    }

    // 5. Return Response
    // We return a simple object that the Client Component can easily check (Instead of JSON).
    return await res.json();
  } catch (error) {
    let message = defaultErrorMessage;

    if (error instanceof Error) message = error.message;

    return { success: false, message: message, data: null };
  }
}
