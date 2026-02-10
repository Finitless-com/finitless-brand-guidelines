# Architecture

**Analysis Date:** 2026-02-10

## Pattern Overview

**Overall:** Monorepo with library-first pattern + documentation site

**Key Characteristics:**
- Separation of concerns: NPM package (`@finitless/design-system`) vs consumer app (`brand-page`)
- Design system as the source of truth (tokens, components, preset)
- Brand page as interactive documentation + showcase
- Composition-based component design using Radix UI primitives + CVA variants
- Dual-layer token system: programmatic (TypeScript) + CSS custom properties

## Layers

**Design System Package (`packages/design-system`):**
- Purpose: Publish reusable React components, design tokens, and Tailwind preset as NPM package
- Location: `packages/design-system/src/`
- Contains: UI components (Radix-based), brand components (Finitless-specific), tokens, utilities, Tailwind preset
- Depends on: `@radix-ui/*`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`
- Used by: `apps/brand-page` and external Finitless applications
- Build output: Dual ESM/CJS with TypeScript declarations to `dist/`

**Brand Page App (`apps/brand-page`):**
- Purpose: Interactive documentation site showcasing components, tokens, and usage patterns
- Location: `apps/brand-page/app/`
- Contains: Next.js App Router pages, global styles, layout
- Depends on: `@finitless/design-system`, Next.js, React, lucide-react
- Used by: Developers learning the design system (deployed to brand.finitless.com)

**Assets Directory (`assets/`):**
- Purpose: Canonical source for logos and icons
- Contains: Logo variants (horizontal/square), icon variants (multiple sizes/themes)
- Serves: Consumed by both design system (via Logo component) and brand page (public/assets)

## Data Flow

**Component Usage Flow:**

1. Developer imports from `@finitless/design-system`
   - UI primitives (Button, Input, Dialog, etc.)
   - Brand components (Logo, GlassCard, CTAButton, etc.)
   - Tokens (colors, typography, spacing)
   - Utilities (cn, generateId, etc.)
2. Components render using Tailwind classes (from tailwind preset)
3. CSS classes resolve to design tokens (via Tailwind extend)
4. Brand page uses same imports to build documentation

**Token Resolution Path:**

```
Source (TypeScript tokens in src/tokens/)
  ↓
Exported as named constants (colors.ts, typography.ts, spacing.ts)
  ↓
Used in component variants (CVA definitions)
  ↓
Also available in tailwind-preset.ts for consuming apps
  ↓
CSS Custom Properties in globals.css for CSS-in-JS access
```

**Build & Publication Flow:**

```
Design System Source Code
  ↓ npm run build (tsc + vite build)
  ↓
Generated dist/ (ESM, CJS, types)
  ↓ npm publish
  ↓
Published to NPM as @finitless/design-system
  ↓
Brand Page: npm install @finitless/design-system
  ↓
Brand Page: next build (includes transpilePackages config)
  ↓
Deployed to Vercel (brand.finitless.com)
```

**State Management:**

- No Redux/Context. Components manage local state with `useState`
- Brand page uses client components (`'use client'`) for interactivity
- Examples: CopyButton (copy state), ColorSwatch (read-only display)

## Key Abstractions

**Component Hierarchy:**

```
UI Primitives (Radix + CVA)
├── Form Controls: Input, Label, Textarea, Select, Checkbox, Switch, RadioGroup
├── Composite: Dialog, Tabs, Tooltip, DropdownMenu, Alert
├── Display: Badge, Avatar, Skeleton, Separator
└── Buttons: Button (base variant system)

Brand Components (Finitless-specific styling)
├── Logo: Renders correct asset variant (horizontal/square/icon)
├── GlassCard: Glass morphism container with optional highlight border
├── CTAButton: Gradient button (ONE per page rule)
├── Button variants: OAuthButton, FormContainer wrapper
├── Text effects: GradientText (brand gradient only)
└── Utilities: StatusBadge, IconContainer, FormDivider
```

**Component Patterns:**

- **CVA-based variants**: `buttonVariants`, `glassCardVariants`, `gradientTextVariants` allow programmatic variant composition
- **Radix composition**: Complex components expose all sub-components (Dialog → DialogTrigger, DialogContent, etc.)
- **ForwardRef for DOM access**: `React.forwardRef()` used on all root components
- **Display names for debugging**: `Component.displayName = 'ComponentName'`

**Token Organization:**

- `colors.ts`: Brand colors, backgrounds, surfaces, borders, text, semantic, gradients
- `typography.ts`: Font families, sizes, weights, letter spacing, presets, Google Fonts URL
- `spacing.ts`: Layout dimensions, spacing units, border radius, component sizes, containers, z-index, breakpoints
- Export pattern: Named exports + unified token objects

**Utilities Module (`lib/utils.ts`):**

- `cn()`: Class name merging with Tailwind conflict resolution (clsx + tailwind-merge)
- `generateId()`: Accessible ID generation with prefix
- `isBrowser`: Runtime environment detection
- `prefersReducedMotion()`: Accessibility motion preference
- `formatShortcut()`: Mac/Windows keyboard shortcut formatting
- `focusElement()`: Safe element focus with optional delay
- `range()`: Numeric range generation for iteration

## Entry Points

**Design System Library:**
- Location: `packages/design-system/src/index.ts`
- Exports: All UI components, brand components, tokens, utilities, finitlessPreset
- Dual export entry points:
  - `.` (default): Components + tokens
  - `./tailwind`: Tailwind preset only
  - `./styles`: Global CSS

**Tailwind Preset:**
- Location: `packages/design-system/src/tailwind-preset.ts`
- Exports: `finitlessPreset` config object
- Integration: `import { finitlessPreset } from '@finitless/design-system/tailwind'`

**Brand Page:**
- Location: `apps/brand-page/app/`
- Entry: `layout.tsx` (root layout with metadata)
- Main page: `page.tsx` (interactive documentation with tabs, color swatches, component examples)
- Styling: `globals.css` (Tailwind directives + CSS variables)

**Build/Deployment:**
- `vite.config.ts` (design system): Library build configuration with dual formats
- `next.config.mjs` (brand page): Next.js config with transpilePackages for local design-system
- `package.json` (root): Workspace configuration with npm 10.2.0

## Error Handling

**Strategy:** Defensive programming with fallbacks

**Patterns:**

- **Component prop defaults**: All variant-based components have sensible defaults (e.g., Button `variant="primary"` default)
- **Optional rendering**: Components like Logo safely handle missing assets with alt text
- **Browser detection**: Utilities like `prefersReducedMotion()` check `isBrowser` before accessing window API
- **Safe focus management**: `focusElement()` checks for null/undefined before calling `.focus()`
- **Tailwind conflict resolution**: `cn()` utility handles class conflicts via tailwind-merge

## Cross-Cutting Concerns

**Styling:**
- Tailwind CSS with design system preset
- CSS custom properties for CSS-in-JS access
- CVA for variant management
- No inline styles (exception: Logo color swatches with dynamic backgroundColor)

**Validation:**
- TypeScript for prop types and component interfaces
- Radix UI primitives handle accessibility validation
- No runtime validation layer (assumes correct props)

**Authentication:**
- Not applicable - design system package has no auth concerns

**Accessibility:**
- Radix UI primitives provide ARIA attributes
- Manual focus management via `focusElement()`
- Motion preferences respected via `prefersReducedMotion()`
- Semantic HTML structure in all components
- Focus ring styling with cyan outline

**Logging:**
- None - components are pure/side-effect free
- Brand page may use console for development (no logging infrastructure)

---

*Architecture analysis: 2026-02-10*
