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
  DialogFooter,
  DialogTitle,
  DialogDescription,

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
  avatarVariants,
  type AvatarProps,

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
} from './tokens/typography';

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
