import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from './button';

// ============================================================================
// PAGINATION
// ============================================================================

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

// ============================================================================
// PAGINATION CONTENT
// ============================================================================

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

// ============================================================================
// PAGINATION ITEM
// ============================================================================

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

// ============================================================================
// PAGINATION LINK
// ============================================================================

type PaginationLinkProps = {
  isActive?: boolean;
  href?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
} & Omit<React.ComponentProps<'button'>, 'href'>;

const PaginationLink = ({
  className,
  isActive,
  href,
  children,
  ...props
}: PaginationLinkProps) => {
  const linkClassName = cn(
    buttonVariants({
      variant: isActive ? 'secondary' : 'ghost',
      size: 'icon-sm',
    }),
    'h-9 w-9',
    isActive && 'bg-brand-primary text-white hover:bg-brand-primary/90',
    className
  );

  if (href) {
    return (
      <a
        href={href}
        aria-current={isActive ? 'page' : undefined}
        className={linkClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      aria-current={isActive ? 'page' : undefined}
      className={linkClassName}
      {...props}
    >
      {children}
    </button>
  );
};
PaginationLink.displayName = 'PaginationLink';

// ============================================================================
// PAGINATION PREVIOUS
// ============================================================================

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn('gap-1 pl-2.5 w-auto', className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span className="hidden sm:inline">Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

// ============================================================================
// PAGINATION NEXT
// ============================================================================

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn('gap-1 pr-2.5 w-auto', className)}
    {...props}
  >
    <span className="hidden sm:inline">Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

// ============================================================================
// PAGINATION ELLIPSIS
// ============================================================================

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn(
      'flex h-9 w-9 items-center justify-center',
      'text-text-muted',
      className
    )}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

// ============================================================================
// PAGINATION FIRST
// ============================================================================

const PaginationFirst = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to first page"
    className={cn('gap-1', className)}
    {...props}
  >
    <span className="sr-only">First</span>
    <ChevronLeft className="h-4 w-4" />
    <ChevronLeft className="h-4 w-4 -ml-3" />
  </PaginationLink>
);
PaginationFirst.displayName = 'PaginationFirst';

// ============================================================================
// PAGINATION LAST
// ============================================================================

const PaginationLast = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to last page"
    className={cn('gap-1', className)}
    {...props}
  >
    <span className="sr-only">Last</span>
    <ChevronRight className="h-4 w-4" />
    <ChevronRight className="h-4 w-4 -ml-3" />
  </PaginationLink>
);
PaginationLast.displayName = 'PaginationLast';

// ============================================================================
// EXPORTS
// ============================================================================

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationFirst,
  PaginationLast,
};
