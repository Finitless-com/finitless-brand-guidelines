# Finitless Brand Guidelines

Complete brand identity guide for Finitless -- the single source of truth for logo usage, color palette, typography, imagery, voice and tone, spacing, and iconography.

**Company**: Finitless (finitless.com)
**Founder**: Sergio Khoury
**Product**: AI ordering agents for restaurants (voice, WhatsApp, web chat)
**Industry**: Restaurant Technology / AI
**Tagline**: "Never Miss a Sale. Ever."

---

## 1. Logo

### The Concept

The Finitless logo merges the letter "N" with an infinity symbol into a single mark. Two interlocking angular shapes form an infinity-N, rendered with a cyan-to-magenta gradient. The wordmark spells "FINITLESS" in the BEASIGNE font -- all caps, geometric sans-serif with distinctive letter cuts.

### Logo Variants

There are four official logo versions. Always use the supplied files; never recreate the mark.

| Variant | Description | When to Use |
|---------|-------------|-------------|
| Color on dark | Full gradient icon + white wordmark on black background | **Preferred** -- default for most contexts |
| Color on light | Full gradient icon + black wordmark on white background | Light-background layouts |
| Black on white | All-black monochrome icon + wordmark on white background | Single-color print, fax, stamps |
| White on black | All-white monochrome icon + wordmark on black background | Single-color on dark media |

**Available logo files** (in `assets/logos/`):

| File | Description |
|------|-------------|
| `finitless-logo-horizontal-on-dark.png` | Horizontal lockup, dark background |
| `finitless-logo-horizontal-on-light.png` | Horizontal lockup, light background |
| `finitless-logo-rect-on-dark.png` | Rectangle lockup, dark background |
| `finitless-logo-square-on-dark.png` | Square lockup, dark background |
| `finitless-logo-square-on-light.png` | Square lockup, light background |

### Brand Stamp Rules

- The brand stamp (icon only) can be used with or without the full logo.
- Must be resized proportionately -- **NEVER** stretch or skew.
- Under **NO** circumstances should the icon be modified or recreated.
- Use only the supplied brand stamp files.

### Icon / Favicon

Available icon files (in `assets/icons/`):

| File | Size / Format | Usage |
|------|---------------|-------|
| `finitless-icon-master.svg` | Vector (master) | Source file for all sizes |
| `finitless-icon-favicon-72.png` | 72px | Browser favicon |
| `finitless-icon-app-512.png` | 512px | PWA / app icon |
| `finitless-icon-social-1000.png` | 1000px | Social media avatar |
| `finitless-icon-on-dark-2000.png` | 2000px | Icon on dark background |
| `finitless-icon-on-light-2000.png` | 2000px | Icon on light background |
| `finitless-icon-square-on-dark-2552.png` | 2552px | Square icon on dark |
| `finitless-icon-square-on-dark-4793.png` | 4793px | Large square icon on dark |
| `finitless-icon-square-on-light-4793.png` | 4793px | Large square icon on light |
| `finitless-icon-print-2552.png` | 2552px | Print-resolution icon |
| `finitless-icon-print-2552-alt.png` | 2552px | Alternate print icon |
| `finitless-icon-transparent.png` | Transparent BG | Overlay / compositing |

### Logo Do's

- Use the supplied files at the correct resolution for the medium.
- Maintain the minimum clear space (at least the width of the "N" icon on all sides).
- Place on solid or near-solid backgrounds with sufficient contrast.
- Prefer the "Color on dark" variant whenever possible.

### Logo Don'ts

- Do not stretch, rotate, or distort the logo.
- Do not change the gradient colors or substitute the palette.
- Do not place on busy backgrounds without a contrast overlay.
- Do not add effects (drop shadows, outlines, bevels, extra gradients).
- Do not recreate or redraw the icon -- always use the supplied files.
- Do not separate the icon from the wordmark in the lockup files (use standalone icon files when you need the mark alone).

---

## 2. Colors

### Original Designer Specification (from brand PDF)

| Role | Hex | RGB | CMYK | Notes |
|------|-----|-----|------|-------|
| Gradient start | #00CCFF | rgb(0, 204, 255) | -- | "Blue" |
| Gradient end | #FF00FF | rgb(255, 0, 255) | -- | "Pink" |
| Black | #000000 | rgb(0, 0, 0) | 100, 100, 100, 100 | Backgrounds, text |
| White | #FFFFFF | rgb(255, 255, 255) | 0, 0, 0, 0 | Backgrounds, text |

### Digital / Web Palette (Production -- recommended for all digital use)

| Role | Name | Hex | RGB | Usage |
|------|------|-----|-----|-------|
| Primary | Cyan | #00B7FF | rgb(0, 183, 255) | Primary accent, links, CTAs |
| Secondary | Purple | #7A2EFF | rgb(122, 46, 255) | Gradient midpoint, secondary accent |
| Tertiary | Magenta | #C300FF | rgb(195, 0, 255) | Gradient end, tertiary accent |

