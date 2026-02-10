import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Button variants using CVA - Enhanced v0.1.0
 *
 * Variants:
 * - primary: Solid Finitless Blue (#165DFC) - Default for most actions
 * - cta: Gradient button (cyan → purple) - ONE per page, hero/submit only
 * - secondary: Glass background with border - Alternative actions
 * - outline: White border, transparent bg - Subtle alternative
 * - ghost: Transparent with hover state - Tertiary actions
 * - destructive: Error red - Dangerous actions
 * - warning: Amber - Caution actions
 * - link: Looks like a link - Inline actions
 *
 * Sizes:
 * - xs: 28px height - Compact inline
 * - sm: 36px height - Small
 * - md: 44px height - Default
 * - lg: 48px height - Prominent
 * - xl: 52px height - Large
 * - 2xl: 56px height - Hero
 * - icon: Square button for icons only
 *
 * Shapes:
 * - default: Standard rounded (12px)
 * - square: Equal width/height for icon buttons
 * - pill: Full rounded ends
 */
export const buttonVariants = cva(
  // Base styles
  [
    'inline-flex items-center justify-center gap-2',
    'font-semibold',
    'rounded-[12px]',
    'transition-all duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-link focus-visible:ring-offset-2 focus-visible:ring-offset-background-base',
    'disabled:pointer-events-none disabled:opacity-50',
    'select-none',
    'active:scale-[0.98]',
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
        outline: [
          'bg-transparent border border-border-strong',
          'text-white',
          'hover:bg-surface-card hover:border-white/30',
          'active:bg-surface-hover',
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
        warning: [
          'bg-semantic-warning text-gray-900',
          'hover:bg-semantic-warning/90',
          'active:bg-semantic-warning/80',
        ],
        link: [
          'bg-transparent text-brand-link underline-offset-4',
          'hover:underline',
          'p-0 h-auto',
        ],
      },
      size: {
        xs: 'h-7 px-2.5 text-xs gap-1',
        sm: 'h-9 px-3 text-sm gap-1.5',
        md: 'h-11 px-4 text-sm gap-2',
        lg: 'h-12 px-5 text-base gap-2',
        xl: 'h-[52px] px-6 text-base gap-2',
        '2xl': 'h-14 px-8 text-lg gap-2.5',
        icon: 'h-11 w-11 p-0',
        'icon-xs': 'h-7 w-7 p-0',
        'icon-sm': 'h-9 w-9 p-0',
        'icon-lg': 'h-12 w-12 p-0',
        'icon-xl': 'h-14 w-14 p-0',
      },
      shape: {
        default: 'rounded-[12px]',
        square: 'rounded-[12px] aspect-square',
        pill: 'rounded-full',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    compoundVariants: [
      // Icon sizes get square shape automatically
      {
        size: ['icon', 'icon-xs', 'icon-sm', 'icon-lg', 'icon-xl'],
        shape: 'default',
        className: 'aspect-square',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      shape: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Shows loading spinner and disables button */
  isLoading?: boolean;
  /** Icon to show before children (legacy alias for prefixIcon) */
  leftIcon?: React.ReactNode;
  /** Icon to show after children (legacy alias for suffixIcon) */
  rightIcon?: React.ReactNode;
  /** Icon to show before children */
  prefixIcon?: React.ReactNode;
  /** Icon to show after children */
  suffixIcon?: React.ReactNode;
  /** Element type to render as (for polymorphic usage) */
  asChild?: boolean;
}

/**
 * Button component with multiple variants, sizes, and shapes.
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
 * // Outline button
 * <Button variant="outline">View Details</Button>
 *
 * // Warning button
 * <Button variant="warning">Proceed with Caution</Button>
 *
 * // With icons
 * <Button prefixIcon={<PlusIcon />}>Add Item</Button>
 * <Button suffixIcon={<ArrowRightIcon />}>Continue</Button>
 *
 * // Icon-only button
 * <Button size="icon" variant="ghost">
 *   <SearchIcon />
 * </Button>
 *
 * // Pill shape
 * <Button shape="pill">Pill Button</Button>
 *
 * // Extra small for compact UIs
 * <Button size="xs">Compact</Button>
 *
 * // Extra large for hero sections
 * <Button size="2xl" variant="cta">Hero CTA</Button>
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
      shape,
      fullWidth,
      isLoading = false,
      leftIcon,
      rightIcon,
      prefixIcon,
      suffixIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    // Support both legacy (leftIcon/rightIcon) and new (prefixIcon/suffixIcon) naming
    const prefix = prefixIcon || leftIcon;
    const suffix = suffixIcon || rightIcon;

    // Determine icon size based on button size
    const iconSizeClass = {
      xs: 'h-3 w-3',
      sm: 'h-3.5 w-3.5',
      md: 'h-4 w-4',
      lg: 'h-4 w-4',
      xl: 'h-5 w-5',
      '2xl': 'h-5 w-5',
      icon: 'h-5 w-5',
      'icon-xs': 'h-3.5 w-3.5',
      'icon-sm': 'h-4 w-4',
      'icon-lg': 'h-5 w-5',
      'icon-xl': 'h-6 w-6',
    }[size || 'md'];

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, shape, fullWidth }), className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <LoadingSpinner className={iconSizeClass} />
            {children && <span className="opacity-70">{children}</span>}
          </>
        ) : (
          <>
            {prefix && <span className={cn('shrink-0', iconSizeClass)}>{prefix}</span>}
            {children}
            {suffix && <span className={cn('shrink-0', iconSizeClass)}>{suffix}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

/**
 * Loading spinner for button loading state.
 */
function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('animate-spin', className)}
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

export { Button, LoadingSpinner };
export default Button;
