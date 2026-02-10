import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * IconContainer variants using CVA.
 */
export const iconContainerVariants = cva(
  [
    'inline-flex items-center justify-center',
    'rounded-[14px]',
  ],
  {
    variants: {
      size: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16',
      },
      color: {
        primary: 'bg-brand-primary/[0.12] text-brand-primary',
        link: 'bg-brand-link/[0.12] text-brand-link',
        success: 'bg-semantic-success/[0.12] text-semantic-success',
        warning: 'bg-semantic-warning/[0.12] text-semantic-warning',
        error: 'bg-semantic-error/[0.12] text-semantic-error',
        muted: 'bg-surface-hover text-text-muted',
      },
    },
    defaultVariants: {
      size: 'lg',
      color: 'primary',
    },
  }
);

export interface IconContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconContainerVariants> {}

/**
 * IconContainer component for wrapping icons with colored backgrounds.
 *
 * Commonly used in stat cards and feature lists.
 *
 * @example
 * ```tsx
 * // In a stat card
 * <GlassCard highlight="primary">
 *   <div className="flex items-start gap-4">
 *     <IconContainer color="primary">
 *       <DollarSign className="h-6 w-6" />
 *     </IconContainer>
 *     <div>
 *       <div className="text-2xl font-bold">$31,000</div>
 *       <div className="text-text-muted">Revenue recovered</div>
 *     </div>
 *   </div>
 * </GlassCard>
 *
 * // Different colors
 * <IconContainer color="success"><CheckIcon /></IconContainer>
 * <IconContainer color="warning"><AlertIcon /></IconContainer>
 * <IconContainer color="error"><XIcon /></IconContainer>
 *
 * // Different sizes
 * <IconContainer size="sm"><Icon /></IconContainer>
 * <IconContainer size="xl"><Icon /></IconContainer>
 * ```
 */
const IconContainer = React.forwardRef<HTMLDivElement, IconContainerProps>(
  ({ className, size, color, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(iconContainerVariants({ size, color }), className)}
        {...props}
      />
    );
  }
);

IconContainer.displayName = 'IconContainer';

export { IconContainer };
export default IconContainer;
