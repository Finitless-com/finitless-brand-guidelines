import * as React from 'react';
import { Toaster as Sonner, toast } from 'sonner';
import { cn } from '@/lib/utils';

// ============================================================================
// TOASTER (Provider Component)
// ============================================================================

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: cn(
            'group toast',
            'group-[.toaster]:bg-background-elevated',
            'group-[.toaster]:border group-[.toaster]:border-border',
            'group-[.toaster]:text-text-primary',
            'group-[.toaster]:shadow-lg',
            'group-[.toaster]:rounded-xl'
          ),
          title: 'group-[.toast]:text-text-primary group-[.toast]:font-semibold',
          description: 'group-[.toast]:text-text-muted',
          actionButton: cn(
            'group-[.toast]:bg-brand-primary',
            'group-[.toast]:text-white',
            'group-[.toast]:rounded-lg',
            'group-[.toast]:font-medium'
          ),
          cancelButton: cn(
            'group-[.toast]:bg-white/5',
            'group-[.toast]:text-text-muted',
            'group-[.toast]:rounded-lg'
          ),
          closeButton: cn(
            'group-[.toast]:bg-white/5',
            'group-[.toast]:text-text-muted',
            'group-[.toast]:border-border',
            'group-[.toast]:hover:bg-white/10'
          ),
          success: cn(
            'group-[.toaster]:border-semantic-success/30',
            'group-[.toaster]:bg-semantic-success/10'
          ),
          error: cn(
            'group-[.toaster]:border-semantic-error/30',
            'group-[.toaster]:bg-semantic-error/10'
          ),
          warning: cn(
            'group-[.toaster]:border-semantic-warning/30',
            'group-[.toaster]:bg-semantic-warning/10'
          ),
          info: cn(
            'group-[.toaster]:border-brand-link/30',
            'group-[.toaster]:bg-brand-link/10'
          ),
        },
      }}
      {...props}
    />
  );
};

// ============================================================================
// TOAST TYPES & UTILITIES
// ============================================================================

type ToastType = 'default' | 'success' | 'error' | 'warning' | 'info' | 'loading';

interface ToastOptions {
  id?: string | number;
  title?: string;
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  cancel?: {
    label: string;
    onClick?: () => void;
  };
  onDismiss?: () => void;
  onAutoClose?: () => void;
}

/**
 * Show a toast notification
 *
 * @example
 * ```tsx
 * // Simple toast
 * showToast('Hello world');
 *
 * // With options
 * showToast('Success!', { type: 'success', description: 'Your changes were saved.' });
 *
 * // With action
 * showToast('File deleted', {
 *   type: 'warning',
 *   action: { label: 'Undo', onClick: () => restoreFile() }
 * });
 *
 * // Loading toast with promise
 * showToast.promise(saveData(), {
 *   loading: 'Saving...',
 *   success: 'Saved!',
 *   error: 'Could not save.',
 * });
 * ```
 */
function showToast(
  message: string,
  options?: ToastOptions & { type?: ToastType }
) {
  const { type = 'default', title, description, action, cancel, ...rest } = options || {};

  const toastContent = title || message;
  const toastDescription = title ? message : description;

  const toastOptions = {
    description: toastDescription,
    action: action
      ? {
          label: action.label,
          onClick: action.onClick,
        }
      : undefined,
    cancel: cancel
      ? {
          label: cancel.label,
          onClick: cancel.onClick || (() => {}),
        }
      : undefined,
    ...rest,
  };

  switch (type) {
    case 'success':
      return toast.success(toastContent, toastOptions);
    case 'error':
      return toast.error(toastContent, toastOptions);
    case 'warning':
      return toast.warning(toastContent, toastOptions);
    case 'info':
      return toast.info(toastContent, toastOptions);
    case 'loading':
      return toast.loading(toastContent, toastOptions);
    default:
      return toast(toastContent, toastOptions);
  }
}

// Attach convenience methods with explicit types
showToast.dismiss = (id?: string | number) => toast.dismiss(id);
showToast.success = (message: string, options?: ToastOptions) =>
  showToast(message, { ...options, type: 'success' });
showToast.error = (message: string, options?: ToastOptions) =>
  showToast(message, { ...options, type: 'error' });
showToast.warning = (message: string, options?: ToastOptions) =>
  showToast(message, { ...options, type: 'warning' });
showToast.info = (message: string, options?: ToastOptions) =>
  showToast(message, { ...options, type: 'info' });
showToast.loading = (message: string, options?: ToastOptions) =>
  showToast(message, { ...options, type: 'loading' });

// Promise helper with explicit typing to avoid exposing internal Sonner types
interface PromiseMessages<T> {
  loading: string;
  success: string | ((data: T) => string);
  error: string | ((error: unknown) => string);
}

showToast.promise = <T,>(
  promise: Promise<T>,
  messages: PromiseMessages<T>
): void => {
  toast.promise(promise, messages);
};

// ============================================================================
// EXPORTS
// ============================================================================

export { Toaster, showToast, toast };
export type { ToasterProps, ToastOptions, ToastType };
