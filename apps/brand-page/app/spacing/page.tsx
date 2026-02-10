'use client';

import { useState } from 'react';
import {
  GlassCard,
  GradientText,
  Button,
  Badge,
  IconContainer,
} from '@finitless/design-system';
import { Grid3X3, Copy, Check } from 'lucide-react';

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

const spacingScale = [
  { name: 'xs', value: '4px', tailwind: 'p-1', usage: 'Tight padding, icon gaps' },
  { name: 'sm', value: '8px', tailwind: 'p-2', usage: 'Compact spacing, badge padding' },
  { name: 'md', value: '12px', tailwind: 'p-3', usage: 'Form field padding' },
  { name: 'base', value: '16px', tailwind: 'p-4', usage: 'Default spacing, card padding' },
  { name: 'lg', value: '24px', tailwind: 'p-6', usage: 'Card padding, component gaps' },
  { name: 'xl', value: '32px', tailwind: 'p-8', usage: 'Component separation' },
  { name: '2xl', value: '48px', tailwind: 'p-12', usage: 'Section padding' },
  { name: '3xl', value: '64px', tailwind: 'p-16', usage: 'Large section breaks' },
  { name: '4xl', value: '96px', tailwind: 'p-24', usage: 'Hero spacing' },
];

const borderRadius = [
  { name: 'sm', value: '8px', tailwind: 'rounded-lg', usage: 'Small elements, badges' },
  { name: 'DEFAULT / md', value: '12px', tailwind: 'rounded-xl', usage: 'Inputs, buttons, cards (universal default)' },
  { name: 'lg', value: '16px', tailwind: 'rounded-2xl', usage: 'Larger cards, modals' },
  { name: 'xl', value: '24px', tailwind: 'rounded-3xl', usage: 'Hero sections' },
  { name: 'full', value: '9999px', tailwind: 'rounded-full', usage: 'Pills, avatars, circular buttons' },
];

const containers = [
  { name: 'Form', value: '480px', tailwind: 'max-w-md', usage: 'Login forms, sign-up forms' },
  { name: 'Content', value: '768px', tailwind: 'max-w-3xl', usage: 'Article content, narrow layouts' },
  { name: 'Wide', value: '1024px', tailwind: 'max-w-5xl', usage: 'Dashboard content' },
  { name: 'Max', value: '1280px', tailwind: 'max-w-6xl', usage: 'Full-width layouts' },
];

export default function SpacingPage() {
  return (
    <div className="min-h-screen py-12 lg:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <IconContainer color="warning">
            <Grid3X3 className="h-6 w-6" />
          </IconContainer>
          <h1 className="text-3xl lg:text-4xl font-bold">
            <GradientText>Spacing</GradientText>
          </h1>
        </div>
        <p className="text-lg text-text-muted mb-12 max-w-2xl">
          Finitless uses a 4px grid system for consistent spacing. All values are multiples of 4px.
        </p>

        {/* Spacing Scale */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Spacing Scale</h2>
          <GlassCard>
            <div className="space-y-4">
              {spacingScale.map((item) => (
                <div key={item.name} className="flex items-center gap-4 py-2 border-b border-border last:border-0">
                  <div className="w-16 shrink-0">
                    <Badge variant="default">{item.name}</Badge>
                  </div>
                  <div
                    className="bg-brand-link/20 rounded shrink-0"
                    style={{ width: item.value, height: '24px' }}
                  />
                  <div className="w-16 text-sm font-mono text-text-muted shrink-0">{item.value}</div>
                  <div className="flex-1 text-sm text-text-muted">{item.usage}</div>
                  <CopyButton text={item.tailwind} label="Copy" />
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Border Radius */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Border Radius</h2>
          <p className="text-text-muted mb-6">
            Simplified in v0.0.1 — the universal default is 12px for all UI elements.
          </p>
          <GlassCard>
            <div className="space-y-4">
              {borderRadius.map((item) => (
                <div key={item.name} className="flex items-center gap-4 py-2 border-b border-border last:border-0">
                  <div className="w-28 shrink-0">
                    <Badge variant={item.name === 'DEFAULT / md' ? 'primary' : 'default'}>
                      {item.name}
                    </Badge>
                  </div>
                  <div
                    className="w-12 h-12 bg-brand-link/20 shrink-0"
                    style={{ borderRadius: item.value }}
                  />
                  <div className="w-20 text-sm font-mono text-text-muted shrink-0">{item.value}</div>
                  <div className="flex-1 text-sm text-text-muted">{item.usage}</div>
                  <CopyButton text={item.tailwind} label="Copy" />
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Container Widths */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Container Widths</h2>
          <GlassCard>
            <div className="space-y-4">
              {containers.map((item) => (
                <div key={item.name} className="flex items-center gap-4 py-2 border-b border-border last:border-0">
                  <div className="w-20 shrink-0">
                    <Badge variant="default">{item.name}</Badge>
                  </div>
                  <div className="w-20 text-sm font-mono text-text-muted shrink-0">{item.value}</div>
                  <div className="flex-1 text-sm text-text-muted">{item.usage}</div>
                  <CopyButton text={item.tailwind} label="Copy" />
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Visual Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Visual Demo</h2>
          <GlassCard>
            <h3 className="text-lg font-semibold mb-4">Spacing in Action</h3>
            <div className="bg-background-deep rounded-lg p-8">
              <div className="space-y-4">
                {/* Card with proper spacing */}
                <div className="bg-surface-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-link/20 flex items-center justify-center shrink-0">
                      <span className="text-brand-link font-bold">48</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Card Title</h4>
                      <p className="text-sm text-text-muted">
                        This card uses p-6 (24px) padding, gap-4 (16px) between icon and text, and space-y-2 (8px) between title and description.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spacing annotations */}
                <div className="grid grid-cols-4 gap-4 text-center text-sm">
                  <div>
                    <div className="h-4 bg-brand-link/20 rounded mb-2" />
                    <span className="text-text-muted">gap-4 (16px)</span>
                  </div>
                  <div>
                    <div className="h-6 bg-brand-purple/20 rounded mb-2" />
                    <span className="text-text-muted">p-6 (24px)</span>
                  </div>
                  <div>
                    <div className="h-2 bg-brand-magenta/20 rounded mb-2" />
                    <span className="text-text-muted">space-y-2 (8px)</span>
                  </div>
                  <div>
                    <div className="h-12 bg-brand-primary/20 rounded mb-2" />
                    <span className="text-text-muted">w-12 h-12 (48px)</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* CSS Properties */}
        <section>
          <h2 className="text-2xl font-bold mb-6">CSS Custom Properties</h2>
          <GlassCard>
            <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`:root {
  /* Spacing Scale (4px grid) */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 12px;
  --space-base: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;

  /* Border Radius (v0.0.1) */
  --radius-sm: 8px;
  --radius-md: 12px;    /* Universal default */
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Container Widths */
  --container-form: 480px;
  --container-content: 768px;
  --container-wide: 1024px;
  --container-max: 1280px;
}`}
            </pre>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
