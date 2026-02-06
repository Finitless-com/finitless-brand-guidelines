---
name: finitless-brand-guidelines
description: Applies Finitless brand colors, typography, and dark-mode styling to artifacts. Use this skill whenever building UI, generating code, or creating content for Finitless.
---

# Finitless Brand Styling Skill

Apply these rules whenever generating HTML, CSS, React components, or any visual output for Finitless.

---

## Resources

| Resource | URL |
|----------|-----|
| Brand guidelines site | https://brand.finitless.com/ |
| brand-manifest.json | https://brand.finitless.com/brand-manifest.json |
| CLAUDE.md (full agent instructions) | https://brand.finitless.com/CLAUDE.md |
| GitHub repository | https://github.com/Finitless-com/finitless-brand-guidelines |

**This skill is a concise reference.** For deeper info:
- **Complete specifications** -- fetch `brand-manifest.json` (structured JSON with every token, asset path, and pattern)
- **Logo/icon assets** -- browse `https://brand.finitless.com/` for visual picker with downloads
- **Full voice guide with examples** -- see BRAND-VOICE.md in the repo
- **Full color spec with HSL** -- see colors/COLORS.md in the repo

---

## Colors

### Primary Palette

| Token | Hex | RGB |
|-------|-----|-----|
| cyan (primary) | #00B7FF | rgb(0, 183, 255) |
| purple (secondary) | #7A2EFF | rgb(122, 46, 255) |
| magenta (tertiary) | #C300FF | rgb(195, 0, 255) |
| blue | #377BFF | rgb(55, 123, 255) |

*The brand gradient uses cyan, purple, and magenta (see Gradients section below).*

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

### Surface / Opacity Tokens

| Token | Value | Tailwind |
|-------|-------|----------|
| card-surface | rgba(255,255,255,0.05) | bg-white/5 |
| border | rgba(255,255,255,0.10) | border-white/10 |
| muted-text | rgba(255,255,255,0.60) | text-white/60 |

### CSS Custom Properties

```css
:root {
  --color-primary: #00B7FF;
  --color-secondary: #7A2EFF;
  --color-tertiary: #C300FF;
  --color-blue: #377BFF;
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
4. **Primary buttons**: Use the CTA gradient (`#00B7FF` to `#7A2EFF`), `border-radius: 12px`, white text, `font-weight: 600`. Only ONE gradient button per view.
5. **Secondary buttons**: `background: rgba(255,255,255,0.05)`, `border: 1px solid rgba(255,255,255,0.2)`, `border-radius: 12px`, white text.
6. **Button sizes**: sm `36px` / md `44px` (default) / lg `48px` (forms, hero). Full-width in forms and modals.
7. **Form inputs**: `bg-white/5`, `border-white/10`, `rounded-xl`, `h-12`, `text-base`, `placeholder:text-white/40`. Focus: cyan border glow.
8. **Form labels**: `text-sm font-semibold text-white/70 mb-2`.
9. **Logo in forms**: ALWAYS use `<img>` with a horizontal logo asset. NEVER render from font.
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

### Form Input

```html
<div style="margin-bottom: 16px;">
  <label style="display: block; font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.70); margin-bottom: 8px;">
    Email address
  </label>
  <input type="email" placeholder="you@example.com"
    style="width: 100%; height: 48px; padding: 12px 16px; font-size: 16px; font-family: 'Inter', sans-serif;
           color: #FFFFFF; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);
           border-radius: 12px; outline: none; transition: all 150ms ease;">
  <!-- Focus state: border-color: rgba(0,183,255,0.5); box-shadow: 0 0 0 3px rgba(0,183,255,0.15); -->
  <!-- Error state: border-color: #ff3b45; box-shadow: 0 0 0 3px rgba(255,59,69,0.15); -->
</div>
```

### Form Page Layout (Login / Sign-Up)

```html
<div style="max-width: 480px; margin: 0 auto; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10); border-radius: 16px; padding: 32px;">
  <!-- Logo: ALWAYS use an <img> asset, NEVER render from font -->
  <img src="assets/logos/finitless-logo-horizontal-on-dark-200w.png" alt="Finitless"
       style="height: 32px; margin-bottom: 32px;">
  <h2 style="font-size: 24px; font-weight: 700; color: #FFFFFF; margin-bottom: 8px;">
    Sign in to your account
  </h2>
  <p style="font-size: 14px; color: rgba(255,255,255,0.60); margin-bottom: 32px;">
    Enter your email and password to continue.
  </p>
  <!-- Form fields here (see Form Input pattern above) -->
  <!-- Primary submit: ALWAYS use CTA gradient, full width, 48px height -->
  <button style="width: 100%; height: 48px; background: linear-gradient(to right, #00B7FF, #7A2EFF);
                 color: #fff; font-weight: 600; font-size: 16px; border: none; border-radius: 12px;
                 cursor: pointer; font-family: 'Inter', sans-serif;">
    Sign In
  </button>
</div>
```

### OAuth / Social Login Button

Use the **secondary button pattern** (glass bg + border). NEVER use the CTA gradient for OAuth buttons.

```html
<button style="width: 100%; height: 48px; display: flex; align-items: center; justify-content: center; gap: 8px;
               background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.20);
               border-radius: 12px; color: #FFFFFF; font-size: 15px; font-weight: 500;
               font-family: 'Inter', sans-serif; cursor: pointer; transition: all 150ms ease;">
  <img src="google-g-icon.svg" alt="" style="width: 20px; height: 20px;">
  Continue with Google
</button>
<!-- Hover: border-color: rgba(0,183,255,0.5); background: rgba(0,183,255,0.05); -->
```

