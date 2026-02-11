'use client';

import { useState } from 'react';
import {
  GlassCard,
  GradientText,
  Button,
  IconContainer,
} from '@finitless/design-system';
import { Palette, Copy, Check } from 'lucide-react';

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
        </div>
        <p className="text-lg text-text-muted mb-12 max-w-2xl">
          The Finitless color system. All colors are available as Tailwind classes via the design system preset.
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
          <GlassCard>
            <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`:root {
  /* Brand Primary */
  --color-primary: #00B7FF;
  --color-secondary: #7A2EFF;
  --color-tertiary: #C300FF;
  --color-blue: #165DFC;

  /* Background Layers */
  --bg-deep: #08080a;
  --bg-base: #0e0e10;
  --bg-elevated: #151517;
  --bg-surface: #1c1c1f;

  /* Surface / Opacity */
  --color-card-surface: rgba(255, 255, 255, 0.05);
  --color-border: rgba(255, 255, 255, 0.10);
  --color-muted-text: rgba(255, 255, 255, 0.60);

  /* Semantic */
  --color-error: #ff3b45;
  --color-success: #22c55e;
  --color-warning: #f59e0b;

  /* Gradients */
  --gradient-brand: linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF);
  --gradient-cta: linear-gradient(to right, #00B7FF, #7A2EFF);
}`}
            </pre>
            <div className="mt-4 flex justify-end">
              <CopyButton
                text={`:root {
  --color-primary: #00B7FF;
  --color-secondary: #7A2EFF;
  --color-tertiary: #C300FF;
  --color-blue: #165DFC;
  --bg-deep: #08080a;
  --bg-base: #0e0e10;
  --bg-elevated: #151517;
  --bg-surface: #1c1c1f;
  --color-card-surface: rgba(255, 255, 255, 0.05);
  --color-border: rgba(255, 255, 255, 0.10);
  --color-muted-text: rgba(255, 255, 255, 0.60);
  --color-error: #ff3b45;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --gradient-brand: linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF);
  --gradient-cta: linear-gradient(to right, #00B7FF, #7A2EFF);
}`}
                label="Copy all"
              />
            </div>
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
              The preset includes all brand colors, backgrounds, gradients, and semantic tokens.
            </p>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
