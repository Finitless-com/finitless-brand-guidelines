/**
 * Finitless Design System - Motion Tokens v0.1.0
 *
 * Comprehensive motion system with timing, easing, and purpose-based animations.
 */

// ============================================================================
// DURATIONS
// ============================================================================

export const duration = {
  /** 0ms - Instant, no animation */
  instant: '0ms',
  /** 100ms - Quick micro-interactions */
  fast: '100ms',
  /** 150ms - Default for most interactions */
  normal: '150ms',
  /** 200ms - Standard transitions */
  default: '200ms',
  /** 300ms - Deliberate transitions */
  slow: '300ms',
  /** 400ms - Slower, more dramatic */
  slower: '400ms',
  /** 500ms - Very slow, emphasis */
  slowest: '500ms',
} as const;

// ============================================================================
// EASINGS
// ============================================================================

export const easing = {
  /** Linear - Constant speed */
  linear: 'linear',
  /** Ease In - Starts slow, ends fast */
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  /** Ease Out - Starts fast, ends slow (most common) */
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  /** Ease In Out - Slow start and end */
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  /** Spring - Slight overshoot for bounce effect */
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  /** Bounce - More dramatic overshoot */
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  /** Sharp - Quick acceleration */
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
} as const;

// ============================================================================
// PURPOSE-BASED TRANSITIONS
// ============================================================================

export const transition = {
  /** Opacity changes (fade in/out) */
  fade: `opacity ${duration.default} ${easing.easeOut}`,
  /** Scale animations (zoom in/out) */
  scale: `transform ${duration.default} ${easing.spring}`,
  /** Slide animations (move in/out) */
  slide: `transform ${duration.slow} ${easing.easeOut}`,
  /** Color changes (hover, focus) */
  color: `color ${duration.normal} ${easing.easeInOut}, background-color ${duration.normal} ${easing.easeInOut}`,
  /** Border changes */
  border: `border-color ${duration.normal} ${easing.easeInOut}`,
  /** Shadow changes (elevation, glow) */
  shadow: `box-shadow ${duration.default} ${easing.easeOut}`,
  /** All properties (use sparingly) */
  all: `all ${duration.default} ${easing.easeOut}`,
  /** Fast all (buttons, inputs) */
  fast: `all ${duration.normal} ${easing.easeOut}`,
  /** None - Disable transitions */
  none: 'none',
} as const;

// ============================================================================
// ANIMATION PRESETS
// ============================================================================

export const animation = {
  // Entrances
  fadeIn: `fade-in ${duration.default} ${easing.easeOut}`,
  fadeInUp: `fade-in-up ${duration.slow} ${easing.easeOut}`,
  fadeInDown: `fade-in-down ${duration.slow} ${easing.easeOut}`,
  fadeInLeft: `fade-in-left ${duration.slow} ${easing.easeOut}`,
  fadeInRight: `fade-in-right ${duration.slow} ${easing.easeOut}`,
  scaleIn: `scale-in ${duration.default} ${easing.spring}`,
  slideInFromTop: `slide-in-from-top 250ms ${easing.easeOut}`,
  slideInFromBottom: `slide-in-from-bottom 250ms ${easing.easeOut}`,
  slideInFromLeft: `slide-in-from-left 250ms ${easing.easeOut}`,
  slideInFromRight: `slide-in-from-right 250ms ${easing.easeOut}`,

  // Exits
  fadeOut: `fade-out ${duration.default} ${easing.easeIn}`,
  fadeOutDown: `fade-out-down ${duration.default} ${easing.easeIn}`,
  fadeOutUp: `fade-out-up ${duration.default} ${easing.easeIn}`,
  scaleOut: `scale-out ${duration.default} ${easing.easeIn}`,
  slideOutToTop: `slide-out-to-top 250ms ${easing.easeIn}`,
  slideOutToBottom: `slide-out-to-bottom 250ms ${easing.easeIn}`,
  slideOutToLeft: `slide-out-to-left 250ms ${easing.easeIn}`,
  slideOutToRight: `slide-out-to-right 250ms ${easing.easeIn}`,

  // Feedback
  pulse: `pulse 2s ${easing.sharp} infinite`,
  ping: `ping 1s ${easing.easeOut} infinite`,
  shake: `shake ${duration.default} ${easing.easeInOut}`,
  bounce: `bounce 1s infinite`,
  wiggle: `wiggle ${duration.default} ${easing.easeInOut}`,

  // Loading
  spin: `spin 1s ${easing.linear} infinite`,
  shimmer: `shimmer 2s ${easing.linear} infinite`,

  // Dialogs
  dialogIn: `dialog-in ${duration.default} ${easing.easeOut}`,
  dialogOut: `dialog-out ${duration.normal} ${easing.easeIn}`,
  overlayIn: `overlay-in ${duration.default} ${easing.easeOut}`,
  overlayOut: `overlay-out ${duration.normal} ${easing.easeIn}`,

  // Accordion
  accordionDown: `accordion-down ${duration.default} ${easing.easeOut}`,
  accordionUp: `accordion-up ${duration.default} ${easing.easeOut}`,

  // Tooltip
  tooltipIn: `tooltip-in ${duration.fast} ${easing.easeOut}`,
  tooltipOut: `tooltip-out ${duration.fast} ${easing.easeIn}`,

  // Checkbox
  checkmark: `checkmark ${duration.normal} ${easing.easeOut} forwards`,
} as const;

