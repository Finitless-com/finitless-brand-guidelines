'use client';

import {
  GlassCard,
  GradientText,
  IconContainer,
} from '@finitless/design-system';
import { AlertTriangle, Check, X } from 'lucide-react';

interface PatternItem {
  do: string;
  dont: string;
}

interface PatternSection {
  title: string;
  items: PatternItem[];
}

const patterns: PatternSection[] = [
  {
    title: 'Buttons',
    items: [
      {
        do: 'Use Finitless Blue (#165DFC) for solid action buttons',
        dont: 'Use non-brand blues (#2563eb, etc.) for buttons',
      },
      {
        do: 'Use CTA gradient for the ONE primary action per page',
        dont: 'Use multiple gradient buttons on the same page',
      },
      {
        do: 'Use minimum 36px height for button touch targets',
        dont: 'Use button heights below 36px',
      },
      {
        do: 'Use minimum 8px border radius (default is 12px)',
        dont: 'Use border radius below 8px on buttons',
      },
    ],
  },
  {
    title: 'Cards',
    items: [
      {
        do: 'Use glass background: rgba(255,255,255,0.05)',
        dont: 'Use solid white or light backgrounds on cards',
      },
      {
        do: 'Include a hover state with cyan border glow',
        dont: 'Omit hover states on interactive cards',
      },
      {
        do: 'Use minimum 8px border radius (default is 12px)',
        dont: 'Use sharp corners (0px radius)',
      },
      {
        do: 'Use subtle borders: rgba(255,255,255,0.10)',
        dont: 'Use strong white borders that feel heavy',
      },
    ],
  },
  {
    title: 'Gradient Text',
    items: [
      {
        do: 'Use all 3 gradient stops: cyan → purple → magenta',
        dont: 'Omit the cyan stop from the gradient',
      },
      {
        do: 'Apply gradient text to hero headings only',
        dont: 'Apply gradient text to body copy or UI labels',
      },
      {
        do: 'Use left-to-right direction for gradients',
        dont: 'Use top-to-bottom or other directions',
      },
    ],
  },
  {
    title: 'Form Inputs',
    items: [
      {
        do: 'Use dark glass background: rgba(255,255,255,0.05)',
        dont: 'Use white or light backgrounds on inputs',
      },
      {
        do: 'Show cyan focus ring on focus state',
        dont: 'Omit focus states on form elements',
      },
      {
        do: 'Use minimum 16px font size (prevents iOS zoom)',
        dont: 'Use font sizes below 16px in inputs',
      },
      {
        do: 'Use minimum 12px border radius',
        dont: 'Use border radius below 8px on inputs',
      },
    ],
  },
  {
    title: 'OAuth / Social Buttons',
    items: [
      {
        do: 'Use secondary button pattern (glass bg + border)',
        dont: 'Use CTA gradient for OAuth buttons',
      },
      {
        do: 'Include provider icon and name (e.g., "Continue with Google")',
        dont: 'Use just the provider logo without text',
      },
      {
        do: 'Use consistent height with primary submit button (48px)',
        dont: 'Make OAuth buttons smaller than the main form submit',
      },
    ],
  },
  {
    title: 'Logo Usage',
    items: [
      {
        do: 'Use supplied image assets from /assets/logos/',
        dont: 'Render the logo from BEASIGNE font or any text',
      },
      {
        do: 'Resize proportionately only',
        dont: 'Stretch or distort the logo',
      },
      {
        do: 'Use appropriate size for context (120w-300w for headers)',
        dont: 'Use low-resolution versions in high-DPI contexts',
      },
      {
        do: 'Maintain minimum clear space (50% of icon height)',
        dont: 'Crowd the logo with other elements',
      },
    ],
  },
  {
    title: 'Select / Dropdowns',
    items: [
      {
        do: 'Use custom styled select with glass panel',
        dont: 'Use native browser <select> without styling',
      },
      {
        do: 'Use subtle cyan tint for hover: rgba(0,183,255,0.12)',
        dont: 'Use brand gradient as option hover background',
      },
      {
        do: 'Use elevated background for dropdown: rgba(255,255,255,0.08)',
        dont: 'Use same background as page for dropdown panel',
      },
      {
        do: 'Include 12px 16px padding per option',
        dont: 'Omit padding between dropdown options',
      },
    ],
  },
];

export default function PatternsPage() {
  return (
    <div className="min-h-screen py-12 lg:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <IconContainer color="error">
            <AlertTriangle className="h-6 w-6" />
          </IconContainer>
          <h1 className="text-3xl lg:text-4xl font-bold">
            <GradientText>Patterns</GradientText>
          </h1>
        </div>
        <p className="text-lg text-text-muted mb-12 max-w-2xl">
          Do's and don'ts for using Finitless design system components. Follow these patterns to maintain brand consistency.
        </p>

        {/* Pattern Sections */}
        <div className="space-y-12">
          {patterns.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 gap-4">
                    {/* Do */}
                    <GlassCard className="border-l-4 border-l-semantic-success">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-semantic-success/20 flex items-center justify-center shrink-0">
                          <Check className="h-4 w-4 text-semantic-success" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-semantic-success mb-1">Do</p>
                          <p className="text-sm">{item.do}</p>
                        </div>
                      </div>
                    </GlassCard>

                    {/* Don't */}
                    <GlassCard className="border-l-4 border-l-semantic-error">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-semantic-error/20 flex items-center justify-center shrink-0">
                          <X className="h-4 w-4 text-semantic-error" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-semantic-error mb-1">Don't</p>
                          <p className="text-sm text-text-muted">{item.dont}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Quick Reference */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Quick Reference</h2>
          <GlassCard>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-text-muted">Element</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-muted">Min Radius</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-muted">Default Radius</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-muted">Background</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Buttons</td>
                    <td className="py-3 px-4 font-mono text-text-muted">8px</td>
                    <td className="py-3 px-4 font-mono text-text-muted">12px</td>
                    <td className="py-3 px-4 font-mono text-text-muted">#165DFC (solid) or gradient</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Cards</td>
                    <td className="py-3 px-4 font-mono text-text-muted">8px</td>
                    <td className="py-3 px-4 font-mono text-text-muted">12px</td>
                    <td className="py-3 px-4 font-mono text-text-muted">rgba(255,255,255,0.05)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Inputs</td>
                    <td className="py-3 px-4 font-mono text-text-muted">8px</td>
                    <td className="py-3 px-4 font-mono text-text-muted">12px</td>
                    <td className="py-3 px-4 font-mono text-text-muted">rgba(255,255,255,0.05)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Dropdown Panel</td>
                    <td className="py-3 px-4 font-mono text-text-muted">8px</td>
                    <td className="py-3 px-4 font-mono text-text-muted">12px</td>
                    <td className="py-3 px-4 font-mono text-text-muted">rgba(255,255,255,0.08)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Badges</td>
                    <td className="py-3 px-4 font-mono text-text-muted">6px</td>
                    <td className="py-3 px-4 font-mono text-text-muted">8px</td>
                    <td className="py-3 px-4 font-mono text-text-muted">varies by variant</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
