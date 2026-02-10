import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * GradientText variants using CVA.
 */
export const gradientTextVariants = cva(
  [
    'bg-clip-text text-transparent',
    'bg-gradient-to-r',
  ],
  {
    variants: {
      gradient: {
        brand: 'from-brand-link via-brand-purple to-brand-magenta',
        cta: 'from-brand-link to-brand-purple',
        cyan: 'from-brand-link to-brand-link/60',
        purple: 'from-brand-purple to-brand-magenta',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
      },
    },
    defaultVariants: {
      gradient: 'brand',
      weight: 'bold',
    },
  }
);

export interface GradientTextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof gradientTextVariants> {
  /** Render as a different element */
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

/**
 * GradientText component for brand-colored text.
 *
 * @example
 * ```tsx
 * // Basic gradient text
 * <GradientText>Never Miss a Sale. Ever.</GradientText>
 *
 * // As a heading
 * <GradientText as="h1" className="text-5xl">
 *   AI Ordering Agents
 * </GradientText>
 *
 * // CTA gradient (cyan → purple)
 * <GradientText gradient="cta">Get Started</GradientText>
 *
 * // With custom weight
 * <GradientText weight="extrabold" className="text-6xl">
 *   Finitless
 * </GradientText>
 * ```
 */
const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, gradient, weight, as: Component = 'span', children, ...props }, ref) => {
    return (
      <Component
        ref={ref as React.Ref<HTMLSpanElement>}
        className={cn(gradientTextVariants({ gradient, weight }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

GradientText.displayName = 'GradientText';

export { GradientText };
export default GradientText;
