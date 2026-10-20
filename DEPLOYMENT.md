# Cloudflare Worker deployment

The Worker entrypoint is `src/worker.ts`. Assets are bound as `ASSETS`, served from `dist`, with `run_worker_first: true` and `not_found_handling: 404-page`. HTTP and www requests normalize to HTTPS apex with their path/query preserved. Unknown paths retain 404 and an X-Robots-Tag noindex header.

Run the repository check and build, then a Wrangler dry-run. Before publishing, verify the actual project identity and production domain mapping independently. After publishing, confirm final-domain pages, assets, redirects, 404 and actual mobile layout. A local build is not evidence of a released production version.
