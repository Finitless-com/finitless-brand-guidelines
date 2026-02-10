import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from './dialog';

// ============================================================================
// COMMAND
// ============================================================================

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col',
      'overflow-hidden',
      'rounded-xl',
      'bg-background-elevated',
      'text-text-primary',
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

// ============================================================================
// COMMAND DIALOG (Modal wrapper)
// ============================================================================

interface CommandDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

const CommandDialog = ({
  open,
  onOpenChange,
  children,
}: CommandDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command
          className={cn(
            '[&_[cmdk-group-heading]]:px-2',
            '[&_[cmdk-group-heading]]:font-medium',
            '[&_[cmdk-group-heading]]:text-text-muted',
            '[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0',
            '[&_[cmdk-group]]:px-2',
            '[&_[cmdk-input-wrapper]_svg]:h-5',
            '[&_[cmdk-input-wrapper]_svg]:w-5',
            '[&_[cmdk-input]]:h-12',
            '[&_[cmdk-item]]:px-2',
            '[&_[cmdk-item]]:py-3',
            '[&_[cmdk-item]_svg]:h-5',
            '[&_[cmdk-item]_svg]:w-5'
          )}
        >
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

// ============================================================================
// COMMAND INPUT
// ============================================================================

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & {
    showClearButton?: boolean;
    onClear?: () => void;
  }
>(({ className, showClearButton, onClear, ...props }, ref) => (
  <div
    className="flex items-center border-b border-border px-3"
    cmdk-input-wrapper=""
  >
    <Search className="mr-2 h-4 w-4 shrink-0 text-text-muted opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-11 w-full',
        'bg-transparent py-3',
        'text-sm text-text-primary',
        'placeholder:text-text-muted',
        'outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
    {showClearButton && (
      <button
        type="button"
        onClick={onClear}
        className={cn(
          'ml-2 p-1 rounded',
          'text-text-muted hover:text-text-primary',
          'hover:bg-white/5',
          'transition-colors duration-150'
        )}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Clear</span>
      </button>
    )}
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

// ============================================================================
// COMMAND LIST
// ============================================================================

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      'max-h-[300px] overflow-y-auto overflow-x-hidden',
      'scrollbar-thin',
      className
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

// ============================================================================
// COMMAND EMPTY
// ============================================================================

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm text-text-muted"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

// ============================================================================
// COMMAND LOADING
// ============================================================================

const CommandLoading = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Loading>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Loading>
>((props, ref) => (
  <CommandPrimitive.Loading
    ref={ref}
    className="py-6 text-center text-sm text-text-muted"
    {...props}
  />
));

CommandLoading.displayName = CommandPrimitive.Loading.displayName;

// ============================================================================
// COMMAND GROUP
// ============================================================================

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'overflow-hidden p-1',
      'text-text-primary',
      '[&_[cmdk-group-heading]]:px-2',
      '[&_[cmdk-group-heading]]:py-1.5',
      '[&_[cmdk-group-heading]]:text-xs',
      '[&_[cmdk-group-heading]]:font-medium',
      '[&_[cmdk-group-heading]]:text-text-muted',
      '[&_[cmdk-group-heading]]:uppercase',
      '[&_[cmdk-group-heading]]:tracking-wider',
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

// ============================================================================
// COMMAND SEPARATOR
// ============================================================================

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

// ============================================================================
// COMMAND ITEM
// ============================================================================

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center',
      'rounded-lg px-2 py-1.5',
      'text-sm',
      'outline-none',
      'aria-selected:bg-white/5 aria-selected:text-text-primary',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

// ============================================================================
// COMMAND SHORTCUT
// ============================================================================

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-text-muted',
        className
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = 'CommandShortcut';

// ============================================================================
// EXPORTS
// ============================================================================

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandLoading,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
