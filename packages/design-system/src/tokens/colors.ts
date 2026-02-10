/**
 * Finitless Design System - Color Tokens
 *
 * These are the canonical color values for the Finitless brand.
 * Use these constants when you need programmatic access to colors
 * outside of Tailwind classes.
 */

// ============================================================================
// BRAND COLORS
// ============================================================================

export const brand = {
  /** Finitless Blue - Primary button fills, active states, solid backgrounds */
  primary: '#165DFC',
  /** Cyan - Links, focus rings, hover text, gradient start */
  link: '#00B7FF',
  /** Purple - Gradient midpoint only, NEVER use standalone */
  purple: '#7A2EFF',
  /** Magenta - Gradient end only, NEVER use standalone */
  magenta: '#C300FF',
} as const;

// ============================================================================
// BACKGROUND COLORS (Warm off-blacks hierarchy)
// ============================================================================

export const background = {
  /** Deepest layer - Sidebar, navigation, overlays */
  deep: '#08080a',
  /** Base layer - Main page background */
  base: '#0e0e10',
  /** Elevated layer - Cards, modals, popovers */
  elevated: '#151517',
  /** Surface layer - Dropdown panels, tooltips, menus */
  surface: '#1c1c1f',
} as const;

// ============================================================================
// SURFACE OVERLAYS (White opacity for glass effects)
// ============================================================================

export const surface = {
  /** Card backgrounds - 5% white */
  card: 'rgba(255, 255, 255, 0.05)',
  /** Hover states - 8% white */
  hover: 'rgba(255, 255, 255, 0.08)',
  /** Active/pressed states - 12% white */
  active: 'rgba(255, 255, 255, 0.12)',
} as const;

// ============================================================================
// BORDER COLORS
// ============================================================================

export const border = {
  /** Default borders - 10% white */
  DEFAULT: 'rgba(255, 255, 255, 0.10)',
  /** Subtle borders - 6% white */
  subtle: 'rgba(255, 255, 255, 0.06)',
  /** Strong borders (hover, focus) - 20% white */
  strong: 'rgba(255, 255, 255, 0.20)',
} as const;

// ============================================================================
// TEXT COLORS
// ============================================================================

export const text = {
  /** Primary text - Pure white */
  primary: '#FFFFFF',
  /** Secondary/muted text - 60% white */
  muted: 'rgba(255, 255, 255, 0.60)',
  /** Placeholder text - 40% white */
  placeholder: 'rgba(255, 255, 255, 0.40)',
  /** Disabled text - 30% white */
  disabled: 'rgba(255, 255, 255, 0.30)',
} as const;

// ============================================================================
// SEMANTIC COLORS
// ============================================================================

export const semantic = {
  /** Error states, destructive actions */
  error: '#ff3b45',
  /** Success states, confirmations */
  success: '#22c55e',
  /** Warning states, caution */
  warning: '#f59e0b',
  /** Info states, neutral highlights */
  info: '#eaf4ff',
} as const;

// ============================================================================
// GRADIENTS
// ============================================================================

export const gradients = {
  /** Full brand gradient - Hero sections, decorative */
  brand: 'linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF)',
  /** CTA gradient - Primary buttons, important actions */
  cta: 'linear-gradient(to right, #00B7FF, #7A2EFF)',
  /** Text gradient - Gradient text effect */
  text: 'linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF)',
} as const;

// ============================================================================
// CSS CUSTOM PROPERTIES (for runtime theming)
// ============================================================================

export const cssVariables = {
  '--color-brand-primary': brand.primary,
  '--color-brand-link': brand.link,
  '--color-brand-purple': brand.purple,
  '--color-brand-magenta': brand.magenta,
  '--color-bg-deep': background.deep,
  '--color-bg-base': background.base,
  '--color-bg-elevated': background.elevated,
  '--color-bg-surface': background.surface,
  '--color-surface-card': surface.card,
  '--color-surface-hover': surface.hover,
  '--color-surface-active': surface.active,
  '--color-border': border.DEFAULT,
  '--color-border-subtle': border.subtle,
  '--color-border-strong': border.strong,
  '--color-text-primary': text.primary,
  '--color-text-muted': text.muted,
  '--color-text-placeholder': text.placeholder,
  '--color-text-disabled': text.disabled,
  '--color-error': semantic.error,
  '--color-success': semantic.success,
  '--color-warning': semantic.warning,
  '--color-info': semantic.info,
  '--gradient-brand': gradients.brand,
  '--gradient-cta': gradients.cta,
} as const;

// ============================================================================
// EXPORTS
// ============================================================================

export const colors = {
  brand,
  background,
  surface,
  border,
  text,
  semantic,
  black: '#000000',
  white: '#FFFFFF',
} as const;

export default colors;
