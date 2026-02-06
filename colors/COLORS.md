# Finitless Color Palette

Complete color specification for the Finitless brand. This document covers the primary gradient palette, neutral tones, semantic colors, gradient definitions, and implementation snippets for CSS and Tailwind.

---

## Primary Colors (Brand Gradient)

| Role | Name | Hex | RGB | HSL | Usage |
|------|------|-----|-----|-----|-------|
| Primary | Cyan | #00B7FF | rgb(0, 183, 255) | hsl(197, 100%, 50%) | Main brand color, links, CTAs, primary accent |
| Secondary | Purple | #7A2EFF | rgb(122, 46, 255) | hsl(262, 100%, 59%) | Gradient midpoint, secondary accent, hover states |
| Tertiary | Magenta | #C300FF | rgb(195, 0, 255) | hsl(286, 100%, 50%) | Gradient end, tertiary accent, decorative elements |
| Quaternary | Blue | #377BFF | rgb(55, 123, 255) | hsl(220, 100%, 61%) | UI backgrounds, link color, data visualization, alternate accent |

### Original Designer Specification (from brand PDF)

The original brand PDF specifies a "Blue to Pink" gradient:

| Role | Hex | RGB | Notes |
|------|-----|-----|-------|
| Gradient start | #00CCFF | rgb(0, 204, 255) | Original "Blue" |
| Gradient end | #FF00FF | rgb(255, 0, 255) | Original "Pink" |

