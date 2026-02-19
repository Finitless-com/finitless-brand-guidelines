'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Button,
  GlassCard,
  GradientText,
  Badge,
  CTAButton,
} from '@finitless/design-system';
import {
  Copy,
  Check,
  ExternalLink,
  Code2,
  Palette,
  Type,
  Layout,
  MessageSquare,
  Download,
  Grid3X3,
  Sparkles,
  Eye,
  AlertTriangle,
  Building2,
  ArrowRight,
  Bot,
  FileText,
} from 'lucide-react';

const BRAND_BASE_URL = 'https://brand.finitless.com';

function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={copy}
      className="gap-2"
    >
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

const sections = [
  {
    href: '/colors',
    icon: Palette,
    title: 'Colors',
    description: 'Brand colors, gradients, and semantic tokens for consistent UI.',
    color: 'text-brand-link',
    bgColor: 'bg-brand-link/10',
  },
  {
    href: '/typography',
    icon: Type,
    title: 'Typography',
    description: 'Inter font family with type scale from display to caption.',
    color: 'text-brand-purple',
    bgColor: 'bg-brand-purple/10',
  },
  {
    href: '/components',
    icon: Layout,
    title: 'Components',
    description: '50+ UI components: buttons, inputs, dialogs, tables, calendars, and more.',
    color: 'text-brand-primary',
    bgColor: 'bg-brand-primary/10',
  },
  {
    href: '/voice',
    icon: MessageSquare,
    title: 'Voice & Tone',
    description: 'How Finitless speaks — confident, practical, direct.',
    color: 'text-semantic-success',
    bgColor: 'bg-semantic-success/10',
  },
  {
    href: '/assets',
    icon: Download,
    title: 'Logo Assets',
    description: 'Horizontal, square, and icon logos in all sizes.',
    color: 'text-brand-magenta',
    bgColor: 'bg-brand-magenta/10',
  },
  {
    href: '/spacing',
    icon: Grid3X3,
    title: 'Spacing',
    description: '4px grid system with border radius and container widths.',
    color: 'text-semantic-warning',
    bgColor: 'bg-semantic-warning/10',
  },
  {
    href: '/motion',
    icon: Sparkles,
    title: 'Motion',
    description: 'Transitions, glow effects, and animation guidelines.',
    color: 'text-brand-link',
    bgColor: 'bg-brand-link/10',
  },
  {
    href: '/accessibility',
    icon: Eye,
    title: 'Accessibility',
    description: 'Focus states, contrast ratios, and WCAG guidelines.',
    color: 'text-brand-purple',
    bgColor: 'bg-brand-purple/10',
  },
  {
    href: '/patterns',
    icon: AlertTriangle,
    title: 'Patterns',
    description: 'Do\'s and don\'ts for buttons, cards, forms, and more.',
    color: 'text-semantic-error',
    bgColor: 'bg-semantic-error/10',
  },
  {
    href: '/about',
    icon: Building2,
    title: 'About Finitless',
    description: 'Company info, tagline, and target audience.',
    color: 'text-brand-primary',
    bgColor: 'bg-brand-primary/10',
  },
];

export default function OverviewPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="primary" className="mb-6">v0.1.0</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <GradientText>Finitless Design System</GradientText>
          </h1>
          <p className="text-lg lg:text-xl text-text-muted mb-8 max-w-2xl mx-auto">
            Brand tokens, React components, and Tailwind preset for building
            consistent Finitless applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/components">
              <CTAButton size="lg" className="gap-2">
                <Sparkles className="h-5 w-5" />
                Explore Components
              </CTAButton>
            </Link>
            <a href="https://github.com/Finitless-com/finitless-brand-guidelines" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="gap-2">
                <Code2 className="h-5 w-5" />
                View on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Install */}
      <section className="py-12 px-6 bg-background-elevated">
        <div className="max-w-4xl mx-auto">
          <GlassCard>
            <h2 className="text-xl font-semibold mb-4">Quick Install</h2>
            <div className="bg-background-deep rounded-lg p-4 font-mono text-sm flex items-center justify-between">
              <code>npm install @finitless/design-system</code>
              <CopyButton text="npm install @finitless/design-system" />
            </div>
            <div className="mt-4 text-sm text-text-muted">
              Then add the Tailwind preset to your config:
            </div>
            <pre className="mt-2 bg-background-deep rounded-lg p-4 overflow-x-auto text-sm text-text-muted">
{`import { finitlessPreset } from '@finitless/design-system/tailwind';

export default {
  presets: [finitlessPreset],
  content: ['./node_modules/@finitless/design-system/dist/**/*.{js,mjs}'],
};`}
            </pre>
          </GlassCard>
        </div>
      </section>

      {/* Section Cards */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Explore the Design System</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Link key={section.href} href={section.href} className="group">
                  <GlassCard className="h-full transition-all group-hover:border-brand-link/40 group-hover:shadow-lg group-hover:shadow-brand-link/10">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg ${section.bgColor} flex items-center justify-center shrink-0`}>
                        <Icon className={`h-5 w-5 ${section.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white group-hover:text-brand-link transition-colors flex items-center gap-2">
                          {section.title}
                          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </h3>
                        <p className="text-sm text-text-muted mt-1">{section.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Manifest */}
      <section className="py-16 px-6 bg-background-elevated">
        <div className="max-w-4xl mx-auto">
          <GlassCard>
            <h2 className="text-xl font-semibold mb-4">Machine-Readable Tokens</h2>
            <p className="text-text-muted mb-4">
              Access brand tokens programmatically via the JSON manifest.
            </p>
            <div className="bg-background-deep rounded-lg p-4 font-mono text-sm flex items-center justify-between">
              <code>{BRAND_BASE_URL}/brand-manifest.json</code>
              <div className="flex items-center gap-2">
                <CopyButton text={`${BRAND_BASE_URL}/brand-manifest.json`} label="Copy URL" />
                <a href="/brand-manifest.json" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View
                  </Button>
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* For AI */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="border-brand-link/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand-link/10 flex items-center justify-center shrink-0">
                <Bot className="h-6 w-6 text-brand-link" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">For AI Assistants</h2>
                <p className="text-text-muted mb-4">
                  Using Claude, ChatGPT, or other AI to build Finitless applications?
                  Point them to our AI-readable brand guidelines for accurate styling.
                </p>
                <div className="bg-background-deep rounded-lg p-4 font-mono text-sm flex items-center justify-between mb-4">
                  <code className="truncate">{BRAND_BASE_URL}/BRAND-GUIDELINES.md</code>
                  <div className="flex items-center gap-2 shrink-0">
                    <CopyButton text={`${BRAND_BASE_URL}/BRAND-GUIDELINES.md`} label="Copy" />
                    <a href="/BRAND-GUIDELINES.md" target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" size="sm" className="gap-2">
                        <FileText className="h-4 w-4" />
                        View
                      </Button>
                    </a>
                  </div>
                </div>
                <p className="text-sm text-text-muted">
                  This markdown file contains all colors, typography, components, and usage rules in a format optimized for LLMs.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Finitless. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
