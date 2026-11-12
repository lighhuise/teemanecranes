import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Normalizes any image path or URL into a valid public URL or root-relative storage URL.
 * Handles:
 * - Absolute URLs (https://... or http://...)
 * - Data & Blob URLs (data:... or blob:...)
 * - Direct storage paths saved by Filament (e.g. "projects/gallery/xyz.jpg" -> "/storage/projects/gallery/xyz.jpg")
 * - Paths already starting with "/storage/" or "storage/"
 */
export function toStorageUrl(path?: string | null): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  if (cleanPath.startsWith('storage/')) {
    return `/${cleanPath}`;
  }

  return `/storage/${cleanPath}`;
}

