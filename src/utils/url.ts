const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const DEFAULT_SITE_ORIGIN = 'https://mianfeitizi.world';

/**
 * Normalize site-relative URLs with the configured base path and consistent trailing slashes
 * for page routes while preserving asset extensions and hash fragments.
 */
export function url(path: string): string {
  if (/^([a-z][a-z\d+.-]*:|#|\/\/)/i.test(path)) return path;

  const [rawPath, hash] = path.split('#');
  let normalized = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;

  const hasFileExtension = /\.[a-z0-9]+$/i.test(normalized);
  if (!hasFileExtension && !normalized.endsWith('/')) {
    normalized = `${normalized}/`;
  }

  const fullPath = `${base}${normalized}`;
  return hash !== undefined ? `${fullPath}#${hash}` : fullPath;
}

/** Path of the current request without the base prefix or trailing slash. */
export function currentPath(pathname: string): string {
  let path = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  path = path.replace(/\/$/, '');
  return path === '' ? '/' : path;
}

/** Absolute URL for canonical links, Open Graph and structured data. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  if (/^https?:/i.test(path)) return path;
  return new URL(url(path), site ?? DEFAULT_SITE_ORIGIN).href;
}
