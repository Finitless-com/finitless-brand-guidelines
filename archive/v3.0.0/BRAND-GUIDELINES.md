# Finitless Brand Guidelines

Complete brand identity guide for Finitless -- the single source of truth for logo usage, color palette, typography, imagery, voice and tone, spacing, and iconography.

**Company**: Finitless (finitless.com)
**Founder**: Sergio Khoury
**Product**: AI ordering agents for restaurants (voice, WhatsApp, web chat)
**Industry**: Restaurant Technology / AI
**Tagline**: "Never Miss a Sale. Ever."

---

## 1. Logo

### The Concept

The Finitless logo merges the letter "N" with an infinity symbol into a single mark. Two interlocking angular shapes form an infinity-N, rendered with a cyan-to-magenta gradient. The wordmark spells "FINITLESS" in the BEASIGNE font -- all caps, geometric sans-serif with distinctive letter cuts.

### Logo Variants

There are four official logo versions. Always use the supplied files; never recreate the mark.

| Variant | Description | When to Use |
|---------|-------------|-------------|
| Color on dark | Full gradient icon + white wordmark on black background | **Preferred** -- default for most contexts |
| Color on light | Full gradient icon + black wordmark on white background | Light-background layouts |
| Black on white | All-black monochrome icon + wordmark on white background | Single-color print, fax, stamps |
| White on black | All-white monochrome icon + wordmark on black background | Single-color on dark media |

**Available logo files** (in `assets/logos/`):

| File | Description |
|------|-------------|
| `finitless-logo-horizontal-on-dark.png` | Horizontal lockup, dark background |
| `finitless-logo-horizontal-on-light.png` | Horizontal lockup, light background |
| `finitless-logo-rect-on-dark.png` | Rectangle lockup, dark background |
| `finitless-logo-square-on-dark.png` | Square lockup, dark background |
| `finitless-logo-square-on-light.png` | Square lockup, light background |

### Brand Stamp Rules

- The brand stamp (icon only) can be used with or without the full logo.
- Must be resized proportionately -- **NEVER** stretch or skew.
- Under **NO** circumstances should the icon be modified or recreated.
- Use only the supplied brand stamp files.

### Icon / Favicon

Available icon files (in `assets/icons/`):

| File | Size / Format | Usage |
|------|---------------|-------|
| `finitless-icon-master.svg` | Vector (master) | Source file for all sizes |
| `finitless-icon-favicon-72.png` | 72px | Browser favicon |
| `finitless-icon-app-512.png` | 512px | PWA / app icon |
| `finitless-icon-social-1000.png` | 1000px | Social media avatar |
| `finitless-icon-on-dark-2000.png` | 2000px | Icon on dark background |
| `finitless-icon-on-light-2000.png` | 2000px | Icon on light background |
| `finitless-icon-square-on-dark-2552.png` | 2552px | Square icon on dark |
| `finitless-icon-square-on-dark-4793.png` | 4793px | Large square icon on dark |
| `finitless-icon-square-on-light-4793.png` | 4793px | Large square icon on light |
| `finitless-icon-print-2552.png` | 2552px | Print-resolution icon |
| `finitless-icon-print-2552-alt.png` | 2552px | Alternate print icon |
| `finitless-icon-transparent.png` | Transparent BG | Overlay / compositing |

### Logo Do's

- Use the supplied files at the correct resolution for the medium.
- Maintain the minimum clear space (at least the width of the "N" icon on all sides).
- Place on solid or near-solid backgrounds with sufficient contrast.
- Prefer the "Color on dark" variant whenever possible.

### Logo Don'ts

- Do not stretch, rotate, or distort the logo.
- Do not change the gradient colors or substitute the palette.
- Do not place on busy backgrounds without a contrast overlay.
- Do not add effects (drop shadows, outlines, bevels, extra gradients).
- Do not recreate or redraw the icon -- always use the supplied files.
- Do not separate the icon from the wordmark in the lockup files (use standalone icon files when you need the mark alone).

---

## 2. Colors

