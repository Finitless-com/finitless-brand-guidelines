import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * GlassCard variants using CVA.
 */
export const glassCardVariants = cva(
  [
    'bg-surface-card',
    'border border-border',
    'backdrop-blur-[8px]',
    'transition-all duration-150',
  ],
  {
    variants: {
      size: {
        sm: 'rounded-[8px] p-4',
        md: 'rounded-[12px] p-6',
        lg: 'rounded-[16px] p-8',
      },
      interactive: {
        true: [
          'cursor-pointer',
          'hover:border-brand-link/50',
          'hover:shadow-lg hover:shadow-brand-link/10',
        ],
      },
      highlight: {
        none: '',
        primary: 'border-l-4 border-l-brand-primary',
        success: 'border-l-4 border-l-semantic-success',
        warning: 'border-l-4 border-l-semantic-warning',
        error: 'border-l-4 border-l-semantic-error',
        cyan: 'border-l-4 border-l-brand-link',
      },
    },
    defaultVariants: {
      size: 'md',
      interactive: false,
      highlight: 'none',
    },
  }
);

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {}

/**
 * GlassCard component for content containers.
 *
 * @example
 * ```tsx
 * // Basic glass card
 * <GlassCard>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here.</p>
 * </GlassCard>
 *
 * // Interactive card (with hover effects)
 * <GlassCard interactive>
 *   <h3>Clickable Card</h3>
 * </GlassCard>
 *
 * // Stat card with accent border
 * <GlassCard highlight="primary">
 *   <div className="text-2xl font-bold">$31,000</div>
 *   <div className="text-text-muted">Revenue recovered</div>
 * </GlassCard>
 *
 * // Large card
 * <GlassCard size="lg">
 *   <h2>Section Title</h2>
 * </GlassCard>
 * ```
 */
const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, size, interactive, highlight, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(glassCardVariants({ size, interactive, highlight }), className)}
        {...props}
      />
    );
  }
);

GlassCard.displayName = 'GlassCard';

export { GlassCard };
export default GlassCard;
