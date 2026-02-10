# Changelog

All notable changes to the Finitless Brand Guidelines repository.

---

## [3.0.0] -- 2026-02-10

### Major Visual Update

This release modernizes the design system based on 2026 SaaS design trends (Linear, Vercel, Raycast aesthetic). Key changes include warmer backgrounds, larger border radius, enhanced glassmorphism, and new dashboard component patterns.

### Changed

- **Background system**: Replaced flat `#0a0a0a` with layered warm off-black system:
  - Deep: `#08080a` (sidebar, navigation)
  - Base: `#0e0e10` (main page background)
  - Elevated: `#151517` (cards, modals)
  - Surface: `#1c1c1f` (dropdowns, popovers)
- **Border radius scale**: Increased defaults for softer, more modern feel:
  - xs: 6px, sm: 10px, md: 14px, lg: 18px (cards), xl: 24px, 2xl: 32px
- **Card surface opacity**: Reduced from 5% to 4% for subtler glass effect
- **Border opacity**: Reduced from 10% to 6% for cleaner appearance
- **Glassmorphism blur**: Increased from `blur(4px)` to `blur(8px)` for premium feel

### Added

- **Stat Card with Accent Border**: Card pattern with 4px colored left border indicating semantic meaning (cyan for revenue, green for success, purple for AI, etc.)
- **Icon Containers**: Icons inside 12% opacity colored backgrounds. Sizes: 36px (sm), 48px (md), 56px (lg)
- **Period Selector Pills**: Tab-style buttons with full pill radius for date range selection
- **Live Badge**: Pulsing green badge for real-time status indicators
- **Change Indicator**: Positive/negative percentage display with directional icons
- **Sidebar Navigation**: Deep background pattern with hover/active states
- **Glow System**: Strategic glow variants for CTAs and AI elements:
  - CTA glow: `box-shadow: 0 0 40px -10px rgba(0,183,255,0.3)`
  - AI active glow: `box-shadow: 0 0 30px rgba(0,183,255,0.15)`
  - Subtle inner glow: `box-shadow: inset 0 0 20px rgba(0,183,255,0.08)`
- **Dashboard Components section** in index.html with live demos

### Updated

- brand-manifest.json: Added backgrounds object, updated borderRadius scale, added statCard/iconContainer/periodSelector/sidebar/liveBadge/changeIndicator patterns
- index.html: New CSS variables, Dashboard Components section, updated navigation
- CLAUDE.md: Updated Visual Rules table (pending)
- SKILL.md: Added dashboard patterns (pending)
- colors/COLORS.md: Added background layers (pending)

### Design Research Sources

