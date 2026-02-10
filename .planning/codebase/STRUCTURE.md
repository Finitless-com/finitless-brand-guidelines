# Codebase Structure

**Analysis Date:** 2026-02-10

## Directory Layout

```
finitless-design-system/
├── packages/
│   └── design-system/              # @finitless/design-system NPM package
│       ├── src/
│       │   ├── components/         # React components
│       │   │   ├── ui/             # Radix-based primitives (Button, Input, Dialog, etc.)
│       │   │   └── brand/          # Finitless-specific components (Logo, GlassCard, etc.)
│       │   ├── tokens/             # Design token definitions
│       │   │   ├── colors.ts       # Color palette (brand, backgrounds, etc.)
│       │   │   ├── typography.ts   # Font families, sizes, weights, presets
│       │   │   └── spacing.ts      # Layout, spacing, radius, containers, z-index
│       │   ├── lib/                # Utilities and helpers
│       │   │   └── utils.ts        # cn(), generateId(), etc.
│       │   ├── styles/             # Global CSS (currently empty/minimal)
│       │   ├── hooks/              # Custom React hooks (if any)
│       │   ├── index.ts            # Main entry point - exports all components/tokens
│       │   └── tailwind-preset.ts  # Tailwind configuration preset
│       ├── stories/                # Storybook stories (when implemented)
│       ├── .storybook/             # Storybook configuration
│       ├── dist/                   # Build output (generated)
│       ├── vite.config.ts          # Vite build configuration
│       ├── tsconfig.json           # TypeScript configuration
│       └── package.json            # Package metadata and scripts
│
├── apps/
│   └── brand-page/                 # Next.js documentation/showcase site
│       ├── app/
│       │   ├── layout.tsx          # Root layout with metadata
│       │   ├── page.tsx            # Main documentation page (interactive)
│       │   └── globals.css         # Global styles + Tailwind + CSS variables
│       ├── public/
│       │   └── assets/             # Brand logos and icons (served publicly)
│       │       ├── logos/          # Horizontal and square logo variants
│       │       └── icons/          # Icon variants (various sizes)
│       ├── .next/                  # Next.js build output (generated)
│       ├── next.config.mjs         # Next.js configuration
│       ├── tsconfig.json           # TypeScript configuration
│       └── package.json            # Package metadata and scripts
│
├── assets/                         # Canonical logo/icon source files
│   ├── logos/                      # Source logo files (various formats)
│   └── icons/                      # Source icon files
│
├── archive/
│   └── v3.0.0/                     # Previous static HTML implementation
│       └── BRAND-GUIDELINES.md     # Legacy brand documentation
│
├── .planning/
│   └── codebase/                   # Architecture and structure documentation
│       ├── ARCHITECTURE.md         # Architecture analysis
│       └── STRUCTURE.md            # This file
│
├── package.json                    # Root monorepo configuration (npm workspaces)
├── package-lock.json               # Dependency lock file
├── vercel.json                     # Vercel deployment configuration
├── CLAUDE.md                       # Project-specific Claude instructions
├── README.md                       # Project overview and quick start
└── SKILL.md                        # Global skill definition
```

## Directory Purposes

**`packages/design-system/src/`:**
- Contains all source code for the `@finitless/design-system` NPM package
- Sub-directories handle different concerns (components, tokens, utilities)
- TypeScript + React components with Tailwind CSS integration
- Builds to ESM and CommonJS formats with type declarations

**`packages/design-system/src/components/ui/`:**
- Radix UI-based form controls and composite components
- Each component: one `.tsx` file with CVA variant definitions
- Files: `button.tsx`, `input.tsx`, `dialog.tsx`, `select.tsx`, `tabs.tsx`, `dropdown-menu.tsx`, etc.
- Pattern: CVA variant exports + ForwardRef component + display names

**`packages/design-system/src/components/brand/`:**
- Finitless-specific components with brand styling baked in
- Files: `logo.tsx`, `glass-card.tsx`, `cta-button.tsx`, `oauth-button.tsx`, `form-container.tsx`, `gradient-text.tsx`, `status-badge.tsx`, `icon-container.tsx`
- Higher-level components that use UI primitives + brand tokens

