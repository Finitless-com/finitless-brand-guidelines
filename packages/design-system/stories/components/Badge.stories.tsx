import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../src/components/ui/badge';
import { Star, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'success',
        'warning',
        'error',
        'info',
        'outline',
        'outline-primary',
        'outline-success',
        'outline-error',
        'gradient',
      ],
      description: 'Badge variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Badge size',
    },
    shape: {
      control: 'select',
      options: ['default', 'pill', 'square'],
      description: 'Badge shape',
    },
    removable: {
      control: 'boolean',
      description: 'Show remove button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Default badge
export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

// All variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="outline-primary">Outline Primary</Badge>
      <Badge variant="gradient">Gradient</Badge>
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="xs">XS</Badge>
      <Badge size="sm">SM</Badge>
      <Badge size="md">MD</Badge>
      <Badge size="lg">LG</Badge>
    </div>
  ),
};

// Shapes
export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge shape="default">Default</Badge>
      <Badge shape="pill">Pill</Badge>
      <Badge shape="square">1</Badge>
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success" icon={<CheckCircle className="h-3 w-3" />}>
        Verified
      </Badge>
      <Badge variant="warning" icon={<AlertTriangle className="h-3 w-3" />}>
        Warning
      </Badge>
      <Badge variant="error" icon={<XCircle className="h-3 w-3" />}>
        Error
      </Badge>
      <Badge variant="gradient" icon={<Star className="h-3 w-3" />}>
        Featured
      </Badge>
    </div>
  ),
};

// Removable badges
export const Removable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge removable onRemove={() => alert('Removed!')}>
        Tag 1
      </Badge>
      <Badge variant="success" removable onRemove={() => alert('Removed!')}>
        Tag 2
      </Badge>
      <Badge variant="info" removable onRemove={() => alert('Removed!')}>
        Tag 3
      </Badge>
    </div>
  ),
};

// Status badges
export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="error">Failed</Badge>
      <Badge variant="secondary">Inactive</Badge>
      <Badge variant="info">In Progress</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use semantic variants for status indicators.',
      },
    },
  },
};

// Outline variants
export const OutlineVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline">Default Outline</Badge>
      <Badge variant="outline-primary">Primary Outline</Badge>
      <Badge variant="outline-success">Success Outline</Badge>
      <Badge variant="outline-error">Error Outline</Badge>
    </div>
  ),
};
