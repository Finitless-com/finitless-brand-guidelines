import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '@/lib/utils';

// ============================================================================
// POPOVER
// ============================================================================

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverClose = PopoverPrimitive.Close;

// ============================================================================
// POPOVER CONTENT
// ============================================================================

export interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  /** Show arrow pointer */
  showArrow?: boolean;
}

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(
  (
    {
      className,
      align = 'center',
      sideOffset = 4,
      showArrow = false,
      children,
      ...props
    },
    ref
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-popover',
          'w-72 p-4',
          'rounded-xl',
          'bg-background-elevated',
          'border border-border',
          'shadow-lg',
          'text-text-primary',
          'outline-none',
          // Animations
          'data-[state=open]:animate-fade-in',
          'data-[state=closed]:animate-fade-out',
          'data-[side=bottom]:slide-in-from-top-2',
          'data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2',
          'data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      >
        {children}
        {showArrow && (
          <PopoverPrimitive.Arrow
            className="fill-background-elevated"
            width={12}
            height={6}
          />
        )}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// ============================================================================
// POPOVER HEADER
// ============================================================================

const PopoverHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('mb-3 space-y-1', className)}
    {...props}
  />
);
PopoverHeader.displayName = 'PopoverHeader';

// ============================================================================
// POPOVER TITLE
// ============================================================================

const PopoverTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4
    className={cn('text-sm font-medium text-text-primary', className)}
    {...props}
  />
);
PopoverTitle.displayName = 'PopoverTitle';

// ============================================================================
// POPOVER DESCRIPTION
// ============================================================================

const PopoverDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn('text-sm text-text-muted', className)}
    {...props}
  />
);
PopoverDescription.displayName = 'PopoverDescription';

// ============================================================================
// EXPORTS
// ============================================================================

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverClose,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
};
