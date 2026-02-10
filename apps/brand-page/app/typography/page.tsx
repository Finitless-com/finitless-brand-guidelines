'use client';

import { useState } from 'react';
import {
  GlassCard,
  GradientText,
  Button,
  IconContainer,
  Badge,
  Text,
  heading,
  button as buttonTypo,
  label as labelTypo,
  copy,
} from '@finitless/design-system';
import { Type, Copy, Check, AlertCircle, Sparkles } from 'lucide-react';

function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="ghost" size="sm" onClick={copyText} className="gap-2">
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

// Geist-inspired heading scale
const headingScale = [
  { name: 'heading-72', size: '72px', lineHeight: '76px', tracking: '-0.04em', weight: 'Bold', tailwind: 'text-heading-72', usage: 'Hero headlines' },
  { name: 'heading-64', size: '64px', lineHeight: '68px', tracking: '-0.04em', weight: 'Bold', tailwind: 'text-heading-64', usage: 'Major section titles' },
  { name: 'heading-56', size: '56px', lineHeight: '60px', tracking: '-0.03em', weight: 'Bold', tailwind: 'text-heading-56', usage: 'Section headers' },
  { name: 'heading-48', size: '48px', lineHeight: '52px', tracking: '-0.03em', weight: 'Bold', tailwind: 'text-heading-48', usage: 'Page titles' },
  { name: 'heading-40', size: '40px', lineHeight: '44px', tracking: '-0.02em', weight: 'Semibold', tailwind: 'text-heading-40', usage: 'Large headings' },
  { name: 'heading-32', size: '32px', lineHeight: '40px', tracking: '-0.02em', weight: 'Semibold', tailwind: 'text-heading-32', usage: 'Section headings' },
  { name: 'heading-24', size: '24px', lineHeight: '32px', tracking: '-0.01em', weight: 'Semibold', tailwind: 'text-heading-24', usage: 'Card titles' },
  { name: 'heading-20', size: '20px', lineHeight: '28px', tracking: '-0.01em', weight: 'Semibold', tailwind: 'text-heading-20', usage: 'Subsection headings' },
  { name: 'heading-16', size: '16px', lineHeight: '24px', tracking: '0', weight: 'Semibold', tailwind: 'text-heading-16', usage: 'Component titles' },
  { name: 'heading-14', size: '14px', lineHeight: '20px', tracking: '0', weight: 'Semibold', tailwind: 'text-heading-14', usage: 'Small headings, labels' },
];

const buttonScale = [
  { name: 'button-16', size: '16px', lineHeight: '24px', weight: 'Medium', tailwind: 'text-button-16', usage: 'Large buttons' },
  { name: 'button-14', size: '14px', lineHeight: '20px', weight: 'Medium', tailwind: 'text-button-14', usage: 'Default buttons' },
  { name: 'button-12', size: '12px', lineHeight: '16px', weight: 'Medium', tailwind: 'text-button-12', usage: 'Small buttons' },
];

const labelScale = [
  { name: 'label-16', size: '16px', lineHeight: '24px', weight: 'Medium', tailwind: 'text-label-16', usage: 'Form labels' },
  { name: 'label-14', size: '14px', lineHeight: '20px', weight: 'Medium', tailwind: 'text-label-14', usage: 'Default labels' },
  { name: 'label-12', size: '12px', lineHeight: '16px', weight: 'Medium', tailwind: 'text-label-12', usage: 'Small labels' },
  { name: 'label-11', size: '11px', lineHeight: '14px', weight: 'Medium', tailwind: 'text-label-11', usage: 'Micro labels' },
];