### Form Divider ("or" separator)

```html
<div style="display: flex; align-items: center; gap: 16px; margin: 24px 0;">
  <div style="flex: 1; height: 1px; background: rgba(255,255,255,0.10);"></div>
  <span style="font-size: 12px; color: rgba(255,255,255,0.40);">or</span>
  <div style="flex: 1; height: 1px; background: rgba(255,255,255,0.10);"></div>
</div>
```

---

## Button Size Scale

| Size | Height | Padding | Font Size | Radius | Usage |
|------|--------|---------|-----------|--------|-------|
| sm | 36px | 8px 16px | 14px | 8px | Inline actions, table rows |
| md | 44px | 10px 24px | 15px | 12px | Nav CTAs, card actions (DEFAULT) |
| lg | 48px | 12px 32px | 16px | 12px | Form submit, hero CTAs, full-width |

**Rule**: Full-width buttons (`w-full`) in forms/modals use `lg`. Only ONE gradient button per view.

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

<!-- Form label -->
<label class="block text-sm font-semibold text-white/70 mb-2">Email</label>

<!-- Form input -->
<input class="w-full h-12 px-4 text-base text-white bg-white/5 border border-white/10 rounded-xl
              placeholder:text-white/40 focus:border-[#00B7FF]/50 focus:outline-none transition-all"
       placeholder="you@example.com">

<!-- Error input -->
<input class="w-full h-12 px-4 text-base text-white bg-white/5 border border-[#ff3b45] rounded-xl
              ring-[3px] ring-[#ff3b45]/15 focus:outline-none transition-all">

<!-- Error text -->
<p class="text-xs text-[#ff3b45] mt-1">Please enter a valid email address.</p>

<!-- Full-width CTA in form (lg size) -->
<button class="w-full h-12 bg-gradient-to-r from-[#00B7FF] to-[#7A2EFF] rounded-xl text-white font-semibold text-base">

<!-- OAuth / social button (secondary pattern, lg size) -->
<button class="w-full h-12 flex items-center justify-center gap-2 bg-white/5 border border-white/20
               rounded-xl text-white font-medium transition-all hover:border-[#00B7FF]/50 hover:bg-[#00B7FF]/5">

<!-- Form divider -->
<div class="flex items-center gap-4 my-6">
  <div class="flex-1 h-px bg-white/10"></div>
  <span class="text-xs text-white/40">or</span>
  <div class="flex-1 h-px bg-white/10"></div>
</div>

<!-- Form container -->
<div class="max-w-[480px] mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
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
- Words to use: AI agents, AI ordering agents, AI-powered, recover, capture, own, direct, efficient, 24/7, never miss, revenue, every order.
- Words to avoid: chatbot, bot, artificial intelligence (say "AI"), smart, virtual assistant, disrupt, maybe, try, revolutionize, leverage, synergy, hopefully.

---

## Transitions & Motion

- **Fast** (150ms ease): Hover states, button feedback, small UI changes.
- **Normal** (250ms ease): Card hovers, panel reveals, nav transitions.
- **Reduced motion**: Respect `prefers-reduced-motion: reduce` -- collapse all durations to near-zero.
- **Focus**: `:focus-visible { outline: 2px solid #00B7FF; outline-offset: 2px; }`
- **Font smoothing**: `-webkit-font-smoothing: antialiased` on body.

---

## Responsive Breakpoints

- **768px** (tablet): Hero padding shrinks, h1 → 36px, h2 → 28px, grids collapse to single column.
- **640px** (mobile): Word panels and side-by-side layouts stack vertically.

---

## Anti-Patterns (Never Do)

**Buttons**: Never use flat solid blue (#2563eb) or flat solid cyan (#00B7FF). Always use CTA gradient for primary, secondary pattern for others. Never below 36px height. Only ONE gradient button per view.
**Cards**: Never use solid white backgrounds, sharp corners (0px), or omit hover states.
**Gradient text**: Never omit the cyan stop, use top-to-bottom direction, or apply to body copy.
**Form inputs**: Never use unstyled browser defaults. Always apply dark glass background (`bg-white/5`), 12px radius, and cyan focus glow. Never use font-size below 16px (prevents iOS zoom).
**Form buttons**: Never use flat solid colors for the primary submit — always CTA gradient, full width. OAuth/social buttons use the secondary pattern, never the gradient.
**Logo in forms**: Never render the logo as text or from a font. Always use `<img>` with the horizontal logo asset.

---

## Icon Style

- **Style**: Outlined, 1.5px stroke width.
- **Default size**: 24px. Grid: 16px (sm), 24px (md), 32px (lg).
- **Colors**: White (#FFFFFF) on dark backgrounds, #0a0a0a on light. Brand gradient for emphasis.
- **Library**: Lucide Icons for standard UI patterns.

---

## Imagery

- **Photography**: Dark, high-contrast, selective brand color accents. Restaurant environments, tech in use.
- **Illustrations**: Geometric, minimal, gradient fills from the brand palette on dark backgrounds.
- **Textures**: Dot-grid or line patterns at 5-10% opacity. Gradient mesh at 10-20% opacity. Glassmorphism with `backdrop-filter: blur(4px)`, `bg-white/5`, `border-white/10`.
