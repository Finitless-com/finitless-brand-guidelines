import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  duration,
  easing,
  transition,
  animation,
  delay,
  keyframes,
  getAnimationClass,
} from '../../src/tokens/motion';

const meta: Meta = {
  title: 'Tokens/Motion',
  tags: ['autodocs'],
};

export default meta;

function AnimationDemo({
  name,
  animationClass,
  triggerKey,
}: {
  name: string;
  animationClass: string;
  triggerKey: number;
}) {
  return (
    <div className="flex items-center gap-6 py-4 border-b border-white/5">
      <div className="w-32 shrink-0">
        <span className="text-sm font-mono text-brand-link">{name}</span>
      </div>
      <div className="flex-1 flex items-center justify-center h-16">
        <div
          key={triggerKey}
          className={`w-12 h-12 rounded-[8px] bg-brand-primary ${animationClass}`}
        />
      </div>
      <div className="w-40 shrink-0 text-right">
        <span className="text-xs font-mono text-white/40">{animationClass}</span>
      </div>
    </div>
  );
}

function TokenRow({
  name,
  value,
  description,
}: {
  name: string;
  value: string;
  description?: string;
}) {
  return (
    <div className="flex items-center gap-6 py-3 border-b border-white/5">
      <div className="w-24 shrink-0">
        <span className="text-sm font-mono text-brand-link">{name}</span>
      </div>
      <div className="w-32">
        <span className="text-sm font-mono text-white">{value}</span>
      </div>
      {description && (
        <div className="flex-1">
          <span className="text-sm text-white/60">{description}</span>
        </div>
      )}
    </div>
  );
}

