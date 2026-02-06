# Finitless Brand Guidelines

The single source of truth for the Finitless brand identity -- logos, colors, typography, voice, and visual patterns.

**Finitless** builds AI ordering agents for restaurants (voice, WhatsApp, web chat).
Tagline: **"Never Miss a Sale. Ever."**

---

## Logo

The Finitless mark merges the letter "N" with an infinity symbol into one icon, rendered with a cyan-to-magenta gradient. The wordmark uses the BEASIGNE font in all caps.

### Preferred: Color on Dark

![Finitless Logo on Dark](assets/logos/finitless-logo-horizontal-on-dark.png)

### Color on Light

![Finitless Logo on Light](assets/logos/finitless-logo-horizontal-on-light.png)

### Brand Mark

![Finitless Icon](assets/icons/finitless-icon-on-dark-2000.png)

> See `BRAND-GUIDELINES.md` for full logo usage rules, variant descriptions, and do's/don'ts.

---

## Color Palette

| Swatch | Name | Hex | Usage |
|--------|------|-----|-------|
| | Cyan | `#00B7FF` | Primary accent, links, CTAs |
| | Purple | `#7A2EFF` | Gradient midpoint, secondary accent |
| | Magenta | `#C300FF` | Gradient end, tertiary accent |
| | Background | `#0a0a0a` | Near-black, primary background |
| | White | `#FFFFFF` | Primary text on dark backgrounds |
| | Error | `#ff3b45` | Error states |
| | Success | `#22c55e` | Success states |
| | Warning | `#f59e0b` | Warning / caution states |

**Brand gradient (CSS)**: `linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF)`

> See `colors/COLORS.md` for full spec with RGB, HSL, CSS variables, and Tailwind config.

---

## Typography

| Role | Font | Weights |
|------|------|---------|
| Logo / Wordmark | BEASIGNE | Regular (logo only) |
| UI / Body / Headings | Inter (Google Fonts) | 400, 600, 700, 800 |

> See `typography/TYPOGRAPHY.md` for the full type scale, CSS implementation, and Tailwind config.

---

## Brand Voice

Finitless is **confident, not arrogant** -- **practical, not visionary** -- **direct, not salesy**.

Target audience: Restaurant owners and operators.
Key metrics: $31,000/year in missed orders, 40% of calls go unanswered during peak hours.

### AI Terminology

We say **AI agents** and **AI ordering agents** -- never "chatbot," "bot," "artificial intelligence," or "virtual assistant."

| Use | Avoid |
|-----|-------|
| AI agents | chatbot, bot |
| AI ordering agents | artificial intelligence (say "AI") |
| AI-powered (as modifier) | smart, virtual assistant |

**Rule**: Lead with what the product does, not the technology category. Restaurant owners care about revenue, not labels.

> See `voice/BRAND-VOICE.md` for the full voice guide with tone-by-context examples and copy templates.

---

## Interactive Brand Guidelines

Open `index.html` (or visit the deployed Vercel URL) for an interactive brand guidelines viewer with:

- **Copy-to-clipboard** on all color values, code blocks, and asset paths
- **Asset downloads** with size picker for every icon and logo variant
- **"Copy Everything" button** to feed SKILL.md + CLAUDE.md to any LLM in one click
- **Live do's and don'ts** component examples (buttons, cards, gradient text)
- **LLM integration guide** with quick-start code for manifest fetching

---

## Asset Locations

| Asset | Path | Count |
|-------|------|-------|
| Logo lockups (PNG) | `assets/logos/` | 31+ files |
| Icons and brand mark (SVG + PNG) | `assets/icons/` | 48+ files |
| Reference materials | `assets/reference/` | 2 files (brand PDF + HubSpot screenshot) |
| Color specification | `colors/COLORS.md` | -- |
| Typography specification | `typography/TYPOGRAPHY.md` | -- |
| Voice and tone guide | `voice/BRAND-VOICE.md` | -- |
| Complete brand guide | `BRAND-GUIDELINES.md` | -- |

---

## For AI Agents

This repository is designed to be consumed by AI coding agents and LLMs.

| Resource | Purpose |
|----------|---------|
| `CLAUDE.md` | Instructions for AI agents -- how to find assets, apply colors, load fonts, follow voice rules |
| `SKILL.md` | Reusable LLM skill definition for applying Finitless brand styling to generated artifacts |
| `brand-manifest.json` | Machine-readable brand data (when deployed) |

### Quick Start for Agents

1. Read `CLAUDE.md` for orientation.
2. Use `colors/COLORS.md` for exact color values and CSS/Tailwind snippets.
3. Use `typography/TYPOGRAPHY.md` for font loading and type scale.
4. Use `voice/BRAND-VOICE.md` when generating any copy or content.
5. Pick logo/icon files from `assets/` based on the context table in `CLAUDE.md`.

---

## Deployment

This repository is connected to Vercel and **deploys automatically** on every push to `main`. No manual steps needed.

Once deployed, assets are available at their Vercel URL paths (e.g., `/assets/logos/finitless-logo-horizontal-on-dark.png`).

---

## Documentation

| File | Description |
|------|-------------|
| `BRAND-GUIDELINES.md` | Complete brand guide -- all sections in one document |
| `colors/COLORS.md` | Full color spec (hex, RGB, HSL, CSS vars, Tailwind) |
| `typography/TYPOGRAPHY.md` | Font families, type scale, CSS and Tailwind implementation |
| `voice/BRAND-VOICE.md` | Brand personality, tone by context, words to use/avoid |
| `CLAUDE.md` | AI agent consumption instructions |
| `SKILL.md` | LLM skill definition for brand styling |
| `CHANGELOG.md` | Version history |

---

All assets in this repository are proprietary to Finitless. Do not use without authorization.
