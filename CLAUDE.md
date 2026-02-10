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
npm run build            # Build all
npm run lint             # Lint all
```

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
