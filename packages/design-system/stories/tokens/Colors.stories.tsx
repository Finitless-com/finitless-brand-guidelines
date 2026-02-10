import type { Meta, StoryObj } from '@storybook/react';
import { colors, gradients } from '../../src/tokens/colors';

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