- [UI Design Trends 2026 - Landdding](https://landdding.com/blog/ui-design-trends-2026)
- [The Linear Look - Frontend Horse](https://frontend.horse/articles/the-linear-look/)
- [SaaS Design Trends 2026 - EnviznLabs](https://enviznlabs.com/blogs/7-emerging-web-design-trends-for-saas-in-2026-ai-layouts-glow-effects-and-beyond)

---

## [2.5.0] -- 2026-02-06

### Changed

- **Finitless Blue updated**: `#377BFF` → `#165DFC` (rgb(22, 93, 252), hsl(222, 97%, 54%)). Deeper, more saturated blue matching the Finitless Dashboard.
- **Usage expanded**: Finitless Blue is now the **preferred color for solid action buttons** (e.g., "+ Create", "Save", "Add"), replacing the previous UI-only role.
- CSS custom property: `--color-blue: #165DFC`
- Tailwind config: `brand.blue: '#165DFC'`

### Added

- **Solid button pattern** (`buttonSolid`): New `bg-[#165DFC] rounded-xl text-white font-semibold` pattern for standard UI actions. Preferred over gradient for most buttons — gradient CTA remains for hero/form submit only.
- **Button context**: "Standard action" row added to button context guide across all files.
- **brand-manifest.json**: `buttonSolid` entry in `visualIdentity`, `standardAction` in `buttonContextGuide`.

### Updated

- Anti-patterns revised: Solid blue buttons are now allowed when using Finitless Blue (#165DFC). Only non-brand colors (#2563eb, etc.) are prohibited.
- All files updated: brand-manifest.json, CLAUDE.md, SKILL.md, BRAND-GUIDELINES.md, colors/COLORS.md, index.html, README.md.

---

## [2.4.0] -- 2026-02-06

### Added

- **Select / Dropdown component patterns**: Complete specification for custom-styled select menus including trigger (closed state), dropdown panel, option items, hover/selected/disabled states, placeholder options, and scrollbar styling.
- **brand-manifest.json**: `formSelect` object with `trigger`, `panel`, `option`, `optionHover`, `optionSelected`, `optionDisabled`, and `scrollbar` entries in `visualIdentity`. New `formSelects` anti-pattern list.
- **SKILL.md**: Select/Dropdown component pattern with HTML examples. Tailwind quick reference for trigger, panel, and option states. Dropdown anti-patterns.
- **CLAUDE.md**: Select trigger, dropdown panel, and dropdown option rows in Visual Rules table. Select/Dropdown row in Anti-Patterns table.
- **BRAND-GUIDELINES.md**: New "Select / Dropdown" subsection in Form Components with trigger, panel, option, placeholder, and scrollbar specification tables. Dropdown don'ts in Form Don'ts list.
- **index.html**: Select/Dropdown Do/Don't card with visual comparison (elevated subtle hover vs. gradient hover with flat panel).

---

## [2.3.0] -- 2026-02-06

### Added

- **Form component patterns**: Complete specification for text inputs, labels, helper/error text, form page layouts, OAuth/social login buttons, and dividers.
- **Button size scale**: sm (36px), md (44px, default), lg (48px) with height, padding, font size, and radius per size.
- **Button context guide**: Which button style and size to use for form submit, OAuth, hero CTA, card actions, destructive, and tertiary.
- **brand-manifest.json**: `formInput`, `formInputFocus`, `formInputError`, `formLabel`, `formHelperText`, `formErrorText`, `formContainer`, `formDivider`, `oauthButton`, `buttonSizes`, `buttonContextGuide` in `visualIdentity`. Form anti-patterns for inputs, buttons, and logos.
- **SKILL.md**: Form Input, Form Page Layout, OAuth Button, and Form Divider component patterns. Button size scale table. Form-related Tailwind quick reference. Form anti-patterns.
- **CLAUDE.md**: Form input, label, error, OAuth, divider, and container rows in Visual Rules table. Form anti-patterns in Anti-Patterns table.
- **BRAND-GUIDELINES.md**: New "8. Form Components" section with full specification tables, button sizes, and do's/don'ts.
- **colors/COLORS.md**: Form color usage table. New CSS custom properties: `--color-placeholder`, `--color-label`, `--color-helper`, `--focus-ring-primary`, `--focus-ring-error`.
- **index.html**: Form Components subsection with do/don't grids for inputs, form buttons, and OAuth buttons. Button size comparison. Complete login form demo. New CSS custom properties.

---

## [2.2.0] -- 2026-02-06

### Added

- **Finitless Blue (#377BFF)**: New 4th primary brand color for UI backgrounds, link color, data visualization, and alternate accent. Added across all files.
- CSS custom property: `--color-blue: #377BFF`
- Tailwind config: `brand.blue: '#377BFF'`

### Note

- The 3-stop brand gradient (cyan → purple → magenta) is unchanged. Blue is a standalone primary.

---

## [2.1.0] -- 2026-02-05

### Added

- **brand-manifest.json**: 7 new sections -- surface/opacity tokens, motion/transitions, gradient text pattern, anti-patterns (buttons, cards, gradient text), responsive breakpoints, accessibility guidelines, imagery guidelines, icon style guidelines.
- **brand-manifest.json**: Component patterns (cardStyle, hoverStyle, buttonPrimary, buttonSecondary) now include both Tailwind and CSS equivalents.
- **SKILL.md**: CSS custom properties block with all tokens including surface and transitions. Surface/opacity token table. Transitions & motion rules. Responsive breakpoints. Anti-patterns section. Icon style and imagery sections.
- **CLAUDE.md**: Surface/opacity and transition tokens in CSS custom properties. Monospace font stack section. Expanded Visual Rules table with transitions, focus, reduced motion, font smoothing, and breakpoints. Anti-patterns table, icon style section, and imagery guidelines.
- **index.html**: Word pills for "revenue" and "every order" (use) and "hopefully" (avoid).
- **voice/BRAND-VOICE.md**: Rows for "revenue", "every order" (use) and "hopefully" (avoid).
- **index.html**: Base URL (`https://brand.finitless.com/`) prepended to all clipboard-copied asset paths (Quick Pick table, icon picker).
- **brand-manifest.json**: `baseUrl` field added for programmatic full-URL construction.
- **SKILL.md**: Resources section with links to manifest, brand site, CLAUDE.md, and GitHub repo.

### Fixed

- **Overline letter-spacing**: Corrected from `0.1em` to `0.05em` in brand-manifest.json and index.html to match TYPOGRAPHY.md canonical value. Also updated Tailwind class from `tracking-widest` to `tracking-wider`.
- **Word list alignment**: Unified words across all 6 files (index.html, SKILL.md, CLAUDE.md, BRAND-GUIDELINES.md, BRAND-VOICE.md, brand-manifest.json). Added missing words: "revenue", "every order" (use); "revolutionize", "hopefully" (avoid).

---

## [2.0.0] -- 2026-02-05

### Added

- **Interactive brand guidelines page** (`index.html`): Full-featured toolkit with sticky nav, scroll-spy, copy-to-clipboard on all values, asset downloads with size picker, live do's/don'ts component examples, and LLM integration guide.
- **"Copy Everything to Clipboard" button**: Single click copies SKILL.md + CLAUDE.md combined for fast LLM feeding.
- **62 new asset size variants**: Icons in 3 variants (on-dark, on-light, transparent) x 12 sizes each. Logo size variants for horizontal (6 widths), square (5 sizes), and rectangular (4 widths).
- **AI terminology guidance**: Added to BRAND-VOICE.md, SKILL.md, CLAUDE.md, README.md, brand-manifest.json, and index.html. Words to use: AI agents, AI ordering agents, AI-powered. Words to avoid: chatbot, bot, artificial intelligence, intelligent agents, smart, virtual assistant, conversational AI.
- **Warning color** (`#f59e0b`): Added across all documentation files (COLORS.md, SKILL.md, CLAUDE.md, README.md, brand-manifest.json, index.html).
- **Background type labels** on logo lockup cards (transparent bg / black bg).
- **CSS custom properties block** and **Tailwind config block** with copy buttons in Colors section.
- **Font loading code blocks** (HTML, Next.js, CSS fallback) with copy buttons.
- **Quick Pick table** mapping common contexts to recommended asset files.
- **Logo Size Variants section** with downloadable pills for every generated size.
- **Brand Icon picker** with variant tabs (Dark/Light/Transparent) and size grid.

### Changed

- **brand-manifest.json** restructured from flat asset arrays to organized hierarchy (v1.0.0 → v2.0.0). Now includes complete asset inventory with all size variants, quick pick recommendations, and AI terminology in voice section.
- **CLAUDE.md** expanded with comprehensive asset sizes, naming patterns, and quick pick table.
- **SKILL.md** expanded with complete asset library section and naming conventions.
- **README.md** updated with AI terminology table, corrected asset counts (48+ icons, 31+ logos), and warning color.

---

## [1.0.0] -- 2026-02-05

### Added

- **BRAND-GUIDELINES.md**: Complete brand guide covering logo (concept, variants, stamp rules, do's and don'ts), colors (original spec and web adaptation with gradients), typography (BEASIGNE for logo, Inter for UI with full type scale), imagery style, voice and tone, spacing and layout, icons, and asset checklist.
- **colors/COLORS.md**: Full color specification with primary gradient colors (hex, RGB, HSL), neutral palette, semantic colors, gradient definitions (CSS and Tailwind), platform discrepancy note for HubSpot, CSS custom properties block, and Tailwind config snippet.
- **typography/TYPOGRAPHY.md**: Full typography specification with BEASIGNE (logo font) and Inter (UI font), complete type scale table with px/rem/weight/line-height/letter-spacing, CSS implementation block, Tailwind config, and Google Fonts import instructions.
- **voice/BRAND-VOICE.md**: Complete brand voice guide with personality traits, tone by context (marketing, product UI, support, error messages) with examples, target audience profile, key messaging themes, words we use and avoid, and example copy for common scenarios.
- **CLAUDE.md**: AI agent instructions for consuming this repo -- covers repository structure, logo/icon selection guide, color application in CSS/Tailwind/React, font loading instructions (HTML and Next.js), brand voice rules for content generation, and visual pattern quick-reference.
- **SKILL.md**: LLM skill definition for Finitless brand styling -- structured as a reusable skill with colors, typography, gradients, visual rules, component patterns (hero, card, stat block), Tailwind quick reference, and brand voice summary.
- **CHANGELOG.md**: This file.
- **README.md**: Human-readable overview with logo previews, color palette quick reference, asset location table, AI agent consumption guide, and deployment instructions.
- **assets/icons/**: 12 icon files including master SVG, favicon (72px), app icon (512px), social (1000px), on-dark and on-light variants (2000px+), print resolution (2552px), and transparent background.
- **assets/logos/**: 5 logo lockup files -- horizontal on dark, horizontal on light, rectangle on dark, square on dark, square on light.
- **assets/reference/**: Original brand PDF (`finitless-brand-guidelines.pdf`) and HubSpot color reference screenshot (`hubspot-brand-colors.png`).
