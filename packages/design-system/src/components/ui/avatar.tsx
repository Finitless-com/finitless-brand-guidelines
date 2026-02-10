import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ============================================================================
// AVATAR VARIANTS
// ============================================================================

export const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-14 w-14 text-lg',
        xl: 'h-20 w-20 text-xl',
        '2xl': 'h-24 w-24 text-2xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

// ============================================================================
// AVATAR
// ============================================================================

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  /** Show ring around avatar */
  ring?: boolean;
  /** Ring color */
  ringColor?: 'default' | 'primary' | 'success' | 'error' | 'warning';
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size, ring, ringColor = 'default', ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      avatarVariants({ size }),
      ring && [
        'ring-2 ring-offset-2 ring-offset-background-base',
        ringColor === 'default' && 'ring-border',
        ringColor === 'primary' && 'ring-brand-primary',
        ringColor === 'success' && 'ring-semantic-success',
        ringColor === 'error' && 'ring-semantic-error',
        ringColor === 'warning' && 'ring-semantic-warning',
      ],
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

// ============================================================================
// AVATAR IMAGE
// ============================================================================

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full object-cover', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// ============================================================================
// AVATAR FALLBACK
// ============================================================================

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center',
      'rounded-full bg-surface-hover',
      'font-medium text-text-muted',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// ============================================================================
// AVATAR STATUS (Status indicator dot)
// ============================================================================

export interface AvatarStatusProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Status type */
  status: 'online' | 'offline' | 'busy' | 'away';
  /** Position of status indicator */
  position?: 'top-right' | 'bottom-right';
}

const statusColors = {
  online: 'bg-semantic-success',
  offline: 'bg-gray-500',
  busy: 'bg-semantic-error',
  away: 'bg-semantic-warning',
};

const AvatarStatus = React.forwardRef<HTMLSpanElement, AvatarStatusProps>(
  ({ className, status, position = 'bottom-right', ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'absolute block rounded-full',
        'h-3 w-3',
        'ring-2 ring-background-base',
        statusColors[status],
        position === 'top-right' && 'top-0 right-0',
        position === 'bottom-right' && 'bottom-0 right-0',
        className
      )}
      {...props}
    />
  )
);
AvatarStatus.displayName = 'AvatarStatus';

// ============================================================================
// AVATAR GROUP (Overlapping avatars)
// ============================================================================

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum number of avatars to show before +N */
  max?: number;
  /** Size of avatars */
  size?: VariantProps<typeof avatarVariants>['size'];
  /** Spacing between avatars (negative margin) */
  spacing?: 'tight' | 'normal' | 'loose';
}

const spacingMap = {
  tight: '-space-x-3',
  normal: '-space-x-2',
  loose: '-space-x-1',
};

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    { className, max, size = 'md', spacing = 'normal', children, ...props },
    ref
  ) => {
    const childArray = React.Children.toArray(children);
    const visibleChildren = max ? childArray.slice(0, max) : childArray;
    const remainingCount = max ? childArray.length - max : 0;

    return (
      <div
        ref={ref}
        className={cn('flex items-center', spacingMap[spacing], className)}
        {...props}
      >
        {visibleChildren.map((child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<AvatarProps>, {
              key: index,
              size,
              className: cn(
                'ring-2 ring-background-base',
                (child as React.ReactElement<AvatarProps>).props.className
              ),
            });
          }
          return child;
        })}
        {remainingCount > 0 && (
          <Avatar size={size} className="ring-2 ring-background-base">
            <AvatarFallback className="bg-surface-card text-text-muted text-xs">
              +{remainingCount}
            </AvatarFallback>
          </Avatar>
        )}
      </div>
    );
  }
);
AvatarGroup.displayName = 'AvatarGroup';

// ============================================================================
// AVATAR WITH STATUS (Compound component)
// ============================================================================

export interface AvatarWithStatusProps extends AvatarProps {
  /** Image source */
  src?: string;
  /** Alt text */
  alt?: string;
  /** Fallback text (initials) */
  fallback?: string;
  /** Status indicator */
  status?: AvatarStatusProps['status'];
}

const AvatarWithStatus = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarWithStatusProps
>(({ src, alt, fallback, status, size, ...props }, ref) => (
  <Avatar ref={ref} size={size} {...props}>
    {src && <AvatarImage src={src} alt={alt} />}
    {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
    {status && <AvatarStatus status={status} />}
  </Avatar>
));
AvatarWithStatus.displayName = 'AvatarWithStatus';

// ============================================================================
// UTILITY: Generate initials from name
// ============================================================================

/**
 * Generate initials from a name
 * @example getInitials('John Doe') // 'JD'
 * @example getInitials('Alice') // 'A'
 */
function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// ============================================================================
// EXPORTS
// ============================================================================

/**
 * Avatar component for user images.
 *
 * @example
 * ```tsx
 * // With image
 * <Avatar>
 *   <AvatarImage src="/avatar.jpg" alt="User" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 *
 * // With ring
 * <Avatar ring ringColor="primary">
 *   <AvatarImage src="/avatar.jpg" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 *
 * // With status indicator
 * <Avatar>
 *   <AvatarImage src="/avatar.jpg" />
 *   <AvatarFallback>JD</AvatarFallback>
 *   <AvatarStatus status="online" />
 * </Avatar>
 *
 * // Convenience component
 * <AvatarWithStatus
 *   src="/avatar.jpg"
 *   fallback="JD"
 *   status="online"
 *   size="lg"
 * />
 *
 * // Avatar group
 * <AvatarGroup max={3} size="sm">
 *   <Avatar><AvatarImage src="/1.jpg" /></Avatar>
 *   <Avatar><AvatarImage src="/2.jpg" /></Avatar>
 *   <Avatar><AvatarImage src="/3.jpg" /></Avatar>
 *   <Avatar><AvatarImage src="/4.jpg" /></Avatar>
 *   <Avatar><AvatarImage src="/5.jpg" /></Avatar>
 * </AvatarGroup>
 * // Shows 3 avatars + "+2"
 *
 * // Generate initials
 * <AvatarFallback>{getInitials('John Doe')}</AvatarFallback>
 * // Shows "JD"
 * ```
 */
export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarStatus,
  AvatarGroup,
  AvatarWithStatus,
  getInitials,
};
