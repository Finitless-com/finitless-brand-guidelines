import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../src/components/ui/input';
import { Label } from '../../src/components/ui/label';
import { Mail, Lock, Search, Globe, AtSign } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Input size',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below input',
    },
    showClearButton: {
      control: 'boolean',
      description: 'Show clear button when input has value',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
    },
    showCount: {
      control: 'boolean',
      description: 'Show character count',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Default input
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

// With label
export const WithLabel: Story = {
  render: () => (
    <div className="grid gap-2 max-w-sm">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="name@example.com" />
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input (default)" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

// With prefix icon
export const WithPrefixIcon: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <Input
        prefix={<Mail className="h-4 w-4 text-text-muted" />}
        placeholder="Email address"
        type="email"
      />
      <Input
        prefix={<Lock className="h-4 w-4 text-text-muted" />}
        placeholder="Password"
        type="password"
      />
      <Input
        prefix={<Search className="h-4 w-4 text-text-muted" />}
        placeholder="Search..."
      />
    </div>
  ),
};

// With suffix
export const WithSuffix: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <Input
        suffix={<span className="text-text-muted text-sm">@gmail.com</span>}
        placeholder="username"
      />
      <Input
        prefix={<Globe className="h-4 w-4 text-text-muted" />}
        suffix={<span className="text-text-muted text-sm">.com</span>}
        placeholder="yourwebsite"
      />
    </div>
  ),
};

// With prefix text
export const WithPrefixText: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <Input
        prefix={<span className="text-text-muted text-sm">https://</span>}
        placeholder="example.com"
      />
      <Input
        prefix={<AtSign className="h-4 w-4 text-text-muted" />}
        placeholder="username"
      />
    </div>
  ),
};

// With error
export const WithError: Story = {
  args: {
    placeholder: 'Enter email',
    defaultValue: 'invalid-email',
    error: 'Please enter a valid email address',
  },
};

// With helper text
export const WithHelperText: Story = {
  args: {
    placeholder: 'Choose a username',
    helperText: 'Username must be 3-20 characters long',
  },
};

// With character count
export const WithCharacterCount: Story = {
  args: {
    placeholder: 'Enter bio',
    maxLength: 100,
    showCount: true,
  },
};

// With clear button
export const WithClearButton: Story = {
  args: {
    placeholder: 'Search...',
    defaultValue: 'Some text',
    showClearButton: true,
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    defaultValue: 'Cannot edit',
  },
};

// Complete form field
export const CompleteFormField: Story = {
  render: () => (
    <div className="grid gap-2 max-w-sm">
      <Label htmlFor="bio">Bio</Label>
      <Input
        id="bio"
        placeholder="Tell us about yourself"
        maxLength={150}
        showCount
        helperText="This will be displayed on your public profile"
      />
    </div>
  ),
};