### Original Designer Specification (from brand PDF)

| Role | Hex | RGB | CMYK | Notes |
|------|-----|-----|------|-------|
| Gradient start | #00CCFF | rgb(0, 204, 255) | -- | "Blue" |
| Gradient end | #FF00FF | rgb(255, 0, 255) | -- | "Pink" |
| Black | #000000 | rgb(0, 0, 0) | 100, 100, 100, 100 | Backgrounds, text |
| White | #FFFFFF | rgb(255, 255, 255) | 0, 0, 0, 0 | Backgrounds, text |

### Digital / Web Palette (Production -- recommended for all digital use)

| Role | Name | Hex | RGB | Usage |
|------|------|-----|-----|-------|
| Primary | Cyan | #00B7FF | rgb(0, 183, 255) | Primary accent, links, CTAs |
| Secondary | Purple | #7A2EFF | rgb(122, 46, 255) | Gradient midpoint, secondary accent |
| Tertiary | Magenta | #C300FF | rgb(195, 0, 255) | Gradient end, tertiary accent |
| Quaternary | Blue | #165DFC | rgb(22, 93, 252) | Solid buttons (preferred), UI backgrounds, link color, data visualization |

### Neutral Palette

| Role | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | #0a0a0a | rgb(10, 10, 10) | Near-black primary background |
| Pure Black | #000000 | rgb(0, 0, 0) | Maximum contrast backgrounds |
| White | #FFFFFF | rgb(255, 255, 255) | Primary text on dark backgrounds |

### Semantic Colors

| Role | Hex | RGB | Usage |
|------|-----|-----|-------|
| Error | #ff3b45 | rgb(255, 59, 69) | Errors, destructive actions |
| Success | #22c55e | rgb(34, 197, 94) | Confirmations, positive states |
| Info | #eaf4ff | rgb(234, 244, 255) | Informational tints, light blue backgrounds |

### Gradients

| Name | CSS Value | Usage |
|------|-----------|-------|
| Brand gradient | `linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF)` | Full brand expression, hero sections |
| CTA gradient | `linear-gradient(to right, #00B7FF, #7A2EFF)` | Buttons, interactive elements |
| Glow effect | `box-shadow: 0 0 20px rgba(0, 183, 255, 0.3)` | Hover states, emphasis |

### Platform Discrepancy Note

HubSpot currently uses incorrect brand colors. These need to be updated:

| Role | HubSpot (wrong) | Correct value |
|------|------------------|---------------|
| Primary | #18a3f5 | #00B7FF |
| Secondary | #5c53eb | #7A2EFF |
| Accent | #d93bff | #C300FF |

> See `colors/COLORS.md` for full CSS variables, Tailwind config, and implementation details.

---

## 3. Typography

### Font Families

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Logo / Wordmark | BEASIGNE (Regular) | Regular | Logo and wordmark only -- never for body or UI text |
| UI / Body / Headings | Inter | 400, 600, 700, 800 | All interface text, headings, and body copy |
| Monospace (fallback) | System mono stack | -- | Code blocks, technical content |

**Google Fonts import**:
```
https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap
```

