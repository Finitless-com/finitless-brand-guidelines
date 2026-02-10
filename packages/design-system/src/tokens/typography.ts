/**
 * Finitless Design System - Typography Tokens v0.1.0
 *
 * Enhanced typography system with Geist-inspired numbered heading scale,
 * button typography, label typography, and copy typography.
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
// FONT SIZES (Standard Scale)
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
  /** Tightest - Large display */
  tightest: '-0.04em',
  /** Tighter - Large headings */
  tighter: '-0.03em',
  /** Tight - Medium headings */
  tight: '-0.02em',
  /** Slightly tight - Small headings */
  snug: '-0.01em',
  /** Normal - Body text */
  normal: '0',
  /** Wide - Uppercase labels */
  wide: '0.02em',
  /** Wider - All caps, small text */
  wider: '0.05em',
} as const;

// ============================================================================
// HEADING SCALE (Geist-Inspired Numbered System)
// ============================================================================

export const heading = {
  /** 72px - Hero display */
  72: {
    fontSize: '72px',
    lineHeight: '76px',
    letterSpacing: '-0.04em',
    fontWeight: 700,
  },
  /** 64px - Large hero */
  64: {
    fontSize: '64px',
    lineHeight: '68px',
    letterSpacing: '-0.04em',
    fontWeight: 700,
  },
  /** 56px - Hero secondary */
  56: {
    fontSize: '56px',
    lineHeight: '60px',
    letterSpacing: '-0.03em',
    fontWeight: 700,
  },
  /** 48px - Page title */
  48: {
    fontSize: '48px',
    lineHeight: '52px',
    letterSpacing: '-0.03em',
    fontWeight: 700,
  },
  /** 40px - Large section */
  40: {
    fontSize: '40px',
    lineHeight: '44px',
    letterSpacing: '-0.02em',
    fontWeight: 600,
  },
  /** 32px - Section heading */
  32: {
    fontSize: '32px',
    lineHeight: '40px',
    letterSpacing: '-0.02em',
    fontWeight: 600,
  },
  /** 24px - Subsection */
  24: {
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '-0.01em',
    fontWeight: 600,
  },
  /** 20px - Card title */
  20: {
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: '-0.01em',
    fontWeight: 500,
  },
  /** 16px - Component title */
  16: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0',
    fontWeight: 500,
  },
  /** 14px - Small title */
  14: {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0',
    fontWeight: 500,
  },
} as const;

// ============================================================================
// BUTTON TYPOGRAPHY
// ============================================================================

export const button = {
  /** 16px - Large button */
  16: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 600,
  },
  /** 14px - Default button */
  14: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 600,
  },
  /** 12px - Small/inline button */
  12: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 600,
  },
} as const;

// ============================================================================
// LABEL TYPOGRAPHY
// ============================================================================

export const label = {
  /** 16px - Large label */
  16: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
  },
  /** 14px - Default label */
  14: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 500,
  },
  /** 12px - Small label */
  12: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 500,
    letterSpacing: '0.02em',
  },
  /** 11px - Micro label */
  11: {
    fontSize: '11px',
    lineHeight: '14px',
    fontWeight: 500,
    letterSpacing: '0.02em',
  },
} as const;

// ============================================================================
// COPY TYPOGRAPHY (Paragraphs)
// ============================================================================

export const copy = {
  /** 20px - Lead paragraph */
  20: {
    fontSize: '20px',
    lineHeight: '32px',
    fontWeight: 400,
  },
  /** 16px - Default paragraph */
  16: {
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: 400,
  },
  /** 14px - Secondary paragraph */
  14: {
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 400,
  },
  /** 12px - Small text */
  12: {
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 400,
  },
} as const;

// ============================================================================
// TYPE SCALE PRESETS (Legacy compatibility)
// ============================================================================

export const typePresets = {
  /** Hero headline - 60px extrabold */
  hero: {
    fontSize: fontSize['6xl'].size,
    fontWeight: fontWeight.extrabold,
    lineHeight: fontSize['6xl'].lineHeight,
    letterSpacing: letterSpacing.tightest,
  },
  /** Page headline - 48px bold */
  h1: {
    fontSize: fontSize['5xl'].size,
    fontWeight: fontWeight.bold,
    lineHeight: fontSize['5xl'].lineHeight,
    letterSpacing: letterSpacing.tighter,
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
    letterSpacing: letterSpacing.snug,
  },
  /** Card headline - 24px semibold */
  h4: {
    fontSize: fontSize['2xl'].size,
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize['2xl'].lineHeight,
    letterSpacing: letterSpacing.snug,
  },
  /** Component headline - 20px semibold */
  h5: {
    fontSize: fontSize.xl.size,
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize.xl.lineHeight,
    letterSpacing: letterSpacing.normal,
  },
  /** Small headline - 18px semibold */
  h6: {
    fontSize: fontSize.lg.size,
    fontWeight: fontWeight.semibold,
    lineHeight: fontSize.lg.lineHeight,
    letterSpacing: letterSpacing.normal,
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
  fontFamilyCSS: `font-family: ${fontFamily.sans.map((f) => (f.includes(' ') ? `'${f}'` : f)).join(', ')};`,
};

// ============================================================================
// TAILWIND CLASS HELPERS
// ============================================================================

/**
 * Get Tailwind class for heading size
 * @example getHeadingClass(32) // 'text-heading-32'
 */
export function getHeadingClass(size: keyof typeof heading): string {
  return `text-heading-${size}`;
}

/**
 * Get Tailwind class for button typography
 * @example getButtonClass(14) // 'text-button-14'
 */
export function getButtonClass(size: keyof typeof button): string {
  return `text-button-${size}`;
}

/**
 * Get Tailwind class for label typography
 * @example getLabelClass(12) // 'text-label-12'
 */
export function getLabelClass(size: keyof typeof label): string {
  return `text-label-${size}`;
}

/**
 * Get Tailwind class for copy typography
 * @example getCopyClass(16) // 'text-copy-16'
 */
export function getCopyClass(size: keyof typeof copy): string {
  return `text-copy-${size}`;
}

// ============================================================================
// EXPORTS
// ============================================================================

export const typography = {
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  // New Geist-inspired scales
  heading,
  button,
  label,
  copy,
  // Legacy presets
  presets: typePresets,
  // Utilities
  googleFontsUrl,
  cssSnippets,
  // Helpers
  getHeadingClass,
  getButtonClass,
  getLabelClass,
  getCopyClass,
} as const;

export default typography;
