import type { Meta, StoryObj } from '@storybook/react';
import {
  heading,
  button,
  label,
  copy,
  fontFamily,
  fontWeight,
  letterSpacing,
  getHeadingClass,
  getButtonClass,
  getLabelClass,
  getCopyClass,
} from '../../src/tokens/typography';
import { Text } from '../../src/components/ui/text';

const meta: Meta = {
  title: 'Tokens/Typography',
  tags: ['autodocs'],
};

export default meta;

function TypeSpecimen({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className="flex items-baseline gap-8 py-3 border-b border-white/5">
      <div className="w-32 shrink-0">
        <span className="text-sm font-mono text-white/60">{name}</span>
      </div>
      <div className="flex-1">
        <span className={className} style={style}>
          The quick brown fox jumps over the lazy dog
        </span>
      </div>
    </div>
  );
}

function TypeDetails({
  name,
  fontSize,
  lineHeight,
  letterSpacing,
  fontWeight,
}: {
  name: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  fontWeight: number | string;
}) {
  return (
    <div className="flex items-baseline gap-6 py-4 border-b border-white/5">
      <div className="w-28 shrink-0">
        <span className="text-sm font-mono text-brand-link">{name}</span>
      </div>
      <div className="flex-1">
        <span
          className="text-white"
          style={{ fontSize, lineHeight, letterSpacing, fontWeight: Number(fontWeight) }}
        >
          The quick brown fox
        </span>
      </div>
      <div className="w-48 shrink-0 text-right">
        <span className="text-xs font-mono text-white/40">
          {fontSize} / {lineHeight} / {fontWeight}
        </span>
      </div>
    </div>
  );
}

export const HeadingScale: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Heading Scale</h2>
        <p className="text-white/60 mb-6">
          Geist-inspired numbered system from 72px (hero) down to 14px (small titles)
        </p>
      </div>
      <div className="space-y-0">
        {(Object.keys(heading) as Array<keyof typeof heading>).map((size) => (
          <TypeDetails
            key={size}
            name={`heading-${size}`}
            fontSize={heading[size].fontSize}
            lineHeight={heading[size].lineHeight}
            letterSpacing={heading[size].letterSpacing}
            fontWeight={heading[size].fontWeight}
          />
        ))}
      </div>
    </div>
  ),
};

export const ButtonScale: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Button Typography</h2>
        <p className="text-white/60 mb-6">
          Consistent button text sizing with semibold weight
        </p>
      </div>
      <div className="space-y-0">
        {(Object.keys(button) as Array<keyof typeof button>).map((size) => (
          <TypeDetails
            key={size}
            name={`button-${size}`}
            fontSize={button[size].fontSize}
            lineHeight={button[size].lineHeight}
            fontWeight={button[size].fontWeight}
          />
        ))}
      </div>
      <div className="mt-8 p-6 bg-background-elevated rounded-[12px] border border-border">
        <h3 className="text-sm font-semibold text-white mb-4">Live Examples</h3>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-brand-primary text-white rounded-[12px]">
            <span className="text-button-16 font-semibold">Large Button</span>
          </button>
          <button className="px-4 py-2 bg-brand-primary text-white rounded-[12px]">
            <span className="text-button-14 font-semibold">Default Button</span>
          </button>
          <button className="px-3 py-1.5 bg-brand-primary text-white rounded-[8px]">
            <span className="text-button-12 font-semibold">Small Button</span>
          </button>
        </div>
      </div>
    </div>
  ),
};

