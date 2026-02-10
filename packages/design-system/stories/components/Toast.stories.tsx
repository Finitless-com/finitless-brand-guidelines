import type { Meta, StoryObj } from '@storybook/react';
import { Toaster, showToast } from '../../src/components/ui/toast';
import { Button } from '../../src/components/ui/button';

const meta: Meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Toaster />
        <Story />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj;

// Default toast
export const Default: Story = {
  render: () => (
    <Button onClick={() => showToast('This is a notification')}>
      Show Toast
    </Button>
  ),
};

// Success toast
export const Success: Story = {
  render: () => (
    <Button
      onClick={() =>
        showToast.success('Changes saved successfully!')
      }
    >
      Show Success
    </Button>
  ),
};

// Error toast
export const Error: Story = {
  render: () => (
    <Button
      variant="destructive"
      onClick={() =>
        showToast.error('Something went wrong. Please try again.')
      }
    >
      Show Error
    </Button>
  ),
};

// Warning toast
export const Warning: Story = {
  render: () => (
    <Button
      variant="secondary"
      onClick={() =>
        showToast.warning('Your session will expire in 5 minutes.')
      }
    >
      Show Warning
    </Button>
  ),
};

// Info toast
export const Info: Story = {
  render: () => (
    <Button
      variant="secondary"
      onClick={() =>
        showToast.info('New version available. Refresh to update.')
      }
    >
      Show Info
    </Button>
  ),
};

// Loading toast
export const Loading: Story = {
  render: () => (
    <Button
      onClick={() => showToast.loading('Uploading files...')}
    >
      Show Loading
    </Button>
  ),
};

// With description
export const WithDescription: Story = {
  render: () => (
    <Button
      onClick={() =>
        showToast('File Uploaded', {
          type: 'success',
          description: 'Your file has been uploaded and is now available.',
        })
      }
    >
      With Description
    </Button>
  ),
};

// With action
export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        showToast('File deleted', {
          type: 'warning',
          action: {
            label: 'Undo',
            onClick: () => showToast.success('File restored!'),
          },
        })
      }
    >
      With Action
    </Button>
  ),
};

// All types
export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => showToast('Default notification')}>Default</Button>
      <Button onClick={() => showToast.success('Success!')}>Success</Button>
      <Button onClick={() => showToast.error('Error!')}>Error</Button>
      <Button onClick={() => showToast.warning('Warning!')}>Warning</Button>
      <Button onClick={() => showToast.info('Info!')}>Info</Button>
      <Button onClick={() => showToast.loading('Loading...')}>Loading</Button>
    </div>
  ),
};
