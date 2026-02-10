# Coding Conventions

**Analysis Date:** 2026-02-10

## Naming Patterns

**Files:**
- Components: PascalCase (e.g., `Button.tsx`, `GlassCard.tsx`, `CTAButton.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Stories: PascalCase with `.stories.tsx` suffix (e.g., `Button.stories.tsx`)
- Exports grouped by category with barrel files (`index.ts`)

**Functions:**
- camelCase (e.g., `generateId`, `prefersReducedMotion`, `focusElement`)
- Async functions prefix action words (e.g., `copy`, `focus`)
- Helper functions inside components or as standalone utilities without export prefix

**Variables:**
- camelCase for all variables and constants
- const by default, only use let/var when mutation is required
- Destructuring preferred for props and imports

**Types:**
- PascalCase for all types and interfaces (e.g., `ButtonProps`, `InputProps`, `GlassCardProps`)
- Props interfaces extend React built-in types (e.g., `React.ButtonHTMLAttributes<HTMLButtonElement>`)
- Optional JSDoc comments describing prop purpose

## Code Style

**Formatting:**
- No explicit formatter configured (no .prettierrc or eslint-plugin-prettier)
- TypeScript strict mode enforced (see `tsconfig.json`)
- 2-space indentation (visible in all source files)
- Strings use single quotes in TypeScript, double quotes in JSX
- Line length: No hard limit enforced, but typically 80-100 chars

**Linting:**
- ESLint with TypeScript support: `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`
- React plugins: `eslint-plugin-react` and `eslint-plugin-react-hooks`
- Run: `npm run lint --workspace=packages/design-system`
- Lint config: Default Next.js/ESLint setup (no custom `.eslintrc` file checked in)

**TypeScript Settings:**
- Target: ES2020
- Module: ESNext
- Strict mode: true
- `noUnusedLocals`: true - unused variables error
- `noUnusedParameters`: true - unused parameters error
- `noFallthroughCasesInSwitch`: true
- Path alias: `@/*` maps to `src/*`

## Import Organization

**Order:**
1. React and standard library imports (`import * as React from 'react'`)
2. Third-party packages (`class-variance-authority`, `lucide-react`, `next`, etc.)
3. Local utilities and types (`import { cn } from '@/lib/utils'`)
4. Components (relative imports within project)
5. Blank line between groups

**Example from `button.tsx`:**
```typescript
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
```

**Example from `page.tsx`:**
```typescript
'use client';

import { useState } from 'react';
import {
  Button,
  GlassCard,
  // ... more design-system imports
} from '@finitless/design-system';
import {
  Copy,
  Check,
  // ... more lucide icons
} from 'lucide-react';
```

**Path Aliases:**
- Use `@/*` for package imports (design-system package)
- Use `@/*` in apps for local paths
- No relative paths (`../`) in deep component trees

## Error Handling

**Null/Undefined Checks:**
- Defensive checks for optional values
- Example from `focusElement()`: `if (!element) return;`
- Safe element operations with optional chaining

**Component Boundaries:**
- Props with required vs optional clearly typed
- Default variants in CVA definitions for optional variant props
- ForwardRef pattern used for all exported components

**Validation:**
- Input validation through TypeScript types (compile-time)
- No runtime validation logic in components (handled by consuming code)
- Error states supported through props (e.g., `error?: boolean` on Input)

## Logging

**Framework:** console (no structured logging framework)

**Patterns:**
- Minimal logging in component code
- Development-only logging can be added via environment checks
- Brand page uses `'use client'` directive for Next.js client components
- No logging visible in component files (handled at app layer)

## Comments

**When to Comment:**
- JSDoc comments on exported components and utility functions (required)
- Inline comments explaining CVA variant logic
- Section headers for grouping related exports (e.g., `// UI COMPONENTS`)
- Props documentation in JSDoc descriptions

**JSDoc/TSDoc:**
- All exported components have `/** */` blocks
- Include `@example` sections showing typical usage
- Parameter descriptions using `@param` or inline JSDoc syntax
- Return type clarification for complex utilities

**Example from `button.tsx`:**
```typescript
/**
 * Button component with multiple variants and sizes.
 *
 * @example
 * ```tsx
 * // Primary button (default)
 * <Button>Save Changes</Button>
 *
 * // CTA gradient button (only ONE per page)
 * <Button variant="cta" size="lg" fullWidth>
 *   Get Started
 * </Button>
 * ```
 */
```

## Function Design

**Size:**
- Keep functions small and focused
- Helper functions extracted into separate statements when complex
- Example: `LoadingSpinner` extracted in button component

**Parameters:**
- Use destructuring in function signatures
- ForwardRef pattern for all component exports: `React.forwardRef<RefType, PropsType>((props, ref) => ...)`
- Props interfaces extend HTML attributes: `extends React.ButtonHTMLAttributes<HTMLButtonElement>`

**Return Values:**
- Always typed (no implicit any)
- Components return JSX.Element or null
- Utilities return explicit types (string, boolean, number[], etc.)

## Module Design

**Exports:**
- Named exports for components and utilities
- Default export duplicates named export (convenience)
- Type exports prefixed with `type` keyword
- Barrel files (`index.ts`) re-export all public APIs

**Example from `ui/index.ts`:**
```typescript
// Named exports with type exports
export { Button, buttonVariants, type ButtonProps } from './button';
export { Input, inputVariants, type InputProps } from './input';

// Complex component composition exports
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  // ... more sub-exports
} from './dialog';
```

**Main Package Export (`src/index.ts`):**
- Clear section headers with comment blocks
- Grouped exports for UI Primitives, Brand Components, Tokens, Utilities, Tailwind
- Comprehensive re-export of all public APIs
- 200+ lines of organized exports

## Component Patterns

**Variants with CVA:**
- All style variations use `class-variance-authority`
- Define `*Variants` export alongside component
- Base styles, variant options, default variants all specified
- Merge with `cn()` utility for class conflict resolution

**Props Interface:**
- Extend HTML element attributes: `extends React.ButtonHTMLAttributes<HTMLButtonElement>`
- Add custom props for brand behavior (e.g., `isLoading`, `leftIcon`, `rightIcon`)
- Optional JSDoc for each prop

**ForwardRef Pattern:**
- All components wrapped with `React.forwardRef<RefType, PropsType>`
- Set `displayName` property for debugging
- Props destructured with rest spread for HTML attributes

**Example pattern (complete):**
```typescript
export const buttonVariants = cva(
  // Base styles array
  ['inline-flex items-center justify-center gap-2', /* ... */],
  {
    variants: {
      variant: { primary: [/* ... */], cta: [/* ... */], /* ... */ },
      size: { sm: '...', md: '...', lg: '...', /* ... */ },
      fullWidth: { true: 'w-full' },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...props}
      >
        {/* component logic */}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
export default Button;
```

## Tailwind Integration

**Preset Pattern:**
- Custom Tailwind preset in `tailwind-preset.ts`
- Defines all design tokens (colors, spacing, shadows, etc.)
- Preset imported into apps via `tailwind.config.ts`
- CVA classes merge with Tailwind utilities

**Class Merging:**
- `cn()` utility handles Tailwind conflict resolution
- Later/override classes win: `cn('px-4', 'px-6')` → `px-6`
- Safe to override component defaults: `<Button className="text-lg" />`

## Brand-Specific Conventions

**Color Usage:**
- Never use purple/magenta standalone - only in gradients
- Primary brand color (`#165DFC`) for solid buttons and highlights
- Cyan (`#00B7FF`) for links, focus rings, and gradient start
- Glass cards always use `surface-card` background with `border`

**Component Restrictions:**
- Only ONE `CTAButton` (gradient) per page
- Use `primary` Button variant for standard actions
- OAuth buttons never use gradient - use secondary pattern
- Logo always from `<Logo />` component or image asset, never text

---

*Convention analysis: 2026-02-10*
