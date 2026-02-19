# Finitless Brand Guidelines

**Version**: v0.1.0
**Last Updated**: 2026-02-19
**URL**: https://brand.finitless.com

Complete brand identity guide for Finitless - the single source of truth for logo usage, color palette, typography, components, voice/tone, and implementation.

---

## Company Overview

| Field | Value |
|-------|-------|
| Company | Finitless |
| Website | finitless.com |
| Product | AI ordering agents for restaurants (voice, WhatsApp, web chat) |
| Industry | Restaurant Technology / AI |
| Tagline | "Never Miss a Sale. Ever." |
| Founder | Sergio Khoury |

---

## 1. Logo

### Concept

The Finitless logo merges the letter "N" with an infinity symbol into a single mark. Two interlocking angular shapes form an infinity-N, rendered with a cyan-to-magenta gradient. The wordmark spells "FINITLESS" in the BEASIGNE font - all caps, geometric sans-serif with distinctive letter cuts.

### Logo Variants

| Variant | Description | When to Use |
|---------|-------------|-------------|
| Color on dark | Full gradient icon + white wordmark on black background | **Preferred** - default for most contexts |
| Color on light | Full gradient icon + black wordmark on white background | Light-background layouts |
| Black on white | All-black monochrome icon + wordmark on white background | Single-color print, fax, stamps |
| White on black | All-white monochrome icon + wordmark on black background | Single-color on dark media |

### Logo Assets

Available at: `https://brand.finitless.com/assets/logos/`

| File | Description |
|------|-------------|
| `finitless-logo-horizontal-on-dark.png` | Horizontal lockup, dark background |
| `finitless-logo-horizontal-on-light.png` | Horizontal lockup, light background |
| `finitless-logo-rect-on-dark.png` | Rectangle lockup, dark background |
| `finitless-logo-square-on-dark.png` | Square lockup, dark background |
| `finitless-logo-square-on-light.png` | Square lockup, light background |

**Size variants**: Horizontal (120w, 200w, 300w, 480w, 800w, 1200w), Square (128, 256, 512, 1024, 2000)

### Icon/Favicon Assets

Available at: `https://brand.finitless.com/assets/icons/`

| File | Size | Usage |
|------|------|-------|
| `finitless-icon-master.svg` | Vector | Source file for all sizes |
| `finitless-icon-favicon-72.png` | 72px | Browser favicon |
| `finitless-icon-app-512.png` | 512px | PWA / app icon |
| `finitless-icon-social-1000.png` | 1000px | Social media avatar |

**Variants**: `on-dark`, `on-light`, `transparent` at sizes 16, 32, 48, 64, 72, 128, 192, 256, 384, 512, 1000, 1024, 2000px

### Logo Rules

**DO**:
- Use supplied files at correct resolution
- Maintain minimum clear space (width of "N" icon on all sides)
- Place on solid or near-solid backgrounds with sufficient contrast
- Prefer "Color on dark" variant

**DON'T**:
- Stretch, rotate, or distort the logo
- Change gradient colors or substitute the palette
- Place on busy backgrounds without contrast overlay
- Add effects (drop shadows, outlines, bevels)
- Recreate or redraw the icon
- Render the logo from a font (always use image assets)

---

## 2. Colors

### Brand Colors (Primary)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Finitless Blue | `#165DFC` | rgb(22, 93, 252) | **Primary** - Solid buttons, UI backgrounds, data visualization |
| Cyan | `#00B7FF` | rgb(0, 183, 255) | Links, focus rings, hover text, gradient start |
| Purple | `#7A2EFF` | rgb(122, 46, 255) | Gradient midpoint ONLY - never standalone |
| Magenta | `#C300FF` | rgb(195, 0, 255) | Gradient end ONLY - never standalone |

### Background Colors (Warm Off-Blacks)

| Layer | Hex | Usage |
|-------|-----|-------|
| Deep | `#08080a` | Sidebar, navigation |
| Base | `#0e0e10` | Main page background |
| Elevated | `#151517` | Cards, modals, popovers |
| Surface | `#1c1c1f` | Dropdown panels, tooltips |

### Surface Overlays

| Token | Value | Usage |
|-------|-------|-------|
| Card background | `rgba(255,255,255,0.05)` | 5% white |
| Card border | `rgba(255,255,255,0.10)` | 10% white |
| Hover state | `rgba(255,255,255,0.08)` | 8% white |
| Active state | `rgba(255,255,255,0.12)` | 12% white |

### Semantic Colors

| Role | Hex | Usage |
|------|-----|-------|
| Error | `#ff3b45` | Errors, destructive actions |
| Success | `#22c55e` | Confirmations, positive states |
| Warning | `#f59e0b` | Caution states, pending actions |
| Info | `#eaf4ff` | Informational tints |

