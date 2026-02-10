import type { Meta, StoryObj } from '@storybook/react';
import {
  colors,
  gradients,
  gray,
  grayAlpha,
  blue,
  cyan,
  purple,
  magenta,
  red,
  green,
  amber,
  teal,
} from '../../src/tokens/colors';

const meta: Meta = {
  title: 'Tokens/Colors',
  tags: ['autodocs'],
};

export default meta;

function ColorSwatch({ name, value, dark = false }: { name: string; value: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="w-16 h-16 rounded-[12px] border border-white/10"
        style={{ backgroundColor: value }}
      />
      <div>
        <div className={`font-medium ${dark ? 'text-black' : 'text-white'}`}>{name}</div>
        <div className={`text-sm font-mono ${dark ? 'text-black/60' : 'text-white/60'}`}>{value}</div>
      </div>
    </div>
  );
}

function GradientSwatch({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="w-32 h-16 rounded-[12px] border border-white/10"
        style={{ background: value }}
      />
      <div>
        <div className="font-medium text-white">{name}</div>
        <div className="text-sm font-mono text-white/60 max-w-xs truncate">{value}</div>
      </div>
    </div>
  );
}

function ColorScale({
  name,
  scale,
  darkSteps = [],
}: {
  name: string;
  scale: Record<number, string>;
  darkSteps?: number[];
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-white capitalize">{name}</h3>
      <div className="grid grid-cols-10 gap-2">
        {Object.entries(scale).map(([step, value]) => {
          const isDark = darkSteps.includes(Number(step));
          return (
            <div key={step} className="space-y-1">
              <div
                className="h-16 rounded-[8px] border border-white/10"
                style={{ backgroundColor: value }}
              />
              <div className="text-center">
                <div className="text-xs font-mono text-white/80">{step}</div>
                <div className="text-[10px] font-mono text-white/40 truncate">{value}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AlphaColorScale({
  name,
  scale,
}: {
  name: string;
  scale: Record<number, string>;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-white capitalize">{name}</h3>
      <div
        className="p-4 rounded-[12px]"
        style={{
          backgroundImage: `linear-gradient(45deg, #666 25%, transparent 25%),
            linear-gradient(-45deg, #666 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #666 75%),
            linear-gradient(-45deg, transparent 75%, #666 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
          backgroundColor: '#333',
        }}
      >
        <div className="grid grid-cols-10 gap-2">
          {Object.entries(scale).map(([step, value]) => (
            <div key={step} className="space-y-1">
              <div
                className="h-16 rounded-[8px] border border-white/10"
                style={{ backgroundColor: value }}
              />
              <div className="text-center">
                <div className="text-xs font-mono text-white/80">{step}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const BrandColors: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Brand Primary</h2>
        <div className="grid gap-4">
          <ColorSwatch name="Primary (Finitless Blue)" value={colors.brand.primary} />
          <ColorSwatch name="Link (Cyan)" value={colors.brand.link} />
          <ColorSwatch name="Purple (gradient only)" value={colors.brand.purple} />
          <ColorSwatch name="Magenta (gradient only)" value={colors.brand.magenta} />
        </div>
      </div>
    </div>
  ),
};

export const BackgroundHierarchy: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Background Hierarchy</h2>
        <p className="text-white/60 mb-4">Warm off-black layers from deepest to surface</p>
        <div className="grid gap-4">
          <ColorSwatch name="Deep (sidebar, nav)" value={colors.background.deep} />
          <ColorSwatch name="Base (page bg)" value={colors.background.base} />
          <ColorSwatch name="Elevated (cards, modals)" value={colors.background.elevated} />
          <ColorSwatch name="Surface (dropdowns)" value={colors.background.surface} />
        </div>
      </div>
    </div>
  ),
};

export const SurfaceOverlays: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Surface Overlays</h2>
        <p className="text-white/60 mb-4">White opacity for glass effects</p>
        <div className="grid gap-4">
          <ColorSwatch name="Card (5% white)" value={colors.surface.card} />
          <ColorSwatch name="Hover (8% white)" value={colors.surface.hover} />
          <ColorSwatch name="Active (12% white)" value={colors.surface.active} />
        </div>
      </div>
    </div>
  ),
};

export const SemanticColors: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Semantic Colors</h2>
        <div className="grid gap-4">
          <ColorSwatch name="Error" value={colors.semantic.error} />
          <ColorSwatch name="Success" value={colors.semantic.success} />
          <ColorSwatch name="Warning" value={colors.semantic.warning} />
          <ColorSwatch name="Info" value={colors.semantic.info} dark />
        </div>
      </div>
    </div>
  ),
};

export const Gradients: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Gradients</h2>
        <div className="grid gap-6">
          <GradientSwatch name="Brand (full spectrum)" value={gradients.brand} />
          <GradientSwatch name="CTA (cyan → purple)" value={gradients.cta} />
        </div>
      </div>
    </div>
  ),
};

// ============================================================================
// 10-STEP COLOR SCALES
// ============================================================================

export const GrayScale: StoryObj = {
  name: 'Gray Scale (100-1000)',
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Gray Scale</h2>
        <p className="text-white/60 mb-6">
          10-step gray scale for dark theme, from lightest (100) to darkest (1000)
        </p>
      </div>
      <ColorScale name="gray" scale={gray} darkSteps={[100, 200]} />
    </div>
  ),
};

export const GrayAlphaScale: StoryObj = {
  name: 'Gray Alpha Scale (100-1000)',
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Gray Alpha Scale</h2>
        <p className="text-white/60 mb-6">
          Transparent white overlays for glass effects and dark theme surfaces
        </p>
      </div>
      <AlphaColorScale name="grayAlpha" scale={grayAlpha} />
      <div className="mt-4 p-4 bg-background-elevated rounded-[12px] border border-border">
        <h4 className="text-sm font-semibold text-white mb-3">Usage Examples</h4>
        <div className="space-y-2 text-sm text-white/60">
          <div><span className="font-mono text-brand-link">grayAlpha.200</span> — Card backgrounds (6% white)</div>
          <div><span className="font-mono text-brand-link">grayAlpha.400</span> — Active/pressed states (12% white)</div>
          <div><span className="font-mono text-brand-link">grayAlpha.700</span> — Muted text (36% white)</div>
        </div>
      </div>
    </div>
  ),
};

export const BlueScale: StoryObj = {
  name: 'Blue Scale (100-1000)',
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Blue Scale</h2>
        <p className="text-white/60 mb-6">
          Brand primary extended scale. <span className="font-mono text-brand-link">blue.600</span> is Finitless Blue (#165DFC)
        </p>
      </div>
      <ColorScale name="blue" scale={blue} darkSteps={[100, 200, 300]} />
    </div>
  ),
};

export const CyanScale: StoryObj = {
  name: 'Cyan Scale (100-1000)',
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Cyan Scale</h2>
        <p className="text-white/60 mb-6">
          Link color extended scale. <span className="font-mono text-brand-link">cyan.600</span> is Finitless Cyan (#00B7FF)
        </p>
      </div>
      <ColorScale name="cyan" scale={cyan} darkSteps={[100, 200, 300]} />
    </div>
  ),
};

export const PurpleScale: StoryObj = {
  name: 'Purple Scale (100-1000)',
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Purple Scale</h2>
        <p className="text-white/60 mb-6">
          Gradient midpoint extended. <span className="font-mono text-brand-link">purple.600</span> (#7A2EFF) — <strong>Use in gradients only</strong>
        </p>
      </div>
      <ColorScale name="purple" scale={purple} darkSteps={[100, 200, 300]} />
    </div>
  ),
};

export const MagentaScale: StoryObj = {
  name: 'Magenta Scale (100-1000)',
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Magenta Scale</h2>
        <p className="text-white/60 mb-6">
          Gradient end extended. <span className="font-mono text-brand-link">magenta.600</span> (#C300FF) — <strong>Use in gradients only</strong>
        </p>
      </div>
      <ColorScale name="magenta" scale={magenta} darkSteps={[100, 200, 300]} />
    </div>
  ),
};

export const RedScale: StoryObj = {
  name: 'Red Scale (100-1000)',
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Red Scale</h2>
        <p className="text-white/60 mb-6">
          Error/destructive semantic color. <span className="font-mono text-brand-link">red.600</span> is the primary error color
        </p>
      </div>
      <ColorScale name="red" scale={red} darkSteps={[100, 200, 300]} />
    </div>
  ),
};

export const GreenScale: StoryObj = {
  name: 'Green Scale (100-1000)',
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Green Scale</h2>
        <p className="text-white/60 mb-6">
          Success semantic color. <span className="font-mono text-brand-link">green.600</span> is the primary success color
        </p>
      </div>
      <ColorScale name="green" scale={green} darkSteps={[100, 200, 300, 400]} />
    </div>
  ),
};

export const AmberScale: StoryObj = {
  name: 'Amber Scale (100-1000)',
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Amber Scale</h2>
        <p className="text-white/60 mb-6">
          Warning semantic color. <span className="font-mono text-brand-link">amber.600</span> is the primary warning color
        </p>
      </div>
      <ColorScale name="amber" scale={amber} darkSteps={[100, 200, 300, 400, 500]} />
    </div>
  ),
};

export const TealScale: StoryObj = {
  name: 'Teal Scale (100-1000)',
  render: () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Teal Scale</h2>
        <p className="text-white/60 mb-6">
          Additional accent color for variety in data visualizations and secondary highlights
        </p>
      </div>
      <ColorScale name="teal" scale={teal} darkSteps={[100, 200, 300, 400]} />
    </div>
  ),
};

export const AllScalesOverview: StoryObj = {
  name: 'All Scales Overview',
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Color Scales Overview</h2>
        <p className="text-white/60 mb-6">
          All 10-step color scales at a glance. Each scale goes from lightest (100) to darkest (1000).
        </p>
      </div>

      <div className="space-y-6">
        {[
          { name: 'Gray', scale: gray, key: 'gray' },
          { name: 'Blue (Primary)', scale: blue, key: 'blue' },
          { name: 'Cyan (Links)', scale: cyan, key: 'cyan' },
          { name: 'Purple (Gradient)', scale: purple, key: 'purple' },
          { name: 'Magenta (Gradient)', scale: magenta, key: 'magenta' },
          { name: 'Red (Error)', scale: red, key: 'red' },
          { name: 'Green (Success)', scale: green, key: 'green' },
          { name: 'Amber (Warning)', scale: amber, key: 'amber' },
          { name: 'Teal (Accent)', scale: teal, key: 'teal' },
        ].map(({ name, scale, key }) => (
          <div key={key}>
            <div className="text-sm font-semibold text-white/80 mb-2">{name}</div>
            <div className="flex gap-1">
              {Object.entries(scale).map(([step, value]) => (
                <div
                  key={step}
                  className="flex-1 h-8 first:rounded-l-[8px] last:rounded-r-[8px]"
                  style={{ backgroundColor: value }}
                  title={`${key}.${step}: ${value}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
