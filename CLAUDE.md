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
| Overlay / custom bg (logo) | `assets/logos/finitless-logo-horizontal-on-dark-300w.png` | 300w |
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

### Logo Background Types

| Logo | Background | Use When |
|------|-----------|----------|
| horizontal-on-dark | Transparent | Placing on any dark or colored background |
| horizontal-on-light | Transparent | Placing on any light or colored background |
| square-on-dark | Solid black | Social cards, OG images, app stores (self-contained) |
| square-on-light | Transparent | Placing on any light background |
| rect-on-dark | Solid black | Email signatures, marketing (self-contained) |

**Rule**: Use horizontal logos for overlay on custom backgrounds. Use square/rect on-dark for self-contained images where the black background is part of the design.

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
| blue | #165DFC | Solid buttons (preferred), UI backgrounds, link color, data viz |
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
  --color-blue: #165DFC;
  --color-background: #0a0a0a;
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-card-surface: rgba(255, 255, 255, 0.05);
  --color-border: rgba(255, 255, 255, 0.10);
  --color-muted-text: rgba(255, 255, 255, 0.60);
  --color-error: #ff3b45;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-info: #eaf4ff;
  --gradient-brand: linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF);
  --gradient-cta: linear-gradient(to right, #00B7FF, #7A2EFF);
  --glow-primary: 0 0 20px rgba(0, 183, 255, 0.3);
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
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
    blue: '#165DFC',
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
  blue: '#165DFC',
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

### Monospace stack

```css
font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace;
```

Use for code blocks, technical content, file paths, and data values.

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

**Words to use**: AI agents, AI ordering agents, AI-powered, recover, capture, own, direct, efficient, 24/7, never miss, revenue, every order

**Words to avoid**: chatbot, bot, artificial intelligence (say "AI"), smart, virtual assistant, disrupt, maybe, try, revolutionize, leverage, synergy, hopefully

**Tone mapping**:
- Marketing copy: Bold, results-focused, data-driven
- Product UI: Clear, helpful, efficient
- Support: Warm, patient, solution-oriented
- Error messages: Honest, reassuring, actionable

---

## Visual Rules (Quick Reference)

| Element | Pattern |
|---------|---------|
| Background (deep) | `#08080a` -- sidebar, navigation |
| Background (base) | `#0e0e10` -- main page background (v3.0.0) |
| Background (elevated) | `#151517` -- cards, modals |
| Background (surface) | `#1c1c1f` -- dropdowns, popovers |
| Card | `bg-white/[0.04] border border-white/[0.06] rounded-[18px] backdrop-blur-lg` (v3.0.0 updated) |
| Card hover | `hover:border-[#00B7FF]/50 hover:shadow-lg hover:shadow-[#00B7FF]/10` |
| Primary button (gradient) | `bg-gradient-to-r from-[#00B7FF] to-[#7A2EFF] rounded-xl text-white font-semibold` -- only ONE per view (hero/form submit) |
| Solid button (preferred) | `bg-[#165DFC] rounded-xl text-white font-semibold` -- preferred for standard actions (+ Create, Save, Add) |
| Secondary button | `border border-white/20 bg-white/5 rounded-xl text-white` |
| Button sizes | sm: `h-9` (36px), md: `h-11` (44px, default), lg: `h-12` (48px, forms/hero) |
| Form input | `w-full h-12 px-4 text-base text-white bg-white/5 border border-white/10 rounded-xl placeholder:text-white/40 focus:border-[#00B7FF]/50` |
| Form label | `block text-sm font-semibold text-white/70 mb-2` |
| Form error input | Replace default border with `border-[#ff3b45] ring-[3px] ring-[#ff3b45]/15` |
| Form error text | `text-xs text-[#ff3b45] mt-1` |
| OAuth / social button | Secondary button pattern: `w-full h-12 flex items-center justify-center gap-2 bg-white/5 border border-white/20 rounded-xl` |
| Form divider | `flex items-center gap-4 my-6` with `h-px bg-white/10` lines and `text-xs text-white/40` text |
| Form container | `max-w-[480px] mx-auto bg-white/5 border border-white/10 rounded-2xl p-8` |
| Select trigger | Same as form input + right chevron (`text-white/50`). Placeholder: `text-white/40`, selected value: `text-white` |
| Dropdown panel | `bg-white/[0.08] border-white/[0.12] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl max-h-80 overflow-y-auto p-1` |
| Dropdown option | `px-4 py-3 text-[15px] text-white/80 rounded-lg`. Hover: `bg-[#00B7FF]/[0.12]`. Selected: `bg-[#00B7FF]/[0.15] text-white` |
| Gradient text | `bg-gradient-to-r from-[#00B7FF] via-[#7A2EFF] to-[#C300FF] bg-clip-text text-transparent` |
| Border radius | 6px (xs), 10px (sm), 14px (md), 18px (lg/cards), 24px (xl), 32px (2xl) -- v3.0.0 updated |
| Spacing grid | 4px base (4, 8, 12, 16, 24, 32, 48, 64, 96) |
| Stat card | `bg-white/[0.04] border-white/[0.06] rounded-[18px] border-l-4 border-l-[accent-color]` |
| Icon container | `w-12 h-12 rounded-[14px] bg-[accent-color]/[0.12] flex items-center justify-center` |
| Period selector | Pill tabs: `rounded-full bg-white/[0.02] p-1`, active: `bg-[#00B7FF]/[0.12] text-[#00B7FF]` |
| Live badge | `bg-[#22c55e]/20 text-[#22c55e] rounded-full px-2 py-0.5` with pulsing dot |
| CTA glow | `box-shadow: 0 0 40px -10px rgba(0,183,255,0.3)` |
| Glassmorphism | `backdrop-filter: blur(8px)` (increased from 4px in v3.0.0) |
| Transition (fast) | `transition: all 150ms ease` -- hover states, button feedback |
| Transition (normal) | `transition: all 250ms ease` -- card hovers, panel reveals |
| Focus outline | `:focus-visible { outline: 2px solid #00B7FF; outline-offset: 2px; }` |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` -- collapse all durations |
| Font smoothing | `-webkit-font-smoothing: antialiased` on body |
| Breakpoint (tablet) | `768px` -- h1 36px, h2 28px, single-column grids |
| Breakpoint (mobile) | `640px` -- stack side-by-side layouts |

---

## Anti-Patterns (Never Do)

| Component | Never Do |
|-----------|----------|
| Buttons | Non-brand solid colors (#2563eb, etc.) or flat solid cyan (#00B7FF) as button bg, radius below 8px, Arial/system font, height below 36px, multiple gradient buttons on one page. Use Finitless Blue (#165DFC) for solid buttons. |
| Cards | Solid white backgrounds, sharp corners (0px radius), missing hover state |
| Gradient text | Omit cyan stop, use top-to-bottom direction, apply to body copy |
| Form inputs | Unstyled browser defaults, white/light backgrounds, missing focus state, font-size below 16px, radius below 8px |
| Form buttons | Flat solid cyan or non-brand color for primary submit (use CTA gradient), gradient on OAuth buttons (use secondary pattern). Finitless Blue (#165DFC) is for standard actions, not form submit. |
| Logo in forms | Rendering from a font (BEASIGNE or other) -- always use `<img>` with horizontal logo asset |
| Select / Dropdown | Native browser `<select>` without custom styling, brand gradient as hover/selected bg on options, same background as page for dropdown panel, missing option padding |

---

## Icon Style

- **Style**: Outlined (stroke-based), 1.5px stroke width.
- **Default size**: 24px. Grid: 16px (sm), 24px (md), 32px (lg).
- **Colors**: White (#FFFFFF) on dark, #0a0a0a on light. Brand gradient for emphasis.
- **Library**: Lucide Icons (lucide.dev) for standard UI patterns.

---

## Imagery Guidelines

- **Photography**: Dark, high-contrast, selective brand color accents. Restaurant environments, tech in use.
- **Illustrations**: Geometric, minimal, gradient fills from the brand palette on dark backgrounds.
- **Textures**: Dot-grid or line patterns at 5-10% opacity. Gradient mesh at 10-20%. Glassmorphism: `backdrop-filter: blur(8px)` + `bg-white/[0.04]` + `border-white/[0.06]` (v3.0.0 updated).

---

## Full Documentation

For complete specifications, see:
- `BRAND-GUIDELINES.md` -- Full brand guide
- `colors/COLORS.md` -- Complete color spec with HSL values
- `typography/TYPOGRAPHY.md` -- Full type scale with CSS and Tailwind
- `voice/BRAND-VOICE.md` -- Extended voice guide with examples
