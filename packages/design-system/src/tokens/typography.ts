/**
 * Finitless Design System - Typography Tokens
 *
 * The Finitless brand uses Inter as the primary typeface.
 * These tokens define the complete type scale.
 */

// ============================================================================
// FONT FAMILIES
// ============================================================================

export const fontFamily = {
  /** Primary sans-serif stack with Inter */
  sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  /** Monospace stack for code and data */
  mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'monospace'],
} as const;

// ============================================================================
// FONT SIZES
// ============================================================================

export const fontSize = {
  /** 12px - Labels, captions, badges */
  xs: {
    size: '0.75rem',
    lineHeight: '1rem',
    pixels: 12,
  },
  /** 14px - Body small, secondary text */
  sm: {
    size: '0.875rem',
    lineHeight: '1.25rem',
    pixels: 14,
  },
  /** 16px - Body default */
  base: {
    size: '1rem',
    lineHeight: '1.5rem',
    pixels: 16,
  },
  /** 18px - Body large, lead text */
  lg: {
    size: '1.125rem',
    lineHeight: '1.75rem',
    pixels: 18,
  },
  /** 20px - H6, small headings */
  xl: {
    size: '1.25rem',
    lineHeight: '1.75rem',
    pixels: 20,
  },
  /** 24px - H5, section subheadings */
  '2xl': {
    size: '1.5rem',
    lineHeight: '2rem',
    pixels: 24,
  },
  /** 30px - H4, section headings */
  '3xl': {
    size: '1.875rem',
    lineHeight: '2.25rem',
    pixels: 30,
  },
  /** 36px - H3, page subheadings */
  '4xl': {
    size: '2.25rem',
    lineHeight: '2.5rem',
    pixels: 36,
  },
  /** 48px - H2, page headings */
  '5xl': {
    size: '3rem',
    lineHeight: '1',
    pixels: 48,
  },
  /** 60px - H1, hero headings */
  '6xl': {
    size: '3.75rem',
    lineHeight: '1',
    pixels: 60,
  },
} as const;

// ============================================================================
// FONT WEIGHTS
// ============================================================================

export const fontWeight = {
  /** Regular body text */
  normal: '400',
  /** Slightly emphasized text */
  medium: '500',
  /** Headings, labels, buttons */
  semibold: '600',
  /** Strong emphasis */
  bold: '700',
  /** Display headings, hero text */
  extrabold: '800',
} as const;

// ============================================================================
// LETTER SPACING
// ============================================================================

export const letterSpacing = {
  /** Tight - Headlines */
  tight: '-0.025em',
  /** Normal - Body text */
  normal: '0',
  /** Wide - Uppercase labels */
  wide: '0.025em',
  /** Wider - All caps, small text */
  wider: '0.05em',
} as const;

// ============================================================================
// TYPE SCALE PRESETS
// ============================================================================

export const typePresets = {
  /** Hero headline - 60px extrabold */
  hero: {
    fontSize: fontSize['6xl'].size,
    fontWeight: fontWeight.extrabold,
    lineHeight: fontSize['6xl'].lineHeight,
    letterSpacing: letterSpacing.tight,
  },
  /** Page headline - 48px bold */
  h1: {
    fontSize: fontSize['5xl'].size,
    fontWeight: fontWeight.bold,
    lineHeight: fontSize['5xl'].lineHeight,
    letterSpacing: letterSpacing.tight,
  },
  /** Section headline - 36px bold */
  h2: {
    fontSize: fontSize['4xl'].size,
    fontWeight: fontWeight.bold,
    lineHeight: fontSize['4xl'].lineHeight,
    letterSpacing: letterSpacing.tight,
  },
  /** Subsection headline - 30px semibold */
  h3: {
    fontSize: fontSize['3xl'].size,
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize['3xl'].lineHeight,
  },
  /** Card headline - 24px semibold */
  h4: {
    fontSize: fontSize['2xl'].size,
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize['2xl'].lineHeight,
  },
  /** Component headline - 20px semibold */
  h5: {
    fontSize: fontSize.xl.size,
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize.xl.lineHeight,
  },
  /** Small headline - 18px semibold */
  h6: {
    fontSize: fontSize.lg.size,
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize.lg.lineHeight,
  },
  /** Lead paragraph - 18px normal */
  lead: {
    fontSize: fontSize.lg.size,
    fontWeight: fontWeight.normal,
    lineHeight: fontSize.lg.lineHeight,
  },
  /** Body text - 16px normal */
  body: {
    fontSize: fontSize.base.size,
    fontWeight: fontWeight.normal,
    lineHeight: fontSize.base.lineHeight,
  },
  /** Small text - 14px normal */
  small: {
    fontSize: fontSize.sm.size,
    fontWeight: fontWeight.normal,
    lineHeight: fontSize.sm.lineHeight,
  },
  /** Caption/label - 12px medium */
  caption: {
    fontSize: fontSize.xs.size,
    fontWeight: fontWeight.medium,
    lineHeight: fontSize.xs.lineHeight,
  },
  /** Button text - 14px semibold */
  button: {
    fontSize: fontSize.sm.size,
    fontWeight: fontWeight.semibold,
    lineHeight: '1',
  },
  /** Code/mono - 14px */
  code: {
    fontFamily: fontFamily.mono.join(', '),
    fontSize: fontSize.sm.size,
    lineHeight: fontSize.sm.lineHeight,
  },
} as const;

// ============================================================================
// GOOGLE FONTS IMPORT URL
// ============================================================================

export const googleFontsUrl =
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';

// ============================================================================
// CSS SNIPPETS
// ============================================================================

export const cssSnippets = {
  /** HTML link tag for Google Fonts */
  htmlLink: `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${googleFontsUrl}" rel="stylesheet">`,

  /** CSS @import for Google Fonts */
  cssImport: `@import url('${googleFontsUrl}');`,

  /** CSS font-family declaration */
  fontFamilyCSS: `font-family: ${fontFamily.sans.map(f => f.includes(' ') ? `'${f}'` : f).join(', ')};`,
};

// ============================================================================
// EXPORTS
// ============================================================================

export const typography = {
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  presets: typePresets,
  googleFontsUrl,
  cssSnippets,
} as const;

export default typography;
