import { DayPicker, type DayPickerProps } from 'react-day-picker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from './button';

// ============================================================================
// CALENDAR
// ============================================================================

export type CalendarProps = DayPickerProps;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        month_caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium text-text-primary',
        nav: 'space-x-1 flex items-center',
        button_previous: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          'absolute left-1 top-0'
        ),
        button_next: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          'absolute right-1 top-0'
        ),
        month_grid: 'w-full border-collapse space-y-1',
        weekdays: 'flex',
        weekday:
          'text-text-muted rounded-md w-9 font-normal text-[0.8rem]',
        week: 'flex w-full mt-2',
        day: cn(
          'relative p-0 text-center text-sm',
          'focus-within:relative focus-within:z-20',
          '[&:has([aria-selected])]:bg-brand-primary/10',
          '[&:has([aria-selected].day-outside)]:bg-brand-primary/5',
          '[&:has([aria-selected].day-range-end)]:rounded-r-md'
        ),
        day_button: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal',
          'aria-selected:opacity-100',
          'hover:bg-white/5 hover:text-text-primary'
        ),
        range_start: 'day-range-start rounded-l-md',
        range_end: 'day-range-end rounded-r-md',
        selected: cn(
          'bg-brand-primary text-white',
          'hover:bg-brand-primary hover:text-white',
          'focus:bg-brand-primary focus:text-white'
        ),
        today: 'bg-white/10 text-text-primary',
        outside: 'day-outside text-text-muted opacity-50',
        disabled: 'text-text-muted opacity-50',
        range_middle:
          'aria-selected:bg-brand-primary/10 aria-selected:text-text-primary',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: (props) => {
          if (props.orientation === 'left') {
            return <ChevronLeft className="h-4 w-4" />;
          }
          return <ChevronRight className="h-4 w-4" />;
        },
      }}
      {...props}
    />
  );
}

Calendar.displayName = 'Calendar';

// ============================================================================
// EXPORTS
// ============================================================================

export { Calendar };
