import type { Photo } from '../data/photography';

export interface ResolvedPhoto extends Photo {
  imageData: any;
  formattedDate: string;
}

export async function resolvePhotos(
  photos: Photo[],
  imageModules: Record<string, () => Promise<{ default: any }>>,
): Promise<ResolvedPhoto[]> {
  const resolved = await Promise.all(
    photos.map(async (photo) => {
      const key = Object.keys(imageModules).find((k) => k.endsWith(photo.src));
      if (!key) return null;
      const { default: imageData } = await imageModules[key]();
      const date = new Date(photo.date + 'T00:00:00');
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      return { ...photo, imageData, formattedDate };
    }),
  );
  return resolved.filter((p): p is ResolvedPhoto => p !== null);
}

export function computeTagCounts(photos: ResolvedPhoto[]): [string, number][] {
  const counts: Record<string, number> = {};
  for (const photo of photos) {
    for (const tag of photo.tags) {
      counts[tag] = (counts[tag] || 0) + 1;
    }
  }
  return Object.entries(counts).sort(([a], [b]) => a.localeCompare(b));
}

export function buildSidebarHtml(photo: ResolvedPhoto): string {
  const parts: string[] = [];
  if (photo.caption) parts.push('<p class="sidebar-caption">' + photo.caption.replace(/\n/g, '<br>') + '</p>');
  if (photo.location) parts.push('<p class="sidebar-location">' + photo.location + '</p>');
  parts.push('<p class="sidebar-date">' + photo.formattedDate + '</p>');
  if (photo.tags.length > 0) {
    parts.push('<div class="sidebar-tags">' + photo.tags.map(t => '<span class="sidebar-tag">' + t + '</span>').join('') + '</div>');
  }
  return parts.join('');
}
