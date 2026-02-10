import type { Meta, StoryObj } from '@storybook/react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetBody,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '../../src/components/ui/sheet';
import { Button } from '../../src/components/ui/button';
import { Input } from '../../src/components/ui/input';
import { Label } from '../../src/components/ui/label';

const meta: Meta<typeof SheetContent> = {
  title: 'Components/Sheet',
  component: SheetContent,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Side from which sheet slides in',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Sheet size',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SheetContent>;

// Right slide-out (default)
export const RightSheet: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Settings</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you are done.
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue="john@example.com" />
            </div>
          </div>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Cancel</Button>
          </SheetClose>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

// Left navigation panel
export const LeftNavigation: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open Menu</Button>
      </SheetTrigger>
      <SheetContent side="left" size="sm">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <SheetBody>
          <nav className="flex flex-col gap-2">
            {['Dashboard', 'Projects', 'Settings', 'Help'].map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-lg px-3 py-2 text-sm hover:bg-white/5"
              >
                {item}
              </a>
            ))}
          </nav>
        </SheetBody>
      </SheetContent>
    </Sheet>
  ),
};

// Bottom sheet (mobile-style)
export const BottomSheet: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Show Options</Button>
      </SheetTrigger>
      <SheetContent side="bottom" size="sm">
        <SheetHeader>
          <SheetTitle>Share</SheetTitle>
          <SheetDescription>Choose how to share this item.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <div className="grid grid-cols-4 gap-4 py-4">
            {['Copy Link', 'Email', 'Twitter', 'LinkedIn'].map((option) => (
              <button
                key={option}
                className="flex flex-col items-center gap-2 rounded-lg p-3 hover:bg-white/5"
              >
                <div className="h-10 w-10 rounded-full bg-white/10" />
                <span className="text-xs text-text-muted">{option}</span>
              </button>
            ))}
          </div>
        </SheetBody>
      </SheetContent>
    </Sheet>
  ),
};

// All sides
export const AllSides: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="secondary">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Sheet from {side}</SheetTitle>
              <SheetDescription>
                This sheet slides in from the {side}.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  ),
};
