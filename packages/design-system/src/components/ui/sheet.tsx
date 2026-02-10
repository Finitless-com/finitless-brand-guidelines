import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================================
// SHEET ROOT
// ============================================================================

const Sheet = DialogPrimitive.Root;

const SheetTrigger = DialogPrimitive.Trigger;

const SheetClose = DialogPrimitive.Close;

const SheetPortal = DialogPrimitive.Portal;

// ============================================================================
// SHEET OVERLAY
// ============================================================================

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-overlay',
      'bg-black/60 backdrop-blur-sm',
      'data-[state=open]:animate-overlay-in',
      'data-[state=closed]:animate-overlay-out',
      className
    )}
    {...props}
  />
));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

// ============================================================================
// SHEET CONTENT VARIANTS
// ============================================================================

const sheetVariants = cva(
  [
    'fixed z-modal',
    'bg-background-elevated border-border',
    'flex flex-col',
    'shadow-xl',
    'focus:outline-none',
  ],
  {
    variants: {
      side: {
        top: [
          'inset-x-0 top-0',
          'border-b rounded-b-xl',
          'data-[state=open]:animate-slide-in-from-top',
          'data-[state=closed]:animate-slide-out-to-top',
        ],
        bottom: [
          'inset-x-0 bottom-0',
          'border-t rounded-t-xl',
          'data-[state=open]:animate-slide-in-from-bottom',
          'data-[state=closed]:animate-slide-out-to-bottom',
        ],
        left: [
          'inset-y-0 left-0',
          'border-r rounded-r-xl',
          'w-3/4 sm:max-w-sm',
          'data-[state=open]:animate-slide-in-from-left',
          'data-[state=closed]:animate-slide-out-to-left',
        ],
        right: [
          'inset-y-0 right-0',
          'border-l rounded-l-xl',
          'w-3/4 sm:max-w-sm',
          'data-[state=open]:animate-slide-in-from-right',
          'data-[state=closed]:animate-slide-out-to-right',
        ],
      },
      size: {
        sm: '',
        md: '',
        lg: '',
        xl: '',
        full: '',
      },
    },
    compoundVariants: [
      // Horizontal sheets (left/right) - width sizing
      { side: 'left', size: 'sm', className: 'sm:max-w-xs' },
      { side: 'left', size: 'md', className: 'sm:max-w-sm' },
      { side: 'left', size: 'lg', className: 'sm:max-w-md' },
      { side: 'left', size: 'xl', className: 'sm:max-w-lg' },
      { side: 'left', size: 'full', className: 'w-full sm:max-w-full' },
      { side: 'right', size: 'sm', className: 'sm:max-w-xs' },
      { side: 'right', size: 'md', className: 'sm:max-w-sm' },
      { side: 'right', size: 'lg', className: 'sm:max-w-md' },
      { side: 'right', size: 'xl', className: 'sm:max-w-lg' },
      { side: 'right', size: 'full', className: 'w-full sm:max-w-full' },
      // Vertical sheets (top/bottom) - height sizing
      { side: 'top', size: 'sm', className: 'max-h-[25vh]' },
      { side: 'top', size: 'md', className: 'max-h-[40vh]' },
      { side: 'top', size: 'lg', className: 'max-h-[60vh]' },
      { side: 'top', size: 'xl', className: 'max-h-[80vh]' },
      { side: 'top', size: 'full', className: 'h-full' },
      { side: 'bottom', size: 'sm', className: 'max-h-[25vh]' },
      { side: 'bottom', size: 'md', className: 'max-h-[40vh]' },
      { side: 'bottom', size: 'lg', className: 'max-h-[60vh]' },
      { side: 'bottom', size: 'xl', className: 'max-h-[80vh]' },
      { side: 'bottom', size: 'full', className: 'h-full' },
    ],
    defaultVariants: {
      side: 'right',
      size: 'md',
    },
  }
);

// ============================================================================
// SHEET CONTENT
// ============================================================================

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  /** Show close button */
  showClose?: boolean;
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(({ side, size, className, children, showClose = true, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side, size }), className)}
      {...props}
    >
      {children}
      {showClose && (
        <DialogPrimitive.Close
          className={cn(
            'absolute right-4 top-4',
            'rounded-md p-1',
            'text-text-muted hover:text-text-primary',
            'opacity-70 hover:opacity-100',
            'transition-opacity duration-150',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-link',
            'disabled:pointer-events-none'
          )}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = DialogPrimitive.Content.displayName;

// ============================================================================
// SHEET HEADER
// ============================================================================

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col gap-2',
      'px-6 py-4',
      'border-b border-border',
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = 'SheetHeader';

// ============================================================================
// SHEET FOOTER
// ============================================================================

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end gap-2',
      'px-6 py-4',
      'border-t border-border',
      'mt-auto',
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';

// ============================================================================
// SHEET TITLE
// ============================================================================

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold text-text-primary', className)}
    {...props}
  />
));
SheetTitle.displayName = DialogPrimitive.Title.displayName;

// ============================================================================
// SHEET DESCRIPTION
// ============================================================================

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-text-muted', className)}
    {...props}
  />
));
SheetDescription.displayName = DialogPrimitive.Description.displayName;

// ============================================================================
// SHEET BODY (Scrollable content area)
// ============================================================================

const SheetBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex-1 overflow-y-auto',
      'px-6 py-4',
      'scrollbar-thin',
      className
    )}
    {...props}
  />
);
SheetBody.displayName = 'SheetBody';

// ============================================================================
// EXPORTS
// ============================================================================

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetBody,
  sheetVariants,
};
