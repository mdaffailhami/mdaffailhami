import "server-only";

type MessagePayload = {
  name: string;
  email: string;
  message: string;
};

export async function forwardMessageToGoogleAppsScript(
  url: string,
  data: MessagePayload
): Promise<void> {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Something went wrong. Please try again.");
  }
}