### Gradients

| Name | CSS | Usage |
|------|-----|-------|
| Brand Gradient | `linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF)` | Hero sections, decorative |
| CTA Gradient | `linear-gradient(to right, #00B7FF, #7A2EFF)` | Primary buttons (ONE per page) |
| Glow Effect | `box-shadow: 0 0 20px rgba(0, 183, 255, 0.3)` | Hover states, emphasis |

### Text Colors

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#FFFFFF` | Main text |
| Muted | `rgba(255,255,255,0.60)` | Secondary text |
| Placeholder | `rgba(255,255,255,0.40)` | Input placeholders |
| Disabled | `rgba(255,255,255,0.30)` | Disabled states |

---

## 3. Typography

### Font Stack

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| UI / Body / Headings | Inter | 400, 600, 700, 800 | All interface text |
| Logo / Wordmark | BEASIGNE | Regular | Logo only - NEVER for UI text |
| Monospace | System mono stack | - | Code blocks, technical content |

**Google Fonts**: `https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap`

**Fallback**: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| display | 72px | 800 | 1.1 | Hero headings |
| h1 | 48px | 800 | 1.2 | Page titles |
| h2 | 36px | 700 | 1.25 | Section headings |
| h3 | 24px | 700 | 1.3 | Sub-sections |
| h4 | 20px | 600 | 1.4 | Card titles |
| body-lg | 18px | 400 | 1.6 | Intros, leads |
| body | 16px | 400 | 1.6 | Default body text |
| body-sm | 14px | 400 | 1.5 | Secondary text |
| caption | 12px | 400 | 1.5 | Labels, fine print |

---

## 4. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| sm | 8px | Small elements, tags, chips |
| DEFAULT/md | 12px | **Universal default** - inputs, buttons, small cards |
| lg | 16px | Cards, modals |
| xl | 24px | Large cards, hero sections |
| full | 9999px | Pill buttons, avatars |

---

## 5. Components

### Button Patterns

**CTA Button (Gradient)** - ONE per page, for hero/form submit only:
```css
background: linear-gradient(to right, #00B7FF, #7A2EFF);
border-radius: 12px;
color: white;
font-weight: 600;
```

**Solid Button (Finitless Blue)** - Standard actions (Save, Create, Add):
```css
background: #165DFC;
border-radius: 12px;
color: white;
font-weight: 600;
```

**Secondary Button** - Alternative actions, OAuth buttons:
```css
background: rgba(255,255,255,0.05);
border: 1px solid rgba(255,255,255,0.20);
border-radius: 12px;
color: white;
```

**Button Sizes**:
| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| sm | 36px | 8px 16px | 14px |
| md | 44px | 10px 24px | 15px |
| lg | 48px | 12px 32px | 16px |

### Input Fields

```css
background: rgba(255,255,255,0.05);
border: 1px solid rgba(255,255,255,0.10);
border-radius: 12px;
height: 48px;
padding: 12px 16px;
font-size: 16px; /* Prevents iOS zoom */
color: #FFFFFF;
```

**Focus State**:
```css
border-color: rgba(0,183,255,0.5);
box-shadow: 0 0 0 3px rgba(0,183,255,0.15);
```

**Error State**:
```css
border-color: #ff3b45;
box-shadow: 0 0 0 3px rgba(255,59,69,0.15);
```

### Cards (GlassCard)

```css
background: rgba(255,255,255,0.05);
border: 1px solid rgba(255,255,255,0.10);
border-radius: 12px;
backdrop-filter: blur(8px);
```

**Hover**:
```css
border-color: rgba(0,183,255,0.5);
box-shadow: 0 8px 32px rgba(0,183,255,0.1);
```

### Gradient Text

```css
background: linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## 6. Tailwind CSS Integration

### Preset Import

```typescript
// tailwind.config.ts
import { finitlessPreset } from '@finitless/design-system/tailwind';

export default {
  presets: [finitlessPreset],
  // ... your config
};
```

### Key Classes

```html
<!-- Backgrounds -->
<div class="bg-background-base">        <!-- #0e0e10 -->
<div class="bg-background-elevated">    <!-- #151517 -->
<div class="bg-surface-card">           <!-- 5% white -->

<!-- Brand Colors -->
<button class="bg-brand-primary">       <!-- #165DFC -->
<a class="text-brand-link">             <!-- #00B7FF -->

<!-- Gradients -->
<button class="bg-gradient-cta">        <!-- Cyan to Purple -->
<h1 class="text-gradient-brand">        <!-- Full gradient text -->

