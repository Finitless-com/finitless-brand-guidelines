# Finitless Brand Styling

Apply Finitless brand identity to any React/Tailwind project.

## Quick Reference

### Package Installation

```bash
npm install @finitless/design-system
```

### Tailwind Setup

```typescript
// tailwind.config.ts
import { finitlessPreset } from '@finitless/design-system/tailwind';

export default {
  presets: [finitlessPreset],
  content: ['./src/**/*.{ts,tsx}', './node_modules/@finitless/design-system/dist/**/*.{js,mjs}'],
};
```

---

## Design Tokens

### Colors

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Finitless Blue | `#165DFC` | `bg-brand-primary` | Solid buttons, active states |
| Cyan | `#00B7FF` | `text-brand-link` | Links, focus rings, gradient start |
| Purple | `#7A2EFF` | (gradient only) | Never use standalone |
| Magenta | `#C300FF` | (gradient only) | Never use standalone |
| Background | `#0e0e10` | `bg-background-base` | Page background |
| Elevated | `#151517` | `bg-background-elevated` | Cards, modals |
| Card surface | `rgba(255,255,255,0.05)` | `bg-surface-card` | Glass effect |
| Border | `rgba(255,255,255,0.10)` | `border-border` | Default borders |
| Error | `#ff3b45` | `text-semantic-error` | Error states |
| Success | `#22c55e` | `text-semantic-success` | Success states |

### Border Radius

| Token | Value | Class |
|-------|-------|-------|
| Small | `8px` | `rounded-sm` |
| Default | `12px` | `rounded` or `rounded-md` |
| Large | `16px` | `rounded-lg` |
| XL | `24px` | `rounded-xl` |
| Full | `9999px` | `rounded-full` |

### Gradients

```css
/* Brand gradient (full spectrum) */
background: linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF);
/* Tailwind: bg-gradient-brand */

/* CTA gradient */
background: linear-gradient(to right, #00B7FF, #7A2EFF);
/* Tailwind: bg-gradient-cta */
```

---

## Components

### Import Pattern

```tsx
import {
  Button, Input, Label, Select, Dialog, Tabs,
  GlassCard, CTAButton, GradientText, Logo, StatusBadge,
} from '@finitless/design-system';
```

### Button Variants

```tsx
// Primary (default) - Finitless Blue solid
<Button>Save Changes</Button>

// CTA - Gradient with glow (ONLY ONE PER PAGE)
<CTAButton size="lg">Get Started Free</CTAButton>

// Secondary - Glass background
<Button variant="secondary">Cancel</Button>

// Ghost - Transparent
<Button variant="ghost">Learn More</Button>

// Destructive - Red
<Button variant="destructive">Delete</Button>
```

### Form Pattern

```tsx
<FormContainer>
  <Logo variant="horizontal" size="sm" className="mb-8" />

  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email" required>Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>

    <CTAButton type="submit" fullWidth>Sign In</CTAButton>
  </div>

  <FormDivider />

  <OAuthButton provider="Google" icon={<GoogleIcon />}>
    Continue with Google
  </OAuthButton>
</FormContainer>
```

### Card Pattern

```tsx
// Basic glass card
<GlassCard>
  <h3 className="text-lg font-semibold">Card Title</h3>
  <p className="text-text-muted">Card content</p>
</GlassCard>

// Stat card with accent
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

## Typography

**Font**: Inter (Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

| Level | Size | Weight | Class |
|-------|------|--------|-------|
| Hero | 60px | 800 | `text-6xl font-extrabold` |
| H1 | 48px | 700 | `text-5xl font-bold` |
| H2 | 36px | 700 | `text-4xl font-bold` |
| H3 | 30px | 600 | `text-3xl font-semibold` |
| Body | 16px | 400 | `text-base` |
| Small | 14px | 400 | `text-sm` |

### Gradient Text

```tsx
<GradientText as="h1" className="text-5xl">
  Never Miss a Sale
</GradientText>
```

---

## Brand Rules

### DO

- Use Finitless Blue (`#165DFC`) for solid buttons
- Use ONE gradient CTA button per page
- Use glass cards (`bg-surface-card border-border backdrop-blur`)
- Use cyan (`#00B7FF`) for links and focus states
- Use 12px border radius as default

### DON'T

- Multiple gradient buttons on one page
- Purple or magenta as standalone colors
- White or light backgrounds
- Native browser form elements without styling
- Sharp corners (0px radius)
- Rendering logo from font (use `<Logo />` component)

---

## Resources

- **Brand Page**: https://brand.finitless.com
- **NPM Package**: `@finitless/design-system`
- **Storybook**: https://storybook.brand.finitless.com
- **GitHub**: https://github.com/Finitless-com/finitless-brand-guidelines
