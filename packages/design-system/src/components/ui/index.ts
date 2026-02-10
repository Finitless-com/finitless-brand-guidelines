// UI Primitives - Radix-based components
export { Button, buttonVariants, type ButtonProps } from './button';
export { Input, inputVariants, type InputProps } from './input';
export { Label, labelVariants, type LabelProps } from './label';
export { Textarea, textareaVariants, type TextareaProps } from './textarea';
export { Separator, type SeparatorProps } from './separator';
export { Badge, badgeVariants, type BadgeProps } from './badge';
export { Skeleton, type SkeletonProps } from './skeleton';
export { Switch, type SwitchProps } from './switch';
export { Checkbox, type CheckboxProps } from './checkbox';
export { RadioGroup, RadioGroupItem } from './radio-group';

// Complex primitives
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from './select';

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  dialogContentVariants,
  type DialogContentProps,
  type DialogHeaderProps,
  type DialogFooterProps,
} from './dialog';

export { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from './tooltip';

export {
  Alert,
  AlertTitle,
  AlertDescription,
  alertVariants,
  type AlertProps,
} from './alert';

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarStatus,
  AvatarGroup,
  AvatarWithStatus,
  avatarVariants,
  getInitials,
  type AvatarProps,
  type AvatarStatusProps,
  type AvatarGroupProps,
  type AvatarWithStatusProps,
} from './avatar';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './dropdown-menu';

// v0.1.0 components - Phase 3
export {
  Progress,
  CircularProgress,
  progressVariants,
  progressIndicatorVariants,
  type ProgressProps,
  type CircularProgressProps,
} from './progress';

export { ScrollArea, type ScrollAreaProps } from './scroll-area';

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  type CollapsibleProps,
  type CollapsibleTriggerProps,
  type CollapsibleContentProps,
  type AccordionProps,
  type AccordionItemProps,
  type AccordionTriggerProps,
} from './collapsible';

// New Phase 3 components
export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetBody,
  sheetVariants,
  type SheetContentProps,
} from './sheet';

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverClose,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  type PopoverContentProps,
} from './popover';

export {
  Slider,
  RangeSlider,
  sliderVariants,
  type SliderProps,
  type RangeSliderProps,
} from './slider';

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from './context-menu';

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardHeader,
  HoverCardAvatar,
  HoverCardTitle,
  HoverCardDescription,
  HoverCardFooter,
  type HoverCardContentProps,
} from './hover-card';

export {
  ToggleGroup,
  ToggleGroupItem,
  toggleGroupVariants,
  toggleGroupItemVariants,
  type ToggleGroupProps,
  type ToggleGroupItemProps,
} from './toggle-group';

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableEmpty,
  tableVariants,
  type TableProps,
  type TableRowProps,
  type TableHeadProps,
  type TableEmptyProps,
} from './table';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './breadcrumb';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationFirst,
  PaginationLast,
} from './pagination';

export {
  Toaster,
  showToast,
  toast,
  type ToasterProps,
  type ToastOptions,
  type ToastType,
} from './toast';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandLoading,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from './command';

export { AspectRatio, aspectRatios, type AspectRatioProps } from './aspect-ratio';

export { Calendar, type CalendarProps } from './calendar';

// Layout components - Phase 6
export {
  Grid,
  GridItem,
  gridVariants,
  gridItemVariants,
  Container,
  containerVariants,
  Stack,
  HStack,
  VStack,
  stackVariants,
  Spacer,
  Center,
  type GridProps,
  type GridItemProps,
  type ContainerProps,
  type StackProps,
  type SpacerProps,
  type CenterProps,
} from './layout';

// Re-export LoadingSpinner from button
export { LoadingSpinner } from './button';

// Text component - v0.1.0
export { Text, textVariants, type TextProps } from './text';
