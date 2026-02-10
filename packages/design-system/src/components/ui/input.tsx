import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Input variants using CVA - Enhanced v0.1.0
 */
export const inputVariants = cva(
  // Base styles
  [
    'flex w-full',
    'bg-surface-card border border-border',
    'rounded-[12px]',
    'text-base text-white',
    'placeholder:text-text-placeholder',
    'transition-all duration-150',
    'focus:outline-none focus:border-brand-link/50 focus:ring-2 focus:ring-brand-link/20',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-white/2',
  ],
  {
    variants: {
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-4 text-base',
        lg: 'h-12 px-4 text-base',
      },
      error: {
        true: 'border-semantic-error ring-2 ring-semantic-error/15 focus:border-semantic-error focus:ring-semantic-error/20',
      },
    },
    defaultVariants: {
      size: 'lg',
      error: false,
    },
  }
);

// Type for prefix/suffix content - can be string, icon, or button
type InputAddon = React.ReactNode;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>,
    VariantProps<typeof inputVariants> {
  /** Icon to show at the start of the input (legacy alias for prefix) */
  startIcon?: React.ReactNode;
  /** Icon to show at the end of the input (legacy alias for suffix) */
  endIcon?: React.ReactNode;
  /** Content to show before the input (icon, text like "https://", etc.) */
  prefix?: InputAddon;
  /** Content to show after the input (icon, text like ".com", button, etc.) */
  suffix?: InputAddon;
  /** Error state (adds red border) */
  error?: boolean;
  /** Error message to display below input */
  errorMessage?: string;
  /** Helper text to display below input */
  helperText?: string;
  /** Maximum character count (shows counter when set) */
  maxLength?: number;
  /** Show character count */
  showCount?: boolean;
  /** Show clear button when input has value */
  showClearButton?: boolean;
  /** Callback when clear button is clicked */
  onClear?: () => void;
  /** Container class name for wrapper div */
  containerClassName?: string;
}

/**
 * Input component with glass styling - Enhanced v0.1.0
 *
 * @example
 * ```tsx
 * // Basic input
 * <Input placeholder="Enter your email" />
 *
 * // With label (use Label component)
 * <div className="space-y-2">
 *   <Label htmlFor="email">Email</Label>
 *   <Input id="email" type="email" placeholder="you@example.com" />
 * </div>
 *
 * // Error state with message
 * <Input
 *   error
 *   errorMessage="This field is required"
 *   placeholder="Required field"
 * />
 *
 * // With prefix and suffix
 * <Input
 *   prefix="https://"
 *   suffix=".com"
 *   placeholder="yoursite"
 * />
 *
 * // With prefix icon
 * <Input
 *   prefix={<SearchIcon className="h-4 w-4" />}
 *   placeholder="Search..."
 * />
 *
 * // With suffix button
 * <Input
 *   suffix={
 *     <button className="text-brand-link hover:text-brand-link/80">
 *       Copy
 *     </button>
 *   }
 *   value="https://example.com"
 * />
 *
 * // With character count
 * <Input
 *   maxLength={100}
 *   showCount
 *   placeholder="Enter description..."
 * />
 *
 * // With clear button
 * <Input
 *   showClearButton
 *   value={value}
 *   onChange={(e) => setValue(e.target.value)}
 *   onClear={() => setValue('')}
 *   placeholder="Search..."
 * />
 *
 * // With helper text
 * <Input
 *   helperText="We'll never share your email"
 *   placeholder="Email address"
 * />
 * ```
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      size,
      error,
      errorMessage,
      helperText,
      startIcon,
      endIcon,
      prefix,
      suffix,
      maxLength,
      showCount,
      showClearButton,
      onClear,
      containerClassName,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    // Internal state for uncontrolled clear button functionality
    const [internalValue, setInternalValue] = React.useState(defaultValue || '');
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    // Handle internal change for uncontrolled mode
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    // Handle clear
    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('');
      }
      onClear?.();
    };

    // Support both legacy (startIcon/endIcon) and new (prefix/suffix) naming
    const prefixContent = prefix || startIcon;
    const suffixContent = suffix || endIcon;

    // Calculate character count
    const charCount = typeof currentValue === 'string' ? currentValue.length : 0;
    const showCharCount = showCount && maxLength;

    // Determine if clear button should show
    const shouldShowClear = showClearButton && currentValue && String(currentValue).length > 0;

    // Build suffix with clear button if needed
    const finalSuffix = (
      <>
        {shouldShowClear && (
          <button
            type="button"
            onClick={handleClear}
            className="text-text-muted hover:text-white transition-colors p-0.5 -mr-1"
            aria-label="Clear input"
          >
            <ClearIcon className="h-4 w-4" />
          </button>
        )}
        {suffixContent}
      </>
    );

    const hasSuffix = shouldShowClear || suffixContent;

    // Wrapper for everything
    return (
      <div className={cn('w-full', containerClassName)}>
        {/* Input container */}
        <div className="relative">
          {/* Prefix */}
          {prefixContent && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted flex items-center pointer-events-none">
              {typeof prefixContent === 'string' ? (
                <span className="text-sm select-none">{prefixContent}</span>
              ) : (
                prefixContent
              )}
            </div>
          )}

          {/* Input */}
          <input
            type={type}
            className={cn(
              inputVariants({ size, error }),
              prefixContent && 'pl-10',
              hasSuffix && 'pr-10',
              // Adjust padding for text prefix/suffix
              typeof prefixContent === 'string' && 'pl-[4.5rem]',
              typeof suffixContent === 'string' && !shouldShowClear && 'pr-[3.5rem]',
              'file:border-0 file:bg-transparent file:text-sm file:font-medium',
              className
            )}
            ref={ref}
            value={isControlled ? value : undefined}
            defaultValue={!isControlled ? defaultValue : undefined}
            onChange={handleChange}
            maxLength={maxLength}
            {...props}
          />

          {/* Suffix */}
          {hasSuffix && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted flex items-center gap-2">
              {typeof suffixContent === 'string' ? (
                <>
                  {shouldShowClear && (
                    <button
                      type="button"
                      onClick={handleClear}
                      className="text-text-muted hover:text-white transition-colors p-0.5"
                      aria-label="Clear input"
                    >
                      <ClearIcon className="h-4 w-4" />
                    </button>
                  )}
                  <span className="text-sm select-none">{suffixContent}</span>
                </>
              ) : (
                finalSuffix
              )}
            </div>
          )}
        </div>

        {/* Helper text, error message, or character count */}
        {(errorMessage || helperText || showCharCount) && (
          <div className="flex justify-between items-center mt-1.5 px-1">
            <div>
              {error && errorMessage ? (
                <p className="text-sm text-semantic-error">{errorMessage}</p>
              ) : helperText ? (
                <p className="text-sm text-text-muted">{helperText}</p>
              ) : null}
            </div>
            {showCharCount && (
              <p
                className={cn(
                  'text-xs',
                  charCount >= (maxLength || 0)
                    ? 'text-semantic-error'
                    : charCount >= (maxLength || 0) * 0.9
                      ? 'text-semantic-warning'
                      : 'text-text-muted'
                )}
              >
                {charCount}/{maxLength}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

/**
 * Clear icon (X) for input clear button
 */
function ClearIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export { Input };
export default Input;
