# Finitless Typography

## Font Families

| Role | Font Family | Fallback Stack | Weight Range |
|------|-------------|----------------|--------------|
| Headings | _TBD_ | _TBD_ | _TBD_ |
| Body | _TBD_ | _TBD_ | _TBD_ |
| Mono | _TBD_ | _TBD_ | _TBD_ |

## Font Files

Place font files in the `fonts/` directory:
- `.woff2` - primary web format (best compression)
- `.woff` - fallback web format
- `.ttf` / `.otf` - desktop and development

## Type Scale

| Token | Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Usage |
|-------|-----------|------------|--------|-------------|----------------|-------|
| display-1 | _TBD_ | _TBD_ | _TBD_ | _TBD_ | _TBD_ | Hero headings |
| h1 | _TBD_ | _TBD_ | _TBD_ | _TBD_ | _TBD_ | Page titles |
| h2 | _TBD_ | _TBD_ | _TBD_ | _TBD_ | _TBD_ | Section headings |
| h3 | _TBD_ | _TBD_ | _TBD_ | _TBD_ | _TBD_ | Sub-section headings |
| h4 | _TBD_ | _TBD_ | _TBD_ | _TBD_ | _TBD_ | Card titles |
| body-lg | _TBD_ | _TBD_ | _TBD_ | _TBD_ | _TBD_ | Large body text |
| body | _TBD_ | _TBD_ | _TBD_ | _TBD_ | _TBD_ | Default body text |
| body-sm | _TBD_ | _TBD_ | _TBD_ | _TBD_ | _TBD_ | Small body text |
| caption | _TBD_ | _TBD_ | _TBD_ | _TBD_ | _TBD_ | Labels, captions |
| overline | _TBD_ | _TBD_ | _TBD_ | _TBD_ | _TBD_ | Category labels |

## CSS Implementation

```css
/* Font face declarations */
@font-face {
  font-family: '';
  src: url('./fonts/...woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Usage */
body {
  font-family: var(--font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}

code, pre {
  font-family: var(--font-mono);
}
```
