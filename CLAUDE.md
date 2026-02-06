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
│   ├── icons/                   # Brand mark at various sizes (12 files)
│   ├── logos/                   # Full logo lockups (5 files)
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

| Context | Use This File |
|---------|---------------|
| Website header (dark bg) | `assets/logos/finitless-logo-horizontal-on-dark.png` |
| Website header (light bg) | `assets/logos/finitless-logo-horizontal-on-light.png` |
| Social media avatar | `assets/icons/finitless-icon-social-1000.png` |
| Favicon | `assets/icons/finitless-icon-favicon-72.png` |
| PWA / app icon | `assets/icons/finitless-icon-app-512.png` |
| OG image / card backgrounds (dark) | `assets/logos/finitless-logo-square-on-dark.png` |
| OG image / card backgrounds (light) | `assets/logos/finitless-logo-square-on-light.png` |
| Print (high res) | `assets/icons/finitless-icon-print-2552.png` |
| Any overlay / compositing | `assets/icons/finitless-icon-transparent.png` |
| Vector / scalable source | `assets/icons/finitless-icon-master.svg` |

**Rules**:
- Never recreate or modify the logo mark. Use the supplied files only.
- Resize proportionately. Never stretch.
- Prefer the "on dark" variant (dark background is the brand default).

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
