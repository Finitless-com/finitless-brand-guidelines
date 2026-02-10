import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '../ui/button';

export interface CTAButtonProps extends Omit<ButtonProps, 'variant'> {
  /** Glow intensity */
  glow?: 'none' | 'subtle' | 'strong';
}

/**
 * CTAButton component - The primary call-to-action button.
 *
 * IMPORTANT: Only use ONE CTAButton per page/view.
 * Use for hero sections, form submits, or the single most important action.
 *
 * @example
 * ```tsx
 * // Hero CTA
 * <CTAButton size="lg">Get Started Free</CTAButton>
 *
 * // Form submit
 * <CTAButton fullWidth>Sign Up</CTAButton>
 *
 * // With stronger glow
 * <CTAButton glow="strong">Start Trial</CTAButton>
 *
 * // Loading state
 * <CTAButton isLoading>Submitting...</CTAButton>
 * ```
 */
const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, glow = 'subtle', children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="cta"
        className={cn(
          glow === 'none' && 'shadow-none',
          glow === 'subtle' && 'shadow-glow',
          glow === 'strong' && 'shadow-[0_0_60px_-10px_rgba(0,183,255,0.5)]',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

CTAButton.displayName = 'CTAButton';

export { CTAButton };
export default CTAButton;
