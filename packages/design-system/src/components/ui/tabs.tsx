import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-11 items-center justify-center',
      'rounded-full p-1',
      'bg-surface-card',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap',
      'rounded-full px-4 py-2',
      'text-sm font-medium text-text-muted',
      'transition-all duration-150',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-link focus-visible:ring-offset-2 focus-visible:ring-offset-background-base',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[state=active]:bg-brand-link/[0.12] data-[state=active]:text-brand-link',
      'hover:text-white',
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-link focus-visible:ring-offset-2 focus-visible:ring-offset-background-base',
      'data-[state=inactive]:hidden',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

/**
 * Tabs component for tabbed navigation.
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *     <TabsTrigger value="tab3">Tab 3</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">
 *     Content for tab 1
 *   </TabsContent>
 *   <TabsContent value="tab2">
 *     Content for tab 2
 *   </TabsContent>
 *   <TabsContent value="tab3">
 *     Content for tab 3
 *   </TabsContent>
 * </Tabs>
 * ```
 */
export { Tabs, TabsList, TabsTrigger, TabsContent };
