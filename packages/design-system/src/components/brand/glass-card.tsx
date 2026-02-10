import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

/**
 * GlassCard variants using CVA.
 */
export const glassCardVariants = cva(
  [
    'bg-surface-card',
    'border border-border',
    'backdrop-blur-[8px]',
    'transition-all duration-150',
  ],
  {
    variants: {
      size: {
        sm: 'rounded-[8px]',
        md: 'rounded-[12px]',
        lg: 'rounded-[16px]',
      },
      interactive: {
        true: [
          'cursor-pointer',
          'hover:border-brand-link/50',
          'hover:shadow-lg hover:shadow-brand-link/10',
        ],
      },
      highlight: {
        none: '',
        primary: 'border-l-4 border-l-brand-primary',
        success: 'border-l-4 border-l-semantic-success',
        warning: 'border-l-4 border-l-semantic-warning',
        error: 'border-l-4 border-l-semantic-error',
        cyan: 'border-l-4 border-l-brand-link',
      },
      noPadding: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // Only add padding when noPadding is false and no compound components are used
      { size: 'sm', noPadding: false, className: 'p-4' },
      { size: 'md', noPadding: false, className: 'p-6' },
      { size: 'lg', noPadding: false, className: 'p-8' },
    ],
    defaultVariants: {
      size: 'md',
      interactive: false,
      highlight: 'none',
      noPadding: false,
    },
  }
);

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {
  /** When true, the card shows a skeleton loading state */
  loading?: boolean;
  /** When true, the card uses compound component layout (no default padding) */
  asContainer?: boolean;
}

/**
 * GlassCard component for content containers.
 *
 * @example
 * ```tsx
 * // Basic glass card
 * <GlassCard>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here.</p>
 * </GlassCard>
 *
 * // Interactive card (with hover effects)
 * <GlassCard interactive>
 *   <h3>Clickable Card</h3>
 * </GlassCard>
 *
 * // Stat card with accent border
 * <GlassCard highlight="primary">
 *   <div className="text-2xl font-bold">$31,000</div>
 *   <div className="text-text-muted">Revenue recovered</div>
 * </GlassCard>
 *
 * // With compound components
 * <GlassCard asContainer>
 *   <GlassCardHeader>
 *     <GlassCardTitle>Settings</GlassCardTitle>
 *     <GlassCardDescription>Manage your preferences</GlassCardDescription>
 *   </GlassCardHeader>
 *   <GlassCardBody>
 *     <p>Content here</p>
 *   </GlassCardBody>
 *   <GlassCardDivider />
 *   <GlassCardFooter>
 *     <Button>Save</Button>
 *   </GlassCardFooter>
 * </GlassCard>
 *
 * // Loading state
 * <GlassCard loading>
 *   <h3>Card Title</h3>
 * </GlassCard>
 * ```
 */
const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, size, interactive, highlight, noPadding, loading, asContainer, children, ...props }, ref) => {
    if (loading) {
      return (
        <div
          ref={ref}
          className={cn(
            glassCardVariants({ size, interactive: false, highlight, noPadding: asContainer || noPadding }),
            className
          )}
          {...props}
        >
          <GlassCardSkeleton size={size} />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          glassCardVariants({ size, interactive, highlight, noPadding: asContainer || noPadding }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

// ============================================================================
// COMPOUND COMPONENTS
// ============================================================================

const glassCardHeaderVariants = cva('', {
  variants: {
    size: {
      sm: 'px-4 py-3',
      md: 'px-6 py-4',
      lg: 'px-8 py-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface GlassCardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardHeaderVariants> {}

const GlassCardHeader = React.forwardRef<HTMLDivElement, GlassCardHeaderProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        glassCardHeaderVariants({ size }),
        'border-b border-border',
        className
      )}
      {...props}
    />
  )
);

GlassCardHeader.displayName = 'GlassCardHeader';

const glassCardBodyVariants = cva('', {
  variants: {
    size: {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface GlassCardBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardBodyVariants> {}

const GlassCardBody = React.forwardRef<HTMLDivElement, GlassCardBodyProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(glassCardBodyVariants({ size }), className)}
      {...props}
    />
  )
);

GlassCardBody.displayName = 'GlassCardBody';

const glassCardFooterVariants = cva('', {
  variants: {
    size: {
      sm: 'px-4 py-3',
      md: 'px-6 py-4',
      lg: 'px-8 py-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface GlassCardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardFooterVariants> {}

const GlassCardFooter = React.forwardRef<HTMLDivElement, GlassCardFooterProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        glassCardFooterVariants({ size }),
        'border-t border-border',
        'flex items-center justify-end gap-3',
        className
      )}
      {...props}
    />
  )
);

GlassCardFooter.displayName = 'GlassCardFooter';

export interface GlassCardDividerProps extends React.HTMLAttributes<HTMLHRElement> {}

const GlassCardDivider = React.forwardRef<HTMLHRElement, GlassCardDividerProps>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn('border-0 border-t border-border my-0', className)}
      {...props}
    />
  )
);

GlassCardDivider.displayName = 'GlassCardDivider';

export interface GlassCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const GlassCardTitle = React.forwardRef<HTMLHeadingElement, GlassCardTitleProps>(
  ({ className, as: Component = 'h3', ...props }, ref) => (
    <Component
      ref={ref}
      className={cn('text-lg font-semibold text-white', className)}
      {...props}
    />
  )
);

GlassCardTitle.displayName = 'GlassCardTitle';

export interface GlassCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const GlassCardDescription = React.forwardRef<HTMLParagraphElement, GlassCardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-text-muted mt-1', className)}
      {...props}
    />
  )
);

