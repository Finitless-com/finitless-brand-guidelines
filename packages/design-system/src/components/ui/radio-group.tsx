import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@/lib/utils';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-3', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square h-5 w-5',
        'rounded-full border border-border',
        'bg-surface-card',
        'transition-all duration-150',
        'hover:border-border-strong',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-link focus-visible:ring-offset-2 focus-visible:ring-offset-background-base',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:border-brand-primary',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

/**
 * RadioGroup component for single selections.
 *
 * @example
 * ```tsx
 * <RadioGroup defaultValue="option1" onValueChange={setValue}>
 *   <div className="flex items-center gap-3">
 *     <RadioGroupItem value="option1" id="option1" />
 *     <Label htmlFor="option1">Option 1</Label>
 *   </div>
 *   <div className="flex items-center gap-3">
 *     <RadioGroupItem value="option2" id="option2" />
 *     <Label htmlFor="option2">Option 2</Label>
 *   </div>
 * </RadioGroup>
 * ```
 */
export { RadioGroup, RadioGroupItem };
