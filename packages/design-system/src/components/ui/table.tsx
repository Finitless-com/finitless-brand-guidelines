import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ============================================================================
// TABLE VARIANTS
// ============================================================================

const tableVariants = cva(
  [
    'w-full',
    'caption-bottom',
    'text-sm',
  ],
  {
    variants: {
      variant: {
        default: '',
        striped: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

// ============================================================================
// TABLE CONTEXT
// ============================================================================

interface TableContextValue {
  variant: 'default' | 'striped';
}

const TableContext = React.createContext<TableContextValue>({
  variant: 'default',
});

// ============================================================================
// TABLE
// ============================================================================

export interface TableProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <TableContext.Provider value={{ variant: variant ?? 'default' }}>
      <div className="relative w-full overflow-auto scrollbar-thin">
        <table
          ref={ref}
          className={cn(tableVariants({ variant }), className)}
          {...props}
        />
      </div>
    </TableContext.Provider>
  )
);
Table.displayName = 'Table';

// ============================================================================
// TABLE HEADER
// ============================================================================

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      '[&_tr]:border-b [&_tr]:border-border',
      className
    )}
    {...props}
  />
));
TableHeader.displayName = 'TableHeader';

// ============================================================================
// TABLE BODY
// ============================================================================

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(TableContext);

  return (
    <tbody
      ref={ref}
      className={cn(
        '[&_tr:last-child]:border-0',
        variant === 'striped' && '[&_tr:nth-child(even)]:bg-white/2',
        className
      )}
      {...props}
    />
  );
});
TableBody.displayName = 'TableBody';

// ============================================================================
// TABLE FOOTER
// ============================================================================

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t border-border',
      'bg-white/2',
      'font-medium',
      '[&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

// ============================================================================
// TABLE ROW
// ============================================================================

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  /** Make row selectable */
  selectable?: boolean;
  /** Row is selected */
  selected?: boolean;
}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, selectable, selected, ...props }, ref) => (
    <tr
      ref={ref}
      data-selected={selected}
      className={cn(
        'border-b border-border',
        'transition-colors duration-150',
        'hover:bg-white/3',
        selectable && 'cursor-pointer',
        selected && 'bg-brand-primary/10',
        'data-[state=selected]:bg-brand-primary/10',
        className
      )}
      {...props}
    />
  )
);
TableRow.displayName = 'TableRow';

// ============================================================================
// TABLE HEAD (Header Cell)
// ============================================================================

export interface TableHeadProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  /** Make column sortable */
  sortable?: boolean;
  /** Current sort direction */
  sortDirection?: 'asc' | 'desc' | null;
}

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, sortable, sortDirection, children, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        'h-10 px-4',
        'text-left align-middle',
        'font-medium text-text-muted',
        'whitespace-nowrap',
        '[&:has([role=checkbox])]:pr-0',
        sortable && 'cursor-pointer hover:text-text-primary',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1">
        {children}
        {sortable && sortDirection && (
          <span className="text-xs">
            {sortDirection === 'asc' ? '↑' : '↓'}
          </span>
        )}
      </div>
    </th>
  )
);
TableHead.displayName = 'TableHead';

// ============================================================================
// TABLE CELL
// ============================================================================

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'p-4',
      'align-middle',
      'text-text-primary',
      '[&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

// ============================================================================
// TABLE CAPTION
// ============================================================================

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-text-muted', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

// ============================================================================
// TABLE EMPTY STATE
// ============================================================================

export interface TableEmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon to display */
  icon?: React.ReactNode;
  /** Title text */
  title?: string;
  /** Description text */
  description?: string;
  /** Number of columns to span */
  colSpan?: number;
}

const TableEmpty = React.forwardRef<HTMLTableRowElement, TableEmptyProps>(
  (
    {
      className,
      icon,
      title = 'No results',
      description,
      colSpan = 1,
      children,
      ...props
    },
    ref
  ) => (
    <tr ref={ref}>
      <td colSpan={colSpan} className="h-32">
        <div
          className={cn(
            'flex flex-col items-center justify-center',
            'text-center',
            className
          )}
          {...props}
        >
          {icon && (
            <div className="mb-3 text-text-muted opacity-50">{icon}</div>
          )}
          <p className="text-sm font-medium text-text-muted">{title}</p>
          {description && (
            <p className="mt-1 text-sm text-text-muted/70">{description}</p>
          )}
          {children}
        </div>
      </td>
    </tr>
  )
);
TableEmpty.displayName = 'TableEmpty';

// ============================================================================
// EXPORTS
// ============================================================================

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableEmpty,
  tableVariants,
};
