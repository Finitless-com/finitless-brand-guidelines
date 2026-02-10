import * as React from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================================
// BREADCRUMB
// ============================================================================

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = 'Breadcrumb';

// ============================================================================
// BREADCRUMB LIST
// ============================================================================

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      'flex flex-wrap items-center gap-1.5',
      'text-sm text-text-muted',
      'break-words',
      'sm:gap-2.5',
      className
    )}
    {...props}
  />
));
BreadcrumbList.displayName = 'BreadcrumbList';

// ============================================================================
// BREADCRUMB ITEM
// ============================================================================

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('inline-flex items-center gap-1.5', className)}
    {...props}
  />
));
BreadcrumbItem.displayName = 'BreadcrumbItem';

// ============================================================================
// BREADCRUMB LINK
// ============================================================================

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean;
  }
>(({ asChild, className, children, ...props }, ref) => {
  const linkClassName = cn(
    'transition-colors duration-150',
    'hover:text-text-primary',
    className
  );

  // If asChild is true, we expect a single child element to clone
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: linkClassName,
    } as React.HTMLAttributes<HTMLElement>);
  }

  return (
    <a ref={ref} className={linkClassName} {...props}>
      {children}
    </a>
  );
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

// ============================================================================
// BREADCRUMB PAGE (Current page, not a link)
// ============================================================================

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn('font-medium text-text-primary', className)}
    {...props}
  />
));
BreadcrumbPage.displayName = 'BreadcrumbPage';

// ============================================================================
// BREADCRUMB SEPARATOR
// ============================================================================

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn('[&>svg]:size-3.5', className)}
    {...props}
  >
    {children ?? <ChevronRight className="text-text-muted/50" />}
  </li>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

// ============================================================================
// BREADCRUMB ELLIPSIS (For collapsed items)
// ============================================================================

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn(
      'flex h-9 w-9 items-center justify-center',
      'cursor-pointer',
      'rounded-md',
      'hover:bg-white/5',
      'transition-colors duration-150',
      className
    )}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

// ============================================================================
// EXPORTS
// ============================================================================

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
