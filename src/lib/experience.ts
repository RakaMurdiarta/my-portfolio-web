/**
 * Dates are "YYYY-MM" for exact durations, or just "YYYY" when the month isn't known.
 * `months` gives the real length of a year-only period.
 */
interface Period {
  start: string;
  end?: string;
  months?: number;
}

const hasMonth = (date: string) => date.length === 7;

/** True when every date in the period includes a month, so durations can be exact. */
const isExact = ({ start, end }: Period) => hasMonth(start) && (!end || hasMonth(end));

const toIndex = (ym: string) => {
  const [y, m] = ym.split('-').map(Number);
  return y * 12 + (m - 1);
};

const nowIndex = () => {
  const d = new Date();
  return d.getFullYear() * 12 + d.getMonth();
};

/** Months covered by a period, inclusive of both start and end month. */
const monthsOf = ({ start, end }: Period) => {
  const from = toIndex(start);
  const to = end ? toIndex(end) : nowIndex();
  return Array.from({ length: Math.max(to - from + 1, 0) }, (_, i) => from + i);
};

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`;

/** 17 → "1 year 5 months" */
const formatMonths = (months: number) => {
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && plural(y, 'year'), m && plural(m, 'month')].filter(Boolean).join(' ') || '1 month';
};

/**
 * "1 year 5 months" for exact periods or ones with `months`. With years only, an approximation:
 * "< 1 year" (same year), "~1 year" (2023 - 2024), "2+ years" (current job since 2024).
 */
export const periodDuration = (p: Period) => {
  if (p.months) return formatMonths(p.months);
  if (isExact(p)) return formatMonths(monthsOf(p).length);
  const from = Number(p.start.slice(0, 4));
  const to = p.end ? Number(p.end.slice(0, 4)) : new Date().getFullYear();
  const years = to - from;
  if (years < 1) return '< 1 year';
  return p.end ? `~${plural(years, 'year')}` : `${years}+ ${years === 1 ? 'year' : 'years'}`;
};

/** "2022 - 2023", "2022" for a single-year stint, or "2024 - Present" for the current job. */
export const formatRange = ({ start, end }: Period) => {
  const from = start.slice(0, 4);
  if (!end) return `${from} - Present`;
  const to = end.slice(0, 4);
  return from === to ? from : `${from} - ${to}`;
};

/**
 * Total experience, e.g. { total: "3 years 4 months", short: "3+ years" }.
 * Exact when every period has month dates or `months` (overlaps between dated periods
 * are counted once); otherwise counted in whole years from the earliest start year to now.
 */
export const experience = (periods: Period[]) => {
  if (periods.every((p) => p.months || isExact(p))) {
    const dated = periods.filter((p) => !p.months);
    const months =
      new Set(dated.flatMap(monthsOf)).size + periods.reduce((sum, p) => sum + (p.months ?? 0), 0);
    const y = Math.floor(months / 12);
    return {
      total: formatMonths(months),
      short: y < 1 ? plural(months, 'month') : `${y}+ ${y === 1 ? 'year' : 'years'}`,
    };
  }
  const firstYear = Math.min(...periods.map((p) => Number(p.start.slice(0, 4))));
  const y = Math.max(new Date().getFullYear() - firstYear, 1);
  const short = `${y}+ ${y === 1 ? 'year' : 'years'}`;
  return { total: short, short };
};
