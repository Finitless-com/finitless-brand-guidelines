import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientation of scroll */
  orientation?: 'vertical' | 'horizontal' | 'both';
  /** Hide scrollbar (content still scrollable) */
  hideScrollbar?: boolean;
  /** Maximum height for vertical scroll */
  maxHeight?: string | number;
  /** Maximum width for horizontal scroll */
  maxWidth?: string | number;
  /** Show shadow indicators when content overflows */
  showShadows?: boolean;
}

/**
 * ScrollArea component with styled scrollbar.
 *
 * @example
 * ```tsx
 * // Vertical scroll with max height
 * <ScrollArea maxHeight={400}>
 *   <div className="space-y-4">
 *     {items.map(item => <Card key={item.id}>{item.name}</Card>)}
 *   </div>
 * </ScrollArea>
 *
 * // Horizontal scroll
 * <ScrollArea orientation="horizontal" maxWidth={600}>
 *   <div className="flex gap-4">
 *     {items.map(item => <Card key={item.id}>{item.name}</Card>)}
 *   </div>
 * </ScrollArea>
 *
 * // Hidden scrollbar
 * <ScrollArea hideScrollbar maxHeight={300}>
 *   <Content />
 * </ScrollArea>
 *
 * // With shadow indicators
 * <ScrollArea showShadows maxHeight={400}>
 *   <LongContent />
 * </ScrollArea>
 * ```
 */
const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      className,
      children,
      orientation = 'vertical',
      hideScrollbar = false,
      maxHeight,
      maxWidth,
      showShadows = false,
      style,
      ...props
    },
    ref
  ) => {
    const [showTopShadow, setShowTopShadow] = React.useState(false);
    const [showBottomShadow, setShowBottomShadow] = React.useState(false);
    const [showLeftShadow, setShowLeftShadow] = React.useState(false);
    const [showRightShadow, setShowRightShadow] = React.useState(false);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const handleScroll = React.useCallback(() => {
      if (!showShadows || !scrollRef.current) return;

      const el = scrollRef.current;
      const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = el;

      if (orientation === 'vertical' || orientation === 'both') {
        setShowTopShadow(scrollTop > 0);
        setShowBottomShadow(scrollTop < scrollHeight - clientHeight - 1);
      }

      if (orientation === 'horizontal' || orientation === 'both') {
        setShowLeftShadow(scrollLeft > 0);
        setShowRightShadow(scrollLeft < scrollWidth - clientWidth - 1);
      }
    }, [showShadows, orientation]);

    // Check shadows on mount and when children change
    React.useEffect(() => {
      handleScroll();
    }, [handleScroll, children]);

    const overflowClass = {
      vertical: 'overflow-y-auto overflow-x-hidden',
      horizontal: 'overflow-x-auto overflow-y-hidden',
      both: 'overflow-auto',
    }[orientation];

    const scrollbarClass = hideScrollbar ? 'scrollbar-hidden' : 'scrollbar-thin';

    return (
      <div className={cn('relative', className)} ref={ref} {...props}>
        {/* Top shadow */}
        {showShadows && showTopShadow && (
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-background-base to-transparent pointer-events-none z-10" />
        )}
        {/* Bottom shadow */}
        {showShadows && showBottomShadow && (
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background-base to-transparent pointer-events-none z-10" />
        )}
        {/* Left shadow */}
        {showShadows && showLeftShadow && (
          <div className="absolute top-0 left-0 bottom-0 w-4 bg-gradient-to-r from-background-base to-transparent pointer-events-none z-10" />
        )}
        {/* Right shadow */}
        {showShadows && showRightShadow && (
          <div className="absolute top-0 right-0 bottom-0 w-4 bg-gradient-to-l from-background-base to-transparent pointer-events-none z-10" />
        )}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className={cn(overflowClass, scrollbarClass)}
          style={{
            maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
            maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
            ...style,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);

ScrollArea.displayName = 'ScrollArea';

export { ScrollArea };
export default ScrollArea;
