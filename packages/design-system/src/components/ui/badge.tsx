import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Badge variants using CVA.
 */
export const badgeVariants = cva(
  [
    'inline-flex items-center gap-1.5',
    'text-xs font-medium',
    'transition-colors duration-150',
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
        // New variants
        outline: 'bg-transparent border border-border text-text-muted',
        'outline-primary': 'bg-transparent border border-brand-primary text-brand-link',
        'outline-success': 'bg-transparent border border-semantic-success text-semantic-success',
        'outline-error': 'bg-transparent border border-semantic-error text-semantic-error',
        gradient: [
          'bg-gradient-to-r from-brand-link via-brand-purple to-brand-magenta',
          'text-white border-0',
        ],
        secondary: 'bg-white/5 text-text-primary border border-white/10',
      },
      size: {
        xs: 'px-1.5 py-0.5 text-[10px]',
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-1 text-xs',
        lg: 'px-3 py-1.5 text-sm',
      },
      shape: {
        default: 'rounded-md',
        pill: 'rounded-full',
        square: 'rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      shape: 'pill',
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
  /** Animate the dot with pulse */
  dotPulse?: boolean;
  /** Show close/remove button */
  removable?: boolean;
  /** Callback when remove button is clicked */
  onRemove?: () => void;
  /** Icon to show before text */
  icon?: React.ReactNode;
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
 * // With pulsing dot
 * <Badge variant="success" dot dotPulse>Live</Badge>
 *
 * // Different sizes
 * <Badge size="sm">Small</Badge>
 * <Badge size="lg">Large</Badge>
 *
 * // Shapes
 * <Badge shape="pill">Pill</Badge>
 * <Badge shape="square">Square</Badge>
 *
 * // Outline variants
 * <Badge variant="outline">Outline</Badge>
 * <Badge variant="outline-primary">Primary</Badge>
 *
 * // Gradient badge
 * <Badge variant="gradient">Premium</Badge>
 *
 * // Removable badge
 * <Badge removable onRemove={() => console.log('removed')}>Tag</Badge>
 *
 * // With icon
 * <Badge icon={<CheckIcon />}>Verified</Badge>
 * ```
 */
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      dot,
      dotColor,
      dotPulse = true,
      removable,
      onRemove,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const getDotColor = () => {
      if (dotColor) return dotColor;
      switch (variant) {
        case 'success':
        case 'outline-success':
          return '#22c55e';
        case 'error':
        case 'outline-error':
          return '#ff3b45';
        case 'warning':
          return '#f59e0b';
        case 'primary':
        case 'outline-primary':
        case 'gradient':
          return '#00B7FF';
        default:
          return '#00B7FF';
      }
    };

    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size, shape }), className)}
        {...props}
      >
        {dot && (
          <span
            className={cn('h-1.5 w-1.5 rounded-full', dotPulse && 'animate-pulse')}
            style={{ backgroundColor: getDotColor() }}
          />
        )}
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
        {removable && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            className={cn(
              'ml-0.5 -mr-1',
              'rounded-full p-0.5',
              'hover:bg-white/10',
              'focus:outline-none focus:ring-1 focus:ring-brand-link',
              'transition-colors duration-150'
            )}
          >
            <X className="h-3 w-3" />
            <span className="sr-only">Remove</span>
          </button>
        )}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
export default Badge;
