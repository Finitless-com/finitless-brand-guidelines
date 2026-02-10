import * as React from 'react';
import { cn } from '@/lib/utils';

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Logo variant */
  variant?: 'horizontal' | 'square' | 'icon';
  /** Logo theme (for background type) */
  theme?: 'on-dark' | 'on-light' | 'transparent';
  /** Logo size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Base URL for assets (defaults to brand.finitless.com) */
  assetBaseUrl?: string;
}

const sizeMap = {
  horizontal: {
    sm: { width: 120, src: '120w' },
    md: { width: 200, src: '200w' },
    lg: { width: 300, src: '300w' },
    xl: { width: 480, src: '480w' },
  },
  square: {
    sm: { width: 128, src: '128' },
    md: { width: 256, src: '256' },
    lg: { width: 512, src: '512' },
    xl: { width: 1024, src: '1024' },
  },
  icon: {
    sm: { width: 32, src: '32' },
    md: { width: 64, src: '64' },
    lg: { width: 128, src: '128' },
    xl: { width: 256, src: '256' },
  },
};

/**
 * Logo component that renders the correct Finitless logo asset.
 *
 * @example
 * ```tsx
 * // Horizontal logo (default for headers)
 * <Logo variant="horizontal" size="md" />
 *
 * // Square logo (for social cards, app icons)
 * <Logo variant="square" size="lg" />
 *
 * // Icon only
 * <Logo variant="icon" size="sm" />
 *
 * // On light background
 * <Logo variant="horizontal" theme="on-light" />
 *
 * // Custom asset URL
 * <Logo assetBaseUrl="/assets" />
 * ```
 */
const Logo = React.forwardRef<HTMLImageElement, LogoProps>(
  (
    {
      variant = 'horizontal',
      theme = 'on-dark',
      size = 'md',
      assetBaseUrl = 'https://brand.finitless.com',
      className,
      alt = 'Finitless',
      ...props
    },
    ref
  ) => {
    const sizeConfig = sizeMap[variant][size];

    // Build the correct asset path
    let assetPath: string;
    if (variant === 'icon') {
      assetPath = `/assets/icons/finitless-icon-${theme}-${sizeConfig.src}.png`;
    } else if (variant === 'horizontal') {
      assetPath = `/assets/logos/finitless-logo-horizontal-${theme}-${sizeConfig.src}.png`;
    } else {
      assetPath = `/assets/logos/finitless-logo-square-${theme}-${sizeConfig.src}.png`;
    }

    const src = `${assetBaseUrl}${assetPath}`;

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={sizeConfig.width}
        className={cn('h-auto', className)}
        {...props}
      />
    );
  }
);

Logo.displayName = 'Logo';

export { Logo };
export default Logo;