### Neutral Palette

| Role | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | #0a0a0a | rgb(10, 10, 10) | Near-black primary background |
| Pure Black | #000000 | rgb(0, 0, 0) | Maximum contrast backgrounds |
| White | #FFFFFF | rgb(255, 255, 255) | Primary text on dark backgrounds |

### Semantic Colors

| Role | Hex | RGB | Usage |
|------|-----|-----|-------|
| Error | #ff3b45 | rgb(255, 59, 69) | Errors, destructive actions |
| Success | #22c55e | rgb(34, 197, 94) | Confirmations, positive states |
| Info | #eaf4ff | rgb(234, 244, 255) | Informational tints, light blue backgrounds |

### Gradients

| Name | CSS Value | Usage |
|------|-----------|-------|
| Brand gradient | `linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF)` | Full brand expression, hero sections |
| CTA gradient | `linear-gradient(to right, #00B7FF, #7A2EFF)` | Buttons, interactive elements |
| Glow effect | `box-shadow: 0 0 20px rgba(0, 183, 255, 0.3)` | Hover states, emphasis |

### Platform Discrepancy Note

HubSpot currently uses incorrect brand colors. These need to be updated:

| Role | HubSpot (wrong) | Correct value |
|------|------------------|---------------|
| Primary | #18a3f5 | #00B7FF |
| Secondary | #5c53eb | #7A2EFF |
| Accent | #d93bff | #C300FF |

> See `colors/COLORS.md` for full CSS variables, Tailwind config, and implementation details.

---

## 3. Typography

### Font Families

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Logo / Wordmark | BEASIGNE (Regular) | Regular | Logo and wordmark only -- never for body or UI text |
| UI / Body / Headings | Inter | 400, 600, 700, 800 | All interface text, headings, and body copy |
| Monospace (fallback) | System mono stack | -- | Code blocks, technical content |

**Google Fonts import**:
```
https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap
```

**Fallback stacks**:
- Sans-serif: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- Monospace: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace`

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| display | 72px (text-7xl/8xl) | 800 | 1.1 | Hero headings |
| h1 | 48px (text-5xl) | 800 | 1.2 | Page titles |
| h2 | 36px (text-4xl) | 700 | 1.25 | Section headings |
| h3 | 24px (text-2xl) | 700 | 1.3 | Sub-sections |
| h4 | 20px (text-xl) | 600 | 1.4 | Card titles |
| body-lg | 18px (text-lg) | 400 | 1.6 | Intros, leads |
| body | 16px (text-base) | 400 | 1.6 | Default body text |
| body-sm | 14px (text-sm) | 400 | 1.5 | Secondary text |
| caption | 12px (text-xs) | 400 | 1.5 | Labels, fine print |
| overline | 12px (text-xs) | 600 | 1.5 | Category labels, uppercase |

> See `typography/TYPOGRAPHY.md` for full CSS implementation and Tailwind config.

---

## 4. Imagery

### Photography Style

- **Tone**: Dark, modern, tech-forward. High contrast with selective color accents.
- **Subjects**: Restaurant environments, technology in use, food ordering in action, busy kitchens, happy restaurant owners.
- **Composition**: Clean framing, shallow depth of field for product shots, wide establishing shots for restaurant interiors.
- **Color treatment**: Desaturated backgrounds with brand-colored highlights (cyan/purple glow effects). Dark-mode aesthetic.

### Illustrations

- **Style**: Geometric, minimal, line-based with gradient fills using the brand palette.
- **Color usage**: Illustrations should use the brand gradient (cyan to magenta) on dark backgrounds.
- **Avoid**: Hand-drawn, cartoonish, or overly detailed styles that clash with the tech-forward identity.

### Patterns and Textures

- Subtle dot-grid or line patterns at low opacity (5-10%) for background texture.
- Gradient mesh overlays using brand colors at 10-20% opacity for depth.
- Dark glassmorphism: `backdrop-blur-sm` with `bg-white/5` and `border-white/10`.

---

## 5. Voice and Tone

### Brand Personality

| Trait | What It Means | What It Does NOT Mean |
|-------|---------------|-----------------------|
| Confident | We know our product works | Arrogant or dismissive |
| Revolutionary | We are changing the industry | Combative or aggressive |
| Practical | We focus on real ROI and results | Pie-in-the-sky visionary |
| Direct | We say what we mean | Salesy or pushy |

### Target Audience

Restaurant owners and operators -- people who are busy, results-driven, and skeptical of tech hype. They care about revenue, efficiency, and keeping their customers.

### Tone by Context

| Context | Tone | Example |
|---------|------|---------|
| Marketing | Bold, results-focused, data-driven | "Your phone rings 200 times a day. You miss 40% of those calls. That is $31,000 a year walking out the door." |
| Product UI | Clear, helpful, efficient | "Order received. Estimated prep time: 12 minutes." |
| Support | Warm, patient, solution-oriented | "Let us get this sorted out. Can you tell me which order number you are seeing the issue with?" |
| Error messages | Honest, reassuring, actionable | "We could not process that payment. Please check your card details and try again." |

### Key Messaging Themes

- **Power and control**: Own your customers instead of renting marketplace space.
- **Financial impact**: Commission recovery, revenue leaks, missed-call costs.
- **Inevitability**: AI ordering is production-ready. Early adopters win.

### Words We Use

AI agents, AI ordering agents, AI-powered, recover, capture, own, direct, efficient, 24/7, never miss, revenue, every order

### Words We Avoid

chatbot, bot, artificial intelligence (say "AI"), smart, virtual assistant, disrupt (overused), maybe, try, revolutionize, hopefully

### AI Terminology Rule

Our audience (restaurant owners) does not care about the technology label. They care about what it does. Always lead with the outcome, not the technology category. Say "AI agents that capture every order" -- not "our artificial intelligence solution."

> See `voice/BRAND-VOICE.md` for the full voice guide with extended examples.

---

## 6. Spacing and Layout

### Grid System

- 4px base grid. All spacing values are multiples of 4.
- Content max-width: 1280px, centered with auto margins.
- Standard page padding: 16px (mobile), 24px (tablet), 48px (desktop).

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight inner padding, icon gaps |
| sm | 8px | Compact element spacing |
| md | 12px | Form field padding |
| base | 16px | Default element spacing |
| lg | 24px | Card padding, section gaps |
| xl | 32px | Component separation |
| 2xl | 48px | Section padding |
| 3xl | 64px | Large section breaks |
| 4xl | 96px | Hero / page-level spacing |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| sm | 8px | Small elements, tags, chips |
| md | 12px | Input fields, small cards |
| lg | 16px | Cards, modals |
| xl | 24px | Large cards, hero sections |
| full | 9999px | Pill buttons, avatars |

---

## 7. Icons

### Icon Style

- **Style**: Outlined (stroke-based), 1.5px stroke width.
- **Size grid**: 24px default, with 16px (small) and 32px (large) variants.
- **Color**: White (`#FFFFFF`) on dark backgrounds; `#0a0a0a` on light backgrounds. May use brand gradient for emphasis.

