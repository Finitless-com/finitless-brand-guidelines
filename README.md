# @finitless/design-system

Finitless Design System - Brand tokens, React components, and Tailwind preset for building consistent Finitless applications.

## Features

- **Design Tokens** - Colors, typography, spacing, and effects as JavaScript constants and Tailwind config
- **React Components** - Radix UI-based accessible components styled to brand specs
- **Tailwind Preset** - Drop-in preset for any Tailwind project
- **Storybook Documentation** - Interactive component playground and usage examples

## Installation

```bash
npm install @finitless/design-system
```

## Quick Start

### 1. Add the Tailwind Preset

```typescript
// tailwind.config.ts
import { finitlessPreset } from '@finitless/design-system/tailwind';

export default {
  presets: [finitlessPreset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@finitless/design-system/dist/**/*.{js,mjs}',
  ],
};
```

### 2. Import Global Styles

```typescript
// app/layout.tsx or _app.tsx
import '@finitless/design-system/styles';
```

### 3. Use Components

```tsx
import { Button, GlassCard, CTAButton, GradientText } from '@finitless/design-system';

export function Hero() {
  return (
    <GlassCard>
      <GradientText as="h1" className="text-5xl">
        Never Miss a Sale
      </GradientText>
      <p className="text-text-muted">
        AI ordering agents for restaurants.
      </p>
      <CTAButton size="lg">Get Started</CTAButton>
    </GlassCard>
  );
}
```

## Components

### UI Primitives
- `Button` - Primary, CTA, secondary, ghost, destructive, link variants
- `Input` - Text inputs with error states and icons
- `Label` - Form labels with required indicator
- `Textarea` - Multi-line text input
- `Select` - Dropdown select with search
- `Checkbox` - Checkbox with indeterminate state
- `Switch` - Toggle switch
- `RadioGroup` - Radio button group
- `Dialog` - Modal dialogs
- `Tabs` - Tab navigation
- `Tooltip` - Hover tooltips
- `Alert` - Status messages
- `Badge` - Labels and tags
- `Avatar` - User avatars
- `Skeleton` - Loading placeholders
- `Separator` - Visual dividers
- `DropdownMenu` - Context menus

### Brand Components
- `Logo` - Finitless logo with variants and sizes
- `GradientText` - Brand gradient text effect
- `GlassCard` - Glass-morphism card container
- `CTAButton` - Call-to-action button with glow (ONE per page!)
- `OAuthButton` - Social login buttons
- `FormContainer` - Form wrapper with divider
- `StatusBadge` - Live, active, pending, error states
- `IconContainer` - Colored icon backgrounds

## Design Tokens

### Colors

```typescript
import { colors, gradients } from '@finitless/design-system';

// Brand colors
colors.brand.primary    // #165DFC - Finitless Blue
colors.brand.link       // #00B7FF - Cyan (links, focus)
colors.brand.purple     // #7A2EFF - Gradient only
colors.brand.magenta    // #C300FF - Gradient only

// Background hierarchy
colors.background.deep      // #08080a - Sidebar, nav
colors.background.base      // #0e0e10 - Page background
colors.background.elevated  // #151517 - Cards, modals
colors.background.surface   // #1c1c1f - Dropdowns

// Semantic
colors.semantic.error     // #ff3b45
colors.semantic.success   // #22c55e
colors.semantic.warning   // #f59e0b

// Gradients
gradients.brand  // cyan → purple → magenta
gradients.cta    // cyan → purple
```

### Typography

```typescript
import { typography } from '@finitless/design-system';

typography.fontFamily.sans  // Inter stack
typography.fontFamily.mono  // Monospace stack
typography.fontSize.base    // 16px
typography.fontWeight.semibold // 600
```

### Spacing & Radius

```typescript
import { borderRadius, spacing } from '@finitless/design-system';

borderRadius.sm      // 8px
borderRadius.DEFAULT // 12px (universal default)
borderRadius.lg      // 16px
borderRadius.xl      // 24px
```

## Project Structure

```
├── packages/
│   └── design-system/       # @finitless/design-system package
│       ├── src/
│       │   ├── components/  # React components
│       │   ├── tokens/      # Design tokens
│       │   ├── lib/         # Utilities
│       │   └── styles/      # CSS
│       ├── stories/         # Storybook stories
│       └── .storybook/      # Storybook config
├── apps/
│   └── brand-page/          # brand.finitless.com (Next.js)
├── assets/                  # Canonical logo/icon files
└── archive/
    └── v3.0.0/              # Previous implementation
```

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Start brand page dev server
npm run dev

# Build all packages
npm run build
```

## Brand Page

The brand page is deployed at [brand.finitless.com](https://brand.finitless.com).

It provides:
- Interactive component demos
- Color palette with copy buttons
- Typography scale reference
- Logo and icon downloads
- Code snippets for integration

## Resources

- [Storybook](https://storybook.brand.finitless.com) - Interactive component playground
- [Brand Page](https://brand.finitless.com) - Visual brand guide
- [GitHub](https://github.com/Finitless-com/finitless-brand-guidelines) - Source code

## License

Proprietary - Finitless, Inc.
