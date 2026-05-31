import getReadingTime from "reading-time";

export function readingMinutes(content: string): number {
  const minutes = Math.ceil(getReadingTime(content).minutes);
  return Math.max(1, minutes);
}
