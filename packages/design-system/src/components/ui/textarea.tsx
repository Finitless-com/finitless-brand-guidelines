import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Textarea variants using CVA.
 */
export const textareaVariants = cva(
  [
    'flex min-h-[120px] w-full',
    'bg-surface-card border border-border',
    'rounded-[12px]',
    'px-4 py-3',
    'text-base text-white',
    'placeholder:text-text-placeholder',
    'transition-all duration-150',
    'focus:outline-none focus:border-brand-link/50 focus:ring-2 focus:ring-brand-link/20',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'resize-vertical',
  ],
  {
    variants: {
      error: {
        true: 'border-semantic-error ring-2 ring-semantic-error/15 focus:border-semantic-error focus:ring-semantic-error/20',
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  /** Error state (adds red border) */
  error?: boolean;
}

/**
 * Textarea component with glass styling.
 *
 * @example
 * ```tsx
 * // Basic textarea
 * <Textarea placeholder="Enter your message..." />
 *
 * // With label
 * <div className="space-y-2">
 *   <Label htmlFor="message">Message</Label>
 *   <Textarea id="message" placeholder="Type your message here..." />
 * </div>
 *
 * // Error state
 * <Textarea error placeholder="Invalid input" />
 * ```
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ error }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
export default Textarea;
