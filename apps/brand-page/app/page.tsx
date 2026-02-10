'use client';

import { useState } from 'react';
import {
  Button,
  GlassCard,
  GradientText,
  Badge,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  CTAButton,
  FormContainer,
  FormDivider,
  IconContainer,
  StatusBadge,
} from '@finitless/design-system';
import {
  Copy,
  Check,
  Download,
  ExternalLink,
  Code2,
  Palette,
  Type,
  Layout,
  MessageSquare,
  Sparkles,
  DollarSign,
  Phone,
  TrendingUp,
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

function ColorSwatch({ name, value, token }: { name: string; value: string; token: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div
        className="w-12 h-12 rounded-[12px] border border-white/10 shrink-0"
        style={{ backgroundColor: value }}
      />
      <div className="flex-1 min-w-0">
        <div className="font-medium text-white">{name}</div>
        <div className="text-sm font-mono text-text-muted truncate">{value}</div>
      </div>
      <CopyButton text={token} label="Copy class" />
    </div>
  );
}

export default function BrandPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-deep/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <img
            src={`${BRAND_BASE_URL}/assets/logos/finitless-logo-horizontal-on-dark-200w.png`}
            alt="Finitless"
            className="h-8"
          />
          <nav className="hidden md:flex items-center gap-6">
            <a href="#colors" className="text-sm text-text-muted hover:text-white transition-colors">Colors</a>
            <a href="#components" className="text-sm text-text-muted hover:text-white transition-colors">Components</a>
            <a href="#typography" className="text-sm text-text-muted hover:text-white transition-colors">Typography</a>
            <a href="#assets" className="text-sm text-text-muted hover:text-white transition-colors">Assets</a>
          </nav>
          <a
            href="https://github.com/Finitless-com/finitless-brand-guidelines"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="sm" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              GitHub
            </Button>
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">v4.0.0</Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              <GradientText>Finitless Design System</GradientText>
            </h1>
            <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
              Brand tokens, React components, and Tailwind preset for building
              consistent Finitless applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton size="lg" className="gap-2">
                <Sparkles className="h-5 w-5" />
                Get Started
              </CTAButton>
              <Button variant="secondary" size="lg" className="gap-2" asChild>
                <a href="http://localhost:6006" target="_blank" rel="noopener noreferrer">
                  <Code2 className="h-5 w-5" />
                  View Storybook
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Install */}
        <section className="py-16 px-6 bg-background-elevated">
          <div className="max-w-4xl mx-auto">
            <GlassCard>
              <h2 className="text-xl font-semibold mb-4">Quick Install</h2>
              <div className="bg-background-deep rounded-lg p-4 font-mono text-sm flex items-center justify-between">
                <code>npm install @finitless/design-system</code>
                <CopyButton text="npm install @finitless/design-system" />
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Colors */}
        <section id="colors" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <IconContainer color="link">
                <Palette className="h-6 w-6" />
              </IconContainer>
              <h2 className="text-3xl font-bold">Colors</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard>
                <h3 className="text-lg font-semibold mb-6">Brand Primary</h3>
                <div className="space-y-4">
                  <ColorSwatch name="Finitless Blue" value="#165DFC" token="bg-brand-primary" />
                  <ColorSwatch name="Cyan (Links)" value="#00B7FF" token="text-brand-link" />
                  <ColorSwatch name="Purple" value="#7A2EFF" token="bg-brand-purple" />
                  <ColorSwatch name="Magenta" value="#C300FF" token="bg-brand-magenta" />
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-semibold mb-6">Background Hierarchy</h3>
                <div className="space-y-4">
                  <ColorSwatch name="Deep" value="#08080a" token="bg-background-deep" />
                  <ColorSwatch name="Base" value="#0e0e10" token="bg-background-base" />
                  <ColorSwatch name="Elevated" value="#151517" token="bg-background-elevated" />
                  <ColorSwatch name="Surface" value="#1c1c1f" token="bg-background-surface" />
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-semibold mb-6">Semantic</h3>
                <div className="space-y-4">
                  <ColorSwatch name="Error" value="#ff3b45" token="text-semantic-error" />
                  <ColorSwatch name="Success" value="#22c55e" token="text-semantic-success" />
                  <ColorSwatch name="Warning" value="#f59e0b" token="text-semantic-warning" />
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-semibold mb-6">Gradients</h3>
                <div className="space-y-6">
                  <div>
                    <div
                      className="h-16 rounded-[12px] mb-3"
                      style={{ background: 'linear-gradient(to right, #00B7FF, #7A2EFF, #C300FF)' }}
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Brand Gradient</span>
                      <CopyButton text="bg-gradient-brand" label="Copy class" />
                    </div>
                  </div>
                  <div>
                    <div
                      className="h-16 rounded-[12px] mb-3"
                      style={{ background: 'linear-gradient(to right, #00B7FF, #7A2EFF)' }}
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">CTA Gradient</span>
                      <CopyButton text="bg-gradient-cta" label="Copy class" />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Components */}
        <section id="components" className="py-24 px-6 bg-background-elevated">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <IconContainer color="primary">
                <Layout className="h-6 w-6" />
              </IconContainer>
              <h2 className="text-3xl font-bold">Components</h2>
            </div>

            <Tabs defaultValue="buttons" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="buttons">Buttons</TabsTrigger>
                <TabsTrigger value="inputs">Inputs</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
                <TabsTrigger value="badges">Badges</TabsTrigger>
              </TabsList>

              <TabsContent value="buttons">
                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Button Variants</h3>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button variant="primary">Primary</Button>
                    <Button variant="cta">CTA</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                  <div className="p-4 bg-background-deep rounded-lg">
                    <p className="text-sm text-semantic-warning mb-2">
                      <strong>Important:</strong> Only use ONE CTA button per page.
                    </p>
                    <p className="text-sm text-text-muted">
                      The CTA gradient button is reserved for the primary action (hero, form submit).
                      Use Primary (Finitless Blue) for standard actions.
                    </p>
                  </div>
                </GlassCard>
              </TabsContent>

              <TabsContent value="inputs">
                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Form Inputs</h3>
                  <div className="max-w-md space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="demo-input">Email Address</Label>
                      <Input id="demo-input" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="demo-select">Select Option</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </GlassCard>
              </TabsContent>

              <TabsContent value="cards">
                <div className="grid md:grid-cols-3 gap-6">
                  <GlassCard highlight="primary">
                    <div className="flex items-start gap-4">
                      <IconContainer color="primary">
                        <DollarSign className="h-6 w-6" />
                      </IconContainer>
                      <div>
                        <div className="text-2xl font-bold">$31,000</div>
                        <div className="text-text-muted">Revenue recovered</div>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard highlight="success">
                    <div className="flex items-start gap-4">
                      <IconContainer color="success">
                        <Phone className="h-6 w-6" />
                      </IconContainer>
                      <div>
                        <div className="text-2xl font-bold">2,847</div>
                        <div className="text-text-muted">Calls handled</div>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard highlight="cyan">
                    <div className="flex items-start gap-4">
                      <IconContainer color="link">
                        <TrendingUp className="h-6 w-6" />
                      </IconContainer>
                      <div>
                        <div className="text-2xl font-bold">+47%</div>
                        <div className="text-text-muted">Conversion rate</div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </TabsContent>

              <TabsContent value="badges">
                <GlassCard>
                  <h3 className="text-lg font-semibold mb-6">Status Badges</h3>
                  <div className="flex flex-wrap gap-4">
                    <StatusBadge status="live" />
                    <StatusBadge status="active" />
                    <StatusBadge status="pending" />
                    <StatusBadge status="inactive" />
                    <StatusBadge status="error">Connection Failed</StatusBadge>
                  </div>
                </GlassCard>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Typography */}
        <section id="typography" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <IconContainer color="link">
                <Type className="h-6 w-6" />
              </IconContainer>
              <h2 className="text-3xl font-bold">Typography</h2>
            </div>

            <GlassCard>
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-text-muted mb-2">Hero / 60px extrabold</p>
                  <p className="text-6xl font-extrabold">Never Miss a Sale</p>
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-2">H1 / 48px bold</p>
                  <p className="text-5xl font-bold">Page Heading</p>
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-2">H2 / 36px bold</p>
                  <p className="text-4xl font-bold">Section Heading</p>
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-2">H3 / 30px semibold</p>
                  <p className="text-3xl font-semibold">Subsection Heading</p>
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-2">Body / 16px normal</p>
                  <p className="text-base">
                    Finitless AI ordering agents help restaurants capture every order,
                    recover missed calls, and grow their direct revenue.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-2">Small / 14px</p>
                  <p className="text-sm text-text-muted">
                    Secondary text and captions use smaller sizes with muted colors.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Assets */}
        <section id="assets" className="py-24 px-6 bg-background-elevated">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <IconContainer color="primary">
                <Download className="h-6 w-6" />
              </IconContainer>
              <h2 className="text-3xl font-bold">Logo Assets</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard>
                <h3 className="text-lg font-semibold mb-6">Horizontal Logo</h3>
                <div className="bg-background-deep rounded-lg p-8 flex items-center justify-center mb-4">
                  <img
                    src={`${BRAND_BASE_URL}/assets/logos/finitless-logo-horizontal-on-dark-300w.png`}
                    alt="Finitless horizontal logo"
                    className="max-w-full h-auto"
                  />
                </div>
                <div className="flex gap-2">
                  <CopyButton
                    text={`${BRAND_BASE_URL}/assets/logos/finitless-logo-horizontal-on-dark-300w.png`}
                    label="Copy URL"
                  />
                  <a
                    href="/assets/logos/finitless-logo-horizontal-on-dark-300w.png"
                    download
                  >
                    <Button variant="secondary" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </a>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-semibold mb-6">Icon Mark</h3>
                <div className="bg-background-deep rounded-lg p-8 flex items-center justify-center mb-4">
                  <img
                    src={`${BRAND_BASE_URL}/assets/icons/finitless-icon-on-dark-256.png`}
                    alt="Finitless icon"
                    className="w-32 h-32"
                  />
                </div>
                <div className="flex gap-2">
                  <CopyButton
                    text={`${BRAND_BASE_URL}/assets/icons/finitless-icon-on-dark-256.png`}
                    label="Copy URL"
                  />
                  <a
                    href="/assets/icons/finitless-icon-on-dark-256.png"
                    download
                  >
                    <Button variant="secondary" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </a>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* For Developers */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <IconContainer color="link">
                <Code2 className="h-6 w-6" />
              </IconContainer>
              <h2 className="text-3xl font-bold">For Developers</h2>
            </div>

            <GlassCard>
              <h3 className="text-lg font-semibold mb-4">Tailwind Preset</h3>
              <p className="text-text-muted mb-6">
                Use the Finitless preset in your Tailwind config to get all brand tokens.
              </p>
              <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`// tailwind.config.ts
import { finitlessPreset } from '@finitless/design-system/tailwind';

export default {
  presets: [finitlessPreset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@finitless/design-system/dist/**/*.{js,mjs}',
  ],
};`}
              </pre>
            </GlassCard>

            <GlassCard className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Import Components</h3>
              <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`import {
  Button,
  Input,
  GlassCard,
  CTAButton,
  GradientText,
} from '@finitless/design-system';

export function MyComponent() {
  return (
    <GlassCard>
      <GradientText as="h2" className="text-2xl">
        Welcome to Finitless
      </GradientText>
      <CTAButton>Get Started</CTAButton>
    </GlassCard>
  );
}`}
              </pre>
            </GlassCard>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            src={`${BRAND_BASE_URL}/assets/logos/finitless-logo-horizontal-on-dark-120w.png`}
            alt="Finitless"
            className="h-6"
          />
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Finitless. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