const copyScale = [
  { name: 'copy-20', size: '20px', lineHeight: '32px', weight: 'Normal', tailwind: 'text-copy-20', usage: 'Lead paragraphs' },
  { name: 'copy-16', size: '16px', lineHeight: '26px', weight: 'Normal', tailwind: 'text-copy-16', usage: 'Body text' },
  { name: 'copy-14', size: '14px', lineHeight: '22px', weight: 'Normal', tailwind: 'text-copy-14', usage: 'Secondary text' },
  { name: 'copy-12', size: '12px', lineHeight: '18px', weight: 'Normal', tailwind: 'text-copy-12', usage: 'Captions, fine print' },
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
          <Badge variant="primary" className="ml-2">v0.1.0</Badge>
        </div>
        <p className="text-lg text-text-muted mb-12 max-w-2xl">
          Geist-inspired typography system with numbered heading scales, button/label/copy variants, and the Text component.
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

        {/* Heading Scale - NEW in v0.1.0 */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold">Heading Scale</h2>
            <Badge variant="primary" size="sm" className="gap-1">
              <Sparkles className="h-3 w-3" />
              Geist-inspired
            </Badge>
          </div>
          <p className="text-text-muted mb-6">
            Numbered heading scale from 72px to 14px with precise line-height and letter-spacing for each size.
          </p>
          <GlassCard>
            <div className="space-y-6">
              {headingScale.map((item) => (
                <div key={item.name} className="border-b border-border pb-6 last:border-0 last:pb-0">
                  <div className="flex flex-col lg:flex-row lg:items-baseline gap-4 mb-3">
                    <div className="lg:w-36 shrink-0">
                      <Badge variant="default">{item.name}</Badge>
                    </div>
                    <Text
                      variant={item.name as any}
                      className="flex-1 truncate"
                    >
                      {item.name.includes('72') || item.name.includes('64') || item.name.includes('56')
                        ? 'Never Miss a Sale'
                        : 'The quick brown fox jumps over the lazy dog'}
                    </Text>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                    <span>{item.size} / {item.lineHeight}</span>
                    <span className="text-border">•</span>
                    <span>Tracking: {item.tracking}</span>
                    <span className="text-border">•</span>
                    <span>{item.weight}</span>
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

        {/* Button Typography */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Button Typography</h2>
          <GlassCard>
            <div className="space-y-6">
              {buttonScale.map((item) => (
                <div key={item.name} className="flex items-center gap-6">
                  <Badge variant="secondary" className="w-28 justify-center">{item.name}</Badge>
                  <Text variant={item.name as any} className="flex-1">
                    Button Text
                  </Text>
                  <span className="text-sm text-text-muted hidden sm:block">{item.size}</span>
                  <span className="text-sm text-text-muted hidden md:block">{item.usage}</span>
                  <CopyButton text={item.tailwind} label="Copy" />
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Label Typography */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Label Typography</h2>
          <GlassCard>
            <div className="space-y-6">
              {labelScale.map((item) => (
                <div key={item.name} className="flex items-center gap-6">
                  <Badge variant="secondary" className="w-28 justify-center">{item.name}</Badge>
                  <Text variant={item.name as any} className="flex-1">
                    Label Text
                  </Text>
                  <span className="text-sm text-text-muted hidden sm:block">{item.size}</span>
                  <span className="text-sm text-text-muted hidden md:block">{item.usage}</span>
                  <CopyButton text={item.tailwind} label="Copy" />
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Copy Typography */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Copy Typography</h2>
          <GlassCard>
            <div className="space-y-6">
              {copyScale.map((item) => (
                <div key={item.name} className="flex items-center gap-6">
                  <Badge variant="secondary" className="w-28 justify-center">{item.name}</Badge>
                  <Text variant={item.name as any} className="flex-1">
                    The quick brown fox jumps over the lazy dog.
                  </Text>
                  <span className="text-sm text-text-muted hidden sm:block">{item.size}</span>
                  <span className="text-sm text-text-muted hidden md:block">{item.usage}</span>
                  <CopyButton text={item.tailwind} label="Copy" />
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Text Component */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold">Text Component</h2>
            <Badge variant="primary" size="sm" className="gap-1">
              <Sparkles className="h-3 w-3" />
              New in v0.1.0
            </Badge>
          </div>
          <p className="text-text-muted mb-6">
            The <code className="font-mono text-brand-link">Text</code> component provides type-safe access to all typography variants.
          </p>
          <GlassCard>
            <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm mb-6">
{`import { Text } from '@finitless/design-system';

// Heading variants
<Text variant="heading-48">Page Title</Text>
<Text variant="heading-24">Card Title</Text>

// With semantic element
<Text variant="heading-32" as="h1">Main Heading</Text>

// Button/Label variants
<Text variant="button-14">Button Label</Text>
<Text variant="label-12">Form Label</Text>

// Copy variants with color
<Text variant="copy-16">Body text</Text>
<Text variant="copy-14" color="muted">Secondary text</Text>

// Modifiers
<Text variant="copy-16" weight="semibold">Bold text</Text>
<Text variant="heading-24" color="link">Link colored</Text>`}
            </pre>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Badge variant="default">Live Demo</Badge>
              </div>
              <div className="p-6 bg-background-deep rounded-lg space-y-4">
                <Text variant="heading-32">Heading 32</Text>
                <Text variant="heading-20" color="muted">Heading 20 (muted)</Text>
                <Text variant="copy-16">This is body copy at 16px with comfortable line height.</Text>
                <Text variant="copy-14" color="muted">Secondary text in muted color at 14px.</Text>
                <Text variant="label-12" color="link">Label styled as link</Text>
              </div>
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

        {/* Helper Functions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Helper Functions</h2>
          <GlassCard>
            <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`import {
  getHeadingClass,
  getButtonClass,
  getLabelClass,
  getCopyClass,
} from '@finitless/design-system';

// Get Tailwind classes for any typography style
getHeadingClass(48)  // Returns class string for heading-48
getButtonClass(14)   // Returns class string for button-14
getLabelClass(12)    // Returns class string for label-12
getCopyClass(16)     // Returns class string for copy-16`}
            </pre>
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
                  <span>Use heading-72/64 for hero sections only</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-link mt-2 shrink-0" />
                  <span>Limit to 2-3 heading levels per page</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-link mt-2 shrink-0" />
                  <span>Use copy variants for body text, not headings</span>
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
