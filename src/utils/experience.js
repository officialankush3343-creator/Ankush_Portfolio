/**
 * Single source of truth for "years of experience".
 *
 * Change EXPERIENCE_START_DATE only — every place that shows years of
 * experience pulls from these helpers, so it stays in sync automatically
 * as time passes.
 */

// First day of full-time work. The value rolls forward automatically:
//   on 1 June 2026 → "2+ years"
//   on 1 June 2027 → "3+ years"
//   on 1 December 2027 → "3.5+ years"
export const EXPERIENCE_START_DATE = new Date('2024-06-01T00:00:00');

const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;

/**
 * Years of experience as a number, snapped DOWN to the nearest half-year.
 * Example: 2 years 7 months → 2.5; 2 years 11 months → 2.5; 3 years 1 day → 3.
 */
export function getYearsOfExperience(now = new Date()) {
  const diffMs = now.getTime() - EXPERIENCE_START_DATE.getTime();
  if (diffMs <= 0) return 0;
  const years = diffMs / MS_PER_YEAR;
  return Math.floor(years * 2) / 2;
}

/**
 * Formats a half-year number for display.
 *   2.0 → "2"     (no trailing .0)
 *   2.5 → "2.5"
 */
export function formatYears(n = getYearsOfExperience()) {
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

/**
 * Marketing-style label: "2.5+" or "3+".
 */
export function getYearsLabel() {
  return `${formatYears()}+`;
}
