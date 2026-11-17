// Look up an optimisable image in src/assets/img by file name.
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/img/*.{jpg,png}', { eager: true });

export function img(name: string): ImageMetadata {
  const hit = files[`../assets/img/${name}`];
  if (!hit) throw new Error(`Image not found in src/assets/img: ${name}`);
  return hit.default;
}
