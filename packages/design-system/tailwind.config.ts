import type { Config } from 'tailwindcss';

/**
 * Finitless Design System - Tailwind Configuration
 *
 * This is the canonical source of truth for all design tokens.
 * Import the preset for consuming apps via:
 *
 * ```ts
 * import { finitlessPreset } from '@finitless/design-system/tailwind';
 *
 * export default {
 *   presets: [finitlessPreset],
 *   content: [...],
 * };
 * ```
 */

// ============================================================================
// COLOR TOKENS
// ============================================================================

export const colors = {
  // Brand Primary Colors
  brand: {
    /** Finitless Blue - Primary button fills, active states */
    primary: '#165DFC',
    /** Cyan - Links, focus rings, hover text */
    link: '#00B7FF',
    /** Purple - Gradient midpoint only, NEVER standalone */
    purple: '#7A2EFF',
    /** Magenta - Gradient end only, NEVER standalone */
    magenta: '#C300FF',
  },

  // Background Hierarchy (warm off-blacks)
  background: {
    /** Deep - Sidebar, navigation, overlays */
    deep: '#08080a',
    /** Base - Main page background */
    base: '#0e0e10',
    /** Elevated - Cards, modals, popovers */
    elevated: '#151517',
    /** Surface - Dropdown panels, tooltips */
    surface: '#1c1c1f',
  },

  // Surface Overlays (white opacity)
  surface: {
    /** Card backgrounds */
    card: 'rgba(255, 255, 255, 0.05)',
    /** Hover states */
    hover: 'rgba(255, 255, 255, 0.08)',
    /** Active/pressed states */
    active: 'rgba(255, 255, 255, 0.12)',
  },

  // Border Colors
  border: {
    /** Default borders */
    DEFAULT: 'rgba(255, 255, 255, 0.10)',
    /** Subtle borders */
    subtle: 'rgba(255, 255, 255, 0.06)',
    /** Strong borders (hover, focus) */
    strong: 'rgba(255, 255, 255, 0.20)',
  },

  // Text Colors
  text: {
    /** Primary text */
    primary: '#FFFFFF',
    /** Secondary/muted text */
    muted: 'rgba(255, 255, 255, 0.60)',
    /** Placeholder text */
    placeholder: 'rgba(255, 255, 255, 0.40)',
    /** Disabled text */
    disabled: 'rgba(255, 255, 255, 0.30)',
  },

  // Semantic Colors
  semantic: {
    error: '#ff3b45',
    success: '#22c55e',
    warning: '#f59e0b',
    info: '#eaf4ff',
  },

  // Absolute Colors
  black: '#000000',
  white: '#FFFFFF',
} as const;

// ============================================================================
// GRADIENT TOKENS
// ============================================================================

export const gradients = {
  /** Full brand gradient (cyan → purple → magenta) */
  brand: 'linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF)',
  /** CTA gradient (cyan → purple) */
  cta: 'linear-gradient(to right, #00B7FF, #7A2EFF)',
  /** Text gradient (for gradient text effect) */
  text: 'linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF)',
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export const typography = {
  fontFamily: {
    sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
    mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'monospace'],
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],       // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem' }],   // 14px
    base: ['1rem', { lineHeight: '1.5rem' }],      // 16px
    lg: ['1.125rem', { lineHeight: '1.75rem' }],   // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem' }],    // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem' }],     // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],  // 36px
    '5xl': ['3rem', { lineHeight: '1' }],          // 48px
    '6xl': ['3.75rem', { lineHeight: '1' }],       // 60px
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
} as const;

// ============================================================================
// SPACING & LAYOUT TOKENS
// ============================================================================

export const spacing = {
  px: '1px',
  0: '0px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
} as const;

// ============================================================================
// BORDER RADIUS TOKENS (New v4.0 simplified scale)
// ============================================================================

export const borderRadius = {
  none: '0px',
  sm: '8px',        // Small elements, badges
  DEFAULT: '12px',  // Universal default (inputs, buttons, cards)
  md: '12px',       // Alias for DEFAULT
  lg: '16px',       // Larger cards, modals
  xl: '24px',       // Hero sections, large containers
  full: '9999px',   // Pills, avatars
} as const;

// ============================================================================
// SHADOW & EFFECTS TOKENS
// ============================================================================

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  /** Dropdown/popover shadow */
  dropdown: '0 8px 32px rgba(0, 0, 0, 0.4)',
  /** Glow effect for CTAs */
  glow: '0 0 40px -10px rgba(0, 183, 255, 0.3)',
  /** Focus ring glow */
  focus: '0 0 0 3px rgba(0, 183, 255, 0.25)',
  none: 'none',
} as const;

export const blur = {
  none: '0',
  sm: '4px',
  DEFAULT: '8px',   // Glassmorphism default
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
} as const;

// ============================================================================
// ANIMATION TOKENS
// ============================================================================

export const animation = {
  transitionDuration: {
    fast: '150ms',
    DEFAULT: '250ms',
    slow: '400ms',
  },
  transitionTimingFunction: {
    DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// ============================================================================
// TAILWIND CONFIG
// ============================================================================

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: colors.brand,
        background: colors.background,
        surface: colors.surface,
        border: colors.border,
        text: colors.text,
        semantic: colors.semantic,
        black: colors.black,
        white: colors.white,
      },
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      borderRadius: borderRadius,
      boxShadow: shadows,
      blur: blur,
      transitionDuration: animation.transitionDuration,
      transitionTimingFunction: animation.transitionTimingFunction,
      backgroundImage: {
        'gradient-brand': gradients.brand,
        'gradient-cta': gradients.cta,
        'gradient-text': gradients.text,
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'fade-in': 'fade-in 250ms ease-out',
        'fade-out': 'fade-out 250ms ease-in',
        'slide-in-from-top': 'slide-in-from-top 250ms ease-out',
        'slide-in-from-bottom': 'slide-in-from-bottom 250ms ease-out',
        'scale-in': 'scale-in 200ms ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
