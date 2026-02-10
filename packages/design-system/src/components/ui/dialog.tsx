import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================================
// DIALOG ROOT
// ============================================================================

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

// ============================================================================
// DIALOG OVERLAY
// ============================================================================

const DialogOverlay = React.forwardRef<
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
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

// ============================================================================
// DIALOG CONTENT VARIANTS
// ============================================================================

const dialogContentVariants = cva(
  [
    'fixed left-[50%] top-[50%] z-modal',
    'translate-x-[-50%] translate-y-[-50%]',
    'w-full',
    'bg-background-elevated border border-border rounded-xl',
    'shadow-2xl',
    'flex flex-col',
    'data-[state=open]:animate-dialog-in',
    'data-[state=closed]:animate-dialog-out',
    'focus:outline-none',
  ],
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        full: 'max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  }
);

// ============================================================================
// DIALOG CONTENT
// ============================================================================

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogContentVariants> {
  /** Show close button */
  showClose?: boolean;
  /** Enable scrollable body with sticky header/footer */
  scrollable?: boolean;
}

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(
  (
    {
      className,
      children,
      size,
      showClose = true,
      scrollable = false,
      ...props
    },
    ref
  ) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          dialogContentVariants({ size }),
          scrollable && 'max-h-[85vh]',
          !scrollable && 'p-6',
          className
        )}
        {...props}
      >
        {children}
        {showClose && (
          <DialogPrimitive.Close
            className={cn(
              'absolute right-4 top-4',
              'rounded-full p-1.5',
              'text-text-muted hover:text-white',
              'hover:bg-surface-card',
              'transition-colors duration-150',
              'focus:outline-none focus:ring-2 focus:ring-brand-link focus:ring-offset-2 focus:ring-offset-background-elevated',
              'disabled:pointer-events-none'
            )}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

// ============================================================================
// DIALOG HEADER (Sticky when scrollable)
// ============================================================================

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Make header sticky when content scrolls */
  sticky?: boolean;
}

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, sticky, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col gap-2 text-left',
        sticky && [
          'sticky top-0 z-10',
          'bg-background-elevated',
          'px-6 py-4',
          'border-b border-border',
          '-mx-6 -mt-6 mb-4',
          'rounded-t-xl',
        ],
        className
      )}
      {...props}
    />
  )
);
DialogHeader.displayName = 'DialogHeader';

// ============================================================================
// DIALOG BODY (Scrollable content area)
// ============================================================================

const DialogBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex-1 overflow-y-auto',
      'px-6 py-4',
      'scrollbar-thin',
      className
    )}
    {...props}
  />
));
DialogBody.displayName = 'DialogBody';

// ============================================================================
// DIALOG FOOTER (Sticky when scrollable)
// ============================================================================

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Make footer sticky when content scrolls */
  sticky?: boolean;
  /** Show divider line */
  divider?: boolean;
}

const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, sticky, divider, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end gap-3',
        !sticky && 'mt-6',
        sticky && [
          'sticky bottom-0 z-10',
          'bg-background-elevated',
          'px-6 py-4',
          '-mx-6 -mb-6',
          'rounded-b-xl',
        ],
        divider && 'border-t border-border',
        className
      )}
      {...props}
    />
  )
);
DialogFooter.displayName = 'DialogFooter';

// ============================================================================
// DIALOG TITLE
// ============================================================================

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-xl font-semibold text-white', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

// ============================================================================
// DIALOG DESCRIPTION
// ============================================================================

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-text-muted', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// ============================================================================
// EXPORTS
// ============================================================================

/**
 * Dialog component for modal dialogs.
 *
 * @example
 * ```tsx
 * // Basic dialog
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button>Open Dialog</Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Dialog Title</DialogTitle>
 *       <DialogDescription>
 *         This is the dialog description.
 *       </DialogDescription>
 *     </DialogHeader>
 *     <div className="py-4">
 *       Dialog content goes here.
 *     </div>
 *     <DialogFooter>
 *       <Button variant="secondary">Cancel</Button>
 *       <Button>Confirm</Button>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 *
 * // Different sizes
 * <DialogContent size="sm">...</DialogContent>
 * <DialogContent size="xl">...</DialogContent>
 * <DialogContent size="full">...</DialogContent>
 *
 * // Scrollable with sticky header/footer
 * <DialogContent scrollable>
 *   <DialogHeader sticky>
 *     <DialogTitle>Long Content</DialogTitle>
 *   </DialogHeader>
 *   <DialogBody>
 *     {/* Long scrollable content *\/}
 *   </DialogBody>
 *   <DialogFooter sticky divider>
 *     <Button>Save</Button>
 *   </DialogFooter>
 * </DialogContent>
 *
 * // Without close button
 * <DialogContent showClose={false}>...</DialogContent>
 * ```
 */
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  dialogContentVariants,
};
