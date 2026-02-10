import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Button variants using CVA.
 *
 * Variants:
 * - primary: Solid Finitless Blue (#165DFC) - Default for most actions
 * - cta: Gradient button (cyan → purple) - ONE per page, hero/submit only
 * - secondary: Glass background with border - Alternative actions
 * - ghost: Transparent with hover state - Tertiary actions
 * - destructive: Error red - Dangerous actions
 * - link: Looks like a link - Inline actions
 */
export const buttonVariants = cva(
  // Base styles
  [
    'inline-flex items-center justify-center gap-2',
    'font-semibold text-sm',
    'rounded-[12px]',
    'transition-all duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-link focus-visible:ring-offset-2 focus-visible:ring-offset-background-base',
    'disabled:pointer-events-none disabled:opacity-50',
    'select-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-brand-primary text-white',
          'hover:bg-brand-primary/90',
          'active:bg-brand-primary/80',
        ],
        cta: [
          'bg-gradient-cta text-white',
          'shadow-glow',
          'hover:shadow-[0_0_50px_-10px_rgba(0,183,255,0.4)]',
          'active:shadow-[0_0_30px_-10px_rgba(0,183,255,0.3)]',
        ],
        secondary: [
          'bg-surface-card border border-border',
          'text-white',
          'hover:bg-surface-hover hover:border-border-strong',
          'active:bg-surface-active',
        ],
        ghost: [
          'bg-transparent text-text-muted',
          'hover:bg-surface-card hover:text-white',
          'active:bg-surface-hover',
        ],
        destructive: [
          'bg-semantic-error text-white',
          'hover:bg-semantic-error/90',
          'active:bg-semantic-error/80',
        ],
        link: [
          'bg-transparent text-brand-link underline-offset-4',
          'hover:underline',
          'p-0 h-auto',
        ],
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'h-11 w-11 p-0',
        'icon-sm': 'h-9 w-9 p-0',
        'icon-lg': 'h-12 w-12 p-0',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Shows loading spinner and disables button */
  isLoading?: boolean;
  /** Icon to show before children */
  leftIcon?: React.ReactNode;
  /** Icon to show after children */
  rightIcon?: React.ReactNode;
}

/**
 * Button component with multiple variants and sizes.
 *
 * @example
 * ```tsx
 * // Primary button (default)
 * <Button>Save Changes</Button>
 *
 * // CTA gradient button (only ONE per page)
 * <Button variant="cta" size="lg" fullWidth>
 *   Get Started
 * </Button>
 *
 * // Secondary button
 * <Button variant="secondary">Cancel</Button>
 *
 * // With icons
 * <Button leftIcon={<PlusIcon />}>Add Item</Button>
 *
 * // Loading state
 * <Button isLoading>Submitting...</Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <LoadingSpinner />
            <span>{children}</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

/**
 * Simple loading spinner for button loading state.
 */
function LoadingSpinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export { Button };
export default Button;
