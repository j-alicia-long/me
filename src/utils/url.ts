const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Prefixes a site-relative path with the configured base path (handles trailing-slash differences across Astro versions). */
export const withBase = (path: string): string => `${base}/${path.replace(/^\/+/, '')}`;
