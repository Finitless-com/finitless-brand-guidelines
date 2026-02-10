'use client';

import { useState } from 'react';
import {
  GlassCard,
  GradientText,
  Button,
  IconContainer,
  Badge,
} from '@finitless/design-system';
import { Eye, Copy, Check, CheckCircle2 } from 'lucide-react';

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

const contrastExamples = [
  { name: 'White on Base', fg: '#FFFFFF', bg: '#0e0e10', ratio: '19.5:1', passes: 'AAA' },
  { name: 'Muted on Base', fg: 'rgba(255,255,255,0.6)', bg: '#0e0e10', ratio: '10.3:1', passes: 'AAA' },
  { name: 'Cyan on Base', fg: '#00B7FF', bg: '#0e0e10', ratio: '7.2:1', passes: 'AAA' },
  { name: 'Error on Base', fg: '#ff3b45', bg: '#0e0e10', ratio: '4.8:1', passes: 'AA' },
];

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen py-12 lg:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <IconContainer color="link">
            <Eye className="h-6 w-6" />
          </IconContainer>
          <h1 className="text-3xl lg:text-4xl font-bold">
            <GradientText>Accessibility</GradientText>
          </h1>
        </div>
        <p className="text-lg text-text-muted mb-12 max-w-2xl">
          Guidelines for making Finitless applications accessible to all users. We follow WCAG 2.1 AA standards.
        </p>

        {/* Focus States */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Focus States</h2>
          <GlassCard>
            <p className="text-text-muted mb-6">
              All interactive elements must have visible focus states. We use a cyan focus ring for keyboard navigation.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <button className="px-4 py-2 bg-brand-primary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-link focus:ring-offset-2 focus:ring-offset-background-base">
                Tab to focus me
              </button>
              <input
                type="text"
                placeholder="Focus this input"
                className="px-4 py-2 bg-white/5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-link focus:ring-offset-2 focus:ring-offset-background-base"
              />
            </div>
            <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`:focus-visible {
  outline: 2px solid #00B7FF;
  outline-offset: 2px;
}

/* For inputs with custom focus */
.input:focus {
  border-color: rgba(0, 183, 255, 0.5);
  box-shadow: 0 0 0 3px rgba(0, 183, 255, 0.15);
}`}
            </pre>
          </GlassCard>
        </section>

        {/* Color Contrast */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Color Contrast</h2>
          <p className="text-text-muted mb-6">
            WCAG 2.1 requires minimum contrast ratios: 4.5:1 for normal text, 3:1 for large text (18px+ or 14px bold).
          </p>
          <GlassCard>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-text-muted">Combination</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-muted">Preview</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-muted">Ratio</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-muted">WCAG</th>
                  </tr>
                </thead>
                <tbody>
                  {contrastExamples.map((example) => (
                    <tr key={example.name} className="border-b border-border/50 last:border-0">
                      <td className="py-4 px-4">{example.name}</td>
                      <td className="py-4 px-4">
                        <div
                          className="px-3 py-1.5 rounded text-sm font-medium inline-block"
                          style={{ backgroundColor: example.bg, color: example.fg }}
                        >
                          Sample Text
                        </div>
                      </td>
                      <td className="py-4 px-4 font-mono text-text-muted">{example.ratio}</td>
                      <td className="py-4 px-4">
                        <Badge variant={example.passes === 'AAA' ? 'success' : 'primary'}>
                          {example.passes}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </section>

        {/* Touch Targets */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Touch Targets</h2>
          <GlassCard>
            <p className="text-text-muted mb-6">
              WCAG 2.2 requires minimum 44×44px touch targets for mobile accessibility.
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="text-center">
                <div className="w-11 h-11 bg-brand-link/20 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-xs font-mono text-brand-link">44px</span>
                </div>
                <Badge variant="success">Minimum</Badge>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-xs font-mono text-brand-primary">48px</span>
                </div>
                <Badge variant="primary">Recommended</Badge>
              </div>
            </div>
            <div className="p-4 bg-background-deep rounded-lg">
              <p className="text-sm text-text-muted">
                <strong>Button minimum heights:</strong> sm (36px), md (44px), lg (48px). The default (md) meets WCAG requirements.
              </p>
            </div>
          </GlassCard>
        </section>

        {/* Reduced Motion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Reduced Motion</h2>
          <GlassCard>
            <p className="text-text-muted mb-6">
              Respect users who prefer reduced motion due to vestibular disorders or personal preference.
            </p>
            <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`}
            </pre>
            <div className="mt-4 flex justify-end">
              <CopyButton
                text={`@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`}
                label="Copy"
              />
            </div>
          </GlassCard>
        </section>

        {/* Font Smoothing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Font Smoothing</h2>
          <GlassCard>
            <p className="text-text-muted mb-6">
              Antialiased font rendering improves readability on dark backgrounds.
            </p>
            <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`}
            </pre>
          </GlassCard>
        </section>

        {/* Checklist */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Accessibility Checklist</h2>
          <GlassCard>
            <ul className="space-y-4">
              {[
                'All interactive elements have visible focus states',
                'Color contrast meets WCAG AA (4.5:1 for text, 3:1 for large text)',
                'Touch targets are at least 44×44px',
                'Reduced motion is respected via media query',
                'Form inputs have associated labels',
                'Images have descriptive alt text',
                'Heading hierarchy is semantic (h1 → h2 → h3)',
                'Links are distinguishable from surrounding text',
                'Error messages are announced to screen readers',
                'Font size is at least 16px for body text',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-semantic-success shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
