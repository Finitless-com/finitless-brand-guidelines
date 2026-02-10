import type { Meta, StoryObj } from '@storybook/react';
import { Plus, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '../../src/components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'cta', 'secondary', 'ghost', 'destructive', 'link'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon', 'icon-sm', 'icon-lg'],
      description: 'Button size',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether button takes full width',
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows loading spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Primary button (default)
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

// CTA gradient button - USE SPARINGLY (one per page)
export const CTA: Story = {
  args: {
    children: 'Get Started',
    variant: 'cta',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: '**IMPORTANT**: Only use ONE CTA button per page. Reserved for hero sections and primary form submits.',
      },
    },
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

// Ghost button
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

// Destructive button
export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

// Link button
export const Link: Story = {
  args: {
    children: 'Learn more',
    variant: 'link',
  },
};

// With left icon
export const WithLeftIcon: Story = {
  args: {
    children: 'Add Item',
    leftIcon: <Plus className="h-4 w-4" />,
  },
};

// With right icon
export const WithRightIcon: Story = {
  args: {
    children: 'Continue',
    rightIcon: <ArrowRight className="h-4 w-4" />,
  },
};

// Loading state
export const Loading: Story = {
  args: {
    children: 'Submitting...',
    isLoading: true,
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="cta">CTA</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
};

// Icon buttons
export const IconButtons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="icon-sm" variant="secondary">
        <Plus className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="secondary">
        <Plus className="h-5 w-5" />
      </Button>
      <Button size="icon-lg" variant="primary">
        <Plus className="h-5 w-5" />
      </Button>
    </div>
  ),
};
