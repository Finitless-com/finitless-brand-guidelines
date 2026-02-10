import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ============================================================================
// TOGGLE GROUP CONTEXT
// ============================================================================

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleGroupItemVariants>
>({
  size: 'md',
  variant: 'default',
});

// ============================================================================
// TOGGLE GROUP VARIANTS
// ============================================================================

const toggleGroupVariants = cva(
  [
    'inline-flex items-center justify-center',
    'rounded-xl',
    'bg-white/5',
    'p-1',
  ],
  {
    variants: {
      orientation: {
        horizontal: 'flex-row',
        vertical: 'flex-col',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  }
);

const toggleGroupItemVariants = cva(
  [
    'inline-flex items-center justify-center',
    'text-sm font-medium',
    'transition-all duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-link focus-visible:ring-offset-2 focus-visible:ring-offset-background-base',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-transparent text-text-muted',
          'hover:bg-white/5 hover:text-text-primary',
          'data-[state=on]:bg-brand-primary data-[state=on]:text-white',
        ],
        outline: [
          'bg-transparent text-text-muted',
          'border border-transparent',
          'hover:bg-white/5 hover:text-text-primary',
          'data-[state=on]:border-brand-primary data-[state=on]:text-brand-link',
        ],
        ghost: [
          'bg-transparent text-text-muted',
          'hover:bg-white/5 hover:text-text-primary',
          'data-[state=on]:bg-white/10 data-[state=on]:text-text-primary',
        ],
      },
      size: {
        sm: 'h-8 px-2.5 text-xs rounded-lg gap-1',
        md: 'h-9 px-3 text-sm rounded-lg gap-1.5',
        lg: 'h-10 px-4 text-sm rounded-lg gap-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

// ============================================================================
// TOGGLE GROUP
// ============================================================================

interface ToggleGroupBaseProps {
  /** Orientation of the toggle group */
  orientation?: 'horizontal' | 'vertical';
  /** Variant for all items */
  variant?: 'default' | 'outline' | 'ghost';
  /** Size for all items */
  size?: 'sm' | 'md' | 'lg';
  /** Additional class names */
  className?: string;
  /** Children */
  children?: React.ReactNode;
}

export interface ToggleGroupSingleProps extends ToggleGroupBaseProps {
  type: 'single';
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export interface ToggleGroupMultipleProps extends ToggleGroupBaseProps {
  type: 'multiple';
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

export type ToggleGroupProps = ToggleGroupSingleProps | ToggleGroupMultipleProps;

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(
  (props, ref) => {
    const {
      className,
      orientation = 'horizontal',
      variant,
      size,
      children,
      type,
      ...rest
    } = props;

    return (
      <ToggleGroupPrimitive.Root
        ref={ref}
        type={type}
        orientation={orientation}
        className={cn(toggleGroupVariants({ orientation }), className)}
        {...(rest as Record<string, unknown>)}
      >
        <ToggleGroupContext.Provider value={{ variant, size }}>
          {children}
        </ToggleGroupContext.Provider>
      </ToggleGroupPrimitive.Root>
    );
  }
);

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

// ============================================================================
// TOGGLE GROUP ITEM
// ============================================================================

export interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> {
  /** Variant for this item */
  variant?: 'default' | 'outline' | 'ghost';
  /** Size for this item */
  size?: 'sm' | 'md' | 'lg';
}

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleGroupItemVariants({
          variant: variant ?? context.variant,
          size: size ?? context.size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

// ============================================================================
// EXPORTS
// ============================================================================

export {
  ToggleGroup,
  ToggleGroupItem,
  toggleGroupVariants,
  toggleGroupItemVariants,
};
