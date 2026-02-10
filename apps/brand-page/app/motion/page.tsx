'use client';

import { useState } from 'react';
import {
  GlassCard,
  GradientText,
  Button,
  Badge,
  IconContainer,
} from '@finitless/design-system';
import { Sparkles, Copy, Check } from 'lucide-react';

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

const transitions = [
  {
    name: 'Fast',
    duration: '150ms',
    easing: 'ease',
    usage: 'Hover states, button feedback, small UI changes',
    tailwind: 'transition-all duration-150',
  },
  {
    name: 'Normal',
    duration: '250ms',
    easing: 'ease',
    usage: 'Card hovers, panel reveals, nav transitions',
    tailwind: 'transition-all duration-250',
  },
  {
    name: 'Slow',
    duration: '400ms',
    easing: 'ease-out',
    usage: 'Page transitions, modal opens, large reveals',
    tailwind: 'transition-all duration-400',
  },
];

const glowEffects = [
  {
    name: 'Default',
    value: '0 0 20px rgba(0, 183, 255, 0.3)',
    css: 'box-shadow: 0 0 20px rgba(0, 183, 255, 0.3)',
    usage: 'General glow, hover emphasis',
  },
  {
    name: 'CTA',
    value: '0 0 40px -10px rgba(0, 183, 255, 0.3)',
    css: 'box-shadow: 0 0 40px -10px rgba(0, 183, 255, 0.3)',
    usage: 'Primary CTA buttons, hero elements',
  },
  {
    name: 'AI Active',
    value: '0 0 30px rgba(0, 183, 255, 0.15)',
    css: 'box-shadow: 0 0 30px rgba(0, 183, 255, 0.15)',
    usage: 'Active AI agent, processing states',
  },
  {
    name: 'Subtle',
    value: 'inset 0 0 20px rgba(0, 183, 255, 0.08)',
    css: 'box-shadow: inset 0 0 20px rgba(0, 183, 255, 0.08)',
    usage: 'Inner glow, selected states',
  },
];

export default function MotionPage() {
  const [activeGlow, setActiveGlow] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-12 lg:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <IconContainer color="link">
            <Sparkles className="h-6 w-6" />
          </IconContainer>
          <h1 className="text-3xl lg:text-4xl font-bold">
            <GradientText>Motion</GradientText>
          </h1>
        </div>
        <p className="text-lg text-text-muted mb-12 max-w-2xl">
          Animation guidelines for smooth, purposeful transitions. Motion should enhance usability, not distract.
        </p>

        {/* Transition Timing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Transition Timing</h2>
          <GlassCard>
            <div className="space-y-6">
              {transitions.map((item) => (
                <div key={item.name} className="flex flex-col lg:flex-row lg:items-center gap-4 py-4 border-b border-border last:border-0">
                  <div className="lg:w-24 shrink-0">
                    <Badge variant="primary">{item.name}</Badge>
                  </div>
                  <div className="lg:w-32 shrink-0">
                    <span className="font-mono text-text-muted">{item.duration}</span>
                  </div>
                  <div className="flex-1 text-text-muted">{item.usage}</div>
                  <div className="flex items-center gap-4">
                    {/* Live Demo Button */}
                    <Button
                      variant="secondary"
                      size="sm"
                      className="shrink-0"
                      style={{ transition: `all ${item.duration} ${item.easing}` }}
                    >
                      Hover Me
                    </Button>
                    <CopyButton text={item.tailwind} label="Copy" />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Glow Effects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Glow Effects</h2>
          <p className="text-text-muted mb-6">
            Cyan glow effects create a distinctive AI/tech aesthetic. Use sparingly for emphasis.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {glowEffects.map((item) => (
              <GlassCard key={item.name}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="default">{item.name}</Badge>
                    <CopyButton text={item.css} label="Copy CSS" />
                  </div>
                  <div
                    className="h-24 rounded-xl bg-background-deep flex items-center justify-center cursor-pointer transition-all duration-300"
                    style={{
                      boxShadow: activeGlow === item.name ? item.value : 'none',
                    }}
                    onMouseEnter={() => setActiveGlow(item.name)}
                    onMouseLeave={() => setActiveGlow(null)}
                  >
                    <span className="text-text-muted text-sm">Hover to preview</span>
                  </div>
                  <p className="text-sm text-text-muted">{item.usage}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Keyframe Animations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Keyframe Animations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard>
              <h3 className="text-lg font-semibold mb-4">Fade In</h3>
              <div className="h-24 flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-brand-link/20 rounded-lg animate-[fadeIn_1s_ease_infinite]" />
              </div>
              <pre className="bg-background-deep rounded-lg p-3 text-xs overflow-x-auto">
{`@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`}
              </pre>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold mb-4">Scale In</h3>
              <div className="h-24 flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-brand-purple/20 rounded-lg animate-[scaleIn_1s_ease_infinite]" />
              </div>
              <pre className="bg-background-deep rounded-lg p-3 text-xs overflow-x-auto">
{`@keyframes scaleIn {
  from { transform: scale(0.95); }
  to { transform: scale(1); }
}`}
              </pre>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold mb-4">Pulse</h3>
              <div className="h-24 flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-semantic-success rounded-full animate-pulse" />
              </div>
              <pre className="bg-background-deep rounded-lg p-3 text-xs overflow-x-auto">
{`@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}`}
              </pre>
            </GlassCard>
          </div>
        </section>

        {/* Reduced Motion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Reduced Motion</h2>
          <GlassCard highlight="warning">
            <h3 className="text-lg font-semibold mb-4">Accessibility: Respecting User Preferences</h3>
            <p className="text-text-muted mb-4">
              Always respect the user's motion preferences. Users with vestibular disorders may experience discomfort from animations.
            </p>
            <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`}
            </pre>
          </GlassCard>
        </section>

        {/* CSS Custom Properties */}
        <section>
          <h2 className="text-2xl font-bold mb-6">CSS Custom Properties</h2>
          <GlassCard>
            <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`:root {
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow: 400ms ease-out;

  /* Glow Effects */
  --glow-default: 0 0 20px rgba(0, 183, 255, 0.3);
  --glow-cta: 0 0 40px -10px rgba(0, 183, 255, 0.3);
  --glow-ai-active: 0 0 30px rgba(0, 183, 255, 0.15);
  --glow-subtle: inset 0 0 20px rgba(0, 183, 255, 0.08);
}

/* Usage */
.card {
  transition: var(--transition-normal);
}

.card:hover {
  box-shadow: var(--glow-default);
}`}
            </pre>
          </GlassCard>
        </section>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        @keyframes scaleIn {
          0% { transform: scale(0.8); }
          50% { transform: scale(1); }
          100% { transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
}
