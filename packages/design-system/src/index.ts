/**
 * @finitless/design-system
 *
 * Finitless Design System - Brand tokens, React components, and Tailwind preset
 *
 * @example
 * ```tsx
 * // Import components
 * import { Button, Input, GlassCard, CTAButton } from '@finitless/design-system';
 *
 * // Import tokens
 * import { colors, gradients, typography } from '@finitless/design-system';
 *
 * // Import Tailwind preset (in tailwind.config.ts)
 * import { finitlessPreset } from '@finitless/design-system/tailwind';
 *
 * // Import global styles (in your app's entry point)
 * import '@finitless/design-system/styles';
 * ```
 */

// ============================================================================
// UI COMPONENTS
// ============================================================================

export {
  // Base primitives
  Button,
  buttonVariants,
  type ButtonProps,
  Input,
  inputVariants,
  type InputProps,
  Label,
  labelVariants,
  type LabelProps,
  Textarea,
  textareaVariants,
  type TextareaProps,
  Separator,
  type SeparatorProps,
  Badge,
  badgeVariants,
  type BadgeProps,
  Skeleton,
  type SkeletonProps,
  Switch,
  type SwitchProps,
  Checkbox,
  type CheckboxProps,
  RadioGroup,
  RadioGroupItem,

  // Select
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

  // Dialog
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

  // Tabs
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,

  // Tooltip
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,

  // Alert
  Alert,
  AlertTitle,
  AlertDescription,
  alertVariants,
  type AlertProps,

  // Avatar
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

  // Dropdown Menu
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

  // Progress
  Progress,
  CircularProgress,
  progressVariants,
  progressIndicatorVariants,
  type ProgressProps,
  type CircularProgressProps,

  // ScrollArea
  ScrollArea,
  type ScrollAreaProps,

  // Collapsible/Accordion
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

  // Sheet
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

  // Popover
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverClose,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  type PopoverContentProps,

  // Slider
  Slider,
  RangeSlider,
  sliderVariants,
  type SliderProps,
  type RangeSliderProps,

  // Context Menu
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

  // Hover Card
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardHeader,
  HoverCardAvatar,
  HoverCardTitle,
  HoverCardDescription,
  HoverCardFooter,
  type HoverCardContentProps,

  // Toggle Group
  ToggleGroup,
  ToggleGroupItem,
  toggleGroupVariants,
  toggleGroupItemVariants,
  type ToggleGroupProps,
  type ToggleGroupItemProps,

  // Table
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

  // Breadcrumb
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,

  // Pagination
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationFirst,
  PaginationLast,

  // Toast
  Toaster,
  showToast,
  toast,
  type ToasterProps,
  type ToastOptions,
  type ToastType,

  // Command
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

  // Aspect Ratio
  AspectRatio,
  aspectRatios,
  type AspectRatioProps,

  // Layout
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

  // Utility components
  LoadingSpinner,
} from './components/ui';

// ============================================================================
// BRAND COMPONENTS
// ============================================================================

export {
  Logo,
  type LogoProps,
  GradientText,
  gradientTextVariants,
  type GradientTextProps,
  GlassCard,
  glassCardVariants,
  type GlassCardProps,
  CTAButton,
  type CTAButtonProps,
  OAuthButton,
  type OAuthButtonProps,
  FormContainer,
  FormDivider,
  formContainerVariants,
  type FormContainerProps,
  StatusBadge,
  type StatusBadgeProps,
  IconContainer,
  iconContainerVariants,
  type IconContainerProps,
} from './components/brand';

// ============================================================================
// TOKENS
// ============================================================================

export {
  colors,
  brand,
  background,
  surface,
  border,
  text,
  semantic,
  gradients,
  cssVariables,
  // v0.1.0 color scales
  gray,
  grayAlpha,
  blue,
  cyan,
  purple,
  magenta,
  red,
  green,
  amber,
  teal,
} from './tokens/colors';

export {
  typography,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  typePresets,
  googleFontsUrl,
  cssSnippets,
  // v0.1.0 typography scales
  heading,
  button,
  label,
  copy,
  getHeadingClass,
  getButtonClass,
  getLabelClass,
  getCopyClass,
} from './tokens/typography';

export {
  motion,
  duration,
  easing,
  transition,
  animation,
  delay,
  spring,
  keyframes,
  getAnimationClass,
} from './tokens/motion';

export {
  layout,
  spacing,
  borderRadius,
  componentSizes,
  containers,
  zIndex,
  breakpoints,
} from './tokens/spacing';

// ============================================================================
// UTILITIES
// ============================================================================

export {
  cn,
  generateId,
  isBrowser,
  prefersReducedMotion,
  formatShortcut,
  focusElement,
  range,
} from './lib/utils';

// ============================================================================
// TAILWIND PRESET
// ============================================================================

export { finitlessPreset } from './tailwind-preset';
