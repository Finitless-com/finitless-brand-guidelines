'use client';

import { useState } from 'react';
import {
  GlassCard,
  GradientText,
  Button,
  IconContainer,
  Badge,
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
} from '@finitless/design-system';
import { Palette, Copy, Check, Sparkles } from 'lucide-react';

function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="ghost" size="sm" onClick={copy} className="gap-2">
      {copied ? (
        <>
          <Check className="h-4 w-4 text-semantic-success" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          {label || 'Copy'}
        </>
      )}
    </Button>
  );
}

function ColorSwatch({
  name,
  value,
  token,
  description,
}: {
  name: string;
  value: string;
  token: string;
  description?: string;
}) {
  return (
    <div className="flex items-center gap-4 group">
      <div
        className="w-14 h-14 rounded-xl border border-white/10 shrink-0 shadow-sm"
        style={{ backgroundColor: value }}
      />
      <div className="flex-1 min-w-0">
        <div className="font-medium text-white">{name}</div>
        <div className="text-sm font-mono text-text-muted truncate">{value}</div>
        {description && <div className="text-xs text-text-muted mt-1">{description}</div>}
      </div>
      <CopyButton text={token} label="Copy class" />
    </div>
  );
}

function ColorScale({
  name,
  scale,
  prefix,
  note,
}: {
  name: string;
  scale: Record<string, string>;
  prefix: string;
  note?: string;
}) {
  const steps = Object.entries(scale).filter(([key]) => !isNaN(Number(key)));

  return (
    <div className="mb-8 last:mb-0">
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        {note && <Badge variant="secondary" size="sm">{note}</Badge>}
      </div>
      <div className="flex gap-1 mb-3">
        {steps.map(([step, value]) => (
          <div key={step} className="flex-1 group relative">
            <div
              className="h-12 rounded-lg border border-white/10 transition-transform hover:scale-105 cursor-pointer"
              style={{ backgroundColor: value }}
              title={`${prefix}-${step}: ${value}`}
              onClick={() => navigator.clipboard.writeText(`${prefix}-${step}`)}
            />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {step}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-sm text-text-muted flex items-center gap-2">
        <span className="font-mono">{prefix}-100</span>
        <span className="text-border">→</span>
        <span className="font-mono">{prefix}-1000</span>
        <span className="ml-auto text-xs">Click to copy class</span>
      </div>
    </div>
  );
}

const brandColors = [
  { name: 'Finitless Blue', value: '#165DFC', token: 'bg-brand-primary', description: 'Solid buttons, UI backgrounds' },
  { name: 'Cyan (Links)', value: '#00B7FF', token: 'text-brand-link', description: 'Links, CTAs, gradient start' },
  { name: 'Purple', value: '#7A2EFF', token: 'bg-brand-purple', description: 'Gradient midpoint only' },
  { name: 'Magenta', value: '#C300FF', token: 'bg-brand-magenta', description: 'Gradient end only' },
];

const backgroundColors = [
  { name: 'Deep', value: '#08080a', token: 'bg-background-deep', description: 'Sidebar, navigation' },
  { name: 'Base', value: '#0e0e10', token: 'bg-background-base', description: 'Page background' },
  { name: 'Elevated', value: '#151517', token: 'bg-background-elevated', description: 'Cards, modals' },
  { name: 'Surface', value: '#1c1c1f', token: 'bg-background-surface', description: 'Dropdowns, popovers' },
];

const semanticColors = [
  { name: 'Error', value: '#ff3b45', token: 'text-semantic-error', description: 'Errors, alerts, problems' },
  { name: 'Success', value: '#22c55e', token: 'text-semantic-success', description: 'Success states, positive' },
  { name: 'Warning', value: '#f59e0b', token: 'text-semantic-warning', description: 'Caution, pending actions' },
];

const surfaceColors = [
  { name: 'Card Surface', value: 'rgba(255,255,255,0.05)', token: 'bg-surface-card', description: '5% white opacity' },
  { name: 'Border Default', value: 'rgba(255,255,255,0.10)', token: 'border-border', description: '10% white opacity' },
  { name: 'Border Subtle', value: 'rgba(255,255,255,0.06)', token: 'border-border-subtle', description: '6% white opacity' },
  { name: 'Muted Text', value: 'rgba(255,255,255,0.60)', token: 'text-text-muted', description: 'Secondary text' },
];

export default function ColorsPage() {
  return (
    <div className="min-h-screen py-12 lg:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <IconContainer color="link">
            <Palette className="h-6 w-6" />
          </IconContainer>
          <h1 className="text-3xl lg:text-4xl font-bold">
            <GradientText>Colors</GradientText>
          </h1>
          <Badge variant="primary" className="ml-2">v0.1.0</Badge>
        </div>
        <p className="text-lg text-text-muted mb-12 max-w-2xl">
          The Finitless color system with 10-step color scales. All colors are available as Tailwind classes via the design system preset.
        </p>

        {/* Brand Primary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Brand Primary</h2>
          <GlassCard>
            <div className="space-y-6">
              {brandColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Background Hierarchy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Background Hierarchy</h2>
          <p className="text-text-muted mb-6">
            Layered background system for visual depth. Warmer off-black tones are easier on eyes and feel more premium.
          </p>
          <GlassCard>
            <div className="space-y-6">
              {backgroundColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </GlassCard>
        </section>

        {/* 10-Step Color Scales - NEW in v0.1.0 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold">10-Step Color Scales</h2>
            <Badge variant="primary" size="sm" className="gap-1">
              <Sparkles className="h-3 w-3" />
              New in v0.1.0
            </Badge>
          </div>
          <p className="text-text-muted mb-6">
            Geist-inspired color scales with 10 steps from light (100) to dark (1000).
            Click any swatch to copy its Tailwind class.
          </p>

          <GlassCard className="mb-6">
            <ColorScale name="Gray" scale={gray} prefix="bg-gray" />
          </GlassCard>

          <GlassCard className="mb-6">
            <ColorScale name="Gray Alpha" scale={grayAlpha} prefix="bg-grayAlpha" note="Transparent" />
          </GlassCard>

          <GlassCard className="mb-6">
            <ColorScale name="Blue" scale={blue} prefix="bg-blue" note="Brand Primary" />
          </GlassCard>

          <GlassCard className="mb-6">
            <ColorScale name="Cyan" scale={cyan} prefix="bg-cyan" note="Links" />
          </GlassCard>

          <GlassCard className="mb-6">
            <ColorScale name="Purple" scale={purple} prefix="bg-purple" note="Gradients Only" />
          </GlassCard>

          <GlassCard className="mb-6">
            <ColorScale name="Magenta" scale={magenta} prefix="bg-magenta" note="Gradients Only" />
          </GlassCard>

          <GlassCard className="mb-6">
            <ColorScale name="Red" scale={red} prefix="bg-red" note="Error" />
          </GlassCard>

          <GlassCard className="mb-6">
            <ColorScale name="Green" scale={green} prefix="bg-green" note="Success" />
          </GlassCard>

          <GlassCard className="mb-6">
            <ColorScale name="Amber" scale={amber} prefix="bg-amber" note="Warning" />
          </GlassCard>

          <GlassCard>
            <ColorScale name="Teal" scale={teal} prefix="bg-teal" note="Accent" />
          </GlassCard>
        </section>

        {/* Semantic */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Semantic</h2>
          <GlassCard>
            <div className="space-y-6">
              {semanticColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Surface / Opacity Tokens */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Surface & Opacity</h2>
          <p className="text-text-muted mb-6">
            Semi-transparent values for glass effects and subtle borders.
          </p>
          <GlassCard>
            <div className="space-y-6">
              {surfaceColors.map((color) => (
                <div key={color.name} className="flex items-center gap-4 group">
                  <div
                    className="w-14 h-14 rounded-xl border border-white/10 shrink-0 shadow-sm bg-background-deep"
                    style={{ position: 'relative' }}
                  >
                    <div
                      className="absolute inset-0 rounded-xl"
                      style={{ backgroundColor: color.value }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-white">{color.name}</div>
                    <div className="text-sm font-mono text-text-muted truncate">{color.value}</div>
                    {color.description && <div className="text-xs text-text-muted mt-1">{color.description}</div>}
                  </div>
                  <CopyButton text={color.token} label="Copy class" />
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Gradients */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Gradients</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard>
              <div
                className="h-20 rounded-xl mb-4"
                style={{ background: 'linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF)' }}
              />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Brand Gradient</p>
                  <p className="text-sm text-text-muted">Hero text, brand accents</p>
                </div>
                <CopyButton text="bg-gradient-brand" label="Copy class" />
              </div>
            </GlassCard>

            <GlassCard>
              <div
                className="h-20 rounded-xl mb-4"
                style={{ background: 'linear-gradient(to right, #00B7FF, #7A2EFF)' }}
              />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">CTA Gradient</p>
                  <p className="text-sm text-text-muted">Primary buttons, CTAs</p>
                </div>
                <CopyButton text="bg-gradient-cta" label="Copy class" />
              </div>
            </GlassCard>
          </div>
        </section>

        {/* CSS Custom Properties */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">CSS Custom Properties</h2>
          <p className="text-text-muted mb-6">
            Import CSS variables for use without Tailwind. Available at <code className="font-mono text-brand-link">@finitless/design-system/styles</code>.
          </p>
          <GlassCard>
            <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`/* Import standalone CSS variables */
@import '@finitless/design-system/styles/variables.css';

/* Use in your styles */
.my-element {
  background: var(--color-brand-primary);
  border-radius: var(--radius-md);
  transition: var(--transition-fast);
}

/* Color scales available */
var(--color-gray-100) through var(--color-gray-1000)
var(--color-blue-100) through var(--color-blue-1000)
/* ... all 10 color scales */`}
            </pre>
          </GlassCard>
        </section>

        {/* Tailwind Config */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Tailwind Config</h2>
          <GlassCard>
            <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`// tailwind.config.ts
import { finitlessPreset } from '@finitless/design-system/tailwind';

export default {
  presets: [finitlessPreset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@finitless/design-system/dist/**/*.{js,mjs}',
  ],
};`}
            </pre>
            <p className="text-sm text-text-muted mt-4">
              The preset includes all brand colors, 10-step scales, backgrounds, gradients, and semantic tokens.
            </p>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
