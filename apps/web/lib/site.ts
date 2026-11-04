// Server configuration only; the placeholder may never become a production origin.
export function siteOrigin(): string {
  const raw = process.env.SITE_URL ?? "https://YOUR_NEW_DOMAIN";
  if (raw === "https://YOUR_NEW_DOMAIN") return raw;
  const url = new URL(raw);
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw new Error("SITE_URL must be a clean HTTP(S) origin");
  }
  return url.origin;
}
