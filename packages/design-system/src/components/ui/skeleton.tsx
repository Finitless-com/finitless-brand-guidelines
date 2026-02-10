import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Skeleton component for loading states.
 *
 * @example
 * ```tsx
 * // Basic skeleton
 * <Skeleton className="h-4 w-48" />
 *
 * // Avatar skeleton
 * <Skeleton className="h-12 w-12 rounded-full" />
 *
 * // Card skeleton
 * <div className="space-y-3">
 *   <Skeleton className="h-5 w-3/4" />
 *   <Skeleton className="h-4 w-full" />
 *   <Skeleton className="h-4 w-2/3" />
 * </div>
 *
 * // Button skeleton
 * <Skeleton className="h-11 w-32 rounded-[12px]" />
 * ```
 */
const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'animate-pulse rounded-md bg-surface-hover',
          className
        )}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export { Skeleton };
export default Skeleton;
