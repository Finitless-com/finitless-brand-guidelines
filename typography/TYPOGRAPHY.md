# Finitless Typography

Complete typography specification covering font families, the full type scale, and implementation code for CSS and Tailwind.

---

## Font Families

| Role | Font Family | Fallback Stack | Weights | Usage |
|------|-------------|----------------|---------|-------|
| Logo / Wordmark | BEASIGNE | -- | Regular | **Logo and wordmark only.** Geometric, futuristic. Never use for body text or UI. |
| UI / Headings / Body | Inter | -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif | 400, 600, 700, 800 | All interface text -- headings, body, buttons, labels |
| Monospace | System mono stack | ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace | -- | Code blocks, data tables, technical content |

### Loading Inter (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
```

Or via CSS `@import`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
```

### Font File Notes

- BEASIGNE is a proprietary font used exclusively for the Finitless logo/wordmark. Font files are not distributed in this repo. The logo should always be rendered using the supplied image assets.
- Inter is loaded from Google Fonts. No local font files are required.
- Place any self-hosted font files in the `fonts/` directory as `.woff2` (primary) and `.woff` (fallback).

---

## Type Scale

| Token | Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Usage |
|-------|-----------|------------|--------|-------------|----------------|-------|
| display | 72px | 4.5rem | 800 | 1.1 | -0.02em | Hero headings, landing page titles |
| h1 | 48px | 3rem | 800 | 1.2 | -0.01em | Page titles |
| h2 | 36px | 2.25rem | 700 | 1.25 | -0.005em | Section headings |
| h3 | 24px | 1.5rem | 700 | 1.3 | 0 | Sub-section headings |
| h4 | 20px | 1.25rem | 600 | 1.4 | 0 | Card titles, sidebar headings |
| body-lg | 18px | 1.125rem | 400 | 1.6 | 0 | Intro paragraphs, lead text |
| body | 16px | 1rem | 400 | 1.6 | 0 | Default body text |
| body-sm | 14px | 0.875rem | 400 | 1.5 | 0 | Secondary text, descriptions |
| caption | 12px | 0.75rem | 400 | 1.5 | 0 | Labels, fine print, timestamps |
| overline | 12px | 0.75rem | 600 | 1.5 | 0.05em | Category labels, all-uppercase tags |

### Weight Reference

| Weight | Name | Usage |
|--------|------|-------|
| 400 | Regular | Body text, descriptions, form inputs |
| 600 | Semi-Bold | Card titles (h4), overline labels, button text |
| 700 | Bold | Section headings (h2, h3), emphasis |
| 800 | Extra-Bold | Hero display text, page titles (display, h1) |

---

## CSS Implementation

```css
/* Font stack */
:root {
  --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace;
}

/* Base */
body {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #FFFFFF;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Display */
.text-display {
  font-family: var(--font-heading);
  font-size: 4.5rem;    /* 72px */
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* H1 */
h1, .text-h1 {
  font-family: var(--font-heading);
  font-size: 3rem;       /* 48px */
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

/* H2 */
h2, .text-h2 {
  font-family: var(--font-heading);
  font-size: 2.25rem;    /* 36px */
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.005em;
}

/* H3 */
h3, .text-h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;     /* 24px */
  font-weight: 700;
  line-height: 1.3;
}

/* H4 */
h4, .text-h4 {
  font-family: var(--font-heading);
  font-size: 1.25rem;    /* 20px */
  font-weight: 600;
  line-height: 1.4;
}

/* Body Large */
.text-body-lg {
  font-size: 1.125rem;   /* 18px */
  font-weight: 400;
  line-height: 1.6;
}

/* Body (default) */
.text-body {
  font-size: 1rem;       /* 16px */
  font-weight: 400;
  line-height: 1.6;
}

/* Body Small */
.text-body-sm {
  font-size: 0.875rem;   /* 14px */
  font-weight: 400;
  line-height: 1.5;
}

/* Caption */
.text-caption {
  font-size: 0.75rem;    /* 12px */
  font-weight: 400;
  line-height: 1.5;
}

/* Overline */
.text-overline {
  font-size: 0.75rem;    /* 12px */
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Code / Monospace */
code, pre, .text-mono {
  font-family: var(--font-mono);
  font-size: 0.875rem;   /* 14px */
  line-height: 1.6;
}
```

---

## Tailwind Config

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '800' }],
        'h2': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.005em', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
        'overline': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em', fontWeight: '600' }],
      },
    },
  },
};
```

### Tailwind Usage Examples

```html
<!-- Display heading -->
<h1 class="text-7xl font-extrabold leading-tight tracking-tight">
  Never Miss a Sale. Ever.
</h1>

<!-- Section heading -->
<h2 class="text-4xl font-bold leading-snug">
  How It Works
</h2>

<!-- Body text -->
<p class="text-base font-normal leading-relaxed text-white/80">
  AI-powered voice and WhatsApp agents that capture every order, 24/7.
</p>

<!-- Overline / category label -->
<span class="text-xs font-semibold tracking-widest uppercase text-[#00B7FF]">
  Case Study
</span>

<!-- Caption -->
<span class="text-xs text-white/60">
  Last updated February 2026
</span>
```
