/**
 * Finitless Design System - Spacing & Layout Tokens
 *
 * Base unit: 4px
 * All spacing values are multiples of the base unit.
 */

// ============================================================================
// SPACING SCALE
// ============================================================================

export const spacing = {
  /** 0px */
  0: '0px',
  /** 1px */
  px: '1px',
  /** 2px */
  0.5: '0.125rem',
  /** 4px - Base unit */
  1: '0.25rem',
  /** 6px */
  1.5: '0.375rem',
  /** 8px */
  2: '0.5rem',
  /** 10px */
  2.5: '0.625rem',
  /** 12px */
  3: '0.75rem',
  /** 14px */
  3.5: '0.875rem',
  /** 16px */
  4: '1rem',
  /** 20px */
  5: '1.25rem',
  /** 24px */
  6: '1.5rem',
  /** 28px */
  7: '1.75rem',
  /** 32px */
  8: '2rem',
  /** 36px */
  9: '2.25rem',
  /** 40px */
  10: '2.5rem',
  /** 44px */
  11: '2.75rem',
  /** 48px */
  12: '3rem',
  /** 56px */
  14: '3.5rem',
  /** 64px */
  16: '4rem',
  /** 80px */
  20: '5rem',
  /** 96px */
  24: '6rem',
  /** 112px */
  28: '7rem',
  /** 128px */
  32: '8rem',
} as const;

// ============================================================================
// BORDER RADIUS (Simplified v4.0 scale)
// ============================================================================

export const borderRadius = {
  /** No radius */
  none: '0px',
  /** 8px - Small elements (badges, tags, small buttons) */
  sm: '8px',
  /** 12px - Universal default (inputs, buttons, cards) */
  DEFAULT: '12px',
  /** 12px - Alias for DEFAULT */
  md: '12px',
  /** 16px - Larger cards, modals, dialogs */
  lg: '16px',
  /** 24px - Hero sections, large containers */
  xl: '24px',
  /** Full circle - Pills, avatars, circular buttons */
  full: '9999px',
} as const;

// ============================================================================
// COMPONENT SIZES
// ============================================================================

export const componentSizes = {
  /** Button heights */
  button: {
    sm: '36px',    // Small buttons, icon buttons
    md: '44px',    // Default buttons
    lg: '48px',    // Form submit, hero CTAs
  },
  /** Input heights */
  input: {
    sm: '36px',
    md: '44px',
    lg: '48px',
  },
  /** Icon sizes */
  icon: {
    xs: '16px',
    sm: '20px',
    md: '24px',
    lg: '32px',
    xl: '48px',
  },
  /** Avatar sizes */
  avatar: {
    xs: '24px',
    sm: '32px',
    md: '40px',
    lg: '56px',
    xl: '80px',
  },
} as const;

// ============================================================================
// LAYOUT CONTAINERS
// ============================================================================

export const containers = {
  /** Form container max width */
  form: '480px',
  /** Card max width */
  card: '400px',
  /** Content max width */
  content: '768px',
  /** Wide content */
  wide: '1024px',
  /** Full width container */
  full: '1280px',
  /** Max site width */
  site: '1440px',
} as const;

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

export const zIndex = {
  /** Below content */
  behind: -1,
  /** Default level */
  base: 0,
  /** Raised cards, dropdowns */
  dropdown: 10,
  /** Sticky elements */
  sticky: 20,
  /** Fixed navigation */
  fixed: 30,
  /** Modal backdrops */
  backdrop: 40,
  /** Modal content */
  modal: 50,
  /** Popovers, tooltips */
  popover: 60,
  /** Toast notifications */
  toast: 70,
  /** Maximum (rarely used) */
  max: 100,
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
  /** Mobile small */
  xs: '475px',
  /** Mobile */
  sm: '640px',
  /** Tablet */
  md: '768px',
  /** Desktop */
  lg: '1024px',
  /** Wide desktop */
  xl: '1280px',
  /** Ultra wide */
  '2xl': '1536px',
} as const;

// ============================================================================
// EXPORTS
// ============================================================================

export const layout = {
  spacing,
  borderRadius,
  componentSizes,
  containers,
  zIndex,
  breakpoints,
} as const;

export default layout;
