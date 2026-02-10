/**
 * Finitless Design System - Tailwind Preset
 *
 * Import this preset in consuming applications to get all Finitless tokens.
 *
 * @example
 * ```ts
 * // tailwind.config.ts
 * import { finitlessPreset } from '@finitless/design-system/tailwind';
 *
 * export default {
 *   presets: [finitlessPreset],
 *   content: [
 *     './src/**\/*.{ts,tsx}',
 *     './node_modules/@finitless/design-system/dist/**\/*.{js,mjs}',
 *   ],
 * };
 * ```
 */

import type { Config } from 'tailwindcss';

export const finitlessPreset: Config = {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand Primary Colors
        brand: {
          primary: '#165DFC',
          link: '#00B7FF',
          purple: '#7A2EFF',
          magenta: '#C300FF',
        },

        // Background Hierarchy
        background: {
          deep: '#08080a',
          base: '#0e0e10',
          elevated: '#151517',
          surface: '#1c1c1f',
        },

        // Surface Overlays
        surface: {
          card: 'rgba(255, 255, 255, 0.05)',
          hover: 'rgba(255, 255, 255, 0.08)',
          active: 'rgba(255, 255, 255, 0.12)',
        },

        // Border Colors
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.10)',
          subtle: 'rgba(255, 255, 255, 0.06)',
          strong: 'rgba(255, 255, 255, 0.20)',
        },

        // Text Colors
        text: {
          primary: '#FFFFFF',
          muted: 'rgba(255, 255, 255, 0.60)',
          placeholder: 'rgba(255, 255, 255, 0.40)',
          disabled: 'rgba(255, 255, 255, 0.30)',
        },

        // Semantic Colors
        semantic: {
          error: '#ff3b45',
          success: '#22c55e',
          warning: '#f59e0b',
          info: '#eaf4ff',
        },
      },

      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'monospace'],
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },

      borderRadius: {
        none: '0px',
        sm: '8px',
        DEFAULT: '12px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },

      boxShadow: {
        dropdown: '0 8px 32px rgba(0, 0, 0, 0.4)',
        glow: '0 0 40px -10px rgba(0, 183, 255, 0.3)',
        focus: '0 0 0 3px rgba(0, 183, 255, 0.25)',
      },

      blur: {
        glass: '8px',
      },

      transitionDuration: {
        fast: '150ms',
        DEFAULT: '250ms',
        slow: '400ms',
      },

      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF)',
        'gradient-cta': 'linear-gradient(to right, #00B7FF, #7A2EFF)',
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

export default finitlessPreset;