<!-- Border Radius -->
<div class="rounded-sm">   <!-- 8px -->
<div class="rounded">      <!-- 12px (default) -->
<div class="rounded-lg">   <!-- 16px -->
<div class="rounded-xl">   <!-- 24px -->
```

---

## 7. Voice and Tone

### Brand Personality

| Trait | What It Means | NOT |
|-------|---------------|-----|
| Confident | We know our product works | Arrogant |
| Revolutionary | We are changing the industry | Combative |
| Practical | We focus on real ROI | Pie-in-the-sky |
| Direct | We say what we mean | Pushy |

### Target Audience

Restaurant owners and operators - busy, results-driven, skeptical of tech hype. They care about revenue, efficiency, and keeping their customers.

### Tone by Context

| Context | Tone | Example |
|---------|------|---------|
| Marketing | Bold, data-driven | "Your phone rings 200 times a day. You miss 40% of those calls. That's $31,000 a year walking out the door." |
| Product UI | Clear, efficient | "Order received. Estimated prep time: 12 minutes." |
| Support | Warm, solution-oriented | "Let's get this sorted out. Can you tell me which order number?" |
| Error | Honest, actionable | "We couldn't process that payment. Please check your card details." |

### AI Terminology

**USE**: AI agents, AI ordering agents, AI-powered, recover, capture, own, direct, efficient, 24/7, never miss, revenue, every order

**AVOID**: chatbot, bot, artificial intelligence (say "AI"), smart, virtual assistant, disrupt, revolutionize, leverage, synergy

---

## 8. Critical Rules

### One Gradient CTA Per Page
- Only ONE gradient button per view (hero action or form submit)
- All other buttons use solid Finitless Blue (#165DFC) or secondary pattern

### Purple & Magenta Are Gradient-Only
- NEVER use #7A2EFF (purple) or #C300FF (magenta) as standalone colors
- These exist ONLY as gradient midpoint and endpoint

### OAuth Buttons Use Secondary Pattern
- Social login buttons (Google, Apple, etc.) use glass background + border
- NEVER use gradient for OAuth buttons

### Logo From Assets Only
- Always render logo as `<img>` from asset files
- NEVER render logo text using BEASIGNE font

### Input Font Size 16px+
- All form inputs must use font-size 16px or larger
- This prevents iOS zoom on focus

---

## 9. Component Library

The `@finitless/design-system` npm package provides React components:

### UI Primitives (Radix-based)
Button, Input, Label, Textarea, Select, Checkbox, Switch, RadioGroup, Dialog, Tabs, Tooltip, Alert, Badge, Avatar, Skeleton, Separator, DropdownMenu

### Brand Components
Logo, GradientText, GlassCard, CTAButton, OAuthButton, FormContainer, FormDivider, StatusBadge, IconContainer

### Installation

```bash
npm install @finitless/design-system
```

### Usage

```tsx
import {
  Button,
  GlassCard,
  CTAButton,
  Logo
} from '@finitless/design-system';

export function Hero() {
  return (
    <GlassCard>
      <Logo size="md" />
      <CTAButton>Get Started</CTAButton>
    </GlassCard>
  );
}
```

---

## 10. Assets Reference

### Logo Download URLs

```
https://brand.finitless.com/assets/logos/finitless-logo-horizontal-on-dark-300w.png
https://brand.finitless.com/assets/logos/finitless-logo-horizontal-on-light-300w.png
https://brand.finitless.com/assets/logos/finitless-logo-square-on-dark-512.png
https://brand.finitless.com/assets/logos/finitless-logo-square-on-light-512.png
```

### Icon Download URLs

```
https://brand.finitless.com/assets/icons/finitless-icon-master.svg
https://brand.finitless.com/assets/icons/finitless-icon-on-dark-512.png
https://brand.finitless.com/assets/icons/finitless-icon-social-1000.png
https://brand.finitless.com/assets/icons/finitless-icon-favicon-72.png
```

### Brand Manifest (JSON)

```
https://brand.finitless.com/brand-manifest.json
```

---

## Quick Reference Card

```
COLORS
Primary:     #165DFC (Finitless Blue)
Link:        #00B7FF (Cyan)
Gradient:    #00B7FF → #7A2EFF → #C300FF
Background:  #0e0e10 (base), #151517 (elevated)
Error:       #ff3b45
Success:     #22c55e

RADIUS
Default:     12px
Card:        12px
Button:      12px
Pill:        9999px

FONT
Family:      Inter
Weights:     400, 600, 700, 800

RULES
- ONE gradient CTA per page
- Purple/Magenta in gradients ONLY
- Logo from assets, not fonts
- Input font-size >= 16px
```

---

*For interactive examples and component playground, visit: https://brand.finitless.com*
