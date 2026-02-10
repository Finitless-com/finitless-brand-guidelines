import type { Meta, StoryObj } from '@storybook/react';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarStatus,
  AvatarGroup,
  AvatarWithStatus,
  getInitials,
} from '../../src/components/ui/avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Avatar size',
    },
    ring: {
      control: 'boolean',
      description: 'Show ring around avatar',
    },
    ringColor: {
      control: 'select',
      options: ['default', 'primary', 'success', 'error', 'warning'],
      description: 'Ring color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// With image
export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

// With fallback
export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs">
        <AvatarFallback>XS</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
      <Avatar size="2xl">
        <AvatarFallback>2X</AvatarFallback>
      </Avatar>
    </div>
  ),
};

// With ring
export const WithRing: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar ring ringColor="default">
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <Avatar ring ringColor="primary">
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <Avatar ring ringColor="success">
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
      <Avatar ring ringColor="error">
        <AvatarFallback>D</AvatarFallback>
      </Avatar>
      <Avatar ring ringColor="warning">
        <AvatarFallback>E</AvatarFallback>
      </Avatar>
    </div>
  ),
};

// With status indicator
export const WithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>ON</AvatarFallback>
        <AvatarStatus status="online" />
      </Avatar>
      <Avatar>
        <AvatarFallback>OF</AvatarFallback>
        <AvatarStatus status="offline" />
      </Avatar>
      <Avatar>
        <AvatarFallback>BS</AvatarFallback>
        <AvatarStatus status="busy" />
      </Avatar>
      <Avatar>
        <AvatarFallback>AW</AvatarFallback>
        <AvatarStatus status="away" />
      </Avatar>
    </div>
  ),
};

// Avatar group
export const Group: Story = {
  render: () => (
    <AvatarGroup max={3} size="md">
      <Avatar>
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>D</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>E</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows first 3 avatars with a "+2" indicator for remaining.',
      },
    },
  },
};

// Convenience component
export const ConvenienceComponent: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <AvatarWithStatus
        src="https://github.com/shadcn.png"
        fallback="CN"
        status="online"
        size="lg"
      />
      <AvatarWithStatus fallback="JD" status="busy" size="lg" />
      <AvatarWithStatus fallback="AB" status="away" size="lg" />
    </div>
  ),
};

// Using getInitials helper
export const InitialsHelper: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>{getInitials('John Doe')}</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>{getInitials('Alice')}</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>{getInitials('Bob Smith Johnson')}</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use `getInitials()` to automatically generate initials from names.',
      },
    },
  },
};
