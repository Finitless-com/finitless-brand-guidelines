import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Progress variants using CVA
 */
export const progressVariants = cva(
  // Base track styles
  [
    'relative w-full overflow-hidden rounded-full',
    'bg-grayAlpha-200',
  ],
  {
    variants: {
      size: {
        xs: 'h-1',
        sm: 'h-1.5',
        md: 'h-2',
        lg: 'h-3',
        xl: 'h-4',
      },
      variant: {
        default: '',
        gradient: '',
        success: '',
        warning: '',
        error: '',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

export const progressIndicatorVariants = cva(
  // Base indicator styles
  [
    'h-full transition-all duration-300 ease-out rounded-full',
  ],
  {
    variants: {
      variant: {
        default: 'bg-brand-primary',
        gradient: 'bg-gradient-cta',
        success: 'bg-semantic-success',
        warning: 'bg-semantic-warning',
        error: 'bg-semantic-error',
      },
      indeterminate: {
        true: 'animate-progress-indeterminate w-1/3',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      indeterminate: false,
    },
  }
);

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  /** Current progress value (0-100) */
  value?: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Show indeterminate loading state */
  indeterminate?: boolean;
  /** Show percentage label */
  showLabel?: boolean;
  /** Custom label format function */
  formatLabel?: (value: number, max: number) => string;
  /** Indicator class name */
  indicatorClassName?: string;
}

/**
 * Progress component for showing completion status.
 *
 * @example
 * ```tsx
 * // Basic progress
 * <Progress value={60} />
 *
 * // With label
 * <Progress value={75} showLabel />
 *
 * // Indeterminate loading
 * <Progress indeterminate />
 *
 * // Gradient variant
 * <Progress value={50} variant="gradient" />
 *
 * // Success/Warning/Error variants
 * <Progress value={100} variant="success" />
 * <Progress value={60} variant="warning" />
 * <Progress value={30} variant="error" />
 *
 * // Different sizes
 * <Progress value={50} size="xs" />
 * <Progress value={50} size="sm" />
 * <Progress value={50} size="md" />
 * <Progress value={50} size="lg" />
 * <Progress value={50} size="xl" />
 *
 * // Custom label format
 * <Progress
 *   value={3}
 *   max={5}
 *   showLabel
 *   formatLabel={(value, max) => `${value} of ${max} steps`}
 * />
 * ```
 */
const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      size,
      variant,
      value = 0,
      max = 100,
      indeterminate = false,
      showLabel = false,
      formatLabel,
      indicatorClassName,
      ...props
    },
    ref
  ) => {
    // Clamp value between 0 and max
    const clampedValue = Math.min(Math.max(value, 0), max);
    const percentage = (clampedValue / max) * 100;

    // Default label format
    const label = formatLabel
      ? formatLabel(clampedValue, max)
      : `${Math.round(percentage)}%`;

    return (
      <div className="w-full">
        <div
          ref={ref}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={indeterminate ? undefined : clampedValue}
          aria-label={indeterminate ? 'Loading' : label}
          className={cn(progressVariants({ size, variant }), className)}
          {...props}
        >
          <div
            className={cn(
              progressIndicatorVariants({ variant, indeterminate }),
              indicatorClassName
            )}
            style={indeterminate ? undefined : { width: `${percentage}%` }}
          />
        </div>
        {showLabel && !indeterminate && (
          <div className="mt-1 text-right">
            <span className="text-xs text-text-muted">{label}</span>
          </div>
        )}
      </div>
    );
  }
);

Progress.displayName = 'Progress';

/**
 * Circular progress indicator
 */
export interface CircularProgressProps {
  /** Current progress value (0-100) */
  value?: number;
  /** Size in pixels */
  size?: number;
  /** Stroke width in pixels */
  strokeWidth?: number;
  /** Show indeterminate loading state */
  indeterminate?: boolean;
  /** Show percentage label in center */
  showLabel?: boolean;
  /** Color variant */
  variant?: 'default' | 'gradient' | 'success' | 'warning' | 'error';
  /** Additional class name */
  className?: string;
}

const CircularProgress = React.forwardRef<HTMLDivElement, CircularProgressProps>(
  (
    {
      value = 0,
      size = 40,
      strokeWidth = 4,
      indeterminate = false,
      showLabel = false,
      variant = 'default',
      className,
    },
    ref
  ) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const percentage = Math.min(Math.max(value, 0), 100);
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const strokeColor = {
      default: '#165DFC',
      gradient: 'url(#gradient)',
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ff3b45',
    }[variant];

    return (
      <div
        ref={ref}
        className={cn('relative inline-flex items-center justify-center', className)}
        style={{ width: size, height: size }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={indeterminate ? undefined : percentage}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className={cn(indeterminate && 'animate-spin')}
        >
          {/* Gradient definition for gradient variant */}
          {variant === 'gradient' && (
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00B7FF" />
                <stop offset="100%" stopColor="#7A2EFF" />
              </linearGradient>
            </defs>
          )}
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={indeterminate ? circumference * 0.75 : strokeDashoffset}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            className="transition-all duration-300 ease-out"
          />
        </svg>
        {showLabel && !indeterminate && (
          <span className="absolute text-xs font-medium text-white">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    );
  }
);

CircularProgress.displayName = 'CircularProgress';

export { Progress, CircularProgress };
export default Progress;
