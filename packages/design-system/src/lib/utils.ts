import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names with Tailwind CSS class conflict resolution.
 *
 * Uses clsx for conditional class handling and tailwind-merge
 * to properly handle Tailwind class conflicts.
 *
 * @example
 * ```tsx
 * // Basic usage
 * cn('px-4 py-2', 'bg-blue-500')
 * // => 'px-4 py-2 bg-blue-500'
 *
 * // With conditionals
 * cn('base-class', isActive && 'active-class', isDisabled && 'disabled-class')
 *
 * // Conflict resolution (later classes win)
 * cn('px-4', 'px-6')
 * // => 'px-6'
 *
 * // With component variants
 * cn(buttonVariants({ variant: 'primary', size: 'lg' }), className)
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Generates a unique ID for accessibility attributes.
 * Useful for linking labels to inputs, descriptions to elements, etc.
 *
 * @example
 * ```tsx
 * const id = generateId('input')
 * // => 'input-a1b2c3'
 * ```
 */
export function generateId(prefix: string = 'finitless'): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 8)}`;
}

/**
 * Checks if code is running in a browser environment.
 */
export const isBrowser = typeof window !== 'undefined';

/**
 * Checks if the user prefers reduced motion.
 */
export function prefersReducedMotion(): boolean {
  if (!isBrowser) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Formats a keyboard shortcut for display.
 * Automatically handles Mac vs Windows differences.
 *
 * @example
 * ```tsx
 * formatShortcut('Cmd+S')
 * // Mac: '⌘S'
 * // Windows: 'Ctrl+S'
 * ```
 */
export function formatShortcut(shortcut: string): string {
  if (!isBrowser) return shortcut;

  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

  return shortcut
    .replace(/Cmd\+/gi, isMac ? '⌘' : 'Ctrl+')
    .replace(/Alt\+/gi, isMac ? '⌥' : 'Alt+')
    .replace(/Shift\+/gi, isMac ? '⇧' : 'Shift+')
    .replace(/Ctrl\+/gi, isMac ? '⌃' : 'Ctrl+');
}

/**
 * Safely focuses an element, with optional delay.
 * Handles cases where the element might not exist.
 */
export function focusElement(
  element: HTMLElement | null | undefined,
  options?: { delay?: number; preventScroll?: boolean }
): void {
  if (!element) return;

  const focus = () => {
    element.focus({ preventScroll: options?.preventScroll });
  };

  if (options?.delay) {
    setTimeout(focus, options.delay);
  } else {
    focus();
  }
}

/**
 * Creates a range of numbers.
 * Useful for generating arrays for mapping.
 *
 * @example
 * ```tsx
 * range(5) // [0, 1, 2, 3, 4]
 * range(1, 5) // [1, 2, 3, 4]
 * ```
 */
export function range(start: number, end?: number): number[] {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  return Array.from({ length: end - start }, (_, i) => start + i);
}