**Fallback stacks**:
- Sans-serif: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- Monospace: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace`

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| display | 72px (text-7xl/8xl) | 800 | 1.1 | Hero headings |
| h1 | 48px (text-5xl) | 800 | 1.2 | Page titles |
| h2 | 36px (text-4xl) | 700 | 1.25 | Section headings |
| h3 | 24px (text-2xl) | 700 | 1.3 | Sub-sections |
| h4 | 20px (text-xl) | 600 | 1.4 | Card titles |
| body-lg | 18px (text-lg) | 400 | 1.6 | Intros, leads |
| body | 16px (text-base) | 400 | 1.6 | Default body text |
| body-sm | 14px (text-sm) | 400 | 1.5 | Secondary text |
| caption | 12px (text-xs) | 400 | 1.5 | Labels, fine print |
| overline | 12px (text-xs) | 600 | 1.5 | Category labels, uppercase |

> See `typography/TYPOGRAPHY.md` for full CSS implementation and Tailwind config.

---

## 4. Imagery

### Photography Style

- **Tone**: Dark, modern, tech-forward. High contrast with selective color accents.
- **Subjects**: Restaurant environments, technology in use, food ordering in action, busy kitchens, happy restaurant owners.
- **Composition**: Clean framing, shallow depth of field for product shots, wide establishing shots for restaurant interiors.
- **Color treatment**: Desaturated backgrounds with brand-colored highlights (cyan/purple glow effects). Dark-mode aesthetic.

### Illustrations

- **Style**: Geometric, minimal, line-based with gradient fills using the brand palette.
- **Color usage**: Illustrations should use the brand gradient (cyan to magenta) on dark backgrounds.
- **Avoid**: Hand-drawn, cartoonish, or overly detailed styles that clash with the tech-forward identity.

### Patterns and Textures

- Subtle dot-grid or line patterns at low opacity (5-10%) for background texture.
- Gradient mesh overlays using brand colors at 10-20% opacity for depth.
- Dark glassmorphism: `backdrop-blur-sm` with `bg-white/5` and `border-white/10`.

---

## 5. Voice and Tone

### Brand Personality

| Trait | What It Means | What It Does NOT Mean |
|-------|---------------|-----------------------|
| Confident | We know our product works | Arrogant or dismissive |
| Revolutionary | We are changing the industry | Combative or aggressive |
| Practical | We focus on real ROI and results | Pie-in-the-sky visionary |
| Direct | We say what we mean | Salesy or pushy |

### Target Audience

Restaurant owners and operators -- people who are busy, results-driven, and skeptical of tech hype. They care about revenue, efficiency, and keeping their customers.

### Tone by Context

| Context | Tone | Example |
|---------|------|---------|
| Marketing | Bold, results-focused, data-driven | "Your phone rings 200 times a day. You miss 40% of those calls. That is $31,000 a year walking out the door." |
| Product UI | Clear, helpful, efficient | "Order received. Estimated prep time: 12 minutes." |
| Support | Warm, patient, solution-oriented | "Let us get this sorted out. Can you tell me which order number you are seeing the issue with?" |
| Error messages | Honest, reassuring, actionable | "We could not process that payment. Please check your card details and try again." |

### Key Messaging Themes

- **Power and control**: Own your customers instead of renting marketplace space.
- **Financial impact**: Commission recovery, revenue leaks, missed-call costs.
- **Inevitability**: AI ordering is production-ready. Early adopters win.

### Words We Use

AI agents, AI ordering agents, AI-powered, recover, capture, own, direct, efficient, 24/7, never miss, revenue, every order

### Words We Avoid

chatbot, bot, artificial intelligence (say "AI"), smart, virtual assistant, disrupt (overused), maybe, try, revolutionize, hopefully

### AI Terminology Rule

Our audience (restaurant owners) does not care about the technology label. They care about what it does. Always lead with the outcome, not the technology category. Say "AI agents that capture every order" -- not "our artificial intelligence solution."

> See `voice/BRAND-VOICE.md` for the full voice guide with extended examples.

---

## 6. Spacing and Layout

### Grid System

- 4px base grid. All spacing values are multiples of 4.
- Content max-width: 1280px, centered with auto margins.
- Standard page padding: 16px (mobile), 24px (tablet), 48px (desktop).

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight inner padding, icon gaps |
| sm | 8px | Compact element spacing |
| md | 12px | Form field padding |
| base | 16px | Default element spacing |
| lg | 24px | Card padding, section gaps |
| xl | 32px | Component separation |
| 2xl | 48px | Section padding |
| 3xl | 64px | Large section breaks |
| 4xl | 96px | Hero / page-level spacing |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| sm | 8px | Small elements, tags, chips |
| md | 12px | Input fields, small cards |
| lg | 16px | Cards, modals |
| xl | 24px | Large cards, hero sections |
| full | 9999px | Pill buttons, avatars |

---

## 7. Icons

### Icon Style

- **Style**: Outlined (stroke-based), 1.5px stroke width.
- **Size grid**: 24px default, with 16px (small) and 32px (large) variants.
- **Color**: White (`#FFFFFF`) on dark backgrounds; `#0a0a0a` on light backgrounds. May use brand gradient for emphasis.