**`packages/design-system/src/tokens/`:**
- Pure data definitions for design system
- No components, only constants and type definitions
- Exported for both TypeScript imports and Tailwind preset usage

**`packages/design-system/src/lib/`:**
- Utility functions used across components
- `utils.ts`: Class merging (`cn`), ID generation, accessibility helpers, etc.
- No business logic, only helper functions

**`apps/brand-page/app/`:**
- Next.js App Router structure
- `layout.tsx`: Root layout with metadata, fonts, global providers
- `page.tsx`: Main interactive documentation page (client component with state)
- `globals.css`: Tailwind directives + CSS custom properties + code block styling

**`apps/brand-page/public/assets/`:**
- Publicly served static files
- Logos and icons in multiple sizes/variants
- Served at `https://brand.finitless.com/assets/` in production

**`assets/` (root):**
- Source files for logos and icons (original, non-generated)
- Used as reference for building deployable assets in `apps/brand-page/public/assets/`

**`archive/v3.0.0/`:**
- Previous version (static HTML implementation, v3.0.0)
- Kept for reference, not used in current build
- `BRAND-GUIDELINES.md`: Legacy comprehensive brand guidelines

## Key File Locations

**Entry Points:**

| File | Purpose |
|------|---------|
| `packages/design-system/src/index.ts` | Main package entry - exports all components, tokens, utilities |
| `packages/design-system/src/tailwind-preset.ts` | Tailwind preset entry (imported separately) |
| `apps/brand-page/app/layout.tsx` | Root layout for brand page |
| `apps/brand-page/app/page.tsx` | Main documentation page (interactive) |

**Configuration:**

| File | Purpose |
|------|---------|
| `packages/design-system/vite.config.ts` | Vite build config - dual ESM/CJS output, type declaration generation |
| `packages/design-system/tsconfig.json` | TypeScript config for design system |
| `apps/brand-page/next.config.mjs` | Next.js config - transpiles design-system, CORS headers |
| `apps/brand-page/tsconfig.json` | TypeScript config for Next.js app |
| `package.json` | Root monorepo config with workspaces |
| `vercel.json` | Vercel deployment config |

**Core Logic:**

| File | Purpose |
|------|---------|
| `packages/design-system/src/components/ui/button.tsx` | Base button component with CVA variants (primary, cta, secondary, ghost, destructive, link) |
| `packages/design-system/src/components/brand/glass-card.tsx` | Glass morphism card component with highlight borders |
| `packages/design-system/src/components/brand/logo.tsx` | Dynamic logo component (renders correct asset variant) |
| `packages/design-system/src/tailwind-preset.ts` | Complete Tailwind theme extension with design tokens |
| `packages/design-system/src/tokens/colors.ts` | Color palette definitions (brand, backgrounds, surfaces, borders, text, semantic, gradients) |
| `apps/brand-page/app/globals.css` | CSS custom properties + Tailwind setup + scrollbar/code styling |
| `apps/brand-page/app/page.tsx` | Interactive documentation with tabs, color swatches, component examples |

**Testing:**

- None currently - no test files in repository

**Type Definitions:**

| File | Purpose |
|------|---------|
| `packages/design-system/src/components/ui/*.tsx` | Each component exports `Props` interface (e.g., `ButtonProps`) |
| `packages/design-system/src/components/brand/*.tsx` | Each brand component exports `Props` interface |
| `packages/design-system/src/tokens/*.ts` | Token exports with `as const` for type inference |
| `dist/index.d.ts` (generated) | Complete TypeScript declarations for NPM package |

## Naming Conventions

**Files:**

| Pattern | Example | Usage |
|---------|---------|-------|
| `component-name.tsx` | `button.tsx`, `glass-card.tsx` | React components |
| `component-name.ts` | `colors.ts`, `spacing.ts` | TypeScript utilities/tokens |
| `index.ts` | `packages/design-system/src/components/ui/index.ts` | Barrel file for re-exports |

**Directories:**

| Pattern | Example | Purpose |
|---------|---------|---------|
| `lowercase` | `components`, `tokens`, `lib` | Utility/organizational directories |
| `lowercase-plural` | `stories`, `hooks` | Collection directories |
| `app` | `apps/brand-page/app` | Next.js App Router convention |
| `public` | `apps/brand-page/public` | Next.js public assets convention |

