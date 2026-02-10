import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from '../../src/components/ui/command';
import { Button } from '../../src/components/ui/button';
import {
  Calendar,
  Settings,
  User,
  CreditCard,
  Mail,
  MessageSquare,
  PlusCircle,
  Search,
} from 'lucide-react';

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Command>;

// Static command menu
export const Default: Story = {
  render: () => (
    <Command className="rounded-xl border border-border shadow-lg max-w-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>Mail</span>
          </CommandItem>
          <CommandItem>
            <Search className="mr-2 h-4 w-4" />
            <span>Search</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// Command dialog (modal)
export const Dialog: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          <Search className="mr-2 h-4 w-4" />
          Open Command Palette
          <CommandShortcut className="ml-4">K</CommandShortcut>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem onSelect={() => setOpen(false)}>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <Mail className="mr-2 h-4 w-4" />
                <span>Mail</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <MessageSquare className="mr-2 h-4 w-4" />
                <span>Messages</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem onSelect={() => setOpen(false)}>
                <PlusCircle className="mr-2 h-4 w-4" />
                <span>Create New...</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use CommandDialog for a modal command palette. Typically opened with K.',
      },
    },
  },
};

// With keyboard shortcuts
export const WithShortcuts: Story = {
  render: () => (
    <Command className="rounded-xl border border-border shadow-lg max-w-md">
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem>
            <span>Go to Dashboard</span>
            <CommandShortcut>G D</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Go to Projects</span>
            <CommandShortcut>G P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Go to Settings</span>
            <CommandShortcut>G S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>
            <span>New Project</span>
            <CommandShortcut>N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Search</span>
            <CommandShortcut>/</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Quick Save</span>
            <CommandShortcut>S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
