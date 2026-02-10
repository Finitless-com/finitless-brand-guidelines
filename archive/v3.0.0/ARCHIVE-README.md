# Finitless Brand Guidelines v3.0.0 (Archived)

**Archived on**: 2026-02-10
**Reason**: Complete redesign to consumable component library

---

## What This Archive Contains

This was the static brand guidelines implementation consisting of:

- **index.html** — Interactive single-page brand guidelines (109KB, no build tools)
- **brand-manifest.json** — Machine-readable brand identity spec
- **BRAND-GUIDELINES.md** — Complete human-readable brand guide
- **SKILL.md** — LLM skill for brand styling
- **CLAUDE.md** — AI agent instructions

### Asset Structure
```
assets/
├── icons/       # 48+ icon variants (3 bg types × 12 sizes + SVG)
├── logos/       # 31+ logo lockups (horizontal, square, rect)
└── reference/   # Original brand PDF from design team
```

### Documentation
```
colors/COLORS.md         # Full color spec with HSL
typography/TYPOGRAPHY.md # Type scale with CSS/Tailwind
voice/BRAND-VOICE.md     # Voice and tone guidelines
```

---

## v3.0.0 Key Features

Released 2026-02-10 with:
- Warmer layered backgrounds (Deep #08080a → Surface #1c1c1f)
- Enhanced glassmorphism (8px blur, 4% card surface, 6% borders)
- Updated border radius scale (6/10/14/18/24/32px)
- Dashboard component patterns (stat cards, icon containers, period selectors)
- Glow system for CTAs and accent elements

---

## Why It Was Replaced

The static HTML implementation documented brand rules but didn't enforce them programmatically. The new `@finitless/design-system` package provides:

1. **React components** styled to brand tokens (Radix UI based)
2. **Tailwind preset** for token consistency across apps
3. **Storybook documentation** with interactive examples
4. **Type-safe API** that makes brand violations harder

---

## Viewing the Archive

To run the archived version locally:

```bash
cd archive/v3.0.0
python -m http.server 8080
# Open http://localhost:8080
```

Or use any static file server to serve `index.html`.

---

## Migration Guide

The new design system replaces this documentation with consumable code:

| v3.0.0 File | New Location |
|-------------|--------------|
| brand-manifest.json | packages/design-system/src/tokens/* |
| SKILL.md | Updated SKILL.md at repo root |
| CLAUDE.md | Updated CLAUDE.md at repo root |
| assets/* | Canonical copy at root /assets |
| index.html | apps/brand-page (Next.js) |