**Components:**

| Pattern | Example | Notes |
|---------|---------|-------|
| PascalCase | `Button`, `GlassCard`, `FormContainer` | React component names |
| lowercase-kebab | `button.tsx`, `glass-card.tsx` | File names for components |
| `*Variants` | `buttonVariants`, `glassCardVariants` | CVA variant definitions (exported) |
| `*Props` | `ButtonProps`, `GlassCardProps` | TypeScript prop interfaces |

**Tokens:**

| Pattern | Example | Notes |
|---------|---------|-------|
| `camelCase` | `brandPrimary`, `backgroundBase` | CSS custom property names (without `--color-` prefix) |
| `SCREAMING_SNAKE_CASE` | Rarely used - see colors.ts for actual pattern | Not applicable in this codebase |

**Exports:**

| Pattern | Example | Usage |
|---------|---------|-------|
| Named export | `export { Button }` | Individual imports: `import { Button } from '@finitless/design-system'` |
| Default export | `export default Button` | Component modules support both named + default |
| Variant export | `export { buttonVariants }` | CVA definitions for consuming code |
| Type export | `export type ButtonProps` | TypeScript prop interfaces |

## Where to Add New Code

**New UI Primitive Component:**
1. Create `packages/design-system/src/components/ui/component-name.tsx`
2. Define CVA variants with `cva()` from class-variance-authority
3. Export component with `ForwardRef`, `Props` interface, and `displayName`
4. Add to `packages/design-system/src/components/ui/index.ts`
5. Re-export from `packages/design-system/src/index.ts`

**New Brand Component:**
1. Create `packages/design-system/src/components/brand/component-name.tsx`
2. Use UI primitives or native HTML + Tailwind + brand tokens
3. Export component with `ForwardRef`, `Props` interface, and `displayName`
4. Add to `packages/design-system/src/components/brand/index.ts`
5. Re-export from `packages/design-system/src/index.ts`

**New Design Token:**
1. Add to appropriate file in `packages/design-system/src/tokens/`:
   - Colors: `colors.ts`
   - Typography: `typography.ts`
   - Layout/spacing: `spacing.ts`
2. Use object/const pattern with `as const` for type safety
3. Update `packages/design-system/src/tailwind-preset.ts` if Tailwind classes needed
4. Re-export from `packages/design-system/src/index.ts`
5. Add corresponding CSS custom property to `apps/brand-page/app/globals.css`

**New Utility Function:**
1. Add to `packages/design-system/src/lib/utils.ts`
2. Include JSDoc comments with `@example`
3. Export named function with TypeScript types
4. Re-export from `packages/design-system/src/index.ts`

**New Documentation Section (Brand Page):**
1. Edit `apps/brand-page/app/page.tsx`
2. Add new section component within the page render
3. Use design system components (`GlassCard`, `Button`, `Tabs`, etc.)
4. Add new tab in `Tabs` component if major new section
5. Import lucide-react icons as needed

**New Storybook Story:**
1. Create `packages/design-system/stories/component-name.stories.tsx`
2. Follow Storybook 8 format with `Meta` and `StoryObj` types
3. Show component with different variant combinations
4. Include JSDoc for story descriptions

## Special Directories

**`dist/` (Design System):**
- Purpose: Build output directory
- Generated: Yes (by `vite build`)
- Committed: No (in .gitignore)
- Contains: Compiled ESM, CommonJS, and TypeScript declaration files
- Consumed by: brand-page (via npm workspaces) and NPM users

**`.next/` (Brand Page):**
- Purpose: Next.js build output
- Generated: Yes (by `next build`)
- Committed: No (in .gitignore)
- Contains: Compiled pages, server-side code, static generation

**`node_modules/`:**
- Purpose: Installed dependencies
- Generated: Yes (by `npm install`)
- Committed: No (in .gitignore)
- Scope: Hoisted to root via npm workspaces

**`archive/v3.0.0/`:**
- Purpose: Previous implementation version
- Generated: No (checked in)
- Committed: Yes (reference material)
- Status: Not used in current build, kept for historical reference

---

*Structure analysis: 2026-02-10*
