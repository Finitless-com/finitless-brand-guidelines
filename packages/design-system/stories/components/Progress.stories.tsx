import type { Meta, StoryObj } from '@storybook/react';
import { Progress, CircularProgress } from '../../src/components/ui/progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Progress value (0-100)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Progress bar size',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'Color variant',
    },
    showValue: {
      control: 'boolean',
      description: 'Show percentage value',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate loading state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

// Default progress
export const Default: Story = {
  args: {
    value: 60,
  },
};

// With value display
export const WithValue: Story = {
  args: {
    value: 75,
    showValue: true,
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <span className="text-sm text-text-muted">Small</span>
        <Progress value={60} size="sm" />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-text-muted">Medium</span>
        <Progress value={60} size="md" />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-text-muted">Large</span>
        <Progress value={60} size="lg" />
      </div>
    </div>
  ),
};

// Color variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <span className="text-sm text-text-muted">Default</span>
        <Progress value={60} variant="default" showValue />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-text-muted">Success</span>
        <Progress value={100} variant="success" showValue />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-text-muted">Warning</span>
        <Progress value={45} variant="warning" showValue />
      </div>
      <div className="space-y-2">
        <span className="text-sm text-text-muted">Error</span>
        <Progress value={25} variant="error" showValue />
      </div>
    </div>
  ),
};

// Indeterminate
export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

// Circular progress
export const Circular: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <CircularProgress value={25} size="sm" />
      <CircularProgress value={50} size="md" />
      <CircularProgress value={75} size="lg" />
      <CircularProgress value={100} size="lg" variant="success" />
    </div>
  ),
};

// Circular with value
export const CircularWithValue: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <CircularProgress value={25} showValue size="md" />
      <CircularProgress value={50} showValue size="lg" />
      <CircularProgress value={75} showValue size="lg" variant="warning" />
    </div>
  ),
};

// Circular indeterminate
export const CircularIndeterminate: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <CircularProgress indeterminate size="sm" />
      <CircularProgress indeterminate size="md" />
      <CircularProgress indeterminate size="lg" />
    </div>
  ),
};
