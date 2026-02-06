# CLAUDE.md -- Finitless Brand Guidelines

Instructions for AI agents consuming this repository.

---

## What This Repo Is

This is the **single source of truth** for the Finitless brand identity. It contains logo assets, color definitions, typography specs, voice/tone guidelines, and ready-to-use code snippets for CSS, Tailwind, and React.

**Company**: Finitless (finitless.com)
**Product**: AI ordering agents for restaurants (voice, WhatsApp, web chat)
**Tagline**: "Never Miss a Sale. Ever."

---

## Repository Structure

```
brand-guidelines/
├── BRAND-GUIDELINES.md          # Complete brand guide (start here)
├── CLAUDE.md                    # AI agent instructions (this file)
├── SKILL.md                     # LLM skill definition for styling
├── CHANGELOG.md                 # Version history
├── README.md                    # Human-readable overview
├── assets/
│   ├── icons/                   # Brand mark in 3 variants x 12 sizes + originals (48+ files)
│   ├── logos/                   # Logo lockups in multiple formats and sizes (31+ files)
│   └── reference/               # Original brand PDF + HubSpot screenshot
├── colors/
│   └── COLORS.md                # Full color specification
├── typography/
│   ├── TYPOGRAPHY.md            # Full typography specification
│   └── fonts/                   # Font files (currently empty -- Inter via Google Fonts)
└── voice/
    └── BRAND-VOICE.md           # Brand voice and tone guide
```

---

## Quick-Reference: Brand Manifest

If a `brand-manifest.json` file exists at the repository root or is deployed to Vercel, use it as a machine-readable source for colors, fonts, and asset URLs. Otherwise, use the values below directly.

---

## Picking the Right Logo / Icon

### Quick Pick (most common contexts)

| Context | Use This File | Size |
|---------|---------------|------|
| Website header (dark bg) | `assets/logos/finitless-logo-horizontal-on-dark-300w.png` | 300w |
| Website header (light bg) | `assets/logos/finitless-logo-horizontal-on-light-300w.png` | 300w |
| Favicon | `assets/icons/finitless-icon-on-dark-32.png` | 32px |
| Social media avatar | `assets/icons/finitless-icon-on-dark-1000.png` | 1000px |
| PWA / app icon | `assets/icons/finitless-icon-on-dark-512.png` | 512px |
| Android launcher | `assets/icons/finitless-icon-on-dark-192.png` | 192px |
| Apple App Store | `assets/icons/finitless-icon-on-dark-1024.png` | 1024px |
| OG / Social card image | `assets/logos/finitless-logo-square-on-dark-1024.png` | 1024px |
| Email signature | `assets/logos/finitless-logo-rect-on-dark-300w.png` | 300w |
| Print (high res) | `assets/icons/finitless-icon-print-2552.png` | 2552px |
| Any overlay / compositing | `assets/icons/finitless-icon-transparent-512.png` | 512px |
| Vector / scalable source | `assets/icons/finitless-icon-master.svg` | any |

### Available Icon Sizes

**Naming pattern**: `assets/icons/finitless-icon-{variant}-{size}.png`

- **Variants**: `on-dark` (black bg), `on-light` (white bg), `transparent`
- **Sizes**: 16, 32, 48, 64, 72, 128, 192, 256, 384, 512, 1000, 1024

### Available Logo Sizes

**Horizontal** (icon + wordmark): `assets/logos/finitless-logo-horizontal-{on-dark|on-light}-{width}w.png`
- Widths: 120, 200, 300, 480, 800, 1200

**Square** (icon + wordmark, square format): `assets/logos/finitless-logo-square-{on-dark|on-light}-{size}.png`
- Sizes: 128, 256, 512, 1024, 2000

**Rectangular**: `assets/logos/finitless-logo-rect-on-dark-{width}w.png`
- Widths: 300, 600, 1200, 1800

### Rules

- Never recreate or modify the logo mark. Use the supplied files only.
- Resize proportionately. Never stretch.
- Prefer the "on dark" variant (dark background is the brand default).
- Use the smallest size that meets your resolution needs.

---

## Applying Colors

### Core Values

