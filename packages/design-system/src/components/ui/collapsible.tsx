import * as React from 'react';
import { cn } from '@/lib/utils';

// ============================================================================
// CONTEXT
// ============================================================================

interface CollapsibleContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  disabled?: boolean;
}

const CollapsibleContext = React.createContext<CollapsibleContextValue | null>(null);

function useCollapsibleContext() {
  const context = React.useContext(CollapsibleContext);
  if (!context) {
    throw new Error('Collapsible components must be used within a Collapsible');
  }
  return context;
}

// ============================================================================
// COLLAPSIBLE ROOT
// ============================================================================

export interface CollapsibleProps {
  /** Controlled open state */
  open?: boolean;
  /** Default open state for uncontrolled mode */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Disable the collapsible */
  disabled?: boolean;
  /** Children */
  children: React.ReactNode;
  /** Additional class name */
  className?: string;
}

/**
 * Collapsible component for expandable content sections.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Collapsible>
 *   <CollapsibleTrigger>Click to expand</CollapsibleTrigger>
 *   <CollapsibleContent>
 *     Hidden content here
 *   </CollapsibleContent>
 * </Collapsible>
 *
 * // Controlled
 * const [open, setOpen] = useState(false);
 * <Collapsible open={open} onOpenChange={setOpen}>
 *   <CollapsibleTrigger>
 *     {open ? 'Close' : 'Open'}
 *   </CollapsibleTrigger>
 *   <CollapsibleContent>
 *     Content
 *   </CollapsibleContent>
 * </Collapsible>
 *
 * // With custom trigger
 * <Collapsible>
 *   <div className="flex items-center justify-between">
 *     <span>Section Title</span>
 *     <CollapsibleTrigger asChild>
 *       <Button variant="ghost" size="icon-sm">
 *         <ChevronDownIcon />
 *       </Button>
 *     </CollapsibleTrigger>
 *   </div>
 *   <CollapsibleContent>
 *     Content
 *   </CollapsibleContent>
 * </Collapsible>
 * ```
 */
const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  (
    {
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      disabled = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : uncontrolledOpen;

    const handleOpenChange = React.useCallback(
      (newOpen: boolean) => {
        if (!isControlled) {
          setUncontrolledOpen(newOpen);
        }
        onOpenChange?.(newOpen);
      },
      [isControlled, onOpenChange]
    );

    return (
      <CollapsibleContext.Provider
        value={{ open, onOpenChange: handleOpenChange, disabled }}
      >
        <div
          ref={ref}
          data-state={open ? 'open' : 'closed'}
          data-disabled={disabled ? '' : undefined}
          className={className}
          {...props}
        >
          {children}
        </div>
      </CollapsibleContext.Provider>
    );
  }
);

Collapsible.displayName = 'Collapsible';

// ============================================================================
// COLLAPSIBLE TRIGGER
// ============================================================================

export interface CollapsibleTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Render as child element (use with asChild pattern) */
  asChild?: boolean;
}

const CollapsibleTrigger = React.forwardRef<
  HTMLButtonElement,
  CollapsibleTriggerProps
>(({ className, children, asChild = false, onClick, ...props }, ref) => {
  const { open, onOpenChange, disabled } = useCollapsibleContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onOpenChange(!open);
    }
    onClick?.(e);
  };

  // For asChild, we clone the child and add our props
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      ref,
      'data-state': open ? 'open' : 'closed',
      'aria-expanded': open,
      disabled: disabled || props.disabled,
      onClick: handleClick,
    });
  }

  return (
    <button
      ref={ref}
      type="button"
      data-state={open ? 'open' : 'closed'}
      aria-expanded={open}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        'flex items-center justify-between w-full',
        'transition-colors duration-150',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

CollapsibleTrigger.displayName = 'CollapsibleTrigger';

// ============================================================================
// COLLAPSIBLE CONTENT
// ============================================================================

export interface CollapsibleContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Force mount content (useful for animations) */
  forceMount?: boolean;
}

const CollapsibleContent = React.forwardRef<
  HTMLDivElement,
  CollapsibleContentProps
>(({ className, children, forceMount = false, ...props }, ref) => {
  const { open } = useCollapsibleContext();
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number | undefined>(undefined);

  // Measure content height for animation
  React.useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setHeight(entry.contentRect.height);
        }
      });

      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  // Don't render if not open and not force mounted
  if (!open && !forceMount) {
    return null;
  }

  return (
    <div
      ref={ref}
      data-state={open ? 'open' : 'closed'}
      className={cn(
        'overflow-hidden',
        'transition-all duration-200 ease-out',
        className
      )}
      style={{
        height: open ? height : 0,
        opacity: open ? 1 : 0,
      }}
      {...props}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
});

