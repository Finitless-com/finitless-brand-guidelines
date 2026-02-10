import * as React from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { cn } from '@/lib/utils';

// ============================================================================
// ASPECT RATIO
// ============================================================================

/**
 * Common aspect ratios
 */
export const aspectRatios = {
  /** 1:1 - Square */
  square: 1,
  /** 4:3 - Standard photo */
  standard: 4 / 3,
  /** 16:9 - Widescreen video */
  video: 16 / 9,
  /** 21:9 - Ultrawide */
  ultrawide: 21 / 9,
  /** 3:2 - Classic photo */
  photo: 3 / 2,
  /** 2:3 - Portrait photo */
  portrait: 2 / 3,
  /** 9:16 - Vertical video (stories) */
  vertical: 9 / 16,
  /** 4:5 - Instagram portrait */
  instagram: 4 / 5,
} as const;

export interface AspectRatioProps
  extends Omit<React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>, 'ratio'> {
  /**
   * Aspect ratio value. Can be:
   * - A number (e.g., 16/9, 1.5)
   * - A preset name (e.g., 'video', 'square')
   */
  ratio?: number | keyof typeof aspectRatios;
}

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(({ ratio = 'video', className, ...props }, ref) => {
  const numericRatio =
    typeof ratio === 'string' ? aspectRatios[ratio] : ratio;

  return (
    <AspectRatioPrimitive.Root
      ref={ref}
      ratio={numericRatio}
      className={cn('overflow-hidden', className)}
      {...props}
    />
  );
});

AspectRatio.displayName = AspectRatioPrimitive.Root.displayName;

// ============================================================================
// EXPORTS
// ============================================================================

export { AspectRatio };