// ============================================================================
// DELAY PRESETS
// ============================================================================

export const delay = {
  none: '0ms',
  75: '75ms',
  100: '100ms',
  150: '150ms',
  200: '200ms',
  300: '300ms',
  400: '400ms',
  500: '500ms',
  700: '700ms',
  1000: '1000ms',
} as const;

// ============================================================================
// SPRING CONFIGURATIONS (for libraries like framer-motion)
// ============================================================================

export const spring = {
  /** Default spring - balanced */
  default: {
    type: 'spring',
    stiffness: 400,
    damping: 30,
  },
  /** Bouncy spring - more playful */
  bouncy: {
    type: 'spring',
    stiffness: 300,
    damping: 20,
  },
  /** Stiff spring - snappy */
  stiff: {
    type: 'spring',
    stiffness: 500,
    damping: 35,
  },
  /** Gentle spring - smooth */
  gentle: {
    type: 'spring',
    stiffness: 200,
    damping: 25,
  },
} as const;

// ============================================================================
// CSS KEYFRAMES (for reference, these are in tailwind-preset.ts)
// ============================================================================

export const keyframes = {
  // Documented keyframe names for reference
  entrances: ['fade-in', 'fade-in-up', 'fade-in-down', 'fade-in-left', 'fade-in-right', 'scale-in', 'slide-in-from-top', 'slide-in-from-bottom', 'slide-in-from-left', 'slide-in-from-right'],
  exits: ['fade-out', 'fade-out-down', 'fade-out-up', 'scale-out', 'slide-out-to-top', 'slide-out-to-bottom', 'slide-out-to-left', 'slide-out-to-right'],
  feedback: ['pulse', 'ping', 'shake', 'bounce', 'wiggle'],
  loading: ['spin', 'shimmer'],
  overlay: ['dialog-in', 'dialog-out', 'overlay-in', 'overlay-out'],
  accordion: ['accordion-down', 'accordion-up'],
  tooltip: ['tooltip-in', 'tooltip-out'],
  other: ['checkmark', 'progress-indeterminate'],
} as const;

// ============================================================================
// TAILWIND CLASS HELPERS
// ============================================================================

/**
 * Get animation class with optional delay
 * @example getAnimationClass('fadeInUp', 100) // 'animate-fade-in-up delay-100'
 */
export function getAnimationClass(
  animationName: string,
  delayMs?: number
): string {
  const animClass = `animate-${animationName.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
  if (delayMs && delay[delayMs as keyof typeof delay]) {
    return `${animClass} delay-${delayMs}`;
  }
  return animClass;
}

// ============================================================================
// EXPORTS
// ============================================================================

export const motion = {
  duration,
  easing,
  transition,
  animation,
  delay,
  spring,
  keyframes,
  getAnimationClass,
} as const;

export default motion;
