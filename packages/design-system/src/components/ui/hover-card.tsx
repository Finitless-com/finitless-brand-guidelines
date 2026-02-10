import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { cn } from '@/lib/utils';

// ============================================================================
// HOVER CARD
// ============================================================================

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

// ============================================================================
// HOVER CARD CONTENT
// ============================================================================

export interface HoverCardContentProps
  extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> {
  /** Show arrow pointer */
  showArrow?: boolean;
}

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentProps
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
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-popover',
          'w-64 p-4',
          'rounded-xl',
          'bg-background-elevated',
          'border border-border',
          'shadow-lg',
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
          <HoverCardPrimitive.Arrow
            className="fill-background-elevated"
            width={12}
            height={6}
          />
        )}
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Portal>
  )
);
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

// ============================================================================
// HOVER CARD HEADER (for structured content)
// ============================================================================

const HoverCardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex items-center gap-3 mb-3', className)}
    {...props}
  />
);
HoverCardHeader.displayName = 'HoverCardHeader';

// ============================================================================
// HOVER CARD AVATAR
// ============================================================================

const HoverCardAvatar = ({
  className,
  src,
  alt,
  fallback,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt?: string;
  fallback?: string;
}) => (
  <div
    className={cn(
      'h-12 w-12 rounded-full',
      'bg-white/10',
      'flex items-center justify-center',
      'overflow-hidden',
      className
    )}
    {...props}
  >
    {src ? (
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    ) : (
      <span className="text-sm font-medium text-text-muted">
        {fallback || '?'}
      </span>
    )}
  </div>
);
HoverCardAvatar.displayName = 'HoverCardAvatar';

// ============================================================================
// HOVER CARD TITLE
// ============================================================================

const HoverCardTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4
    className={cn('text-sm font-semibold text-text-primary', className)}
    {...props}
  />
);
HoverCardTitle.displayName = 'HoverCardTitle';

// ============================================================================
// HOVER CARD DESCRIPTION
// ============================================================================

const HoverCardDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn('text-sm text-text-muted', className)}
    {...props}
  />
);
HoverCardDescription.displayName = 'HoverCardDescription';

// ============================================================================
// HOVER CARD FOOTER (for meta info)
// ============================================================================

const HoverCardFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex items-center gap-4 mt-3 pt-3',
      'border-t border-border',
      'text-xs text-text-muted',
      className
    )}
    {...props}
  />
);
HoverCardFooter.displayName = 'HoverCardFooter';

// ============================================================================
// EXPORTS
// ============================================================================

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardHeader,
  HoverCardAvatar,
  HoverCardTitle,
  HoverCardDescription,
  HoverCardFooter,
};
