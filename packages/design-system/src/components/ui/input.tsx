import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Input variants using CVA.
 */
export const inputVariants = cva(
  // Base styles
  [
    'flex w-full',
    'bg-surface-card border border-border',
    'rounded-[12px]',
    'text-base text-white',
    'placeholder:text-text-placeholder',
    'transition-all duration-150',
    'focus:outline-none focus:border-brand-link/50 focus:ring-2 focus:ring-brand-link/20',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
  ],
  {
    variants: {
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-4 text-base',
        lg: 'h-12 px-4 text-base',
      },
      error: {
        true: 'border-semantic-error ring-2 ring-semantic-error/15 focus:border-semantic-error focus:ring-semantic-error/20',
      },
    },
    defaultVariants: {
      size: 'lg',
      error: false,
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  /** Icon to show at the start of the input */
  startIcon?: React.ReactNode;
  /** Icon to show at the end of the input */
  endIcon?: React.ReactNode;
  /** Error state (adds red border) */
  error?: boolean;
}

/**
 * Input component with glass styling.
 *
 * @example
 * ```tsx
 * // Basic input
 * <Input placeholder="Enter your email" />
 *
 * // With label (use Label component)
 * <div className="space-y-2">
 *   <Label htmlFor="email">Email</Label>
 *   <Input id="email" type="email" placeholder="you@example.com" />
 * </div>
 *
 * // Error state
 * <Input error placeholder="Invalid input" />
 *
 * // With icons
 * <Input
 *   startIcon={<SearchIcon />}
 *   placeholder="Search..."
 * />
 * ```
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, error, startIcon, endIcon, ...props }, ref) => {
    // If we have icons, wrap in a container
    if (startIcon || endIcon) {
      return (
        <div className="relative">
          {startIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              {startIcon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({ size, error }),
              startIcon && 'pl-10',
              endIcon && 'pr-10',
              className
            )}
            ref={ref}
            {...props}
          />
          {endIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
              {endIcon}
            </div>
          )}
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(inputVariants({ size, error }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
export default Input;