export const LabelScale: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Label Typography</h2>
        <p className="text-white/60 mb-6">
          Form labels, captions, and micro text with medium weight
        </p>
      </div>
      <div className="space-y-0">
        {(Object.keys(label) as Array<keyof typeof label>).map((size) => (
          <TypeDetails
            key={size}
            name={`label-${size}`}
            fontSize={label[size].fontSize}
            lineHeight={label[size].lineHeight}
            letterSpacing={label[size].letterSpacing}
            fontWeight={label[size].fontWeight}
          />
        ))}
      </div>
      <div className="mt-8 p-6 bg-background-elevated rounded-[12px] border border-border">
        <h3 className="text-sm font-semibold text-white mb-4">Form Example</h3>
        <div className="max-w-sm space-y-4">
          <div>
            <label className="text-label-14 font-medium text-white block mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-surface-card border border-border rounded-[12px] text-white"
              placeholder="you@example.com"
            />
            <span className="text-label-12 text-white/60 mt-1.5 block">
              We'll never share your email.
            </span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CopyScale: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Copy Typography</h2>
        <p className="text-white/60 mb-6">
          Paragraph and body text with optimized line heights for readability
        </p>
      </div>
      <div className="space-y-0">
        {(Object.keys(copy) as Array<keyof typeof copy>).map((size) => (
          <TypeDetails
            key={size}
            name={`copy-${size}`}
            fontSize={copy[size].fontSize}
            lineHeight={copy[size].lineHeight}
            fontWeight={copy[size].fontWeight}
          />
        ))}
      </div>
      <div className="mt-8 p-6 bg-background-elevated rounded-[12px] border border-border">
        <h3 className="text-sm font-semibold text-white mb-4">Paragraph Example</h3>
        <div className="max-w-2xl space-y-4">
          <p className="text-copy-20 text-white">
            Lead paragraph with 20px text. Use this for introductory content that needs extra emphasis and visual weight.
          </p>
          <p className="text-copy-16 text-white">
            Default body text at 16px. This is the standard size for most content including paragraphs, descriptions, and general information.
          </p>
          <p className="text-copy-14 text-white/60">
            Secondary text at 14px. Often used for captions, timestamps, metadata, or supporting information that's less prominent.
          </p>
          <p className="text-copy-12 text-white/40">
            Small text at 12px. Best for fine print, legal text, or tertiary information.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const TextComponent: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Text Component</h2>
        <p className="text-white/60 mb-6">
          The Text component provides a unified API for all typography variants
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-white/80 mb-3">Headings</h3>
          <div className="space-y-2">
            <Text variant="heading-48">heading-48: Page Title</Text>
            <Text variant="heading-32">heading-32: Section Heading</Text>
            <Text variant="heading-24">heading-24: Subsection</Text>
            <Text variant="heading-16">heading-16: Card Title</Text>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white/80 mb-3">Copy with Colors</h3>
          <div className="space-y-2">
            <Text variant="copy-16">Default white text</Text>
            <Text variant="copy-16" color="muted">Muted text for secondary content</Text>
            <Text variant="copy-16" color="link">Link-colored text</Text>
            <Text variant="copy-16" color="success">Success message</Text>
            <Text variant="copy-16" color="error">Error message</Text>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white/80 mb-3">Modifiers</h3>
          <div className="space-y-2">
            <Text variant="copy-16">Normal text</Text>
            <Text variant="copy-16" subtle>Subtle (faded) text</Text>
            <Text variant="copy-16" strong>Strong (bold) text</Text>
            <Text variant="copy-16" truncate className="max-w-xs">
              Truncated text that is too long to fit in its container
            </Text>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white/80 mb-3">Custom Elements</h3>
          <div className="space-y-2">
            <Text variant="heading-24" as="span" className="inline-block">
              Heading as span (inline)
            </Text>
            <br />
            <Text variant="copy-16" as="div">Copy as div element</Text>
            <Text variant="label-14" as="span">Label as span</Text>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const HelperFunctions: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Helper Functions</h2>
        <p className="text-white/60 mb-6">
          Utility functions to get Tailwind classes for typography variants
        </p>
      </div>

      <div className="space-y-4 font-mono text-sm">
        <div className="p-4 bg-background-elevated rounded-[12px] border border-border">
          <div className="text-brand-link mb-2">getHeadingClass(32)</div>
          <div className="text-white/60">→ "{getHeadingClass(32)}"</div>
        </div>
        <div className="p-4 bg-background-elevated rounded-[12px] border border-border">
          <div className="text-brand-link mb-2">getButtonClass(14)</div>
          <div className="text-white/60">→ "{getButtonClass(14)}"</div>
        </div>
        <div className="p-4 bg-background-elevated rounded-[12px] border border-border">
          <div className="text-brand-link mb-2">getLabelClass(12)</div>
          <div className="text-white/60">→ "{getLabelClass(12)}"</div>
        </div>
        <div className="p-4 bg-background-elevated rounded-[12px] border border-border">
          <div className="text-brand-link mb-2">getCopyClass(16)</div>
          <div className="text-white/60">→ "{getCopyClass(16)}"</div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-background-surface rounded-[12px] border border-border">
        <h3 className="text-sm font-semibold text-white mb-4">Usage Example</h3>
        <pre className="text-xs text-white/80 overflow-x-auto">
{`import { getHeadingClass } from '@finitless/design-system';

// In your component
<h2 className={getHeadingClass(32)}>
  Section Heading
</h2>

// Or use the Text component directly
<Text variant="heading-32">
  Section Heading
</Text>`}
        </pre>
      </div>
    </div>
  ),
};

