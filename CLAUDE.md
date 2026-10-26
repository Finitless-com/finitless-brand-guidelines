# CLAUDE.md — Finitless Design System

## Project
- **Package**: `@finitless/design-system` (React + Tailwind)
- **Brand Page**: brand.finitless.com (Next.js in `apps/brand-page/`)
- **Company**: Finitless — AI ordering agents for restaurants

## Structure
```
packages/design-system/src/   # NPM package source
  components/ui/              # Radix primitives (Button, Input, Dialog...)
  components/brand/           # Logo, GlassCard, CTAButton, OAuthButton...
  tokens/                     # Color, radius, typography definitions
apps/brand-page/              # Documentation site
assets/                       # Logo source files
```

## Critical Rules
1. **ONE gradient CTA per page** — Use `CTAButton` only for hero/submit
2. **Purple/Magenta in gradients only** — Never standalone
3. **OAuth = secondary style** — Never gradient
4. **Logo from component** — Never font text

## Key Tokens
| Token | Value | Notes |
|-------|-------|-------|
| `brand.primary` | `#165DFC` | Finitless Blue (buttons) |
| `brand.link` | `#00B7FF` | Cyan (links, gradient start) |
| `background.base` | `#0e0e10` | Page bg |
| `background.elevated` | `#151517` | Cards, modals |
| `rounded` (default) | `12px` | Universal radius |
| `rounded-sm/lg/xl` | `8/16/24px` | Size variants |

## Commands
```bash
npm install              # Install deps
npm run dev              # Brand page dev
npm run storybook        # Design system dev
npm run build            # Build all, including the static export in apps/brand-page/out
npm run lint             # Lint all
npm run deploy:cloudflare    # Production Worker deploy (Wrangler 4.151.3)
npm run preview:cloudflare   # Pull request Preview
```

## Deploy
Production and pull request previews are Cloudflare Workers Builds, not Vercel and not GitHub Actions. `vercel.json` skips every Vercel build. Disconnect the GitHub repository in the Vercel project so the Vercel check stops appearing on pull requests.

Workers Builds, production branch `main`, root directory `/`:

- Build command: `npm run build`
- Deploy command: `npm run deploy:cloudflare`
- Preview command: `npm run preview:cloudflare`
- Preview builds: enabled

`npm run preview:cloudflare` runs `wrangler preview`. That creates the branch Preview and the pull request URL. `preview_urls` stays false. The empty `previews` block in `wrangler.jsonc` keeps production routes off those Previews.

`brand.finitless.com` is the public hostname. Its DNS is a Route 53 CNAME to Vercel (`70dbcf230fe9ccc5.vercel-dns-017.com`). `finitless.com` is not a Cloudflare zone, so the Worker cannot take that hostname until the CNAME moves to a hostname on a Cloudflare zone and the certificate is issued there. Pull request Previews use their own URL and do not serve this domain.

## Tailwind
```ts
import { finitlessPreset } from '@finitless/design-system/tailwind';
export default { presets: [finitlessPreset] };
```

## Publishing
```bash
cd packages/design-system && npm version patch && npm run build && npm publish
```

## References
- Token definitions: `packages/design-system/src/tokens/`
- Component examples: `npm run storybook`
- Full brand guide: `archive/v3.0.0/BRAND-GUIDELINES.md`


## Task Manager Usage (Mandatory)

**Always use the built-in task manager** (TaskCreate, TaskUpdate, TaskList) when working on any task:

1. **Before starting work**: Create a task list breaking down all steps needed. Create as many tasks as necessary — it is better to over-decompose than to forget something.
2. **While working**: Mark tasks as `in_progress` before starting each one, and `completed` when done. This keeps the user informed of real-time progress.
3. **When discovering new work**: Add new tasks immediately so nothing is forgotten.
4. **After completing work**: Verify all tasks are marked completed and summarize results.

**Why this matters**: The task manager is visible to the user and serves as a live progress tracker. It ensures organized, transparent work and prevents steps from being skipped or forgotten.

**Rule**: If a task involves more than one step, use the task manager. No exceptions.
