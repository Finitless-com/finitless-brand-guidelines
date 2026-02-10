import * as React from 'react';
import { cn } from '@/lib/utils';
import { Badge, type BadgeProps } from '../ui/badge';

export interface StatusBadgeProps extends Omit<BadgeProps, 'variant'> {
  /** Status type */
  status: 'live' | 'active' | 'pending' | 'inactive' | 'error' | 'success';
}

const statusConfig = {
  live: {
    variant: 'success' as const,
    dot: true,
    label: 'Live',
  },
  active: {
    variant: 'success' as const,
    dot: false,
    label: 'Active',
  },
  pending: {
    variant: 'warning' as const,
    dot: true,
    label: 'Pending',
  },
  inactive: {
    variant: 'default' as const,
    dot: false,
    label: 'Inactive',
  },
  error: {
    variant: 'error' as const,
    dot: true,
    label: 'Error',
  },
  success: {
    variant: 'success' as const,
    dot: false,
    label: 'Success',
  },
};

/**
 * StatusBadge component for displaying status indicators.
 *
 * @example
 * ```tsx
 * // Live status with pulsing dot
 * <StatusBadge status="live" />
 *
 * // Pending status
 * <StatusBadge status="pending" />
 *
 * // Custom label
 * <StatusBadge status="active">Online</StatusBadge>
 *
 * // Error status
 * <StatusBadge status="error">Connection Failed</StatusBadge>
 * ```
 */
const StatusBadge = React.forwardRef<HTMLDivElement, StatusBadgeProps>(
  ({ className, status, children, ...props }, ref) => {
    const config = statusConfig[status];

    return (
      <Badge
        ref={ref}
        variant={config.variant}
        dot={config.dot}
        className={cn(className)}
        {...props}
      >
        {children || config.label}
      </Badge>
    );
  }
);

StatusBadge.displayName = 'StatusBadge';

export { StatusBadge };
export default StatusBadge;