CollapsibleContent.displayName = 'CollapsibleContent';

// ============================================================================
// ACCORDION (Multiple collapsibles with single-open behavior)
// ============================================================================

interface AccordionContextValue {
  type: 'single' | 'multiple';
  value: string[];
  onValueChange: (value: string[]) => void;
  disabled?: boolean;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion');
  }
  return context;
}

export interface AccordionProps {
  /** Single or multiple items can be open */
  type?: 'single' | 'multiple';
  /** Controlled value (item keys that are open) */
  value?: string[];
  /** Default value for uncontrolled mode */
  defaultValue?: string[];
  /** Callback when value changes */
  onValueChange?: (value: string[]) => void;
  /** Disable all items */
  disabled?: boolean;
  /** Children */
  children: React.ReactNode;
  /** Additional class name */
  className?: string;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      type = 'single',
      value: controlledValue,
      defaultValue = [],
      onValueChange,
      disabled = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [uncontrolledValue, setUncontrolledValue] =
      React.useState<string[]>(defaultValue);
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : uncontrolledValue;

    const handleValueChange = React.useCallback(
      (newValue: string[]) => {
        if (!isControlled) {
          setUncontrolledValue(newValue);
        }
        onValueChange?.(newValue);
      },
      [isControlled, onValueChange]
    );

    return (
      <AccordionContext.Provider
        value={{ type, value, onValueChange: handleValueChange, disabled }}
      >
        <div ref={ref} className={cn('space-y-2', className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';

// ============================================================================
// ACCORDION ITEM
// ============================================================================

interface AccordionItemContextValue {
  value: string;
}

const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(
  null
);

// Reserved for future use - AccordionItem context accessor
// function useAccordionItemContext() {
//   const context = React.useContext(AccordionItemContext);
//   if (!context) {
//     throw new Error('AccordionItem components must be used within an AccordionItem');
//   }
//   return context;
// }

export interface AccordionItemProps {
  /** Unique value for this item */
  value: string;
  /** Disable this item */
  disabled?: boolean;
  /** Children */
  children: React.ReactNode;
  /** Additional class name */
  className?: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, disabled: itemDisabled, children, className, ...props }, ref) => {
    const accordion = useAccordionContext();
    const isOpen = accordion.value.includes(value);
    const disabled = accordion.disabled || itemDisabled;

    const handleOpenChange = (open: boolean) => {
      if (disabled) return;

      if (accordion.type === 'single') {
        accordion.onValueChange(open ? [value] : []);
      } else {
        accordion.onValueChange(
          open
            ? [...accordion.value, value]
            : accordion.value.filter((v) => v !== value)
        );
      }
    };

    return (
      <AccordionItemContext.Provider value={{ value }}>
        <Collapsible
          ref={ref}
          open={isOpen}
          onOpenChange={handleOpenChange}
          disabled={disabled}
          className={cn(
            'border border-border rounded-[12px] overflow-hidden',
            'bg-surface-card',
            className
          )}
          {...props}
        >
          {children}
        </Collapsible>
      </AccordionItemContext.Provider>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

// ============================================================================
// ACCORDION TRIGGER
// ============================================================================

export interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Show chevron icon */
  showChevron?: boolean;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, children, showChevron = true, ...props }, ref) => {
  const { open } = useCollapsibleContext();

  return (
    <CollapsibleTrigger
      ref={ref}
      className={cn(
        'flex items-center justify-between w-full',
        'px-4 py-3',
        'text-sm font-medium text-white',
        'hover:bg-surface-hover',
        'transition-colors duration-150',
        className
      )}
      {...props}
    >
      {children}
      {showChevron && (
        <ChevronIcon
          className={cn(
            'h-4 w-4 text-text-muted transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      )}
    </CollapsibleTrigger>
  );
});

AccordionTrigger.displayName = 'AccordionTrigger';

// ============================================================================
// ACCORDION CONTENT
// ============================================================================

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  CollapsibleContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <CollapsibleContent
      ref={ref}
      className={cn('border-t border-border', className)}
      {...props}
    >
      <div className="px-4 py-3 text-sm text-text-muted">{children}</div>
    </CollapsibleContent>
  );
});

AccordionContent.displayName = 'AccordionContent';

// ============================================================================
// CHEVRON ICON
// ============================================================================

function ChevronIcon({ className }: { className?: string }) {
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
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ============================================================================
// EXPORTS
// ============================================================================

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};

export default Collapsible;
