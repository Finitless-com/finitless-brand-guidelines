# CLAUDE.md -- Finitless Design System

Instructions for AI agents consuming this repository.

---

## What This Repo Is

This is the **Finitless Design System** - a monorepo containing:
1. `@finitless/design-system` - NPM package with React components and Tailwind preset
2. `brand-page` - Next.js app deployed at brand.finitless.com

**Company**: Finitless (finitless.com)
**Product**: AI ordering agents for restaurants (voice, WhatsApp, web chat)
**Tagline**: "Never Miss a Sale. Ever."

---

## Repository Structure

```
finitless-design-system/
├── packages/
│   └── design-system/           # @finitless/design-system NPM package
│       ├── src/
│       │   ├── components/
│       │   │   ├── ui/          # Radix-based primitives
│       │   │   └── brand/       # Finitless-specific components
│       │   ├── tokens/          # Design tokens (colors, typography, spacing)
│       │   ├── lib/             # Utilities (cn, etc.)
│       │   └── styles/          # Global CSS
│       ├── stories/             # Storybook stories
│       └── .storybook/          # Storybook config
├── apps/
│   └── brand-page/              # Next.js brand documentation site
├── assets/                      # Canonical logo/icon source files
└── archive/
    └── v3.0.0/                  # Archived previous implementation
```

---

## Key Token Values (v4.0.0)

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `brand.primary` | `#165DFC` | Finitless Blue - solid buttons, active states |
| `brand.link` | `#00B7FF` | Cyan - links, focus rings, gradients |
| `brand.purple` | `#7A2EFF` | Gradient midpoint ONLY |
| `brand.magenta` | `#C300FF` | Gradient end ONLY |
| `background.base` | `#0e0e10` | Page background |
| `background.elevated` | `#151517` | Cards, modals |
| `surface.card` | `rgba(255,255,255,0.05)` | Card background |
| `border.DEFAULT` | `rgba(255,255,255,0.10)` | Default borders |

### Border Radius (Simplified in v4.0.0)

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | `8px` | Small elements, badges |
| `DEFAULT` / `md` | `12px` | Universal default - inputs, buttons, cards |
| `lg` | `16px` | Larger cards, modals |
| `xl` | `24px` | Hero sections |
| `full` | `9999px` | Pills, avatars |

### Gradients

```css
--gradient-brand: linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF);
--gradient-cta: linear-gradient(to right, #00B7FF, #7A2EFF);
```

---

## Component Usage

### Import Components

```tsx
import {
  // UI Primitives
  Button, Input, Label, Select, Dialog, Tabs,
  // Brand Components
  GlassCard, CTAButton, GradientText, Logo, StatusBadge,
} from '@finitless/design-system';
```

### Button Rules

1. **Primary** (`variant="primary"`) - Finitless Blue, default for most actions
2. **CTA** (`variant="cta"`) - Gradient button, **ONLY ONE PER PAGE**
3. **Secondary** (`variant="secondary"`) - Glass background, alternative actions

```tsx
// Standard action
<Button>Save Changes</Button>

// Primary CTA (only one per page!)
<CTAButton size="lg">Get Started Free</CTAButton>

// OAuth buttons (NEVER use gradient)
<OAuthButton provider="Google" icon={<GoogleIcon />}>
  Continue with Google
</OAuthButton>
```

### Form Patterns

```tsx
<FormContainer>
  <Logo variant="horizontal" size="sm" className="mb-8" />

  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email" required>Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>

    <CTAButton type="submit" fullWidth>
      Sign In
    </CTAButton>
  </div>

  <FormDivider />

  <OAuthButton provider="Google" icon={<GoogleIcon />}>
    Continue with Google
  </OAuthButton>
</FormContainer>
```

### Card Patterns

```tsx
// Basic glass card
<GlassCard>Content here</GlassCard>

// Stat card with accent border
<GlassCard highlight="primary">
  <div className="flex items-start gap-4">
    <IconContainer color="primary">
      <DollarSign className="h-6 w-6" />
    </IconContainer>
    <div>
      <div className="text-2xl font-bold">$31,000</div>
      <div className="text-text-muted">Revenue recovered</div>
    </div>
  </div>
</GlassCard>
```

---

## Tailwind Integration

### Using the Preset

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

### Available Classes

```tsx
// Backgrounds
className="bg-background-base bg-background-elevated bg-surface-card"

// Text
className="text-white text-text-muted text-text-placeholder"

// Brand colors
className="bg-brand-primary text-brand-link"

// Borders
className="border-border border-border-subtle border-border-strong"

// Gradients
className="bg-gradient-brand bg-gradient-cta"

// Shadows
className="shadow-dropdown shadow-glow shadow-focus"

// Radius (universal 12px default)
className="rounded rounded-sm rounded-lg rounded-xl rounded-full"
```

---

## Anti-Patterns (Never Do)

| Component | Never Do |
|-----------|----------|
| Buttons | Multiple gradient buttons on one page, non-brand colors |
| Cards | Solid white backgrounds, sharp corners |
| Forms | Native browser selects without styling, gradient OAuth buttons |
| Logo | Render from font - always use `<Logo />` component or img asset |
| Purple/Magenta | Use standalone - only in gradients |

---

## Development Commands

```bash
# Install all dependencies
npm install

# Start Storybook (design system dev)
npm run storybook

# Start brand page dev server
npm run dev

# Build all packages
npm run build

# Build Storybook static
npm run build-storybook
```

---

## Deployment

- **Design System Package**: Publish to npm via `npm publish` in packages/design-system
- **Brand Page**: Auto-deploys to Vercel on push to main
- **Storybook**: Build static and deploy to Chromatic or Vercel

---

## Full Documentation

- `README.md` - Quick start guide
- `packages/design-system/src/tokens/` - All token definitions
- `packages/design-system/stories/` - Interactive examples
- `archive/v3.0.0/BRAND-GUIDELINES.md` - Full brand guide reference
