# Existing site research and migration
On 2026-11-04 the first environment blocked https://www.vineyardint.org/ at the proxy. After the user published a new environment, a verified-TLS curl request followed redirects and succeeded but saved an empty (0 byte) response. No historical site facts or URL inventory could be extracted. The empty response does not establish absence of content or organizational inactivity.

Next research: inspect response headers, robots.txt and sitemaps, try an interactive browser if available, and request an owner-provided export if content remains inaccessible. Verify domain control and media rights before reuse.

Build a reviewed old-URL to new-URL map after content inventory. Only configure 301/308 redirects on infrastructure under authorized control; avoid chains. Validate canonical URLs, sitemap, Search Console access, indexing, and missing-page monitoring. No redirect or domain change has been applied.

Follow-up: homepage headers reported HTTP 200 with Content-Length: 0 and a WordPress REST discovery link. robots.txt and sitemap.xml returned 404 HTML. The advertised WordPress pages collection returned HTTP 200 and an empty JSON array. No content inventory can be inferred from these responses. An owner-provided export or restoration of the existing site is needed for historical copy verification.
