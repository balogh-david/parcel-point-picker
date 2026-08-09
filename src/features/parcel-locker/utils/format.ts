import type { OpeningHour } from "../types";

export const pad = (value: number): string => {
  return String(value).padStart(2, "0");
};

export const formatTime = (time: OpeningHour["start"] | null | undefined): string | null => {
  if (!time || !Number.isFinite(time.hour) || !Number.isFinite(time.minute)) {
    return null;
  }
  return `${pad(time.hour)}:${pad(time.minute)}`;
};

export const formatOpeningHour = (hour: OpeningHour): string | null => {
  const start = formatTime(hour.start);
  const end = formatTime(hour.end);

  return start && end ? `${start}–${end}` : null;
};
