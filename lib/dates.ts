import { format } from 'date-fns';

const calendarDate = /^(\d{4})-(\d{2})-(\d{2})/;

/**
 * Format a blog `publishedAt` value as a calendar date.
 *
 * Unquoted YAML dates are parsed as UTC midnight (`2022-01-27T00:00:00.000Z`).
 * Formatting that instant in US Pacific shows the previous day. The YYYY-MM-DD
 * prefix is the date the post was written, so use that instead of the instant.
 */
export function formatPublishedDate(publishedAt: string, pattern = 'MMMM dd, yyyy'): string {
  const match = calendarDate.exec(publishedAt);
  if (!match) return publishedAt;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  return format(new Date(year, month - 1, day), pattern);
}