| Token | Hex | Usage |
|-------|-----|-------|
| primary (cyan) | #00B7FF | Links, CTAs, primary accent |
| secondary (purple) | #7A2EFF | Gradient midpoint, secondary accent |
| tertiary (magenta) | #C300FF | Gradient end, decorative |
| background | #0a0a0a | Primary dark background |
| black | #000000 | Maximum contrast |
| white | #FFFFFF | Text on dark backgrounds |
| error | #ff3b45 | Error states |
| success | #22c55e | Success states |
| warning | #f59e0b | Caution states, pending actions |
| info | #eaf4ff | Info tints |

### CSS Custom Properties

```css
:root {
  --color-primary: #00B7FF;
  --color-secondary: #7A2EFF;
  --color-tertiary: #C300FF;
  --color-background: #0a0a0a;
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-error: #ff3b45;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-info: #eaf4ff;
  --gradient-brand: linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF);
  --gradient-cta: linear-gradient(to right, #00B7FF, #7A2EFF);
  --glow-primary: 0 0 20px rgba(0, 183, 255, 0.3);
}
```

### Tailwind

```js
// tailwind.config.js
colors: {
  brand: {
    cyan: '#00B7FF',
    purple: '#7A2EFF',
    magenta: '#C300FF',
  },
  surface: {
    DEFAULT: '#0a0a0a',
    black: '#000000',
  },
}
```

### React (inline / styled-components)

```jsx
const brandColors = {
  primary: '#00B7FF',
  secondary: '#7A2EFF',
  tertiary: '#C300FF',
  background: '#0a0a0a',
  white: '#FFFFFF',
  error: '#ff3b45',
  success: '#22c55e',
};

const gradients = {
  brand: 'linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF)',
  cta: 'linear-gradient(to right, #00B7FF, #7A2EFF)',
};
```

---

## Font Loading

Finitless uses **Inter** from Google Fonts for all UI text.

### HTML

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
```

### Next.js (App Router)

```tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0a0a0a] text-white">{children}</body>
    </html>
  );
}
```

### CSS fallback stack

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Logo font**: BEASIGNE is used only in the logo/wordmark. Never use it for UI text. Always render the logo from the supplied image assets, not from the font.

---

## Brand Voice Rules for Content Generation

When generating copy for Finitless:

1. **Be confident, not arrogant.** State facts. Let results speak.
2. **Be practical, not visionary.** Talk about what the product does today.
3. **Be direct, not salesy.** Get to the point. No fluff.
4. **Use specific numbers** whenever possible ($31,000/year, 40% missed calls).
5. **Lead with the problem**, then deliver the solution.
6. **Target audience**: Restaurant owners and operators.

**Words to use**: recover, capture, own, direct, efficient, 24/7, never miss

**Words to avoid**: chatbot, automate, disrupt, maybe, try, revolutionize, leverage, synergy

**Tone mapping**:
- Marketing copy: Bold, results-focused, data-driven
- Product UI: Clear, helpful, efficient
- Support: Warm, patient, solution-oriented
- Error messages: Honest, reassuring, actionable

---

## Visual Rules (Quick Reference)

| Element | Pattern |
|---------|---------|
| Default background | `#0a0a0a` (dark-mode-first) |
| Card | `bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm` |
| Card hover | `hover:border-[#00B7FF]/50 hover:shadow-lg hover:shadow-[#00B7FF]/10` |
| Primary button | `bg-gradient-to-r from-[#00B7FF] to-[#7A2EFF] rounded-xl text-white font-semibold` |
| Secondary button | `border border-white/20 bg-white/5 rounded-xl text-white` |
| Gradient text | `bg-gradient-to-r from-[#00B7FF] via-[#7A2EFF] to-[#C300FF] bg-clip-text text-transparent` |
| Border radius | 8px (sm), 12px (md), 16px (lg), 24px (xl) |
| Spacing grid | 4px base (4, 8, 12, 16, 24, 32, 48, 64, 96) |

---

## Full Documentation

For complete specifications, see:
- `BRAND-GUIDELINES.md` -- Full brand guide
- `colors/COLORS.md` -- Complete color spec with HSL values
- `typography/TYPOGRAPHY.md` -- Full type scale with CSS and Tailwind
- `voice/BRAND-VOICE.md` -- Extended voice guide with examples