### Icon Library

Finitless uses a custom icon set supplemented by [Lucide Icons](https://lucide.dev/) for standard UI patterns (arrows, chevrons, close, menu, etc.).

Custom brand icons are stored in `assets/icons/` and include the infinity-N mark at various sizes and formats.

---

## Asset Checklist

Track which brand assets are present in this repository:

- [x] Primary logo -- horizontal lockup, dark and light (`assets/logos/`)
- [x] Square logo -- dark and light (`assets/logos/`)
- [x] Rectangle logo -- dark (`assets/logos/`)
- [x] Icon / Favicon -- 72px (`assets/icons/`)
- [x] Icon -- app size 512px (`assets/icons/`)
- [x] Icon -- social media 1000px (`assets/icons/`)
- [x] Icon -- high-res on dark 2000px+ (`assets/icons/`)
- [x] Icon -- high-res on light 2000px+ (`assets/icons/`)
- [x] Icon -- print resolution 2552px (`assets/icons/`)
- [x] Icon -- master SVG (`assets/icons/`)
- [x] Icon -- transparent background (`assets/icons/`)
- [x] Color palette defined (`colors/COLORS.md`)
- [x] Typography scale defined (`typography/TYPOGRAPHY.md`)
- [x] Brand voice guide (`voice/BRAND-VOICE.md`)
- [x] Reference PDF (`assets/reference/finitless-brand-guidelines.pdf`)
- [x] HubSpot color reference screenshot (`assets/reference/hubspot-brand-colors.png`)
- [x] Icon variants: on-dark, on-light, transparent at 12 sizes each (16-1024px)
- [x] Logo size variants: horizontal (6 widths), square (5 sizes), rect (4 widths)
- [x] brand-manifest.json -- machine-readable brand identity (v2.0.0)
- [x] Interactive brand guidelines page (`index.html`) with copy-to-clipboard and downloads
- [ ] Logo -- SVG versions of all lockups
- [ ] Logo -- monochrome (black on white) standalone file
- [ ] Logo -- monochrome (white on black) standalone file
- [ ] Wordmark-only file (text without icon)
- [ ] BEASIGNE font files (`.woff2`, `.ttf`)
- [ ] Photography style reference images
- [ ] Social media templates
- [ ] Presentation template
- [ ] Email template
- [ ] Custom icon set (beyond the brand mark)
