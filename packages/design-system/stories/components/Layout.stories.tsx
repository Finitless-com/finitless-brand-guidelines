import type { Meta, StoryObj } from '@storybook/react';
import {
  Grid,
  GridItem,
  Container,
  Stack,
  HStack,
  VStack,
  Spacer,
  Center,
} from '../../src/components/ui/layout';

const meta: Meta = {
  title: 'Components/Layout',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Grid basic
export const GridBasic: Story = {
  render: () => (
    <Grid columns={3} gap={4}>
      <div className="p-4 bg-brand-primary/20 rounded-lg text-center">1</div>
      <div className="p-4 bg-brand-primary/20 rounded-lg text-center">2</div>
      <div className="p-4 bg-brand-primary/20 rounded-lg text-center">3</div>
      <div className="p-4 bg-brand-primary/20 rounded-lg text-center">4</div>
      <div className="p-4 bg-brand-primary/20 rounded-lg text-center">5</div>
      <div className="p-4 bg-brand-primary/20 rounded-lg text-center">6</div>
    </Grid>
  ),
};

// Grid with spans
export const GridWithSpans: Story = {
  render: () => (
    <Grid columns={12} gap={4}>
      <GridItem span={8}>
        <div className="p-4 bg-brand-primary/20 rounded-lg text-center">
          Span 8
        </div>
      </GridItem>
      <GridItem span={4}>
        <div className="p-4 bg-cyan-500/20 rounded-lg text-center">Span 4</div>
      </GridItem>
      <GridItem span={4}>
        <div className="p-4 bg-cyan-500/20 rounded-lg text-center">Span 4</div>
      </GridItem>
      <GridItem span={4}>
        <div className="p-4 bg-cyan-500/20 rounded-lg text-center">Span 4</div>
      </GridItem>
      <GridItem span={4}>
        <div className="p-4 bg-cyan-500/20 rounded-lg text-center">Span 4</div>
      </GridItem>
      <GridItem span={12}>
        <div className="p-4 bg-brand-primary/20 rounded-lg text-center">
          Full Width (Span 12)
        </div>
      </GridItem>
    </Grid>
  ),
};

// Container sizes
export const ContainerSizes: Story = {
  render: () => (
    <div className="space-y-4">
      {(['form', 'card', 'content', 'wide', 'full'] as const).map((size) => (
        <Container key={size} size={size} className="bg-white/5 p-4 rounded-lg">
          <div className="text-center text-sm text-text-muted">
            Container: {size}
          </div>
        </Container>
      ))}
    </div>
  ),
};

// Stack vertical
export const StackVertical: Story = {
  render: () => (
    <VStack gap={4} align="stretch" className="max-w-sm">
      <div className="p-4 bg-brand-primary/20 rounded-lg text-center">Item 1</div>
      <div className="p-4 bg-brand-primary/20 rounded-lg text-center">Item 2</div>
      <div className="p-4 bg-brand-primary/20 rounded-lg text-center">Item 3</div>
    </VStack>
  ),
};

// Stack horizontal
export const StackHorizontal: Story = {
  render: () => (
    <HStack gap={4} justify="center">
      <div className="p-4 bg-brand-primary/20 rounded-lg text-center">Item 1</div>
      <div className="p-4 bg-brand-primary/20 rounded-lg text-center">Item 2</div>
      <div className="p-4 bg-brand-primary/20 rounded-lg text-center">Item 3</div>
    </HStack>
  ),
};

// Stack with spacer
export const StackWithSpacer: Story = {
  render: () => (
    <HStack gap={4} className="w-full">
      <div className="p-4 bg-brand-primary/20 rounded-lg">Logo</div>
      <Spacer />
      <div className="p-4 bg-cyan-500/20 rounded-lg">Nav Item</div>
      <div className="p-4 bg-cyan-500/20 rounded-lg">Nav Item</div>
      <div className="p-4 bg-cyan-500/20 rounded-lg">Button</div>
    </HStack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use Spacer to push items apart in a flex container.',
      },
    },
  },
};

// Center component
export const CenterComponent: Story = {
  render: () => (
    <Center className="h-48 bg-white/5 rounded-lg">
      <div className="p-4 bg-brand-primary/20 rounded-lg">Centered Content</div>
    </Center>
  ),
};

// Responsive grid
export const ResponsiveGrid: Story = {
  render: () => (
    <Grid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={4}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="p-4 bg-brand-primary/20 rounded-lg text-center">
          Item {i + 1}
        </div>
      ))}
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grid supports responsive column counts.',
      },
    },
  },
};

// Complete layout example
export const CompleteLayout: Story = {
  render: () => (
    <Container size="content">
      <VStack gap={8} align="stretch">
        {/* Header */}
        <HStack gap={4}>
          <div className="font-bold text-lg">Logo</div>
          <Spacer />
          <HStack gap={2}>
            <div className="px-3 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer">
              Home
            </div>
            <div className="px-3 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer">
              About
            </div>
            <div className="px-3 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer">
              Contact
            </div>
          </HStack>
        </HStack>

        {/* Main content */}
        <Grid columns={12} gap={6}>
          <GridItem span={8}>
            <div className="p-6 bg-white/5 rounded-xl h-48">Main Content</div>
          </GridItem>
          <GridItem span={4}>
            <VStack gap={4} align="stretch">
              <div className="p-4 bg-white/5 rounded-xl">Sidebar 1</div>
              <div className="p-4 bg-white/5 rounded-xl">Sidebar 2</div>
            </VStack>
          </GridItem>
        </Grid>

        {/* Footer */}
        <Center className="py-4 text-text-muted text-sm">
          2026 Finitless. All rights reserved.
        </Center>
      </VStack>
    </Container>
  ),
};
