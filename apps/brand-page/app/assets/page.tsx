'use client';

import { useState } from 'react';
import {
  GlassCard,
  GradientText,
  Badge,
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  IconContainer,
} from '@finitless/design-system';
import {
  Download,
  Copy,
  Check,
  ExternalLink,
  Monitor,
  Smartphone,
  Mail,
  Image,
  Share2,
  Globe,
  Printer,
  AlertCircle,
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
    <Button variant="ghost" size="sm" onClick={copy} className="gap-2">
      {copied ? (
        <>
          <Check className="h-4 w-4 text-semantic-success" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          {label || 'Copy URL'}
        </>
      )}
    </Button>
  );
}

const quickPick = [
  { context: 'Website header (dark bg)', asset: 'logos/finitless-logo-horizontal-on-dark-300w.png', size: '300w', icon: Monitor },
  { context: 'Website header (light bg)', asset: 'logos/finitless-logo-horizontal-on-light-300w.png', size: '300w', icon: Globe },
  { context: 'Favicon', asset: 'icons/finitless-icon-on-dark-32.png', size: '32px', icon: Globe },
  { context: 'Social media avatar', asset: 'icons/finitless-icon-on-dark-1000.png', size: '1000px', icon: Share2 },
  { context: 'PWA / App icon', asset: 'icons/finitless-icon-on-dark-512.png', size: '512px', icon: Smartphone },
  { context: 'Android launcher', asset: 'icons/finitless-icon-on-dark-192.png', size: '192px', icon: Smartphone },
  { context: 'Apple App Store', asset: 'icons/finitless-icon-on-dark-1024.png', size: '1024px', icon: Smartphone },
  { context: 'OG / Social card', asset: 'logos/finitless-logo-square-on-dark-1024.png', size: '1024px', icon: Image },
  { context: 'Email signature', asset: 'logos/finitless-logo-rect-on-dark-300w.png', size: '300w', icon: Mail },
  { context: 'Print (high-res)', asset: 'icons/finitless-icon-print-2552.png', size: '2552px', icon: Printer },
];

const horizontalSizes = ['120w', '200w', '300w', '480w', '800w', '1200w'];
const squareSizes = ['128', '256', '512', '1024', '2000'];
const rectSizes = ['300w', '600w', '1200w', '1800w'];
const iconSizes = ['16', '32', '48', '64', '72', '128', '192', '256', '384', '512', '1000', '1024'];

const logoRules = [
  { rule: 'Never stretch', description: 'Resize proportionately only' },
  { rule: 'Never modify', description: 'Don\'t recreate or alter the icon' },
  { rule: 'Never add effects', description: 'No shadows, outlines, or glow on the logo itself' },
  { rule: 'Use supplied files', description: 'Always use official brand assets' },
  { rule: 'Clear space', description: 'Minimum 50% of icon height on all sides' },
  { rule: 'Minimum size', description: '24px height for icon, 80px width for full logo' },
];

