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


## Task Manager Usage (Mandatory)

**Always use the built-in task manager** (TaskCreate, TaskUpdate, TaskList) when working on any task:

1. **Before starting work**: Create a task list breaking down all steps needed. Create as many tasks as necessary — it is better to over-decompose than to forget something.
2. **While working**: Mark tasks as `in_progress` before starting each one, and `completed` when done. This keeps the user informed of real-time progress.
3. **When discovering new work**: Add new tasks immediately so nothing is forgotten.
4. **After completing work**: Verify all tasks are marked completed and summarize results.

**Why this matters**: The task manager is visible to the user and serves as a live progress tracker. It ensures organized, transparent work and prevents steps from being skipped or forgotten.

**Rule**: If a task involves more than one step, use the task manager. No exceptions.
