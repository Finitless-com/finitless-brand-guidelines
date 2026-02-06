---
name: finitless-brand-guidelines
description: Applies Finitless brand colors, typography, and dark-mode styling to artifacts. Use this skill whenever building UI, generating code, or creating content for Finitless.
---

# Finitless Brand Styling Skill

Apply these rules whenever generating HTML, CSS, React components, or any visual output for Finitless.

---

## Colors

### Brand Gradient

| Token | Hex | RGB |
|-------|-----|-----|
| cyan (primary) | #00B7FF | rgb(0, 183, 255) |
| purple (secondary) | #7A2EFF | rgb(122, 46, 255) |
| magenta (tertiary) | #C300FF | rgb(195, 0, 255) |

### Neutrals

| Token | Hex |
|-------|-----|
| background | #0a0a0a |
| black | #000000 |
| white | #FFFFFF |

### Semantic

| Token | Hex |
|-------|-----|
| error | #ff3b45 |
| success | #22c55e |
| warning | #f59e0b |
| info | #eaf4ff |

---

## Typography

**Font**: Inter (Google Fonts) -- weights 400, 600, 700, 800
**Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
**Mono**: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace

### Scale

| Token | Size | Weight | Line Height |
|-------|------|--------|-------------|
| display | 72px | 800 | 1.1 |
| h1 | 48px | 800 | 1.2 |
| h2 | 36px | 700 | 1.25 |
| h3 | 24px | 700 | 1.3 |
| h4 | 20px | 600 | 1.4 |
| body-lg | 18px | 400 | 1.6 |
| body | 16px | 400 | 1.6 |
| body-sm | 14px | 400 | 1.5 |
| caption | 12px | 400 | 1.5 |
| overline | 12px | 600 | 1.5 |

---

## Gradients

```css
/* Full brand gradient (3-stop) */
background: linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF);

/* CTA / button gradient (2-stop) */
background: linear-gradient(to right, #00B7FF, #7A2EFF);

/* Glow effect */
box-shadow: 0 0 20px rgba(0, 183, 255, 0.3);
```

---

## Visual Rules

1. **Dark-mode-first**: Always default to `background-color: #0a0a0a` with white text.
2. **Cards**: Use `background: rgba(255,255,255,0.05)`, `border: 1px solid rgba(255,255,255,0.1)`, `border-radius: 12px`, and `backdrop-filter: blur(4px)`.
3. **Hover states**: On cards, add `border-color: rgba(0,183,255,0.5)` and `box-shadow: 0 4px 20px rgba(0,183,255,0.1)`.
4. **Primary buttons**: Use the CTA gradient (`#00B7FF` to `#7A2EFF`), `border-radius: 12px`, white text, `font-weight: 600`.
5. **Secondary buttons**: `background: rgba(255,255,255,0.05)`, `border: 1px solid rgba(255,255,255,0.2)`, `border-radius: 12px`, white text.
6. **Gradient text**: Apply the full brand gradient as `background-image`, then `background-clip: text` and `color: transparent`.
7. **Border radius**: 8px (small), 12px (default), 16px (large), 24px (extra-large).
8. **Spacing**: 4px grid -- use multiples of 4 (4, 8, 12, 16, 24, 32, 48, 64, 96).
9. **Font smoothing**: Apply `-webkit-font-smoothing: antialiased` on body.

---

## Component Patterns

### Hero Section

```html
<section style="background: #0a0a0a; padding: 96px 24px; text-align: center;">
  <p style="font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: #00B7FF; margin-bottom: 16px;">
    AI Ordering Agents
  </p>
  <h1 style="font-size: 72px; font-weight: 800; line-height: 1.1; color: #FFFFFF; margin-bottom: 24px;">
    Never Miss a Sale. Ever.
  </h1>
  <p style="font-size: 18px; color: rgba(255,255,255,0.7); max-width: 640px; margin: 0 auto 32px;">
    AI-powered voice and WhatsApp agents that capture every order, 24/7.
  </p>
  <a href="#" style="display: inline-block; background: linear-gradient(to right, #00B7FF, #7A2EFF); color: #FFFFFF; font-weight: 600; padding: 14px 32px; border-radius: 12px; text-decoration: none;">
    Get Started
  </a>
</section>
```

### Card