export default function AssetsPage() {
  return (
    <div className="min-h-screen py-12 lg:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <IconContainer color="link">
            <Download className="h-6 w-6" />
          </IconContainer>
          <h1 className="text-3xl lg:text-4xl font-bold">
            <GradientText>Logo Assets</GradientText>
          </h1>
        </div>
        <p className="text-lg text-text-muted mb-12 max-w-2xl">
          Official Finitless logos and icons in all formats and sizes. Download the right asset for your context.
        </p>

        {/* Quick Pick Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Quick Pick</h2>
          <p className="text-text-muted mb-6">
            Use this table to find the right logo for your context.
          </p>
          <GlassCard className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-text-muted">Context</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-muted">Size</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-muted">Preview</th>
                    <th className="text-right py-3 px-4 font-semibold text-text-muted">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {quickPick.map((item) => {
                    const Icon = item.icon;
                    return (
                      <tr key={item.context} className="border-b border-border/50 last:border-0">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <Icon className="h-4 w-4 text-text-muted shrink-0" />
                            <span>{item.context}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <Badge variant="default">{item.size}</Badge>
                        </td>
                        <td className="py-4 px-4">
                          <div className="w-16 h-8 bg-background-deep rounded flex items-center justify-center">
                            <img
                              src={`${BRAND_BASE_URL}/assets/${item.asset}`}
                              alt=""
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-end gap-2">
                            <CopyButton text={`${BRAND_BASE_URL}/assets/${item.asset}`} />
                            <a href={`/assets/${item.asset}`} download>
                              <Button variant="secondary" size="sm" className="gap-2">
                                <Download className="h-4 w-4" />
                              </Button>
                            </a>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </section>

        {/* Logo Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Logo Variants</h2>
          <Tabs defaultValue="horizontal" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="horizontal">Horizontal</TabsTrigger>
              <TabsTrigger value="square">Square</TabsTrigger>
              <TabsTrigger value="rect">Rectangle</TabsTrigger>
              <TabsTrigger value="icon">Icon Only</TabsTrigger>
            </TabsList>

            <TabsContent value="horizontal">
              <GlassCard>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Horizontal Logo</h3>
                  <p className="text-text-muted text-sm">
                    Icon + wordmark in wide format. Best for headers, navigation, and marketing materials.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-3">On Dark (preferred)</p>
                    <div className="bg-background-deep rounded-lg p-8 flex items-center justify-center mb-4">
                      <img
                        src={`${BRAND_BASE_URL}/assets/logos/finitless-logo-horizontal-on-dark-480w.png`}
                        alt="Finitless horizontal logo on dark"
                        className="max-w-full h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-3">On Light</p>
                    <div className="bg-white rounded-lg p-8 flex items-center justify-center mb-4">
                      <img
                        src={`${BRAND_BASE_URL}/assets/logos/finitless-logo-horizontal-on-light-480w.png`}
                        alt="Finitless horizontal logo on light"
                        className="max-w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-muted mb-3">Available Sizes</p>
                  <div className="flex flex-wrap gap-2">
                    {horizontalSizes.map((size) => (
                      <Badge key={size} variant="default">{size}</Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </TabsContent>

            <TabsContent value="square">
              <GlassCard>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Square Logo</h3>
                  <p className="text-text-muted text-sm">
                    Icon + wordmark in square format. Best for social cards, OG images, and app stores.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-3">On Dark (solid black background)</p>
                    <div className="bg-black rounded-lg p-8 flex items-center justify-center mb-4">
                      <img
                        src={`${BRAND_BASE_URL}/assets/logos/finitless-logo-square-on-dark-512.png`}
                        alt="Finitless square logo on dark"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-3">On Light (transparent)</p>
                    <div className="bg-white rounded-lg p-8 flex items-center justify-center mb-4">
                      <img
                        src={`${BRAND_BASE_URL}/assets/logos/finitless-logo-square-on-light-512.png`}
                        alt="Finitless square logo on light"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-muted mb-3">Available Sizes</p>
                  <div className="flex flex-wrap gap-2">
                    {squareSizes.map((size) => (
                      <Badge key={size} variant="default">{size}px</Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </TabsContent>

            <TabsContent value="rect">
              <GlassCard>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Rectangle Logo</h3>
                  <p className="text-text-muted text-sm">
                    Icon + wordmark in rectangular format. Best for email signatures and marketing materials.
                  </p>
                </div>
                <div className="mb-8">
                  <p className="text-sm font-medium text-text-muted mb-3">On Dark (solid black background)</p>
                  <div className="bg-black rounded-lg p-8 flex items-center justify-center mb-4">
                    <img
                      src={`${BRAND_BASE_URL}/assets/logos/finitless-logo-rect-on-dark-600w.png`}
                      alt="Finitless rectangle logo"
                      className="max-w-md h-auto"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-muted mb-3">Available Sizes</p>
                  <div className="flex flex-wrap gap-2">
                    {rectSizes.map((size) => (
                      <Badge key={size} variant="default">{size}</Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </TabsContent>

            <TabsContent value="icon">
              <GlassCard>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Icon Only</h3>
                  <p className="text-text-muted text-sm">
                    Brand mark without wordmark. Best for favicons, app icons, and avatars.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-3">On Dark</p>
                    <div className="bg-background-deep rounded-lg p-6 flex items-center justify-center">
                      <img
                        src={`${BRAND_BASE_URL}/assets/icons/finitless-icon-on-dark-256.png`}
                        alt="Finitless icon on dark"
                        className="w-24 h-24"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-3">On Light</p>
                    <div className="bg-white rounded-lg p-6 flex items-center justify-center">
                      <img
                        src={`${BRAND_BASE_URL}/assets/icons/finitless-icon-on-light-256.png`}
                        alt="Finitless icon on light"
                        className="w-24 h-24"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-3">Transparent</p>
                    <div className="bg-gradient-to-br from-brand-link/20 to-brand-magenta/20 rounded-lg p-6 flex items-center justify-center">
                      <img
                        src={`${BRAND_BASE_URL}/assets/icons/finitless-icon-transparent-256.png`}
                        alt="Finitless icon transparent"
                        className="w-24 h-24"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-text-muted mb-3">Available Sizes</p>
                  <div className="flex flex-wrap gap-2">
                    {iconSizes.map((size) => (
                      <Badge key={size} variant="default">{size}px</Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </TabsContent>
          </Tabs>
        </section>

        {/* Icon Sizes Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Icon Size Guide</h2>
          <GlassCard>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {iconSizes.map((size) => (
                <div key={size} className="text-center">
                  <div className="bg-background-deep rounded-lg p-3 mb-2 flex items-center justify-center aspect-square">
                    <img
                      src={`${BRAND_BASE_URL}/assets/icons/finitless-icon-on-dark-${size}.png`}
                      alt={`${size}px icon`}
                      style={{ width: Math.min(Number(size), 64), height: Math.min(Number(size), 64) }}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs text-text-muted">{size}px</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Logo Rules */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Logo Rules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {logoRules.map((item) => (
              <GlassCard key={item.rule} className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-semantic-warning shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{item.rule}</p>
                  <p className="text-sm text-text-muted">{item.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