GlassCardDescription.displayName = 'GlassCardDescription';

// ============================================================================
// SKELETON
// ============================================================================

interface GlassCardSkeletonProps {
  size?: 'sm' | 'md' | 'lg' | null;
}

function GlassCardSkeleton({ size = 'md' }: GlassCardSkeletonProps) {
  const padding = size === 'sm' ? 'p-4' : size === 'lg' ? 'p-8' : 'p-6';

  return (
    <div className={padding}>
      <div className="space-y-4">
        <Skeleton className="h-5 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

// ============================================================================
// COLLAPSIBLE CARD
// ============================================================================

export interface CollapsibleGlassCardProps
  extends Omit<GlassCardProps, 'children' | 'title'> {
  /** The heading shown in the header */
  heading: React.ReactNode;
  /** Optional description shown below the heading */
  description?: React.ReactNode;
  /** Whether the card is initially open */
  defaultOpen?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** The content to show when expanded */
  children: React.ReactNode;
}

/**
 * Collapsible version of GlassCard with built-in header and toggle.
 *
 * @example
 * ```tsx
 * <CollapsibleGlassCard heading="Advanced Settings" description="Configure advanced options">
 *   <p>Content here is hidden until expanded</p>
 * </CollapsibleGlassCard>
 *
 * // Controlled
 * <CollapsibleGlassCard
 *   heading="Details"
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 * >
 *   <p>Controlled content</p>
 * </CollapsibleGlassCard>
 * ```
 */
const CollapsibleGlassCard = React.forwardRef<HTMLDivElement, CollapsibleGlassCardProps>(
  (
    {
      className,
      size,
      interactive,
      highlight,
      heading,
      description,
      defaultOpen = false,
      open,
      onOpenChange,
      children,
      loading,
      ...props
    },
    ref
  ) => {
    if (loading) {
      return (
        <GlassCard
          ref={ref}
          className={className}
          size={size}
          interactive={interactive}
          highlight={highlight}
          loading
          {...props}
        />
      );
    }

    return (
      <CollapsiblePrimitive.Root
        defaultOpen={defaultOpen}
        open={open}
        onOpenChange={onOpenChange}
        asChild
      >
        <div
          ref={ref}
          className={cn(
            glassCardVariants({ size, interactive: false, highlight, noPadding: true }),
            className
          )}
          {...props}
        >
          <CollapsiblePrimitive.Trigger asChild>
            <button
              className={cn(
                'flex w-full items-center justify-between text-left',
                'transition-colors hover:bg-surface-hover',
                size === 'sm' ? 'px-4 py-3' : size === 'lg' ? 'px-8 py-5' : 'px-6 py-4'
              )}
            >
              <div>
                <div className="text-base font-semibold text-white">{heading}</div>
                {description && (
                  <div className="text-sm text-text-muted mt-0.5">{description}</div>
                )}
              </div>
              <ChevronDown className="h-5 w-5 text-text-muted transition-transform duration-200 data-[state=open]:rotate-180" />
            </button>
          </CollapsiblePrimitive.Trigger>
          <CollapsiblePrimitive.Content
            className={cn(
              'overflow-hidden',
              'data-[state=open]:animate-accordion-down',
              'data-[state=closed]:animate-accordion-up'
            )}
          >
            <div
              className={cn(
                'border-t border-border',
                size === 'sm' ? 'p-4' : size === 'lg' ? 'p-8' : 'p-6'
              )}
            >
              {children}
            </div>
          </CollapsiblePrimitive.Content>
        </div>
      </CollapsiblePrimitive.Root>
    );
  }
);

CollapsibleGlassCard.displayName = 'CollapsibleGlassCard';

// ============================================================================
// EXPORTS
// ============================================================================

export {
  GlassCard,
  GlassCardHeader,
  GlassCardBody,
  GlassCardFooter,
  GlassCardDivider,
  GlassCardTitle,
  GlassCardDescription,
  CollapsibleGlassCard,
};

export default GlassCard;
