import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * FormContainer variants using CVA.
 */
export const formContainerVariants = cva(
  [
    'w-full',
    'bg-surface-card border border-border',
    'rounded-[16px]',
  ],
  {
    variants: {
      size: {
        sm: 'max-w-[400px] p-6',
        md: 'max-w-[480px] p-8',
        lg: 'max-w-[560px] p-10',
      },
      centered: {
        true: 'mx-auto',
      },
    },
    defaultVariants: {
      size: 'md',
      centered: true,
    },
  }
);

export interface FormContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof formContainerVariants> {}

/**
 * FormContainer component for wrapping forms.
 *
 * @example
 * ```tsx
 * <FormContainer>
 *   <Logo variant="horizontal" size="sm" className="mb-8" />
 *   <h1 className="text-2xl font-semibold mb-6">Welcome back</h1>
 *
 *   <form className="space-y-4">
 *     <div className="space-y-2">
 *       <Label htmlFor="email">Email</Label>
 *       <Input id="email" type="email" placeholder="you@example.com" />
 *     </div>
 *
 *     <div className="space-y-2">
 *       <Label htmlFor="password">Password</Label>
 *       <Input id="password" type="password" />
 *     </div>
 *
 *     <CTAButton type="submit" fullWidth>
 *       Sign In
 *     </CTAButton>
 *   </form>
 *
 *   <FormDivider />
 *
 *   <OAuthButton provider="Google" icon={<GoogleIcon />}>
 *     Continue with Google
 *   </OAuthButton>
 * </FormContainer>
 * ```
 */
const FormContainer = React.forwardRef<HTMLDivElement, FormContainerProps>(
  ({ className, size, centered, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(formContainerVariants({ size, centered }), className)}
        {...props}
      />
    );
  }
);

FormContainer.displayName = 'FormContainer';

/**
 * FormDivider component for separating form sections.
 *
 * @example
 * ```tsx
 * <CTAButton fullWidth>Sign In</CTAButton>
 * <FormDivider />
 * <OAuthButton>Continue with Google</OAuthButton>
 * ```
 */
const FormDivider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-4 my-6', className)}
    {...props}
  >
    <div className="h-px flex-1 bg-border" />
    <span className="text-xs text-text-placeholder">or</span>
    <div className="h-px flex-1 bg-border" />
  </div>
));

FormDivider.displayName = 'FormDivider';

export { FormContainer, FormDivider };
export default FormContainer;
