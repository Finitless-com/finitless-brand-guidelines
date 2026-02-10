/**
 * Finitless Design System - Tailwind Preset v0.1.0
 *
 * Enhanced preset with 10-step color scales, comprehensive animations,
 * and quality polish utilities inspired by Vercel's Geist.
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
import plugin from 'tailwindcss/plugin';

export const finitlessPreset: Config = {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ================================================================
        // 10-STEP COLOR SCALES
        // ================================================================

        // Gray Scale
        gray: {
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
          1000: '#000000',
        },

        // Gray Alpha Scale (transparent overlays)
        grayAlpha: {
          100: 'rgba(255, 255, 255, 0.03)',
          200: 'rgba(255, 255, 255, 0.06)',
          300: 'rgba(255, 255, 255, 0.09)',
          400: 'rgba(255, 255, 255, 0.12)',
          500: 'rgba(255, 255, 255, 0.18)',
          600: 'rgba(255, 255, 255, 0.24)',
          700: 'rgba(255, 255, 255, 0.36)',
          800: 'rgba(255, 255, 255, 0.48)',
          900: 'rgba(255, 255, 255, 0.64)',
          1000: 'rgba(255, 255, 255, 0.80)',
        },

        // Blue Scale (Brand Primary)
        blue: {
          100: '#e6f0ff',
          200: '#cce0ff',
          300: '#99c2ff',
          400: '#66a3ff',
          500: '#3385ff',
          600: '#165DFC',
          700: '#1250d4',
          800: '#0e3fa8',
          900: '#0a2e7c',
          1000: '#061d50',
        },

        // Cyan Scale (Link Color)
        cyan: {
          100: '#e0f7ff',
          200: '#b3ecff',
          300: '#80dfff',
          400: '#4dd2ff',
          500: '#1ac5ff',
          600: '#00B7FF',
          700: '#009dd9',
          800: '#0082b3',
          900: '#00678c',
          1000: '#004c66',
        },

        // Purple Scale (Gradient Midpoint)
        purple: {
          100: '#f3e8ff',
          200: '#e4ccff',
          300: '#c99aff',
          400: '#ae68ff',
          500: '#9447ff',
          600: '#7A2EFF',
          700: '#6625d9',
          800: '#521cb3',
          900: '#3e138c',
          1000: '#2a0a66',
        },

        // Magenta Scale (Gradient End)
        magenta: {
          100: '#fce8ff',
          200: '#f7ccff',
          300: '#ef99ff',
          400: '#e766ff',
          500: '#df33ff',
          600: '#C300FF',
          700: '#a600d9',
          800: '#8900b3',
          900: '#6c008c',
          1000: '#4f0066',
        },

        // Red Scale (Error/Destructive)
        red: {
          100: '#fff0f0',
          200: '#ffcccc',
          300: '#ff9999',
          400: '#ff6666',
          500: '#ff4d4d',
          600: '#ff3b45',
          700: '#d92d36',
          800: '#b32027',
          900: '#8c1419',
          1000: '#66080b',
        },

        // Green Scale (Success)
        green: {
          100: '#ecfdf5',
          200: '#d1fae5',
          300: '#a7f3d0',
          400: '#6ee7b7',
          500: '#34d399',
          600: '#22c55e',
          700: '#16a34a',
          800: '#15803d',
          900: '#166534',
          1000: '#14532d',
        },

        // Amber Scale (Warning)
        amber: {
          100: '#fffbeb',
          200: '#fef3c7',
          300: '#fde68a',
          400: '#fcd34d',
          500: '#fbbf24',
          600: '#f59e0b',
          700: '#d97706',
          800: '#b45309',
          900: '#92400e',
          1000: '#78350f',
        },

        // Teal Scale (Accent)
        teal: {
          100: '#f0fdfa',
          200: '#ccfbf1',
          300: '#99f6e4',
          400: '#5eead4',
          500: '#2dd4bf',
          600: '#14b8a6',
          700: '#0d9488',
          800: '#0f766e',
          900: '#115e59',
          1000: '#134e4a',
        },

        // ================================================================
        // BRAND CONVENIENCE ALIASES
        // ================================================================

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

      // ================================================================
      // TYPOGRAPHY
      // ================================================================

      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'monospace'],
      },

      fontSize: {
        // Standard scale
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
        // Geist-inspired numbered heading scale
        'heading-72': ['72px', { lineHeight: '76px', letterSpacing: '-0.04em', fontWeight: '700' }],
        'heading-64': ['64px', { lineHeight: '68px', letterSpacing: '-0.04em', fontWeight: '700' }],
        'heading-56': ['56px', { lineHeight: '60px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'heading-48': ['48px', { lineHeight: '52px', letterSpacing: '-0.03em', fontWeight: '700' }],
        'heading-40': ['40px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-32': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-24': ['24px', { lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-20': ['20px', { lineHeight: '28px', letterSpacing: '-0.01em', fontWeight: '500' }],
        'heading-16': ['16px', { lineHeight: '24px', letterSpacing: '0', fontWeight: '500' }],
        'heading-14': ['14px', { lineHeight: '20px', letterSpacing: '0', fontWeight: '500' }],
        // Button typography
        'button-16': ['16px', { lineHeight: '24px', fontWeight: '600' }],
        'button-14': ['14px', { lineHeight: '20px', fontWeight: '600' }],
        'button-12': ['12px', { lineHeight: '16px', fontWeight: '600' }],
        // Label typography
        'label-16': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'label-14': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'label-12': ['12px', { lineHeight: '16px', fontWeight: '500', letterSpacing: '0.02em' }],
        'label-11': ['11px', { lineHeight: '14px', fontWeight: '500', letterSpacing: '0.02em' }],
        // Copy typography
        'copy-20': ['20px', { lineHeight: '32px', fontWeight: '400' }],
        'copy-16': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'copy-14': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'copy-12': ['12px', { lineHeight: '18px', fontWeight: '400' }],
      },

      // ================================================================
      // SPACING & LAYOUT
      // ================================================================

      borderRadius: {
        none: '0px',
        sm: '8px',
        DEFAULT: '12px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        full: '9999px',
      },

      // ================================================================
      // SHADOWS
      // ================================================================

      boxShadow: {
        // Elevation
        none: 'none',
        sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
        DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        dropdown: '0 8px 32px rgba(0, 0, 0, 0.4)',
        // Glow effects
        glow: '0 0 40px -10px rgba(0, 183, 255, 0.3)',
        'glow-strong': '0 0 60px -10px rgba(0, 183, 255, 0.4)',
        'glow-purple': '0 0 40px -10px rgba(122, 46, 255, 0.3)',
        'glow-magenta': '0 0 40px -10px rgba(195, 0, 255, 0.3)',
        // Focus ring
        focus: '0 0 0 3px rgba(0, 183, 255, 0.25)',
        'focus-error': '0 0 0 3px rgba(255, 59, 69, 0.25)',
        // Inner shadows
        inner: 'inset 0 1px 2px rgba(0, 0, 0, 0.3)',
        'inner-strong': 'inset 0 2px 4px rgba(0, 0, 0, 0.4)',
      },

      blur: {
        glass: '8px',
        'glass-strong': '16px',
      },

      // ================================================================
      // Z-INDEX SCALE (Strict management)
      // ================================================================

      zIndex: {
        behind: '-1',
        base: '0',
        dropdown: '10',
        sticky: '20',
        fixed: '30',
        overlay: '40',
        modal: '50',
        popover: '60',
        toast: '70',
        tooltip: '80',
        max: '100',
      },

      // ================================================================
      // TRANSITIONS & ANIMATIONS
      // ================================================================

      transitionDuration: {
        instant: '0ms',
        fast: '100ms',
        DEFAULT: '150ms',
        normal: '200ms',
        slow: '300ms',
        slower: '400ms',
        slowest: '500ms',
      },

      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        linear: 'linear',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF)',
        'gradient-cta': 'linear-gradient(to right, #00B7FF, #7A2EFF)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        shimmer:
          'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0.03) 100%)',
      },

      keyframes: {
        // Entrance animations
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-from-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-from-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        // Exit animations
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'fade-out-down': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
        'fade-out-up': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        'scale-out': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
        'slide-out-to-top': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'slide-out-to-bottom': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'slide-out-to-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-out-to-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        // Attention/Feedback animations
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(-10px)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        // Loading animations
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          from: { backgroundPosition: '-200% 0' },
          to: { backgroundPosition: '200% 0' },
        },
        // Dialog/Modal animations
        'dialog-in': {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'dialog-out': {
          '0%': { opacity: '1', transform: 'scale(1) translateY(0)' },
          '100%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
        },
        'overlay-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'overlay-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        // Accordion/Collapsible animations
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        // Progress animations
        'progress-indeterminate': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(400%)' },
        },
        // Tooltip animations
        'tooltip-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'tooltip-out': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.96)' },
        },
        // Checkbox checkmark animation
        checkmark: {
          from: { strokeDashoffset: '24' },
          to: { strokeDashoffset: '0' },
        },
      },

      animation: {
        // Entrances
        'fade-in': 'fade-in 200ms ease-out',
        'fade-in-up': 'fade-in-up 300ms ease-out',
        'fade-in-down': 'fade-in-down 300ms ease-out',
        'fade-in-left': 'fade-in-left 300ms ease-out',
        'fade-in-right': 'fade-in-right 300ms ease-out',
        'scale-in': 'scale-in 200ms ease-out',
        'slide-in-from-top': 'slide-in-from-top 250ms ease-out',
        'slide-in-from-bottom': 'slide-in-from-bottom 250ms ease-out',
        'slide-in-from-left': 'slide-in-from-left 250ms ease-out',
        'slide-in-from-right': 'slide-in-from-right 250ms ease-out',
        // Exits
        'fade-out': 'fade-out 200ms ease-in',
        'fade-out-down': 'fade-out-down 200ms ease-in',
        'fade-out-up': 'fade-out-up 200ms ease-in',
        'scale-out': 'scale-out 200ms ease-in',
        'slide-out-to-top': 'slide-out-to-top 250ms ease-in',
        'slide-out-to-bottom': 'slide-out-to-bottom 250ms ease-in',
        'slide-out-to-left': 'slide-out-to-left 250ms ease-in',
        'slide-out-to-right': 'slide-out-to-right 250ms ease-in',
        // Feedback
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        shake: 'shake 200ms ease-in-out',
        bounce: 'bounce 1s infinite',
        wiggle: 'wiggle 200ms ease-in-out',
        // Loading
        spin: 'spin 1s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
        // Dialogs
        'dialog-in': 'dialog-in 200ms ease-out',
        'dialog-out': 'dialog-out 150ms ease-in',
        'overlay-in': 'overlay-in 200ms ease-out',
        'overlay-out': 'overlay-out 150ms ease-in',
        // Accordion
        'accordion-down': 'accordion-down 200ms ease-out',
        'accordion-up': 'accordion-up 200ms ease-out',
        // Progress
        'progress-indeterminate': 'progress-indeterminate 1.5s ease-in-out infinite',
        // Tooltip
        'tooltip-in': 'tooltip-in 100ms ease-out',
        'tooltip-out': 'tooltip-out 100ms ease-in',
        // Checkbox
        checkmark: 'checkmark 150ms ease-out forwards',
      },
    },
  },

  plugins: [
    // Custom plugin for quality utilities
    plugin(({ addUtilities, addComponents }) => {
      // ================================================================
      // INTERACTION STATE UTILITIES
      // ================================================================
      addUtilities({
        // Focus visible ring (accessibility)
        '.focus-ring': {
          '@apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-link focus-visible:ring-offset-2 focus-visible:ring-offset-background-base':
            {},
        },
        '.focus-ring-error': {
          '@apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-error focus-visible:ring-offset-2 focus-visible:ring-offset-background-base':
            {},
        },
        // Active press effect
        '.press-effect': {
          '@apply active:scale-[0.98] transition-transform duration-100': {},
        },
        // Disabled state
        '.disabled-state': {
          '@apply opacity-50 pointer-events-none cursor-not-allowed': {},
        },
        // No select (interactive elements)
        '.no-select': {
          userSelect: 'none',
          WebkitUserSelect: 'none',
        },
      });

      // ================================================================
      // TEXT RENDERING UTILITIES
      // ================================================================
      addUtilities({
        '.text-quality': {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility',
        },
        '.text-balance': {
          textWrap: 'balance',
        },
        '.text-pretty': {
          textWrap: 'pretty',
        },
      });

      // ================================================================
      // TRUNCATION UTILITIES
      // ================================================================
      addUtilities({
        '.truncate-1': {
          display: '-webkit-box',
          WebkitLineClamp: '1',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        },
        '.truncate-2': {
          display: '-webkit-box',
          WebkitLineClamp: '2',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        },
        '.truncate-3': {
          display: '-webkit-box',
          WebkitLineClamp: '3',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        },
      });

      // ================================================================
      // SCROLLBAR UTILITIES
      // ================================================================
      addUtilities({
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255, 255, 255, 0.1) transparent',
          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
          },
        },
        '.scrollbar-hidden': {
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });

      // ================================================================
      // CONTAINER UTILITIES
      // ================================================================
      addUtilities({
        '.container-form': { maxWidth: '480px' },
        '.container-card': { maxWidth: '400px' },
        '.container-content': { maxWidth: '768px' },
        '.container-wide': { maxWidth: '1024px' },
        '.container-full': { maxWidth: '1280px' },
        '.container-site': { maxWidth: '1440px' },
      });

      // ================================================================
      // GLASS EFFECT COMPONENTS
      // ================================================================
      addComponents({
        '.glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        },
        '.glass-strong': {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        },
        '.glass-border': {
          border: '1px solid rgba(255, 255, 255, 0.10)',
        },
      });

      // ================================================================
      // ANIMATION DELAY UTILITIES
      // ================================================================
      addUtilities({
        '.delay-75': { animationDelay: '75ms' },
        '.delay-100': { animationDelay: '100ms' },
        '.delay-150': { animationDelay: '150ms' },
        '.delay-200': { animationDelay: '200ms' },
        '.delay-300': { animationDelay: '300ms' },
        '.delay-400': { animationDelay: '400ms' },
        '.delay-500': { animationDelay: '500ms' },
        '.delay-700': { animationDelay: '700ms' },
        '.delay-1000': { animationDelay: '1000ms' },
      });
    }),
  ],
};

export default finitlessPreset;
