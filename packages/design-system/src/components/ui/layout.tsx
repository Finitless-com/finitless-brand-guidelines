import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ============================================================================
// GRID
// ============================================================================

const gridVariants = cva('grid', {
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12',
      none: 'grid-cols-none',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      8: 'gap-8',
      10: 'gap-10',
      12: 'gap-12',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
  },
  defaultVariants: {
    columns: 12,
    gap: 4,
    align: 'stretch',
  },
});

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  /** Element type to render */
  as?: React.ElementType;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    { className, columns, gap, align, justify, as: Comp = 'div', ...props },
    ref
  ) => (
    <Comp
      ref={ref}
      className={cn(gridVariants({ columns, gap, align, justify }), className)}
      {...props}
    />
  )
);
Grid.displayName = 'Grid';

// ============================================================================
// GRID ITEM
// ============================================================================

const gridItemVariants = cva('', {
  variants: {
    span: {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      7: 'col-span-7',
      8: 'col-span-8',
      9: 'col-span-9',
      10: 'col-span-10',
      11: 'col-span-11',
      12: 'col-span-12',
      full: 'col-span-full',
    },
    start: {
      1: 'col-start-1',
      2: 'col-start-2',
      3: 'col-start-3',
      4: 'col-start-4',
      5: 'col-start-5',
      6: 'col-start-6',
      7: 'col-start-7',
      8: 'col-start-8',
      9: 'col-start-9',
      10: 'col-start-10',
      11: 'col-start-11',
      12: 'col-start-12',
      auto: 'col-start-auto',
    },
    rowSpan: {
      1: 'row-span-1',
      2: 'row-span-2',
      3: 'row-span-3',
      4: 'row-span-4',
      5: 'row-span-5',
      6: 'row-span-6',
      full: 'row-span-full',
    },
  },
  defaultVariants: {
    span: 1,
  },
});

export interface GridItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridItemVariants> {}

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, span, start, rowSpan, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(gridItemVariants({ span, start, rowSpan }), className)}
      {...props}
    />
  )
);
GridItem.displayName = 'GridItem';

// ============================================================================
// CONTAINER
// ============================================================================

const containerVariants = cva('mx-auto w-full px-4 sm:px-6 lg:px-8', {
  variants: {
    size: {
      xs: 'max-w-xs',           // 320px
      sm: 'max-w-sm',           // 384px
      md: 'max-w-md',           // 448px
      lg: 'max-w-lg',           // 512px
      xl: 'max-w-xl',           // 576px
      '2xl': 'max-w-2xl',       // 672px
      '3xl': 'max-w-3xl',       // 768px
      '4xl': 'max-w-4xl',       // 896px
      '5xl': 'max-w-5xl',       // 1024px
      '6xl': 'max-w-6xl',       // 1152px
      '7xl': 'max-w-7xl',       // 1280px
      full: 'max-w-full',
      prose: 'max-w-prose',     // 65ch
      // Named sizes
      form: 'max-w-[480px]',
      card: 'max-w-[400px]',
      content: 'max-w-[768px]',
      wide: 'max-w-[1024px]',
      site: 'max-w-[1440px]',
    },
    padding: {
      none: 'px-0',
      sm: 'px-4',
      md: 'px-4 sm:px-6',
      lg: 'px-4 sm:px-6 lg:px-8',
    },
  },
  defaultVariants: {
    size: '7xl',
    padding: 'lg',
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  /** Element type to render */
  as?: React.ElementType;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, as: Comp = 'div', ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(containerVariants({ size, padding }), className)}
      {...props}
    />
  )
);
Container.displayName = 'Container';

// ============================================================================
// STACK
// ============================================================================

const stackVariants = cva('flex', {
  variants: {
    direction: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      8: 'gap-8',
      10: 'gap-10',
      12: 'gap-12',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
      reverse: 'flex-wrap-reverse',
    },
  },
  defaultVariants: {
    direction: 'vertical',
    gap: 4,
    align: 'stretch',
    wrap: false,
  },
});

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
  /** Element type to render */
  as?: React.ElementType;
  /** Show dividers between items */
  divider?: boolean;
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      direction,
      gap,
      align,
      justify,
      wrap,
      divider,
      children,
      as: Comp = 'div',
      ...props
    },
    ref
  ) => {
    const childArray = React.Children.toArray(children).filter(Boolean);

    return (
      <Comp
        ref={ref}
        className={cn(
          stackVariants({ direction, gap, align, justify, wrap }),
          className
        )}
        {...props}
      >
        {divider
          ? childArray.map((child, index) => (
              <React.Fragment key={index}>
                {child}
                {index < childArray.length - 1 && (
                  <div
                    className={cn(
                      'bg-border',
                      direction === 'horizontal' ? 'w-px self-stretch' : 'h-px'
                    )}
                  />
                )}
              </React.Fragment>
            ))
          : children}
      </Comp>
    );
  }
);
Stack.displayName = 'Stack';

// ============================================================================
// HSTACK (Horizontal Stack shortcut)
// ============================================================================

const HStack = React.forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  (props, ref) => <Stack ref={ref} direction="horizontal" {...props} />
);
HStack.displayName = 'HStack';

// ============================================================================
// VSTACK (Vertical Stack shortcut)
// ============================================================================

const VStack = React.forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  (props, ref) => <Stack ref={ref} direction="vertical" {...props} />
);
VStack.displayName = 'VStack';

// ============================================================================
// SPACER
// ============================================================================

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fixed size in spacing units (1 unit = 4px) */
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
  /** Grow to fill available space */
  grow?: boolean;
}

const spacerSizeMap: Record<NonNullable<SpacerProps['size']>, string> = {
  1: 'h-1 w-1',
  2: 'h-2 w-2',
  3: 'h-3 w-3',
  4: 'h-4 w-4',
  5: 'h-5 w-5',
  6: 'h-6 w-6',
  8: 'h-8 w-8',
  10: 'h-10 w-10',
  12: 'h-12 w-12',
  16: 'h-16 w-16',
  20: 'h-20 w-20',
  24: 'h-24 w-24',
};

const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, size, grow, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        size && spacerSizeMap[size],
        grow && 'flex-grow',
        !size && !grow && 'flex-grow',
        className
      )}
      {...props}
    />
  )
);
Spacer.displayName = 'Spacer';

// ============================================================================
// CENTER
// ============================================================================

export interface CenterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Center inline (horizontally) */
  inline?: boolean;
}

const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  ({ className, inline, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-center',
        inline && 'inline-flex',
        className
      )}
      {...props}
    />
  )
);
Center.displayName = 'Center';

// ============================================================================
// EXPORTS
// ============================================================================

export {
  Grid,
  GridItem,
  gridVariants,
  gridItemVariants,
  Container,
  containerVariants,
  Stack,
  HStack,
  VStack,
  stackVariants,
  Spacer,
  Center,
};