The digital/web palette above (#00B7FF, #7A2EFF, #C300FF) is the production adaptation used on finitless.com. **Use the web palette for all digital work.**

---

## Neutral Colors

| Role | Name | Hex | RGB | Usage |
|------|------|-----|-----|-------|
| Background | Near Black | #0a0a0a | rgb(10, 10, 10) | Primary background (dark mode default) |
| Pure Black | Black | #000000 | rgb(0, 0, 0) | Maximum contrast backgrounds, logo backgrounds |
| White | White | #FFFFFF | rgb(255, 255, 255) | Primary text on dark backgrounds |
| Card surface | White 5% | rgba(255, 255, 255, 0.05) | -- | Card and panel backgrounds |
| Border | White 10% | rgba(255, 255, 255, 0.10) | -- | Borders, dividers |
| Muted text | White 60% | rgba(255, 255, 255, 0.60) | -- | Secondary / muted text |

---

## Semantic Colors

| Role | Hex | RGB | Usage |
|------|-----|-----|-------|
| Error / Danger | #ff3b45 | rgb(255, 59, 69) | Error messages, destructive actions, validation failures |
| Success | #22c55e | rgb(34, 197, 94) | Confirmations, positive states, success indicators |
| Info tint | #eaf4ff | rgb(234, 244, 255) | Informational backgrounds, light blue tint |
| Warning | #f59e0b | rgb(245, 158, 11) | Caution states, pending actions (use Tailwind amber-500) |

---

## Gradients

| Name | CSS Value | Tailwind | Usage |
|------|-----------|---------|-------|
| Brand gradient | `linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF)` | `bg-gradient-to-r from-[#00B7FF] via-[#7A2EFF] to-[#C300FF]` | Full brand expression, hero sections, decorative bars |
| CTA gradient | `linear-gradient(to right, #00B7FF, #7A2EFF)` | `bg-gradient-to-r from-[#00B7FF] to-[#7A2EFF]` | Primary buttons, calls to action |
| Glow effect | `box-shadow: 0 0 20px rgba(0, 183, 255, 0.3)` | `shadow-[0_0_20px_rgba(0,183,255,0.3)]` | Hover states, emphasis, floating elements |
| Hover border glow | `border-color: rgba(0, 183, 255, 0.5)` | `hover:border-[#00B7FF]/50` | Interactive card hover states |

---

## Platform Discrepancy Note

HubSpot currently uses **incorrect** brand colors. These need to be corrected:

| Role | HubSpot (current -- wrong) | Correct value |
|------|----------------------------|---------------|
| Primary | #18a3f5 | **#00B7FF** |
| Secondary | #5c53eb | **#7A2EFF** |
| Accent | #d93bff | **#C300FF** |

Reference screenshot: `assets/reference/hubspot-brand-colors.png`

---

## CSS Custom Properties

```css
:root {
  /* Primary (Brand Gradient) */
  --color-primary: #00B7FF;
  --color-secondary: #7A2EFF;
  --color-tertiary: #C300FF;
  --color-blue: #377BFF;

  /* Neutral */
  --color-background: #0a0a0a;
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-card-surface: rgba(255, 255, 255, 0.05);
  --color-border: rgba(255, 255, 255, 0.10);
  --color-muted-text: rgba(255, 255, 255, 0.60);

  /* Semantic */
  --color-error: #ff3b45;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-info: #eaf4ff;

  /* Gradients */
  --gradient-brand: linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF);
  --gradient-cta: linear-gradient(to right, #00B7FF, #7A2EFF);
  --glow-primary: 0 0 20px rgba(0, 183, 255, 0.3);

  /* Form tokens */
  --color-placeholder: rgba(255, 255, 255, 0.40);
  --color-label: rgba(255, 255, 255, 0.70);
  --color-helper: rgba(255, 255, 255, 0.50);
  --focus-ring-primary: 0 0 0 3px rgba(0, 183, 255, 0.15);
  --focus-ring-error: 0 0 0 3px rgba(255, 59, 69, 0.15);
}
```

---

## Tailwind Config

```js
// tailwind.config.js -- extend the colors object
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00B7FF',
          purple: '#7A2EFF',
          magenta: '#C300FF',
          blue: '#377BFF',
        },
        surface: {
          DEFAULT: '#0a0a0a',
          black: '#000000',
        },
        semantic: {
          error: '#ff3b45',
          success: '#22c55e',
          warning: '#f59e0b',
          info: '#eaf4ff',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 183, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 183, 255, 0.2)',
      },
    },
  },
};
```

### Common Tailwind Patterns

```html
<!-- Primary button -->
<button class="bg-gradient-to-r from-[#00B7FF] to-[#7A2EFF] rounded-xl text-white font-semibold px-6 py-3">
  Get Started
</button>

<!-- Secondary button -->
<button class="border border-white/20 bg-white/5 rounded-xl text-white px-6 py-3">
  Learn More
</button>

<!-- Card -->
<div class="bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-6
            hover:border-[#00B7FF]/50 hover:shadow-lg hover:shadow-[#00B7FF]/10 transition-all">
  Card content
</div>

<!-- Brand gradient text -->
<span class="bg-gradient-to-r from-[#00B7FF] via-[#7A2EFF] to-[#C300FF] bg-clip-text text-transparent">
  Gradient Text
</span>
```

### Form Color Usage

| Element | Color / Value | Tailwind | Notes |
|---------|---------------|----------|-------|
| Input background | `rgba(255,255,255,0.05)` | `bg-white/5` | Same as card surface |
| Input border (default) | `rgba(255,255,255,0.10)` | `border-white/10` | Same as card border |
| Input border (focus) | `rgba(0,183,255,0.5)` | `border-[#00B7FF]/50` | Cyan at 50% -- matches card hover |
| Input focus ring | `rgba(0,183,255,0.15)` | `ring-[#00B7FF]/15` | 3px ring, subtle glow |
| Input border (error) | `#ff3b45` | `border-[#ff3b45]` | Semantic error color |
| Input error ring | `rgba(255,59,69,0.15)` | `ring-[#ff3b45]/15` | 3px ring, subtle error glow |
| Input text | `#FFFFFF` | `text-white` | White on dark |
| Placeholder text | `rgba(255,255,255,0.40)` | `text-white/40` | Lower opacity than muted-text |
| Label text | `rgba(255,255,255,0.70)` | `text-white/70` | Between full white and muted |
| Helper text | `rgba(255,255,255,0.50)` | `text-white/50` | Secondary helper |
| Error text | `#ff3b45` | `text-[#ff3b45]` | Semantic error |
| Divider line | `rgba(255,255,255,0.10)` | `bg-white/10` | Same as border token |
| Divider text | `rgba(255,255,255,0.40)` | `text-white/40` | Same as placeholder |
