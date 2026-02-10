# External Integrations

**Analysis Date:** 2026-02-10

## APIs & External Services

**CDN & Assets:**
- **brand.finitless.com** - Self-hosted CDN for logo/icon assets
  - Used in `apps/brand-page/app/page.tsx` via `const BRAND_BASE_URL = 'https://brand.finitless.com'`
  - Assets served from `/assets/` path with CORS headers (see vercel.json)
  - Files: logos, icons (PNG format, multiple sizes)
  - Example: `/assets/logos/finitless-logo-horizontal-on-dark-200w.png`

**Image Remotepatterns:**
- **Hostname:** brand.finitless.com
- **Protocol:** https
- **Path Pattern:** `/assets/**`
- Configured in `apps/brand-page/next.config.mjs` for Next.js Image optimization

**Documentation:**
- **GitHub:** https://github.com/Finitless-com/finitless-brand-guidelines
  - Link in brand page footer
  - Source repository
- **Storybook (local dev):** http://localhost:6006
  - Interactive component playground
  - Link in brand page (dev reference)

## Data Storage

**No Persistent Data Storage:**
- No databases (neither relational nor document-based)
- No Redis/caching layer
- Fully static/client-side rendering

**Public Assets:**
- Static files in `assets/` directory
- Served via Vercel edge network
- Contains: logos, icons (PNG, SVG ready)

## Authentication & Identity

**None Detected**
- No auth provider integration (OAuth, JWT, sessions, etc.)
- Fully public, read-only brand documentation site
- No user accounts or login flows

## Monitoring & Observability

**None Configured**

**Error Tracking:**
- Not detected

**Logs:**
- Console-based only (browser dev tools)
- No external logging service

**Analytics:**
- Not detected in codebase

## CI/CD & Deployment

**Hosting:**
- **Platform:** Vercel
- **URL:** https://brand.finitless.com
- **Auto-deploy:** On push to main branch
- **Build command:** `npm run build`
- **Output directory:** `apps/brand-page/.next`
- **Monorepo:** npm workspaces configured in root `package.json`

**Configuration:**
- `vercel.json` defines build, install, and output settings
- Headers for CORS and caching on `/assets/**` paths
- Framework auto-detection: "nextjs"

**No CI Pipeline:**
- No GitHub Actions workflows detected
- Relies on Vercel's built-in CI/CD (deploy previews, auto-deploy)

## Environment Configuration

**No Environment Variables Required**

The codebase does not use environment variables (no `.env` file needed):
- No API keys
- No credentials
- No secrets
- All configuration is hardcoded (URLs, design tokens, etc.)

**Example Non-sensitive URLs:**
```typescript
const BRAND_BASE_URL = 'https://brand.finitless.com';
```

## Webhooks & Callbacks

**None Detected**

**Incoming:**
- Not applicable (static site)

**Outgoing:**
- Not applicable (no integration points)

## Font Services

**Google Fonts:**
- **Font:** Inter (multiple weights: 400, 500, 600, 700, 800)
- **Integration:** Next.js built-in font optimization
- **Location:** `apps/brand-page/app/layout.tsx` via `import { Inter } from 'next/font/google'`
- **Configuration:**
  ```typescript
  const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-inter',
  });
  ```
- **CSS Variable:** `--font-inter` available via Tailwind

## Third-Party UI Libraries

**Radix UI (Headless Components):**
- Provider: Radix UI / Modulz
- 11 packages providing accessible, unstyled primitives
- No external API calls (client-side only)
- Location: `packages/design-system/src/components/ui/`

## Design Token Distribution

**NPM Package:**
- **Package Name:** `@finitless/design-system`
- **Registry:** npm (public)
- **Version:** 0.0.1
- **Exports:**
  - Main: components + tokens
  - Tailwind: preset only (`./tailwind`)
  - Styles: CSS (`./styles`)
- **Published via:** `npm publish --access public` in `packages/design-system/`
- **Usage:** Other Finitless projects import via `@finitless/design-system`

## Cross-Domain Requests

**CORS Headers Set:**
```
/assets/* → Access-Control-Allow-Origin: *
/brand-manifest.json → Access-Control-Allow-Origin: * + Content-Type: application/json
```

Configured in `vercel.json` for asset sharing across domains.

## Build-Time Integrations

**TypeScript Declarations:**
- `vite-plugin-dts` generates `.d.ts` files during build
- Enables type safety for consuming packages

**Tailwind Preset Export:**
- Design tokens exported as Tailwind config
- Preset used by brand-page itself (`apps/brand-page/tailwind.config.ts`)

---

*Integration audit: 2026-02-10*