export const Durations: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Durations</h2>
        <p className="text-white/60 mb-6">
          Timing values from instant to slowest for different interaction types
        </p>
      </div>

      <div className="space-y-0">
        <TokenRow name="instant" value={duration.instant} description="No animation" />
        <TokenRow name="fast" value={duration.fast} description="Quick micro-interactions" />
        <TokenRow name="normal" value={duration.normal} description="Default for most interactions" />
        <TokenRow name="default" value={duration.default} description="Standard transitions" />
        <TokenRow name="slow" value={duration.slow} description="Deliberate transitions" />
        <TokenRow name="slower" value={duration.slower} description="More dramatic" />
        <TokenRow name="slowest" value={duration.slowest} description="Very slow, emphasis" />
      </div>

      <div className="mt-8 p-6 bg-background-elevated rounded-[12px] border border-border">
        <h3 className="text-sm font-semibold text-white mb-4">Visual Comparison</h3>
        <div className="space-y-3">
          {Object.entries(duration).map(([name, value]) => (
            <div key={name} className="flex items-center gap-4">
              <div className="w-20 text-xs font-mono text-white/60">{name}</div>
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-link rounded-full"
                  style={{
                    width: `${Math.min(100, parseInt(value) / 5)}%`,
                    transition: `width ${value}`,
                  }}
                />
              </div>
              <div className="w-16 text-xs font-mono text-white/40 text-right">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const Easings: StoryObj = {
  render: () => {
    const [hoveredEasing, setHoveredEasing] = React.useState<string | null>(null);

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Easings</h2>
          <p className="text-white/60 mb-6">
            Cubic-bezier curves for different animation feels
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {Object.entries(easing).map(([name, curve]) => (
            <div
              key={name}
              className="p-4 bg-background-elevated rounded-[12px] border border-border group cursor-pointer"
              onMouseEnter={() => setHoveredEasing(name)}
              onMouseLeave={() => setHoveredEasing(null)}
            >
              <div className="text-sm font-mono text-brand-link mb-2">{name}</div>
              <div className="text-xs font-mono text-white/40 mb-4 truncate">{curve}</div>
              <div className="h-8 relative">
                <div
                  className="absolute left-0 w-8 h-8 rounded-full bg-brand-primary"
                  style={{
                    transform: hoveredEasing === name ? 'translateX(calc(100% + 4rem))' : 'translateX(0)',
                    transition: `transform 500ms ${curve}`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-sm text-white/60 text-center">
          Hover over each card to see the easing in action
        </div>
      </div>
    );
  },
};

export const EntranceAnimations: StoryObj = {
  render: () => {
    const [key, setKey] = React.useState(0);

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Entrance Animations</h2>
            <p className="text-white/60">Fade-in and slide-in effects for appearing elements</p>
          </div>
          <button
            onClick={() => setKey((k) => k + 1)}
            className="px-4 py-2 bg-brand-primary text-white rounded-[12px] text-sm font-semibold hover:bg-brand-primary/90 transition-colors"
          >
            Replay All
          </button>
        </div>

        <div className="space-y-0">
          <AnimationDemo name="fade-in" animationClass="animate-fade-in" triggerKey={key} />
          <AnimationDemo name="fade-in-up" animationClass="animate-fade-in-up" triggerKey={key} />
          <AnimationDemo name="fade-in-down" animationClass="animate-fade-in-down" triggerKey={key} />
          <AnimationDemo name="fade-in-left" animationClass="animate-fade-in-left" triggerKey={key} />
          <AnimationDemo name="fade-in-right" animationClass="animate-fade-in-right" triggerKey={key} />
          <AnimationDemo name="scale-in" animationClass="animate-scale-in" triggerKey={key} />
          <AnimationDemo name="slide-in-from-top" animationClass="animate-slide-in-from-top" triggerKey={key} />
          <AnimationDemo name="slide-in-from-bottom" animationClass="animate-slide-in-from-bottom" triggerKey={key} />
          <AnimationDemo name="slide-in-from-left" animationClass="animate-slide-in-from-left" triggerKey={key} />
          <AnimationDemo name="slide-in-from-right" animationClass="animate-slide-in-from-right" triggerKey={key} />
        </div>
      </div>
    );
  },
};

export const ExitAnimations: StoryObj = {
  render: () => {
    const [visible, setVisible] = React.useState<Record<string, boolean>>({
      'fade-out': true,
      'fade-out-down': true,
      'fade-out-up': true,
      'scale-out': true,
    });
    const [resetKey, setResetKey] = React.useState(0);

    const resetAll = () => {
      setVisible({
        'fade-out': true,
        'fade-out-down': true,
        'fade-out-up': true,
        'scale-out': true,
      });
      setResetKey((k) => k + 1);
    };

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Exit Animations</h2>
            <p className="text-white/60">Fade-out and slide-out effects for disappearing elements</p>
          </div>
          <button
            onClick={resetAll}
            className="px-4 py-2 bg-brand-primary text-white rounded-[12px] text-sm font-semibold hover:bg-brand-primary/90 transition-colors"
          >
            Reset All
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {Object.keys(visible).map((name) => (
            <div key={`${name}-${resetKey}`} className="p-4 bg-background-elevated rounded-[12px] border border-border">
              <div className="text-sm font-mono text-brand-link mb-3">{name}</div>
              <div className="flex items-center justify-center h-20">
                {visible[name] && (
                  <div
                    className={`w-12 h-12 rounded-[8px] bg-brand-primary cursor-pointer animate-${name}`}
                    onClick={() => setVisible((v) => ({ ...v, [name]: false }))}
                    style={{ animationFillMode: 'forwards' }}
                  />
                )}
              </div>
              <div className="text-xs text-white/40 text-center">
                {visible[name] ? 'Click to trigger exit' : 'Exited'}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const FeedbackAnimations: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Feedback Animations</h2>
        <p className="text-white/60 mb-6">
          Looping and attention-grabbing effects for user feedback
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-background-elevated rounded-[12px] border border-border text-center">
          <div className="text-sm font-mono text-brand-link mb-4">pulse</div>
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-[8px] bg-brand-primary animate-pulse" />
          </div>
        </div>

        <div className="p-6 bg-background-elevated rounded-[12px] border border-border text-center">
          <div className="text-sm font-mono text-brand-link mb-4">ping</div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-brand-primary" />
              <div className="absolute inset-0 w-12 h-12 rounded-full bg-brand-primary animate-ping" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-background-elevated rounded-[12px] border border-border text-center">
          <div className="text-sm font-mono text-brand-link mb-4">bounce</div>
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-[8px] bg-brand-primary animate-bounce" />
          </div>
        </div>

        <div className="p-6 bg-background-elevated rounded-[12px] border border-border text-center">
          <div className="text-sm font-mono text-brand-link mb-4">shake</div>
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-[8px] bg-semantic-error animate-shake" />
          </div>
        </div>

        <div className="p-6 bg-background-elevated rounded-[12px] border border-border text-center">
          <div className="text-sm font-mono text-brand-link mb-4">wiggle</div>
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-[8px] bg-brand-primary animate-wiggle" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const LoadingAnimations: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading Animations</h2>
        <p className="text-white/60 mb-6">Continuous animations for loading states</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-background-elevated rounded-[12px] border border-border">
          <div className="text-sm font-mono text-brand-link mb-4">spin</div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border-2 border-white/20 border-t-brand-link rounded-full animate-spin" />
            <div className="w-6 h-6 border-2 border-white/20 border-t-brand-link rounded-full animate-spin" />
            <div className="w-4 h-4 border-2 border-white/20 border-t-brand-link rounded-full animate-spin" />
          </div>
        </div>

        <div className="p-6 bg-background-elevated rounded-[12px] border border-border">
          <div className="text-sm font-mono text-brand-link mb-4">shimmer</div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-white/5 rounded animate-shimmer" />
            <div className="h-4 w-3/4 bg-white/5 rounded animate-shimmer" />
            <div className="h-4 w-1/2 bg-white/5 rounded animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ComponentAnimations: StoryObj = {
  render: () => {
    const [showDialog, setShowDialog] = React.useState(false);
    const [showTooltip, setShowTooltip] = React.useState(false);
    const [accordionOpen, setAccordionOpen] = React.useState(false);

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Component Animations</h2>
          <p className="text-white/60 mb-6">
            Purpose-built animations for UI components
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-background-elevated rounded-[12px] border border-border">
            <div className="text-sm font-mono text-brand-link mb-4">dialog-in / dialog-out</div>
            <button
              onClick={() => setShowDialog(!showDialog)}
              className="px-4 py-2 bg-brand-primary text-white rounded-[8px] text-sm font-semibold"
            >
              Toggle Dialog
            </button>
            {showDialog && (
              <div className="mt-4 p-4 bg-background-surface border border-border rounded-[12px] animate-dialog-in">
                <div className="text-white text-sm">Dialog content appears here</div>
              </div>
            )}
          </div>

          <div className="p-6 bg-background-elevated rounded-[12px] border border-border">
            <div className="text-sm font-mono text-brand-link mb-4">tooltip-in / tooltip-out</div>
            <div className="relative inline-block">
              <button
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="px-4 py-2 bg-brand-primary text-white rounded-[8px] text-sm font-semibold"
              >
                Hover Me
              </button>
              {showTooltip && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 bg-background-surface border border-border rounded-[8px] text-white text-xs whitespace-nowrap animate-tooltip-in">
                  Tooltip content
                </div>
              )}
            </div>
          </div>

          <div className="p-6 bg-background-elevated rounded-[12px] border border-border col-span-2">
            <div className="text-sm font-mono text-brand-link mb-4">accordion-down / accordion-up</div>
            <button
              onClick={() => setAccordionOpen(!accordionOpen)}
              className="w-full flex justify-between items-center px-4 py-3 bg-background-surface border border-border rounded-[12px] text-white text-sm font-medium"
            >
              <span>Accordion Header</span>
              <span className={`transition-transform duration-200 ${accordionOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                accordionOpen ? 'animate-accordion-down' : 'hidden'
              }`}
            >
              <div className="p-4 text-white/60 text-sm">
                Accordion content expands and collapses with smooth animation.
                This uses the accordion-down and accordion-up keyframes.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const Delays: StoryObj = {
  render: () => {
    const [key, setKey] = React.useState(0);

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Animation Delays</h2>
            <p className="text-white/60">Stagger animations with delay utilities</p>
          </div>
          <button
            onClick={() => setKey((k) => k + 1)}
            className="px-4 py-2 bg-brand-primary text-white rounded-[12px] text-sm font-semibold hover:bg-brand-primary/90 transition-colors"
          >
            Replay
          </button>
        </div>

        <div className="flex gap-4 items-end p-6 bg-background-elevated rounded-[12px] border border-border">
          {Object.entries(delay).map(([name, value], index) => (
            <div key={`${name}-${key}`} className="flex flex-col items-center gap-2">
              <div
                className="w-10 h-10 rounded-[8px] bg-brand-primary animate-fade-in-up opacity-0"
                style={{ animationDelay: value, animationFillMode: 'forwards' }}
              />
              <span className="text-xs font-mono text-white/40">{name}</span>
            </div>
          ))}
        </div>

        <div className="p-6 bg-background-surface rounded-[12px] border border-border">
          <h3 className="text-sm font-semibold text-white mb-4">Delay Values</h3>
          <div className="grid grid-cols-5 gap-4">
            {Object.entries(delay).map(([name, value]) => (
              <div key={name} className="text-center">
                <div className="text-sm font-mono text-brand-link">{name}</div>
                <div className="text-xs text-white/40">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const Transitions: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Transition Presets</h2>
        <p className="text-white/60 mb-6">
          Pre-composed transitions for common use cases
        </p>
      </div>

      <div className="space-y-4">
        {Object.entries(transition).map(([name, value]) => (
          <div
            key={name}
            className="p-4 bg-background-elevated rounded-[12px] border border-border"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-mono text-brand-link">{name}</span>
            </div>
            <div className="text-xs font-mono text-white/40 break-all">{value}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const HelperFunction: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">getAnimationClass Helper</h2>
        <p className="text-white/60 mb-6">
          Utility function to get Tailwind animation classes
        </p>
      </div>

      <div className="space-y-4 font-mono text-sm">
        <div className="p-4 bg-background-elevated rounded-[12px] border border-border">
          <div className="text-brand-link mb-2">getAnimationClass('fadeInUp')</div>
          <div className="text-white/60">→ "{getAnimationClass('fadeInUp')}"</div>
        </div>
        <div className="p-4 bg-background-elevated rounded-[12px] border border-border">
          <div className="text-brand-link mb-2">getAnimationClass('fadeInUp', 100)</div>
          <div className="text-white/60">→ "{getAnimationClass('fadeInUp', 100)}"</div>
        </div>
        <div className="p-4 bg-background-elevated rounded-[12px] border border-border">
          <div className="text-brand-link mb-2">getAnimationClass('scaleIn', 300)</div>
          <div className="text-white/60">→ "{getAnimationClass('scaleIn', 300)}"</div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-background-surface rounded-[12px] border border-border">
        <h3 className="text-sm font-semibold text-white mb-4">Usage Example</h3>
        <pre className="text-xs text-white/80 overflow-x-auto">
{`import { getAnimationClass } from '@finitless/design-system';

// Single animation
<div className={getAnimationClass('fadeInUp')}>
  Fades in from below
</div>

// With delay
<div className={getAnimationClass('fadeInUp', 200)}>
  Fades in after 200ms delay
</div>`}
        </pre>
      </div>
    </div>
  ),
};

export const KeyframeReference: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Available Keyframes</h2>
        <p className="text-white/60 mb-6">
          All animation keyframes available in the Tailwind preset
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {Object.entries(keyframes).map(([category, names]) => (
          <div
            key={category}
            className="p-4 bg-background-elevated rounded-[12px] border border-border"
          >
            <h3 className="text-sm font-semibold text-white capitalize mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {names.map((name) => (
                <span
                  key={name}
                  className="px-2 py-1 text-xs font-mono bg-white/5 text-white/80 rounded"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
