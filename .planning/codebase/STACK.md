# Technology Stack

**Analysis Date:** 2026-02-10

## Languages

**Primary:**
- **TypeScript** 5.3.3 - All source code (components, config, utilities)
- **TSX** - React component files in `packages/design-system/src/components/` and `apps/brand-page/app/`
- **CSS/PostCSS** - Global styles in `packages/design-system/src/styles/`

**Secondary:**
- **JavaScript** - Configuration files and CommonJS exports

## Runtime

**Environment:**
- **Node.js** 18.0.0+ (specified in root `package.json` engines)

**Package Manager:**
- **npm** 10.2.0
- **Lockfile:** `package-lock.json` (present)

## Frameworks

**Core:**
- **React** 18.2.0 - UI library (peer dependency)
- **React DOM** 18.2.0 - DOM rendering (peer dependency)
- **Next.js** 14.1.0 - Full-stack framework for brand page (`apps/brand-page/`)

**Build & Development:**
- **Vite** 5.1.0 - Build tool for design system package (`packages/design-system/`)
- **TypeScript Compiler (tsc)** - Type checking via `npm run build` in design-system

**CSS & Styling:**
- **Tailwind CSS** 3.4.1 - Utility-first CSS framework (peer dependency)
- **PostCSS** 8.4.35 - CSS processing with Tailwind and Autoprefixer
- **Autoprefixer** 10.4.17 - Vendor prefixes

**Documentation & Design:**
- **Storybook** 8.0.0 - Interactive component playground (`npm run storybook`)
  - `@storybook/react` - React adapter
  - `@storybook/react-vite` - Vite integration
  - Addons: a11y, essentials, interactions, links, blocks

**Linting & Code Quality:**
- **ESLint** 8.56.0 - JavaScript/TypeScript linting
  - `@typescript-eslint/eslint-plugin` 7.0.0
  - `@typescript-eslint/parser` 7.0.0
  - `eslint-plugin-react` 7.33.2 - React rules
  - `eslint-plugin-react-hooks` 4.6.0 - Hooks rules
- **Next.js ESLint Config** 14.1.0 - Strict next/recommended rules for brand-page

## Key Dependencies

**UI & Component Framework:**
- **@radix-ui/*** (11 packages) - Accessible component primitives
  - React Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu, Label, Radio Group, Select, Separator, Switch, Tabs, Toast, Tooltip
  - Location: `packages/design-system/src/components/ui/`
- **class-variance-authority** 0.7.0 - CVA for component variants
- **clsx** 2.1.0 - Class merging utility
- **tailwind-merge** 2.2.1 - Smart Tailwind class merge for CVA + cn()
- **lucide-react** 0.312.0 - Icon library (exported as dependency, used in brand-page)

**Build & Output Generation:**
- **vite-plugin-dts** 3.7.2 - TypeScript declaration file generation (design-system build)
- **@vitejs/plugin-react** 4.2.1 - Vite React plugin with SWC
- **next** 14.1.0 - Vercel's Next.js framework

**Fonts:**
- **@next/font** - Built-in Next.js font optimization (used in brand-page `app/layout.tsx` for Inter)
- **Google Fonts - Inter** - Web font

## Configuration Files

**Root (`package.json`):**
- NPM workspaces: `packages/*`, `apps/*`
- Monorepo structure with root dev dependency on TypeScript 5.3.3

**Design System (`packages/design-system/`):**
- `vite.config.ts` - Dual ESM/CJS build (index + tailwind preset entry points)
- `tsconfig.json` - Strict mode, declaration maps, path alias `@/*`
- `tailwind.config.ts` - **CANONICAL** source of design tokens (colors, typography, spacing, shadows, animations)
- `postcss.config.js` - Tailwind + Autoprefixer
- `.storybook/` - Storybook 8.0 configuration

**Brand Page (`apps/brand-page/`):**
- `next.config.mjs` - ESM format, transpiles `@finitless/design-system`, image remotePatterns for brand.finitless.com
- `tsconfig.json` - Next.js strict config with path alias `@/*`
- `tailwind.config.ts` - Imports finitlessPreset from design system
- `postcss.config.js` - Tailwind + Autoprefixer
- `app/layout.tsx` - Root layout with metadata, Inter font setup
- `app/page.tsx` - Brand page component with showcase

**Deployment:**
- `vercel.json` - Vercel configuration
  - Build: `npm run build`
  - Output: `apps/brand-page/.next`
  - Framework: Next.js
  - Headers for CORS on `/assets/` and `/brand-manifest.json`

## Build Pipeline

**Design System Build:**
```bash
tsc && vite build
```
Generates:
- `dist/index.js` (ESM) + `dist/index.cjs` (CommonJS) - components & tokens
- `dist/tailwind.js/.cjs` - preset only
- `dist/styles/globals.css` - CSS output
- Type declarations (`*.d.ts`, declarationMap)

**Brand Page Build:**
```bash
next build
```
Generates: `.next/` directory for Vercel deployment

## Development Environment

**Node Version:**
- Required: 18.0.0+
- Tested with: npm 10.2.0

**Development Commands:**
- `npm install` - Install all workspaces
- `npm run dev` - Start brand-page dev server (Next.js)
- `npm run storybook` - Start Storybook on port 6006
- `npm run build` - Build all workspaces
- `npm run lint` - Lint all workspaces
- `npm run clean` - Remove node_modules, dist, .next

## Package Exports

**Main Package (`@finitless/design-system`):**
- **Entry Point:** `dist/index.js` (ESM) / `dist/index.cjs` (CommonJS)
  - Exports: UI components, brand components, tokens, utilities
- **Tailwind Preset:** `dist/tailwind.js` / `dist/tailwind.cjs`
  - Exports: `finitlessPreset` for consuming apps
- **Styles:** `dist/styles/globals.css`
  - Global CSS variables, typography, resets

**Brand Page:**
- Private Next.js application
- Deployed to `brand.finitless.com` via Vercel

## Platform Requirements

**Development:**
- macOS/Linux/Windows with Node 18+
- npm 10.2.0+
- 200MB+ disk space (node_modules)

**Production:**
- **Deployment Target:** Vercel (auto-deploy on push to main)
- **DNS:** brand.finitless.com

---

*Stack analysis: 2026-02-10*
