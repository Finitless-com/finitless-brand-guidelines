# Testing Patterns

**Analysis Date:** 2026-02-10

## Test Framework Status

**Current State:** No unit/integration test framework configured

**Coverage:**
- No Jest, Vitest, or other test runners detected
- No `.test.ts`, `.test.tsx`, `.spec.ts`, or `.spec.tsx` files in codebase
- No test configuration files (`jest.config.js`, `vitest.config.ts`)
- No testing libraries installed (no `@testing-library/react`, etc.)

**Recommendation:** Testing should be added for design system components before publishing to npm at scale.

## Documentation-Driven Testing via Storybook

**Primary Testing Mechanism:** Storybook with interactive stories

**Framework:**
- Storybook v8.0.0 configured in `packages/design-system/.storybook/`
- Visual regression testing through interactive story preview
- Accessibility testing via addon: `@storybook/addon-a11y`

**Run Commands:**
```bash
npm run storybook              # Start Storybook dev server (port 6006)
npm run build-storybook       # Build static Storybook for deployment
```

**Config Files:**
- `.storybook/main.ts` - Story discovery and addon configuration
- `.storybook/preview.ts` - Global preview settings and decorators
- Storybook in `packages/design-system/` only (design-system package)

## Test File Organization

**Story Location:**
- Path: `packages/design-system/stories/`
- Subdirectories: `components/`, `tokens/`
- Naming: PascalCase with `.stories.tsx` suffix

**Directory Structure:**
```
packages/design-system/
├── stories/
│   ├── components/
│   │   ├── Button.stories.tsx
│   │   ├── Input.stories.tsx
│   │   └── ... (one per component)
│   └── tokens/
│       ├── Colors.stories.tsx
│       └── ... (design token stories)
└── src/
    └── components/
        ├── ui/
        └── brand/
```

## Story Structure Pattern

**Standard Storybook Setup:**
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from '../../src/components/...';

const meta: Meta<typeof Component> = {
  title: 'Components/ComponentName',
  component: Component,
  tags: ['autodocs'],  // Enable auto-generated docs
  argTypes: {
    // Control definitions for props
    propName: {
      control: 'select',
      options: ['value1', 'value2'],
      description: 'Prop description',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

// Named exports for each story/variant
export const Primary: Story = {
  args: { /* props */ },
};
```

**From `Button.stories.tsx`:**
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Plus, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '../../src/components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'cta', 'secondary', 'ghost', 'destructive', 'link'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon', 'icon-sm', 'icon-lg'],
      description: 'Button size',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether button takes full width',
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows loading spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;
```

## Story Patterns

**Basic Stories:**
- One story per component variant
- Story name becomes the tab/section in Storybook
- Props passed via `args` object

**Composite Stories (render function):**
- For showing multiple related states or combinations
- `render: () => (...)` function instead of `args`
- Used for: All variants, All sizes, Icon buttons, etc.

**Documentation Stories:**
- `parameters: { docs: { description: { story: '...' } } }` for warnings/info
- Example: CTA Button story includes usage restriction documentation
- Displayed in docs tab alongside auto-generated prop table

**From `Button.stories.tsx` - CTA example:**
```typescript
export const CTA: Story = {
  args: {
    children: 'Get Started',
    variant: 'cta',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: '**IMPORTANT**: Only use ONE CTA button per page/view. Reserved for hero sections and primary form submits.',
      },
    },
  },
};
```

## Mocking

**Current Approach:** No mocking framework configured

**For Future Implementation:**
- Component logic is minimal (styling + event handlers)
- Icons imported from `lucide-react` directly in stories
- Event handlers tested through Storybook interactions addon
- No API calls or external dependencies in components

**What's Mockable:**
- Window/browser APIs (e.g., `navigator.clipboard` used in `CopyButton`)
- ResizeObserver, matchMedia for responsive testing
- User interactions via Storybook's interactions addon

## Visual Testing Patterns

**Current Visual Testing:**
- Manual verification in Storybook interactive preview
- Responsive view testing via Storybook viewport addon
- Accessibility scanning via `@storybook/addon-a11y`

**Addon Configuration (`packages/design-system/.storybook/main.ts`):**
```typescript
addons: [
  '@storybook/addon-essentials',      // Docs, Controls, Actions
  '@storybook/addon-a11y',            // Accessibility testing
  '@storybook/addon-interactions',    // User interaction testing
  '@storybook/addon-links',           // Story linking
],
```

**Accessibility Testing:**
- A11y addon checks WCAG compliance in preview
- Interactive components tested for keyboard navigation
- Color contrast verified

## Component Testing Examples

### Button Component Tests (via Storybook)

**Variants tested:**
- Primary (default)
- CTA (gradient, one-per-page warning)
- Secondary
- Ghost
- Destructive
- Link

**Sizes tested:**
- sm, md, lg (standard)
- icon, icon-sm, icon-lg (icon buttons)

**States tested:**
- Normal
- Loading (with spinner)
- Disabled
- With left icon
- With right icon

**Composition tests:**
- All sizes together
- All variants together
- Icon button combinations

### Input Component Stories

**States covered:**
- Basic input
- With label (paired with Label component)
- Error state (red border)
- With start icon
- With end icon

### GlassCard Component Stories

**Variations:**
- Different sizes (sm, md, lg)
- Interactive states (hover effects)
- Highlight color variants (none, primary, success, warning, error, cyan)

## Integration Points

**Design System Publication:**
- NPM publish via `npm publish` in `packages/design-system/`
- Storybook serves as live documentation for consumers
- Peer dependencies require: react@^18.2.0, react-dom@^18.2.0, tailwindcss@^3.4.0

**Brand Page Testing:**
- `apps/brand-page/` demonstrates design system usage
- Page includes all major components and patterns
- Serves as integration test of design system in Next.js app
- Built and deployed on every push to main

**Manual Testing Checklist:**
Before publishing new version:
- [ ] All stories render without errors in Storybook
- [ ] Visual inspection in multiple viewports
- [ ] A11y addon passes key checks
- [ ] Brand page (`npm run dev` in apps/brand-page) shows all components working
- [ ] TypeScript strict mode passes: `tsc --noEmit`
- [ ] ESLint passes: `npm run lint`

## Type Safety Testing

**TypeScript Strict Mode:**
- All source files checked with `strict: true`
- `noUnusedLocals` and `noUnusedParameters` enforced
- Declaration files (`*.d.ts`) auto-generated in `dist/`
- Type tests via IDE during development

**CVA Type Checking:**
- Component props automatically typed from CVA variants
- Invalid variant values caught at compile time
- Example: `<Button variant="invalid" />` → TypeScript error

## Future Testing Recommendations

**Unit Tests (when added):**
- Utility functions: `generateId()`, `cn()`, `prefersReducedMotion()`, etc.
- Component prop validation and edge cases
- Event handlers in interactive components

**Integration Tests:**
- Component composition scenarios
- Form component integration
- Dialog/modal interactions

**Test Framework:** Vitest or Jest recommended
- Lightweight (Vitest preferred for Vite-based projects)
- Compatible with Storybook
- Easy integration with existing tooling

**Coverage Target:**
- Utilities: 100% (small, critical functions)
- Components: 80%+ (focus on prop handling, state changes, edge cases)
- No coverage requirement for stories themselves

---

*Testing analysis: 2026-02-10*
