import type { Photo } from '../data/photography';

export interface ResolvedPhoto extends Photo {
  imageData: any;
  formattedDate: string;
}

/** Formats a YYYY-MM-DD date string into a human-readable US locale string (e.g. "May 22, 2020"). */
const formatDate = (dateStr: string): string =>
  new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

/**
 * Resolves raw photo entries by lazy-loading their image data and formatting their dates.
 * Photos whose `src` doesn't match any key in `imageModules` are silently dropped.
 */
export const resolvePhotos = async (
  photos: Photo[],
  imageModules: Record<string, () => Promise<{ default: any }>>,
): Promise<ResolvedPhoto[]> => {
  const resolved = await Promise.all(
    photos.map(async (photo) => {
      const key = Object.keys(imageModules).find((k) => k.endsWith(photo.src));
      if (!key) return null;

      const { default: imageData } = await imageModules[key]();
      const formattedDate = formatDate(photo.date);
      return { ...photo, imageData, formattedDate };
    }),
  );
  return resolved.filter((p): p is ResolvedPhoto => p !== null);
};

/** Returns alphabetically sorted `[tag, count]` pairs across all provided photos. */
export const computeTagCounts = (photos: ResolvedPhoto[]): [string, number][] => {
  const counts: Record<string, number> = {};
  for (const photo of photos) {
    for (const tag of photo.tags) {
      counts[tag] = (counts[tag] || 0) + 1;
    }
  }
  return Object.entries(counts).sort(([a], [b]) => a.localeCompare(b));
};

/** Builds the HTML string for the photo detail sidebar (caption, location, date, and tags). */
export const buildSidebarHtml = (photo: ResolvedPhoto): string => {
  const parts: string[] = [];

  if (photo.caption) {
    parts.push(`<p class="sidebar-caption">${photo.caption.replace(/\n/g, '<br>')}</p>`);
  }
  if (photo.location) {
    parts.push(`<p class="sidebar-location">${photo.location}</p>`);
  }

  parts.push(`<p class="sidebar-date">${photo.formattedDate}</p>`);

  if (photo.tags.length > 0) {
    const tags = photo.tags.map((t) => `<span class="sidebar-tag">${t}</span>`).join('');
    parts.push(`<div class="sidebar-tags">${tags}</div>`);
  }

  return parts.join('');
};
