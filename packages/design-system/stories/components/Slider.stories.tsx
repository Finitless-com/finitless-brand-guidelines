import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Slider, RangeSlider } from '../../src/components/ui/slider';
import { Label } from '../../src/components/ui/label';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Slider size',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Slider orientation',
    },
    showMarks: {
      control: 'boolean',
      description: 'Show marks at step intervals',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

// Default slider
export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};

// With controlled value
export const Controlled: Story = {
  render: function Render() {
    const [value, setValue] = useState([50]);

    return (
      <div className="space-y-4 w-full max-w-md">
        <div className="flex justify-between">
          <Label>Volume</Label>
          <span className="text-sm text-text-muted">{value[0]}%</span>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
        />
      </div>
    );
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-md">
      <div className="space-y-2">
        <Label>Small</Label>
        <Slider defaultValue={[50]} size="sm" />
      </div>
      <div className="space-y-2">
        <Label>Medium</Label>
        <Slider defaultValue={[50]} size="md" />
      </div>
      <div className="space-y-2">
        <Label>Large</Label>
        <Slider defaultValue={[50]} size="lg" />
      </div>
    </div>
  ),
};

// With marks
export const WithMarks: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-md pb-8">
      <div className="space-y-2">
        <Label>Auto marks</Label>
        <Slider defaultValue={[50]} showMarks />
      </div>
      <div className="space-y-2">
        <Label>Custom marks</Label>
        <Slider
          defaultValue={[25]}
          marks={[
            { value: 0, label: '0%' },
            { value: 25, label: '25%' },
            { value: 50, label: '50%' },
            { value: 75, label: '75%' },
            { value: 100, label: '100%' },
          ]}
        />
      </div>
    </div>
  ),
};

// Range slider (dual thumb)
export const Range: Story = {
  render: function Render() {
    const [range, setRange] = useState([25, 75]);

    return (
      <div className="space-y-4 w-full max-w-md">
        <div className="flex justify-between">
          <Label>Price Range</Label>
          <span className="text-sm text-text-muted">
            ${range[0]} - ${range[1]}
          </span>
        </div>
        <RangeSlider value={range} onValueChange={setRange} />
      </div>
    );
  },
};

// Vertical orientation
export const Vertical: Story = {
  render: () => (
    <div className="flex gap-8 h-48">
      <div className="flex flex-col items-center gap-2">
        <Slider
          defaultValue={[50]}
          orientation="vertical"
          size="sm"
        />
        <Label className="text-xs">SM</Label>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Slider
          defaultValue={[75]}
          orientation="vertical"
          size="md"
        />
        <Label className="text-xs">MD</Label>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Slider
          defaultValue={[25]}
          orientation="vertical"
          size="lg"
        />
        <Label className="text-xs">LG</Label>
      </div>
    </div>
  ),
};

// With steps
export const WithSteps: Story = {
  render: function Render() {
    const [value, setValue] = useState([3]);

    return (
      <div className="space-y-4 w-full max-w-md">
        <div className="flex justify-between">
          <Label>Rating</Label>
          <span className="text-sm text-text-muted">{value[0]} / 5</span>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          min={1}
          max={5}
          step={1}
          marks={[
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
          ]}
        />
      </div>
    );
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    defaultValue: [50],
    disabled: true,
  },
};
