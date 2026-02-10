/**
 * Finitless Design System - Color Tokens v0.1.0
 *
 * Enhanced color system with 10-step scales inspired by Vercel's Geist.
 * Use these constants when you need programmatic access to colors
 * outside of Tailwind classes.
 */

// ============================================================================
// GRAY SCALE (10 steps for dark theme)
// ============================================================================

export const gray = {
  /** Lightest gray - Almost white */
  100: '#fafafa',
  /** Very light gray */
  200: '#eaeaea',
  /** Light gray */
  300: '#999999',
  /** Medium light gray */
  400: '#888888',
  /** Medium gray */
  500: '#666666',
  /** Medium dark gray */
  600: '#444444',
  /** Dark gray */
  700: '#333333',
  /** Darker gray */
  800: '#222222',
  /** Very dark gray */
  900: '#111111',
  /** Darkest gray - Almost black */
  1000: '#000000',
} as const;

// ============================================================================
// GRAY ALPHA SCALE (Transparent overlays for dark theme)
// ============================================================================

export const grayAlpha = {
  /** 3% white - Subtle hover on dark */
  100: 'rgba(255, 255, 255, 0.03)',
  /** 6% white - Card backgrounds */
  200: 'rgba(255, 255, 255, 0.06)',
  /** 9% white - Hover states */
  300: 'rgba(255, 255, 255, 0.09)',
  /** 12% white - Active/pressed */
  400: 'rgba(255, 255, 255, 0.12)',
  /** 18% white - Elevated surfaces */
  500: 'rgba(255, 255, 255, 0.18)',
  /** 24% white - Strong borders */
  600: 'rgba(255, 255, 255, 0.24)',
  /** 36% white - Muted text */
  700: 'rgba(255, 255, 255, 0.36)',
  /** 48% white - Secondary text */
  800: 'rgba(255, 255, 255, 0.48)',
  /** 64% white - Primary muted */
  900: 'rgba(255, 255, 255, 0.64)',
  /** 80% white - Near primary */
  1000: 'rgba(255, 255, 255, 0.80)',
} as const;

// ============================================================================
// BLUE SCALE (Brand Primary Extended)
// ============================================================================

export const blue = {
  /** Lightest blue */
  100: '#e6f0ff',
  /** Very light blue */
  200: '#cce0ff',
  /** Light blue */
  300: '#99c2ff',
  /** Medium light blue */
  400: '#66a3ff',
  /** Medium blue */
  500: '#3385ff',
  /** Finitless Blue - Primary (brand.primary) */
  600: '#165DFC',
  /** Dark blue */
  700: '#1250d4',
  /** Darker blue */
  800: '#0e3fa8',
  /** Very dark blue */
  900: '#0a2e7c',
  /** Darkest blue */
  1000: '#061d50',
} as const;

// ============================================================================
// CYAN SCALE (Link Color Extended)
// ============================================================================

export const cyan = {
  /** Lightest cyan */
  100: '#e0f7ff',
  /** Very light cyan */
  200: '#b3ecff',
  /** Light cyan */
  300: '#80dfff',
  /** Medium light cyan */
  400: '#4dd2ff',
  /** Medium cyan */
  500: '#1ac5ff',
  /** Finitless Cyan - Links (brand.link) */
  600: '#00B7FF',
  /** Dark cyan */
  700: '#009dd9',
  /** Darker cyan */
  800: '#0082b3',
  /** Very dark cyan */
  900: '#00678c',
  /** Darkest cyan */
  1000: '#004c66',
} as const;

// ============================================================================
// PURPLE SCALE (Gradient Midpoint Extended)
// ============================================================================

export const purple = {
  /** Lightest purple */
  100: '#f3e8ff',
  /** Very light purple */
  200: '#e4ccff',
  /** Light purple */
  300: '#c99aff',
  /** Medium light purple */
  400: '#ae68ff',
  /** Medium purple */
  500: '#9447ff',
  /** Finitless Purple - Gradient midpoint (brand.purple) */
  600: '#7A2EFF',
  /** Dark purple */
  700: '#6625d9',
  /** Darker purple */
  800: '#521cb3',
  /** Very dark purple */
  900: '#3e138c',
  /** Darkest purple */
  1000: '#2a0a66',
} as const;

// ============================================================================
// MAGENTA/PINK SCALE (Gradient End Extended)
// ============================================================================

export const magenta = {
  /** Lightest magenta */
  100: '#fce8ff',
  /** Very light magenta */
  200: '#f7ccff',
  /** Light magenta */
  300: '#ef99ff',
  /** Medium light magenta */
  400: '#e766ff',
  /** Medium magenta */
  500: '#df33ff',
  /** Finitless Magenta - Gradient end (brand.magenta) */
  600: '#C300FF',
  /** Dark magenta */
  700: '#a600d9',
  /** Darker magenta */
  800: '#8900b3',
  /** Very dark magenta */
  900: '#6c008c',
  /** Darkest magenta */
  1000: '#4f0066',
} as const;

// ============================================================================
// RED SCALE (Error/Destructive)
// ============================================================================

export const red = {
  /** Lightest red */
  100: '#fff0f0',
  /** Very light red */
  200: '#ffcccc',
  /** Light red */
  300: '#ff9999',
  /** Medium light red */
  400: '#ff6666',
  /** Medium red */
  500: '#ff4d4d',
  /** Error red (semantic.error) */
  600: '#ff3b45',
  /** Dark red */
  700: '#d92d36',
  /** Darker red */
  800: '#b32027',
  /** Very dark red */
  900: '#8c1419',
  /** Darkest red */
  1000: '#66080b',
} as const;

