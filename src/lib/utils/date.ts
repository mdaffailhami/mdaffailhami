export function formatPeriod(start: Date, end: Date | null): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  const startStr = start.toLocaleDateString("en-US", options);
  const endStr = end ? end.toLocaleDateString("en-US", options) : "Present";

  return `${startStr} - ${endStr}`;
}