export const FontStacks: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Font Stacks</h2>
        <p className="text-white/60 mb-6">Available font families and their fallbacks</p>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-background-elevated rounded-[12px] border border-border">
          <div className="text-sm text-white/60 mb-2">Sans-serif (Primary)</div>
          <div
            className="text-lg text-white mb-2"
            style={{ fontFamily: fontFamily.sans.join(', ') }}
          >
            Inter - The quick brown fox jumps over the lazy dog
          </div>
          <div className="text-xs font-mono text-white/40">
            {fontFamily.sans.join(', ')}
          </div>
        </div>

        <div className="p-4 bg-background-elevated rounded-[12px] border border-border">
          <div className="text-sm text-white/60 mb-2">Monospace (Code)</div>
          <div
            className="text-lg text-white mb-2"
            style={{ fontFamily: fontFamily.mono.join(', ') }}
          >
            const greeting = "Hello, World!";
          </div>
          <div className="text-xs font-mono text-white/40">
            {fontFamily.mono.join(', ')}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const FontWeights: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Font Weights</h2>
        <p className="text-white/60 mb-6">Available font weights for Inter</p>
      </div>

      <div className="space-y-0">
        {(Object.entries(fontWeight) as [string, string][]).map(([name, weight]) => (
          <div key={name} className="flex items-baseline gap-6 py-4 border-b border-white/5">
            <div className="w-28 shrink-0">
              <span className="text-sm font-mono text-brand-link">{name}</span>
            </div>
            <div className="flex-1">
              <span className="text-2xl text-white" style={{ fontWeight: Number(weight) }}>
                The quick brown fox
              </span>
            </div>
            <div className="w-16 shrink-0 text-right">
              <span className="text-xs font-mono text-white/40">{weight}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const LetterSpacing: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Letter Spacing</h2>
        <p className="text-white/60 mb-6">Tracking values from tightest to widest</p>
      </div>

      <div className="space-y-0">
        {(Object.entries(letterSpacing) as [string, string][]).map(([name, value]) => (
          <div key={name} className="flex items-baseline gap-6 py-4 border-b border-white/5">
            <div className="w-28 shrink-0">
              <span className="text-sm font-mono text-brand-link">{name}</span>
            </div>
            <div className="flex-1">
              <span
                className="text-2xl text-white uppercase"
                style={{ letterSpacing: value }}
              >
                TYPOGRAPHY
              </span>
            </div>
            <div className="w-20 shrink-0 text-right">
              <span className="text-xs font-mono text-white/40">{value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