### Icon Library

Finitless uses a custom icon set supplemented by [Lucide Icons](https://lucide.dev/) for standard UI patterns (arrows, chevrons, close, menu, etc.).

Custom brand icons are stored in `assets/icons/` and include the infinity-N mark at various sizes and formats.

---

## 8. Form Components

### Button Sizes

Buttons come in three sizes. Use the appropriate size for the context.

| Size | Height | Padding | Font Size | Radius | Usage |
|------|--------|---------|-----------|--------|-------|
| sm | 36px | 8px 16px | 14px | 8px | Inline actions, table rows, tight UI |
| md (default) | 44px | 10px 24px | 15px | 12px | Navigation CTAs, card actions, general use |
| lg | 48px | 12px 32px | 16px | 12px | Form submit, hero CTAs, full-width buttons |

**Key rule**: Only ONE gradient (primary) button per view. All other buttons use secondary, tertiary, or destructive styles.

### Button Styling by Context

| Context | Style | Size | Width |
|---------|-------|------|-------|
| Form submit ("Sign In") | CTA gradient | lg (48px) | Full width |
| Standard action ("+ Create", "Save") | Solid Finitless Blue (#165DFC) | md (44px) | Auto |
| OAuth / social login | Secondary (glass bg + border) | lg (48px) | Full width |
| Hero CTA | CTA gradient | md or lg | Auto |
| Card action | Solid blue or secondary | md (44px) | Auto |
| Destructive ("Delete") | Solid #ff3b45, white text | md (44px) | Auto |
| Tertiary / ghost | Transparent bg, text-[#00B7FF] | md (44px) | Auto |

### Input Fields

| Property | Value | Notes |
|----------|-------|-------|
| Background | `rgba(255,255,255,0.05)` | Same as card surface |
| Border | `1px solid rgba(255,255,255,0.10)` | Same as card border |
| Border radius | 12px | Default `md` radius |
| Height | 48px | Comfortable touch target (WCAG 2.2 minimum 44px) |
| Padding | 12px 16px | Spacing tokens `md` / `base` |
| Font size | 16px | Body token. Prevents iOS zoom on focus |
| Font weight | 400 | Regular |
| Text color | #FFFFFF | White on dark |
| Placeholder | `rgba(255,255,255,0.40)` | Lower opacity than muted text |

### Input States

| State | Border | Additional |
|-------|--------|-----------|
| Default | `rgba(255,255,255,0.10)` | -- |
| Focus | `rgba(0,183,255,0.5)` | `box-shadow: 0 0 0 3px rgba(0,183,255,0.15)` |
| Error | `#ff3b45` | `box-shadow: 0 0 0 3px rgba(255,59,69,0.15)` |
| Disabled | Same as default | `opacity: 0.5; cursor: not-allowed` |

### Labels

| Property | Value |
|----------|-------|
| Font size | 14px (body-sm) |
| Font weight | 600 (semibold) |
| Color | `rgba(255,255,255,0.70)` |
| Margin bottom | 8px |

### Helper and Error Text

| Property | Helper | Error |
|----------|--------|-------|
| Font size | 12px (caption) | 12px (caption) |
| Color | `rgba(255,255,255,0.50)` | `#ff3b45` |
| Margin top | 4px | 4px |

### Form Page Layout

For login, sign-up, and similar full-page forms:

| Property | Value |
|----------|-------|
| Container max-width | 480px |
| Container background | `rgba(255,255,255,0.05)` (card surface) |
| Container border | `1px solid rgba(255,255,255,0.10)` |
| Container radius | 16px (lg) |
| Container padding | 32px (desktop), 24px (mobile) |
| Field vertical gap | 16px |
| Section gap | 24px (between input group and button) |
| Logo | `<img>` asset, 32px height. NEVER render from font |

### OAuth / Social Login Buttons

OAuth buttons use the **secondary button pattern** (glass bg + border), NOT the CTA gradient. The gradient is reserved for the single primary action.

| Property | Value |
|----------|-------|
| Background | `rgba(255,255,255,0.05)` |
| Border | `1px solid rgba(255,255,255,0.20)` |
| Border radius | 12px |
| Height | 48px (lg) |
| Width | Full width inside form container |
| Text | 15px, weight 500, white |
| Icon | Third-party brand mark, 20px, left-aligned with 8px gap |
| Hover | `border-color: rgba(0,183,255,0.5); background: rgba(0,183,255,0.05)` |

### Divider / "Or" Separator

A horizontal line with centered text, used between OAuth and email login sections.

| Element | Value |
|---------|-------|
| Line | `1px solid rgba(255,255,255,0.10)` (same as card border) |
| Text | 12px (caption), `rgba(255,255,255,0.40)`, centered |
| Vertical margin | 24px |

### Select / Dropdown

Custom-styled select menus for choosing from a list of options. Never use the native browser `<select>` on dark backgrounds -- it renders with OS-default light styling.

#### Trigger (Closed State)

Same styling as text inputs, with a right-aligned chevron indicator.

| Property | Value | Notes |
|----------|-------|-------|
| Background | `rgba(255,255,255,0.05)` | Same as input / card surface |
| Border | `1px solid rgba(255,255,255,0.10)` | Same as input |
| Border radius | 12px | Default `md` radius |
| Height | 48px | Same as text input |
| Padding | 12px 16px | Same as input, right padding 40px for chevron |
| Font size | 16px | Prevents iOS zoom |
| Placeholder text | `rgba(255,255,255,0.40)` | Same as input placeholder |
| Selected value text | #FFFFFF | Full white |
| Chevron icon | `rgba(255,255,255,0.50)` | 16px, right-aligned, centered vertically |
| Focus state | Same as input | Cyan border glow: `border-color: rgba(0,183,255,0.5); box-shadow: 0 0 0 3px rgba(0,183,255,0.15)` |

#### Dropdown Panel (Open State)

The dropdown panel must be visually elevated above the page. Do **not** use the same background as the page.

| Property | Value | Notes |
|----------|-------|-------|
| Background | `rgba(255,255,255,0.08)` | Slightly brighter than card surface for elevation |
| Border | `1px solid rgba(255,255,255,0.12)` | Slightly more visible than card border |
| Border radius | 12px | Same as trigger |
| Box shadow | `0 8px 32px rgba(0,0,0,0.4)` | Depth / floating appearance |
| Backdrop filter | `blur(12px)` | Glass effect |
| Max height | 320px | Scroll for long lists |
| Overflow | `overflow-y: auto` | Thin scrollbar |
| Padding | 4px | Inner padding around option list |
| Margin top | 4px | Gap between trigger and panel |

#### Option Items

| Property | Value | Notes |
|----------|-------|-------|
| Padding | 12px 16px | Comfortable touch targets |
| Font size | 15px | Slightly smaller than trigger text |
| Text color | `rgba(255,255,255,0.80)` | Slightly muted for comfortable reading |
| Border radius | 8px | Inner rounding within the panel |
| Transition | `background 150ms ease` | Smooth hover feedback |

#### Option States

| State | Background | Text | Additional |
|-------|-----------|------|-----------|
| Default | transparent | `rgba(255,255,255,0.80)` | -- |
| Hover | `rgba(0,183,255,0.12)` | `rgba(255,255,255,0.90)` | Subtle cyan tint |
| Selected | `rgba(0,183,255,0.15)` | #FFFFFF | Check mark icon (white, 16px) right-aligned |
| Disabled | transparent | `rgba(255,255,255,0.30)` | `cursor: not-allowed`, no hover effect |

#### Placeholder Option

The placeholder option (e.g., "Please select...") should be visually distinct and non-selectable.

| Property | Value |
|----------|-------|
| Text color | `rgba(255,255,255,0.40)` | Same as input placeholder |
| Selectable | No (`disabled`) |
| Hover | No effect |

#### Scrollbar Styling (for long lists)

| Property | Value |
|----------|-------|
| Width | `scrollbar-width: thin` |
| Track | transparent |
| Thumb | `rgba(255,255,255,0.15)` |
| Thumb hover | `rgba(255,255,255,0.25)` |

### Form Do's

- Use `<img>` with horizontal logo asset -- never render the logo from a font.
- Use the CTA gradient for the primary submit button, full width.
- Use the secondary button pattern for OAuth/social login buttons.
- Apply the branded focus state (cyan border + subtle glow) on all inputs.
- Use `font-size: 16px` on inputs to prevent iOS zoom.
- Wrap the form in a card-like container (glass bg, border, rounded-2xl).

### Form Don'ts

- Don't use non-brand solid colors (#2563eb, etc.) or flat solid cyan for buttons. Use Finitless Blue (#165DFC) for solid action buttons.
- Don't use the CTA gradient on more than one button per view.
- Don't leave inputs with browser default styling.
- Don't use white or light backgrounds on inputs.
- Don't omit the focus state on inputs.
- Don't use border-radius below 8px on inputs or buttons.
- Don't render the logo as text using BEASIGNE or any font.
- Don't use the native browser `<select>` element without custom styling.
- Don't use the brand gradient (cyan→purple) as a hover/selected background on dropdown options -- it kills text readability.
- Don't use the same background color as the page for the dropdown panel -- it must appear elevated.
- Don't omit padding between dropdown option items in long lists.

---

## 9. Dashboard Components (v3.0.0)

Modern patterns for data-rich dashboard interfaces. Based on 2026 SaaS design trends (Linear, Vercel, Raycast aesthetic).

### Background Layers

Warmer off-black backgrounds create visual depth without shadows. Easier on eyes, more premium feel.

| Layer | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Deep | #08080a | `bg-[#08080a]` | Sidebar, navigation |
| Base | #0e0e10 | `bg-[#0e0e10]` | Main page background |
| Elevated | #151517 | `bg-[#151517]` | Cards, modals |
| Surface | #1c1c1f | `bg-[#1c1c1f]` | Dropdowns, popovers |

### Updated Surface Tokens

| Token | Old (v2.x) | New (v3.0.0) | Tailwind |
|-------|-----------|--------------|----------|
| Card surface | 5% | 4% | `bg-white/[0.04]` |
| Border | 10% | 6% | `border-white/[0.06]` |
| Glassmorphism blur | 4px | 8px | `backdrop-blur-lg` |

### Updated Border Radius Scale

| Token | Old (v2.x) | New (v3.0.0) | Usage |
|-------|-----------|--------------|-------|
| xs | -- | 6px | Tags, tiny badges |
| sm | 8px | 10px | Small elements |
| md | 12px | 14px | Inputs, buttons |
| lg | 16px | 18px | Cards, panels |
| xl | 24px | 24px | Large cards, hero |
| 2xl | -- | 32px | Modals, sheets |

### Stat Card with Accent Border

Cards with left accent borders indicate semantic meaning. Icon containers use 12% opacity backgrounds.

| Property | Value |
|----------|-------|
| Background | `rgba(255,255,255,0.04)` |
| Border | `1px solid rgba(255,255,255,0.06)` |
| Left border | `4px solid [accent-color]` |
| Border radius | 18px |
| Padding | 24px |

**Accent colors by semantic meaning:**

| Meaning | Color | Hex |
|---------|-------|-----|
| Primary metrics, revenue | Cyan | #00B7FF |
| Success, growth | Green | #22c55e |
| AI-related | Purple | #7A2EFF |
| General info | Blue | #165DFC |
| Warning, pending | Amber | #f59e0b |
| Error, negative | Red | #ff3b45 |

### Icon Containers

Icons inside semi-transparent colored containers.

| Size | Dimensions | Radius |
|------|------------|--------|
| sm | 36px | 10px |
| md | 48px | 14px |
| lg | 56px | 16px |

| Property | Value |
|----------|-------|
| Background | `rgba([icon-color-rgb], 0.12)` |
| Icon size | 24px (stroke-based, 1.5px width) |
| Icon color | Same as background accent |

### Period Selector Pills

Tab-style buttons with full pill radius for date range selection.

| Property | Value |
|----------|-------|
| Container background | `rgba(255,255,255,0.02)` |
| Container radius | 9999px (full pill) |
| Container padding | 4px |
| Tab padding | 8px 16px |
| Tab radius | 9999px |
| Active tab background | `rgba(0,183,255,0.12)` |
| Active tab color | #00B7FF |
| Inactive tab color | `rgba(255,255,255,0.6)` |

### Live Badge

Pulsing indicator for real-time status.

| Property | Value |
|----------|-------|
| Background | `rgba(34,197,94,0.2)` |
| Text color | #22c55e |
| Border radius | 9999px |
| Padding | 4px 10px |
| Font size | 12px |
| Dot size | 6px |
| Dot animation | pulse 2s infinite |

### Glow System

Strategic glow effects for CTAs and AI elements.

| Element | CSS |
|---------|-----|
| CTA glow | `box-shadow: 0 0 40px -10px rgba(0,183,255,0.3)` |
| AI active glow | `box-shadow: 0 0 30px rgba(0,183,255,0.15)` |
| Subtle inner glow | `box-shadow: inset 0 0 20px rgba(0,183,255,0.08)` |

### Sidebar Navigation

| Property | Value |
|----------|-------|
| Background | #08080a (deep) |
| Border right | `1px solid rgba(255,255,255,0.04)` |
| Nav item radius | 12px |
| Nav item padding | 10px 14px |
| Hover background | `rgba(255,255,255,0.04)` |
| Active background | `rgba(0,183,255,0.1)` |
| Active text color | #00B7FF |
| Inactive text color | `rgba(255,255,255,0.6)` |

---

## Asset Checklist

Track which brand assets are present in this repository:

- [x] Primary logo -- horizontal lockup, dark and light (`assets/logos/`)
- [x] Square logo -- dark and light (`assets/logos/`)
- [x] Rectangle logo -- dark (`assets/logos/`)
- [x] Icon / Favicon -- 72px (`assets/icons/`)
- [x] Icon -- app size 512px (`assets/icons/`)
- [x] Icon -- social media 1000px (`assets/icons/`)
- [x] Icon -- high-res on dark 2000px+ (`assets/icons/`)
- [x] Icon -- high-res on light 2000px+ (`assets/icons/`)
- [x] Icon -- print resolution 2552px (`assets/icons/`)
- [x] Icon -- master SVG (`assets/icons/`)
- [x] Icon -- transparent background (`assets/icons/`)
- [x] Color palette defined (`colors/COLORS.md`)
- [x] Typography scale defined (`typography/TYPOGRAPHY.md`)
- [x] Brand voice guide (`voice/BRAND-VOICE.md`)
- [x] Reference PDF (`assets/reference/finitless-brand-guidelines.pdf`)
- [x] HubSpot color reference screenshot (`assets/reference/hubspot-brand-colors.png`)
- [x] Icon variants: on-dark, on-light, transparent at 12 sizes each (16-1024px)
- [x] Logo size variants: horizontal (6 widths), square (5 sizes), rect (4 widths)
- [x] brand-manifest.json -- machine-readable brand identity (v3.0.0)
- [x] Interactive brand guidelines page (`index.html`) with copy-to-clipboard and downloads
- [ ] Logo -- SVG versions of all lockups
- [ ] Logo -- monochrome (black on white) standalone file
- [ ] Logo -- monochrome (white on black) standalone file
- [ ] Wordmark-only file (text without icon)
- [ ] BEASIGNE font files (`.woff2`, `.ttf`)
- [ ] Photography style reference images
- [ ] Social media templates
- [ ] Presentation template
- [ ] Email template
- [ ] Custom icon set (beyond the brand mark)
