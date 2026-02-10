import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ============================================================================
// SLIDER VARIANTS
// ============================================================================

const sliderVariants = cva(
  [
    'relative flex touch-none select-none',
    'data-[disabled]:opacity-50 data-[disabled]:pointer-events-none',
  ],
  {
    variants: {
      orientation: {
        horizontal: 'w-full items-center',
        vertical: 'h-full flex-col items-center',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    compoundVariants: [
      { orientation: 'horizontal', size: 'sm', className: 'h-4' },
      { orientation: 'horizontal', size: 'md', className: 'h-5' },
      { orientation: 'horizontal', size: 'lg', className: 'h-6' },
      { orientation: 'vertical', size: 'sm', className: 'w-4' },
      { orientation: 'vertical', size: 'md', className: 'w-5' },
      { orientation: 'vertical', size: 'lg', className: 'w-6' },
    ],
    defaultVariants: {
      orientation: 'horizontal',
      size: 'md',
    },
  }
);

const trackVariants = cva(
  [
    'relative grow overflow-hidden rounded-full',
    'bg-white/10',
  ],
  {
    variants: {
      orientation: {
        horizontal: 'w-full',
        vertical: 'h-full',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    compoundVariants: [
      { orientation: 'horizontal', size: 'sm', className: 'h-1' },
      { orientation: 'horizontal', size: 'md', className: 'h-1.5' },
      { orientation: 'horizontal', size: 'lg', className: 'h-2' },
      { orientation: 'vertical', size: 'sm', className: 'w-1' },
      { orientation: 'vertical', size: 'md', className: 'w-1.5' },
      { orientation: 'vertical', size: 'lg', className: 'w-2' },
    ],
    defaultVariants: {
      orientation: 'horizontal',
      size: 'md',
    },
  }
);

const thumbVariants = cva(
  [
    'block rounded-full',
    'bg-white',
    'border-2 border-brand-primary',
    'shadow-md',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-link focus-visible:ring-offset-2 focus-visible:ring-offset-background-base',
    'hover:bg-gray-100',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      size: {
        sm: 'h-3.5 w-3.5',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

// ============================================================================
// SLIDER
// ============================================================================

export interface SliderProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'orientation'> {
  /** Orientation of the slider */
  orientation?: 'horizontal' | 'vertical';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Show marks at step intervals */
  showMarks?: boolean;
  /** Custom marks */
  marks?: { value: number; label?: string }[];
  /** Show current value tooltip */
  showTooltip?: boolean;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      orientation = 'horizontal',
      size = 'md',
      showMarks = false,
      marks,
      showTooltip = false,
      min = 0,
      max = 100,
      step = 1,
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(
      defaultValue ?? [min]
    );
    const currentValue = value ?? internalValue;

    // Generate marks if showMarks is true
    const computedMarks = React.useMemo(() => {
      if (marks) return marks;
      if (!showMarks) return [];

      const markCount = Math.min(10, Math.floor((max - min) / step));
      const markStep = Math.floor((max - min) / markCount);
      const result: { value: number; label?: string }[] = [];

      for (let i = min; i <= max; i += markStep) {
        result.push({ value: i, label: String(i) });
      }

      return result;
    }, [marks, showMarks, min, max, step]);

    return (
      <div className="relative w-full">
        <SliderPrimitive.Root
          ref={ref}
          min={min}
          max={max}
          step={step}
          orientation={orientation}
          value={value}
          defaultValue={defaultValue}
          onValueChange={(v) => {
            setInternalValue(v);
            props.onValueChange?.(v);
          }}
          className={cn(sliderVariants({ orientation, size }), className)}
          {...props}
        >
          <SliderPrimitive.Track
            className={cn(trackVariants({ orientation, size }))}
          >
            <SliderPrimitive.Range
              className={cn(
                'absolute rounded-full',
                'bg-brand-primary',
                orientation === 'horizontal' ? 'h-full' : 'w-full'
              )}
            />
          </SliderPrimitive.Track>
          {currentValue.map((_, index) => (
            <SliderPrimitive.Thumb
              key={index}
              className={cn(thumbVariants({ size }))}
            />
          ))}
        </SliderPrimitive.Root>

        {/* Marks */}
        {computedMarks.length > 0 && (
          <div
            className={cn(
              'absolute flex justify-between',
              orientation === 'horizontal'
                ? 'left-0 right-0 top-full mt-1'
                : 'top-0 bottom-0 left-full ml-1 flex-col'
            )}
          >
            {computedMarks.map((mark) => {
              const percent = ((mark.value - min) / (max - min)) * 100;
              return (
                <div
                  key={mark.value}
                  className="flex flex-col items-center"
                  style={{
                    position: 'absolute',
                    [orientation === 'horizontal' ? 'left' : 'top']: `${percent}%`,
                    transform:
                      orientation === 'horizontal'
                        ? 'translateX(-50%)'
                        : 'translateY(-50%)',
                  }}
                >
                  <div className="h-1 w-px bg-white/30" />
                  {mark.label && (
                    <span className="mt-1 text-xs text-text-muted">
                      {mark.label}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

Slider.displayName = SliderPrimitive.Root.displayName;

// ============================================================================
// RANGE SLIDER (Dual thumb)
// ============================================================================

export interface RangeSliderProps extends SliderProps {
  /** Minimum range between thumbs */
  minRange?: number;
}

const RangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  RangeSliderProps
>(({ defaultValue, min = 0, max = 100, ...props }, ref) => {
  return (
    <Slider
      ref={ref}
      defaultValue={defaultValue ?? [min, max]}
      min={min}
      max={max}
      {...props}
    />
  );
});

RangeSlider.displayName = 'RangeSlider';

// ============================================================================
// EXPORTS
// ============================================================================

export { Slider, RangeSlider, sliderVariants, trackVariants, thumbVariants };
