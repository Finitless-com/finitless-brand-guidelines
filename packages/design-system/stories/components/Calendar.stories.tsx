import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Calendar } from '../../src/components/ui/calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

// Single date selection
export const SingleDate: Story = {
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-xl border border-border bg-background-elevated"
      />
    );
  },
};

// Date range selection
export const DateRange: Story = {
  render: function Render() {
    const [range, setRange] = useState<{ from: Date; to?: Date } | undefined>({
      from: new Date(),
      to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        className="rounded-xl border border-border bg-background-elevated"
      />
    );
  },
};

// Multiple date selection
export const MultipleDates: Story = {
  render: function Render() {
    const [dates, setDates] = useState<Date[] | undefined>([
      new Date(),
      new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    ]);

    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-xl border border-border bg-background-elevated"
      />
    );
  },
};

// With disabled dates
export const WithDisabledDates: Story = {
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>();

    // Disable weekends
    const disabledDays = (date: Date) => {
      return date.getDay() === 0 || date.getDay() === 6;
    };

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={disabledDays}
        className="rounded-xl border border-border bg-background-elevated"
      />
    );
  },
};

// Two months view
export const TwoMonths: Story = {
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>();

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
        className="rounded-xl border border-border bg-background-elevated"
      />
    );
  },
};