```html
<div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px; backdrop-filter: blur(4px);">
  <h3 style="font-size: 24px; font-weight: 700; color: #FFFFFF; margin-bottom: 8px;">
    Voice Agent
  </h3>
  <p style="font-size: 16px; color: rgba(255,255,255,0.7); line-height: 1.6;">
    Answers every call. Takes every order. Never puts a customer on hold.
  </p>
</div>
```

### Stat Block

```html
<div style="text-align: center;">
  <p style="font-size: 48px; font-weight: 800; background: linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px;">
    $31,000
  </p>
  <p style="font-size: 14px; color: rgba(255,255,255,0.6);">
    Average annual revenue recovered per location
  </p>
</div>
```

---

## Tailwind Quick Reference

```html
<!-- Background -->
<div class="bg-[#0a0a0a] text-white min-h-screen">

<!-- Card -->
<div class="bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-6
            hover:border-[#00B7FF]/50 hover:shadow-lg hover:shadow-[#00B7FF]/10 transition-all">

<!-- Primary button -->
<button class="bg-gradient-to-r from-[#00B7FF] to-[#7A2EFF] rounded-xl text-white font-semibold px-6 py-3">

<!-- Secondary button -->
<button class="border border-white/20 bg-white/5 rounded-xl text-white px-6 py-3">

<!-- Gradient text -->
<span class="bg-gradient-to-r from-[#00B7FF] via-[#7A2EFF] to-[#C300FF] bg-clip-text text-transparent">

<!-- Overline label -->
<span class="text-xs font-semibold tracking-widest uppercase text-[#00B7FF]">
```

---

## Asset Library

### Icons (pick by context)

| Context | Asset Path | Size |
|---------|-----------|------|
| Favicon | `assets/icons/finitless-icon-on-dark-32.png` | 32px |
| Social avatar | `assets/icons/finitless-icon-on-dark-1000.png` | 1000px |
| PWA / App icon | `assets/icons/finitless-icon-on-dark-512.png` | 512px |
| Android launcher | `assets/icons/finitless-icon-on-dark-192.png` | 192px |
| Apple App Store | `assets/icons/finitless-icon-on-dark-1024.png` | 1024px |
| Print (high-res) | `assets/icons/finitless-icon-print-2552.png` | 2552px |
| Vector / scalable | `assets/icons/finitless-icon-master.svg` | any |

**Icon naming pattern**: `finitless-icon-{variant}-{size}.png`
- Variants: `on-dark`, `on-light`, `transparent`
- Sizes: 16, 32, 48, 64, 72, 128, 192, 256, 384, 512, 1000, 1024

### Logos (pick by context)

| Context | Asset Path | Size |
|---------|-----------|------|
| Website header (dark) | `assets/logos/finitless-logo-horizontal-on-dark-300w.png` | 300w |
| Website header (light) | `assets/logos/finitless-logo-horizontal-on-light-300w.png` | 300w |
| OG / Social card | `assets/logos/finitless-logo-square-on-dark-1024.png` | 1024px |
| Email signature | `assets/logos/finitless-logo-rect-on-dark-300w.png` | 300w |

**Logo naming patterns**:
- Horizontal: `finitless-logo-horizontal-{on-dark|on-light}-{width}w.png` (120, 200, 300, 480, 800, 1200)
- Square: `finitless-logo-square-{on-dark|on-light}-{size}.png` (128, 256, 512, 1024, 2000)
- Rectangular: `finitless-logo-rect-on-dark-{width}w.png` (300, 600, 1200, 1800)

**Logo background types**:
- Horizontal (on-dark, on-light): transparent background -- place on any color
- Square on-light: transparent background
- Square on-dark, Rect on-dark: solid black background (baked in)
- For overlaying on custom backgrounds, use horizontal or square-on-light variants

**Rules**: Never recreate/modify logos. Resize proportionately only. Prefer dark variant.

---

## Brand Voice (for content generation)

- **Confident, not arrogant.** State facts. Let results speak.
- **Practical, not visionary.** Talk about what the product does today.
- **Direct, not salesy.** No fluff. Get to the point.
- Use specific numbers: $31,000/year, 40% missed calls, 24/7.
- Words to use: AI agents, AI ordering agents, AI-powered, recover, capture, own, direct, efficient, never miss.
- Words to avoid: chatbot, bot, artificial intelligence (say "AI"), intelligent agents, smart, virtual assistant, conversational AI, automate, disrupt, maybe, try.
