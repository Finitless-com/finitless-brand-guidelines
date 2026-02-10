import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

/**
 * Checkbox component for boolean selections.
 *
 * @example
 * ```tsx
 * // Basic checkbox
 * <Checkbox />
 *
 * // Controlled checkbox
 * <Checkbox checked={agreed} onCheckedChange={setAgreed} />
 *
 * // With label
 * <div className="flex items-center gap-3">
 *   <Checkbox id="terms" />
 *   <Label htmlFor="terms">Accept terms and conditions</Label>
 * </div>
 *
 * // Indeterminate state
 * <Checkbox checked="indeterminate" />
 *
 * // Disabled
 * <Checkbox disabled />
 * ```
 */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-5 w-5 shrink-0',
      'rounded-[6px] border border-border',
      'bg-surface-card',
      'transition-all duration-150',
      'hover:border-border-strong',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-link focus-visible:ring-offset-2 focus-visible:ring-offset-background-base',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary',
      'data-[state=indeterminate]:bg-brand-primary data-[state=indeterminate]:border-brand-primary',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-white')}
    >
      {props.checked === 'indeterminate' ? (
        <Minus className="h-3.5 w-3.5" strokeWidth={3} />
      ) : (
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
export default Checkbox;
