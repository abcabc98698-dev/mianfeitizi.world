const WORDS_PER_MINUTE = 220;

/** Estimated reading time in minutes for a Markdown body (supports Chinese & English). */
export function readingTime(text = ''): number {
  const clean = text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`~\-[\]()!]/g, ' ');
  const cjkChars = (clean.match(/[\u4e00-\u9fa5]/g) ?? []).length;
  const words = clean.split(/\s+/).filter(Boolean).length;
  const totalUnits = cjkChars > words ? Math.ceil(cjkChars / 320) : Math.ceil(words / WORDS_PER_MINUTE);
  return Math.max(2, totalUnits);
}

export function formatDate(date: Date, locale = 'zh-CN'): string {
  return date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

/** Splits a title on `\n` so components can insert `<br>` elements. */
export function lines(text: string): string[] {
  return text.split('\n');
}

/** Keeps a phone number on one line (non-breaking spaces and hyphens). */
export function phoneText(phone: string): string {
  return phone.replace(/ /g, '\u00a0').replace(/-/g, '\u2011');
}
