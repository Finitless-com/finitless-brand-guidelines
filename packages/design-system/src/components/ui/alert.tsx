import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Alert variants using CVA.
 */
export const alertVariants = cva(
  [
    'relative w-full',
    'rounded-[12px] border p-4',
    '[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:h-5 [&>svg]:w-5',
    '[&>svg~*]:pl-8',
  ],
  {
    variants: {
      variant: {
        default: 'bg-surface-card border-border text-white [&>svg]:text-text-muted',
        info: 'bg-brand-link/10 border-brand-link/30 text-brand-link [&>svg]:text-brand-link',
        success: 'bg-semantic-success/10 border-semantic-success/30 text-semantic-success [&>svg]:text-semantic-success',
        warning: 'bg-semantic-warning/10 border-semantic-warning/30 text-semantic-warning [&>svg]:text-semantic-warning',
        error: 'bg-semantic-error/10 border-semantic-error/30 text-semantic-error [&>svg]:text-semantic-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const alertIcons = {
  default: Info,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle,
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /** Show icon matching the variant */
  icon?: boolean;
  /** Dismissible alert with close button */
  dismissible?: boolean;
  /** Callback when alert is dismissed */
  onDismiss?: () => void;
}

/**
 * Alert component for status messages.
 *
 * @example
 * ```tsx
 * // Default alert
 * <Alert>
 *   <AlertTitle>Note</AlertTitle>
 *   <AlertDescription>This is an informational alert.</AlertDescription>
 * </Alert>
 *
 * // Success alert with icon
 * <Alert variant="success" icon>
 *   <AlertTitle>Success!</AlertTitle>
 *   <AlertDescription>Your changes have been saved.</AlertDescription>
 * </Alert>
 *
 * // Error alert, dismissible
 * <Alert variant="error" icon dismissible onDismiss={() => console.log('dismissed')}>
 *   <AlertTitle>Error</AlertTitle>
 *   <AlertDescription>Something went wrong.</AlertDescription>
 * </Alert>
 * ```
 */
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', icon, dismissible, onDismiss, children, ...props }, ref) => {
    const Icon = alertIcons[variant || 'default'];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {icon && <Icon />}
        {children}
        {dismissible && (
          <button
            onClick={onDismiss}
            className="absolute right-2 top-2 rounded-full p-1 opacity-70 hover:opacity-100 transition-opacity"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Dismiss</span>
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm opacity-90 [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
