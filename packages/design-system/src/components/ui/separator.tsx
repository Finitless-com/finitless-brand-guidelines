import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '@/lib/utils';

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {}

/**
 * Separator component for visual division.
 *
 * @example
 * ```tsx
 * // Horizontal separator (default)
 * <Separator />
 *
 * // Vertical separator
 * <Separator orientation="vertical" className="h-6" />
 *
 * // Form divider with text
 * <div className="flex items-center gap-4 my-6">
 *   <Separator className="flex-1" />
 *   <span className="text-xs text-text-placeholder">or</span>
 *   <Separator className="flex-1" />
 * </div>
 * ```
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
);

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
export default Separator;