// ============================================================================
// GREEN SCALE (Success)
// ============================================================================

export const green = {
  /** Lightest green */
  100: '#ecfdf5',
  /** Very light green */
  200: '#d1fae5',
  /** Light green */
  300: '#a7f3d0',
  /** Medium light green */
  400: '#6ee7b7',
  /** Medium green */
  500: '#34d399',
  /** Success green (semantic.success) */
  600: '#22c55e',
  /** Dark green */
  700: '#16a34a',
  /** Darker green */
  800: '#15803d',
  /** Very dark green */
  900: '#166534',
  /** Darkest green */
  1000: '#14532d',
} as const;

// ============================================================================
// AMBER SCALE (Warning)
// ============================================================================

export const amber = {
  /** Lightest amber */
  100: '#fffbeb',
  /** Very light amber */
  200: '#fef3c7',
  /** Light amber */
  300: '#fde68a',
  /** Medium light amber */
  400: '#fcd34d',
  /** Medium amber */
  500: '#fbbf24',
  /** Warning amber (semantic.warning) */
  600: '#f59e0b',
  /** Dark amber */
  700: '#d97706',
  /** Darker amber */
  800: '#b45309',
  /** Very dark amber */
  900: '#92400e',
  /** Darkest amber */
  1000: '#78350f',
} as const;

// ============================================================================
// TEAL SCALE (Additional accent)
// ============================================================================

export const teal = {
  /** Lightest teal */
  100: '#f0fdfa',
  /** Very light teal */
  200: '#ccfbf1',
  /** Light teal */
  300: '#99f6e4',
  /** Medium light teal */
  400: '#5eead4',
  /** Medium teal */
  500: '#2dd4bf',
  /** Teal accent */
  600: '#14b8a6',
  /** Dark teal */
  700: '#0d9488',
  /** Darker teal */
  800: '#0f766e',
  /** Very dark teal */
  900: '#115e59',
  /** Darkest teal */
  1000: '#134e4a',
} as const;

// ============================================================================
// BRAND COLORS (Convenience aliases)
// ============================================================================

export const brand = {
  /** Finitless Blue - Primary button fills, active states, solid backgrounds */
  primary: blue[600],
  /** Cyan - Links, focus rings, hover text, gradient start */
  link: cyan[600],
  /** Purple - Gradient midpoint only, NEVER use standalone */
  purple: purple[600],
  /** Magenta - Gradient end only, NEVER use standalone */
  magenta: magenta[600],
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
  card: grayAlpha[200],
  /** Hover states - 8% white */
  hover: 'rgba(255, 255, 255, 0.08)',
  /** Active/pressed states - 12% white */
  active: grayAlpha[400],
} as const;

// ============================================================================
// BORDER COLORS
// ============================================================================

export const border = {
  /** Default borders - 10% white */
  DEFAULT: 'rgba(255, 255, 255, 0.10)',
  /** Subtle borders - 6% white */
  subtle: grayAlpha[200],
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
  error: red[600],
  /** Success states, confirmations */
  success: green[600],
  /** Warning states, caution */
  warning: amber[600],
  /** Info states, neutral highlights */
  info: '#eaf4ff',
} as const;

// ============================================================================
// GRADIENTS
// ============================================================================

export const gradients = {
  /** Full brand gradient - Hero sections, decorative */
  brand: `linear-gradient(to right, ${cyan[600]}, ${purple[600]}, ${magenta[600]})`,
  /** CTA gradient - Primary buttons, important actions */
  cta: `linear-gradient(to right, ${cyan[600]}, ${purple[600]})`,
  /** Text gradient - Gradient text effect */
  text: `linear-gradient(to right, ${cyan[600]}, ${purple[600]}, ${magenta[600]})`,
} as const;

// ============================================================================
// CSS CUSTOM PROPERTIES (for runtime theming)
// ============================================================================

export const cssVariables = {
  // Brand
  '--color-brand-primary': brand.primary,
  '--color-brand-link': brand.link,
  '--color-brand-purple': brand.purple,
  '--color-brand-magenta': brand.magenta,
  // Backgrounds
  '--color-bg-deep': background.deep,
  '--color-bg-base': background.base,
  '--color-bg-elevated': background.elevated,
  '--color-bg-surface': background.surface,
  // Surfaces
  '--color-surface-card': surface.card,
  '--color-surface-hover': surface.hover,
  '--color-surface-active': surface.active,
  // Borders
  '--color-border': border.DEFAULT,
  '--color-border-subtle': border.subtle,
  '--color-border-strong': border.strong,
  // Text
  '--color-text-primary': text.primary,
  '--color-text-muted': text.muted,
  '--color-text-placeholder': text.placeholder,
  '--color-text-disabled': text.disabled,
  // Semantic
  '--color-error': semantic.error,
  '--color-success': semantic.success,
  '--color-warning': semantic.warning,
  '--color-info': semantic.info,
  // Gradients
  '--gradient-brand': gradients.brand,
  '--gradient-cta': gradients.cta,
} as const;

// ============================================================================
// EXPORTS
// ============================================================================

export const colors = {
  // Scales
  gray,
  grayAlpha,
  blue,
  cyan,
  purple,
  magenta,
  red,
  green,
  amber,
  teal,
  // Semantic groupings
  brand,
  background,
  surface,
  border,
  text,
  semantic,
  gradients,
  // Primitives
  black: '#000000',
  white: '#FFFFFF',
} as const;

export default colors;
