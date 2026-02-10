import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Text variants using CVA with the Geist-inspired typography scale.
 */
export const textVariants = cva('', {
  variants: {
    variant: {
      // Heading scale (72 → 14)
      'heading-72': 'text-[72px] leading-[76px] tracking-[-0.04em] font-bold',
      'heading-64': 'text-[64px] leading-[68px] tracking-[-0.04em] font-bold',
      'heading-56': 'text-[56px] leading-[60px] tracking-[-0.03em] font-bold',
      'heading-48': 'text-[48px] leading-[52px] tracking-[-0.03em] font-bold',
      'heading-40': 'text-[40px] leading-[44px] tracking-[-0.02em] font-semibold',
      'heading-32': 'text-[32px] leading-[40px] tracking-[-0.02em] font-semibold',
      'heading-24': 'text-[24px] leading-[32px] tracking-[-0.01em] font-semibold',
      'heading-20': 'text-[20px] leading-[28px] tracking-[-0.01em] font-medium',
      'heading-16': 'text-[16px] leading-[24px] tracking-[0] font-medium',
      'heading-14': 'text-[14px] leading-[20px] tracking-[0] font-medium',

      // Button typography scale
      'button-16': 'text-[16px] leading-[24px] font-semibold',
      'button-14': 'text-[14px] leading-[20px] font-semibold',
      'button-12': 'text-[12px] leading-[16px] font-semibold',

      // Label typography scale
      'label-16': 'text-[16px] leading-[24px] font-medium',
      'label-14': 'text-[14px] leading-[20px] font-medium',
      'label-12': 'text-[12px] leading-[16px] tracking-[0.02em] font-medium',
      'label-11': 'text-[11px] leading-[14px] tracking-[0.02em] font-medium',

      // Copy (paragraph) typography scale
      'copy-20': 'text-[20px] leading-[32px] font-normal',
      'copy-16': 'text-[16px] leading-[26px] font-normal',
      'copy-14': 'text-[14px] leading-[22px] font-normal',
      'copy-12': 'text-[12px] leading-[18px] font-normal',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      default: 'text-white',
      muted: 'text-text-muted',
      subtle: 'text-text-placeholder',
      disabled: 'text-text-disabled',
      primary: 'text-brand-primary',
      link: 'text-brand-link',
      success: 'text-semantic-success',
      warning: 'text-semantic-warning',
      error: 'text-semantic-error',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    truncate: {
      true: 'truncate',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'copy-16',
    color: 'default',
    align: 'left',
    truncate: false,
  },
});

type TextElement = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'strong' | 'em';

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof textVariants> {
  /** The HTML element to render */
  as?: TextElement;
  /** Applies subtle styling (reduced opacity) */
  subtle?: boolean;
  /** Applies strong styling (bolder weight) */
  strong?: boolean;
}

/**
 * Default element mapping for text variants
 */
const defaultElementMap: Record<string, TextElement> = {
  'heading-72': 'h1',
  'heading-64': 'h1',
  'heading-56': 'h1',
  'heading-48': 'h2',
  'heading-40': 'h2',
  'heading-32': 'h3',
  'heading-24': 'h4',
  'heading-20': 'h5',
  'heading-16': 'h6',
  'heading-14': 'h6',
  'button-16': 'span',
  'button-14': 'span',
  'button-12': 'span',
  'label-16': 'label',
  'label-14': 'label',
  'label-12': 'label',
  'label-11': 'label',
  'copy-20': 'p',
  'copy-16': 'p',
  'copy-14': 'p',
  'copy-12': 'p',
};

/**
 * Text component for consistent typography across the design system.
 *
 * @example
 * ```tsx
 * // Headings
 * <Text variant="heading-72">Hero Title</Text>
 * <Text variant="heading-32">Section Heading</Text>
 * <Text variant="heading-16">Card Title</Text>
 *
 * // Body copy
 * <Text variant="copy-20">Lead paragraph with larger text.</Text>
 * <Text variant="copy-16">Default paragraph text.</Text>
 * <Text variant="copy-14" color="muted">Secondary text.</Text>
 *
 * // Labels
 * <Text variant="label-14">Form Label</Text>
 * <Text variant="label-12" color="muted">Caption text</Text>
 *
 * // Button text (typically inside Button component)
 * <Text variant="button-14">Button Text</Text>
 *
 * // With modifiers
 * <Text variant="copy-16" subtle>Faded text for less emphasis</Text>
 * <Text variant="copy-16" strong>Bold text for more emphasis</Text>
 *
 * // Custom element
 * <Text variant="heading-24" as="span">Inline heading</Text>
 * ```
 */
const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      className,
      variant = 'copy-16',
      weight,
      color,
      align,
      truncate,
      as,
      subtle,
      strong,
      ...props
    },
    ref
  ) => {
    // Determine the element to render
    const Component = as || defaultElementMap[variant || 'copy-16'] || 'p';

    // Calculate effective weight
    const effectiveWeight = strong ? 'bold' : weight;

    // Calculate effective color
    const effectiveColor = subtle ? 'muted' : color;

    return React.createElement(Component, {
      ref,
      className: cn(
        textVariants({
          variant,
          weight: effectiveWeight,
          color: effectiveColor,
          align,
          truncate,
        }),
        className
      ),
      ...props,
    });
  }
);

Text.displayName = 'Text';

export { Text };
export default Text;
