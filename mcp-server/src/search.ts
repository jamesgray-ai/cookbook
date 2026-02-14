import type { Page } from "./types.js";

interface SearchResult {
  path: string;
  title: string;
  description: string;
  section: string;
  url: string;
  score: number;
}

/** Tokenize a query string into lowercase terms. */
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length >= 2);
}

/**
 * Score a page against search terms.
 * Title matches are weighted highest, then description, then content.
 */
function scorePage(page: Page, terms: string[]): number {
  let score = 0;
  const titleLower = page.title.toLowerCase();
  const descLower = page.description.toLowerCase();
  const contentLower = page.content.toLowerCase();

  for (const term of terms) {
    // Title match: highest weight
    if (titleLower.includes(term)) {
      score += 10;
      // Exact title match bonus
      if (titleLower === term) score += 5;
    }

    // Description match
    if (descLower.includes(term)) {
      score += 5;
    }

    // Content match (count up to 5 occurrences via indexOf)
    let contentMatches = 0;
    let pos = 0;
    while (contentMatches < 5 && (pos = contentLower.indexOf(term, pos)) !== -1) {
      contentMatches++;
      pos += term.length;
    }
    score += contentMatches;
  }

  return score;
}

const MAX_QUERY_LENGTH = 200;
const MAX_TERMS = 10;

/** Search pages by keyword query, optionally filtered to a section. */
export function searchPages(
  pages: Page[],
  query: string,
  section?: string,
  limit = 10
): SearchResult[] {
  const truncatedQuery = query.slice(0, MAX_QUERY_LENGTH);
  const terms = tokenize(truncatedQuery).slice(0, MAX_TERMS);
  if (terms.length === 0) return [];

  let candidates = pages;
  if (section) {
    candidates = candidates.filter((p) => p.section === section);
  }

  const scored = candidates
    .map((page) => ({
      path: page.path,
      title: page.title,
      description: page.description,
      section: page.section,
      url: page.url,
      score: scorePage(page, terms),
    }))
    .filter((r) => r.score > 0);

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, limit);
}
