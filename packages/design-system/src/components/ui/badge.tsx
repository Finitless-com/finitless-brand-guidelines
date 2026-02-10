import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Badge variants using CVA.
 */
export const badgeVariants = cva(
  [
    'inline-flex items-center gap-1.5',
    'rounded-full',
    'text-xs font-medium',
    'transition-colors',
  ],
  {
    variants: {
      variant: {
        default: 'bg-surface-card border border-border text-white',
        primary: 'bg-brand-primary/20 text-brand-link border border-brand-primary/30',
        success: 'bg-semantic-success/20 text-semantic-success border border-semantic-success/30',
        warning: 'bg-semantic-warning/20 text-semantic-warning border border-semantic-warning/30',
        error: 'bg-semantic-error/20 text-semantic-error border border-semantic-error/30',
        info: 'bg-brand-link/20 text-brand-link border border-brand-link/30',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-1 text-xs',
        lg: 'px-3 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /** Optional dot indicator */
  dot?: boolean;
  /** Dot color (defaults to variant color) */
  dotColor?: string;
}

/**
 * Badge component for status indicators, labels, and tags.
 *
 * @example
 * ```tsx
 * // Default badge
 * <Badge>Default</Badge>
 *
 * // Status badges
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning">Pending</Badge>
 * <Badge variant="error">Failed</Badge>
 *
 * // With dot indicator (like "Live" status)
 * <Badge variant="success" dot>Live</Badge>
 *
 * // Different sizes
 * <Badge size="sm">Small</Badge>
 * <Badge size="lg">Large</Badge>
 * ```
 */
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, dot, dotColor, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {dot && (
          <span
            className="h-1.5 w-1.5 rounded-full animate-pulse"
            style={{
              backgroundColor:
                dotColor ||
                (variant === 'success'
                  ? '#22c55e'
                  : variant === 'error'
                  ? '#ff3b45'
                  : variant === 'warning'
                  ? '#f59e0b'
                  : '#00B7FF'),
            }}
          />
        )}
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
export default Badge;
