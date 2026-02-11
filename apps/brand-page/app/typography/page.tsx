'use client';

import { useState } from 'react';
import {
  GlassCard,
  GradientText,
  Button,
  IconContainer,
  Badge,
} from '@finitless/design-system';
import { Type, Copy, Check, AlertCircle } from 'lucide-react';

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

const typeScale = [
  { name: 'Display', size: '72px', weight: '800', lineHeight: '1.1', tailwind: 'text-7xl font-extrabold', usage: 'Hero headings' },
  { name: 'H1', size: '48px', weight: '800', lineHeight: '1.2', tailwind: 'text-5xl font-extrabold', usage: 'Page titles' },
  { name: 'H2', size: '36px', weight: '700', lineHeight: '1.25', tailwind: 'text-4xl font-bold', usage: 'Section headings' },
  { name: 'H3', size: '24px', weight: '700', lineHeight: '1.3', tailwind: 'text-2xl font-bold', usage: 'Sub-section headings' },
  { name: 'H4', size: '20px', weight: '600', lineHeight: '1.4', tailwind: 'text-xl font-semibold', usage: 'Card titles' },
  { name: 'Body Large', size: '18px', weight: '400', lineHeight: '1.6', tailwind: 'text-lg', usage: 'Lead text, intros' },
  { name: 'Body', size: '16px', weight: '400', lineHeight: '1.6', tailwind: 'text-base', usage: 'Default body text' },
  { name: 'Body Small', size: '14px', weight: '400', lineHeight: '1.5', tailwind: 'text-sm', usage: 'Secondary text' },
  { name: 'Caption', size: '12px', weight: '400', lineHeight: '1.5', tailwind: 'text-xs', usage: 'Labels, fine print' },
  { name: 'Overline', size: '12px', weight: '600', lineHeight: '1.5', tailwind: 'text-xs font-semibold uppercase tracking-wider', usage: 'Category labels' },
];

const fontWeights = [
  { name: 'Regular', weight: 400, tailwind: 'font-normal' },
  { name: 'Medium', weight: 500, tailwind: 'font-medium' },
  { name: 'Semibold', weight: 600, tailwind: 'font-semibold' },
  { name: 'Bold', weight: 700, tailwind: 'font-bold' },
  { name: 'Extrabold', weight: 800, tailwind: 'font-extrabold' },
];

export default function TypographyPage() {
  return (
    <div className="min-h-screen py-12 lg:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <IconContainer color="link">
            <Type className="h-6 w-6" />
          </IconContainer>
          <h1 className="text-3xl lg:text-4xl font-bold">
            <GradientText>Typography</GradientText>
          </h1>
        </div>
        <p className="text-lg text-text-muted mb-12 max-w-2xl">
          Finitless uses Inter for all UI text. The type scale is designed for dark backgrounds with excellent readability.
        </p>

        {/* Font Family */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Font Family</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard>
              <h3 className="text-lg font-semibold mb-4">UI Font: Inter</h3>
              <p className="text-4xl font-bold mb-4">Aa Bb Cc</p>
              <p className="text-text-muted mb-4">
                All UI text, headings, body, and captions use Inter from Google Fonts.
              </p>
              <div className="bg-background-deep rounded-lg p-3 font-mono text-sm">
                font-family: 'Inter', -apple-system, sans-serif;
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold mb-4">Mono Font</h3>
              <p className="text-4xl font-mono mb-4">01 23 45</p>
              <p className="text-text-muted mb-4">
                Code blocks and technical content use the system monospace stack.
              </p>
              <div className="bg-background-deep rounded-lg p-3 font-mono text-sm">
                font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Logo Font Warning */}
        <section className="mb-12">
          <GlassCard highlight="warning">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-semantic-warning shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Logo Font: BEASIGNE</h3>
                <p className="text-text-muted">
                  The BEASIGNE font is used <strong>only in the logo wordmark</strong>. Never use it for UI text.
                  Always render the logo from supplied image assets, never from the font.
                </p>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Type Scale */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Type Scale</h2>
          <GlassCard>
            <div className="space-y-8">
              {typeScale.map((item) => (
                <div key={item.name} className="border-b border-border pb-6 last:border-0 last:pb-0">
                  <div className="flex flex-col lg:flex-row lg:items-baseline gap-4 mb-3">
                    <div className="lg:w-32 shrink-0">
                      <Badge variant="default">{item.name}</Badge>
                    </div>
                    <p
                      className="flex-1 text-white"
                      style={{
                        fontSize: item.size,
                        fontWeight: Number(item.weight),
                        lineHeight: item.lineHeight,
                      }}
                    >
                      {item.name === 'Display' || item.name === 'H1' || item.name === 'H2'
                        ? 'Never Miss a Sale'
                        : 'The quick brown fox jumps over the lazy dog'}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                    <span>{item.size} / {item.weight}</span>
                    <span className="text-border">•</span>
                    <span>Line height: {item.lineHeight}</span>
                    <span className="text-border">•</span>
                    <span>{item.usage}</span>
                    <div className="ml-auto">
                      <CopyButton text={item.tailwind} label="Copy class" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Font Weights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Font Weights</h2>
          <GlassCard>
            <div className="grid md:grid-cols-5 gap-6">
              {fontWeights.map((item) => (
                <div key={item.name} className="text-center">
                  <p
                    className="text-3xl mb-2"
                    style={{ fontWeight: item.weight }}
                  >
                    Aa
                  </p>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-text-muted">{item.weight}</p>
                  <p className="text-xs font-mono text-text-muted mt-1">{item.tailwind}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Font Loading */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Font Loading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard>
              <h3 className="text-lg font-semibold mb-4">HTML</h3>
              <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">`}
              </pre>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold mb-4">Next.js (App Router)</h3>
              <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <body>{children}</body>
    </html>
  );
}`}
              </pre>
            </GlassCard>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard>
              <h3 className="text-lg font-semibold mb-4">Hierarchy</h3>
              <ul className="space-y-3 text-text-muted">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-link mt-2 shrink-0" />
                  <span>Use Display/H1 for hero sections only</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-link mt-2 shrink-0" />
                  <span>Limit to 2-3 heading levels per page</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-link mt-2 shrink-0" />
                  <span>Use muted text color for secondary content</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold mb-4">Accessibility</h3>
              <ul className="space-y-3 text-text-muted">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-semantic-success mt-2 shrink-0" />
                  <span>Minimum 16px for body text (prevents iOS zoom)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-semantic-success mt-2 shrink-0" />
                  <span>4.5:1 contrast ratio for normal text (WCAG AA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-semantic-success mt-2 shrink-0" />
                  <span>Use antialiased font rendering on dark backgrounds</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </section>
      </div>
    </div>
  );
}
