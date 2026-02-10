import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '../ui/button';

export interface OAuthButtonProps extends Omit<ButtonProps, 'variant'> {
  /** OAuth provider name (for accessibility) */
  provider: string;
  /** Provider icon (e.g., Google, Apple, Facebook logo) */
  icon: React.ReactNode;
}

/**
 * OAuthButton component for social login buttons.
 *
 * IMPORTANT: OAuth buttons should NEVER use the gradient CTA style.
 * They use the secondary glass pattern to differentiate from the main CTA.
 *
 * @example
 * ```tsx
 * <OAuthButton
 *   provider="Google"
 *   icon={<GoogleIcon className="h-5 w-5" />}
 * >
 *   Continue with Google
 * </OAuthButton>
 *
 * <OAuthButton
 *   provider="Apple"
 *   icon={<AppleIcon className="h-5 w-5" />}
 * >
 *   Continue with Apple
 * </OAuthButton>
 * ```
 */
const OAuthButton = React.forwardRef<HTMLButtonElement, OAuthButtonProps>(
  ({ className, provider, icon, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="secondary"
        size="lg"
        fullWidth
        className={cn(
          'gap-3',
          className
        )}
        aria-label={`Sign in with ${provider}`}
        {...props}
      >
        {icon}
        {children}
      </Button>
    );
  }
);

OAuthButton.displayName = 'OAuthButton';

export { OAuthButton };
export default OAuthButton;
