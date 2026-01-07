# Deep Deployment Audit (GitHub + Vercel)

## 1) Size & Storage Compatibility
- Repo currently sits well under GitHub’s limit. Re-run `du -sh .` before pushing large assets; no files over **95 MB** were found (GitHub hard limit is 100 MB).
- `.gitignore` keeps `dist/`, `.vercel/`, `.next/`, `client/.vite/`, environment files, and `node_modules/` out of Git history to stay well under the 1 GB comfort target.
- Notable heavier frontend deps: `framer-motion`, `recharts`, `lucide-react`, and the Radix UI suite. They are browser-only, but enable Vite code-splitting/dynamic imports to keep client bundles small; keep server bundles lean by avoiding large, unused server deps.
- Vercel Serverless size: server build bundles only allowlisted deps in `script/build.ts`, keeping the API/server bundle light and away from the 50 MB zipped cap.
- Payload limit: no API routes are defined yet. If you later add uploads, keep request/response bodies under **4.5 MB**; use client-to-blob/S3 uploads (Vercel Blob or presigned URLs) for anything larger.

## 2) “Zero Error” Configuration
- **Build command:** `npm run build` (runs Vite to `dist/public` and esbuild for `dist/index.cjs`). Use `npm run start` locally to serve the built bundle.
- **Install command:** `npm ci` (pinned by `package-lock.json`).
- **Environment variable checklist (set in Vercel Dashboard):**
  - `DATABASE_URL` (required by `drizzle.config.ts`)
  - `NODE_ENV=production` (set by Vercel automatically for prod)
  - `PORT` (Vercel assigns; keep code using `process.env.PORT`)
  - Optional for tooling/meta images: `REPLIT_INTERNAL_APP_DOMAIN`, `REPLIT_DEV_DOMAIN`
  - If/when sessions or secrets are added: `SESSION_SECRET`
- **Case sensitivity:** paths must match exact casing (Linux on Vercel). Keep imports aligned with filenames (e.g., `./Header` vs `./header`).

## 3) Performance & Asset Optimization
- Prefer **WebP/AVIF** assets in `attached_assets/`; compress large hero images. Avoid committing raw videos/PDFs—host externally and link.
- Use lazy loading or dynamic imports for heavy UI areas (charts via `recharts`, motion-heavy sections) to shrink initial JS. Tree-shaking via Vite already in place.
- The included `vercel.json` sets long-term caching for static assets (1-year immutable cache for images/fonts/CSS/JS).
- For SPA routing, rewrites fall back to `index.html`, avoiding 404s on deep links.

## 4) Vercel.json Blueprint (added)
- Located at `vercel.json`. Key behaviors:
  - `buildCommand: npm run build`, `outputDirectory: dist/public`, `cleanUrls: true`, `trailingSlash: false`.
  - Redirects: rely on Vercel’s automatic HTTPS enforcement and configure non-www ↔ www canonicalization in Vercel Domain settings (keeps JSON free of hardcoded domains).
  - Rewrites: keeps `/api/*` untouched for future API routes; all other paths fall through to `index.html` for SPA routing.
  - Headers: 1-year immutable caching for static assets (images/fonts/CSS/JS) via `Cache-Control: public, max-age=31536000, immutable`.
  - Functions: caps serverless memory/duration (`1024 MB`, `10s`) to stay under Vercel limits.

## Quick Deployment Checklist
1. Ensure `.env` values above are added in Vercel Project Settings.
2. Push to GitHub; Vercel will run `npm ci` then `npm run build`.
3. Verify no assets >100 MB are added; keep repo <1 GB.
4. For uploads >4.5 MB, use client direct-to-blob/S3 flows—do not POST to API.
5. After deploy, hit a deep link (e.g., `/about`) to confirm SPA rewrite works and cached assets return `Cache-Control: public, max-age=31536000, immutable`.
