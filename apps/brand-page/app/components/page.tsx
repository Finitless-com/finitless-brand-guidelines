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
  Textarea,
} from '@finitless/design-system';
import {
  Layout,
  DollarSign,
  Phone,
  TrendingUp,
  Copy,
  Check,
  Loader2,
} from 'lucide-react';

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

export default function ComponentsPage() {
  return (
    <div className="min-h-screen py-12 lg:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <IconContainer color="primary">
            <Layout className="h-6 w-6" />
          </IconContainer>
          <h1 className="text-3xl lg:text-4xl font-bold">
            <GradientText>Components</GradientText>
          </h1>
        </div>
        <p className="text-lg text-text-muted mb-12 max-w-2xl">
          UI primitives and brand components from the Finitless design system. All components are built with Radix UI and styled with Tailwind.
        </p>

        {/* Tabs */}
        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="inputs">Inputs</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="forms">Form Patterns</TabsTrigger>
          </TabsList>

          {/* Buttons */}
          <TabsContent value="buttons">
            <div className="space-y-8">
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

              <GlassCard>
                <h3 className="text-lg font-semibold mb-6">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small (36px)</Button>
                  <Button size="md">Medium (44px)</Button>
                  <Button size="lg">Large (48px)</Button>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-semibold mb-6">Button States</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button>Default</Button>
                  <Button disabled>Disabled</Button>
                  <Button disabled>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Loading
                  </Button>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-semibold mb-4">Usage</h3>
                <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`import { Button, CTAButton } from '@finitless/design-system';

// Standard action
<Button variant="primary">Save Changes</Button>

// Primary CTA (only one per page!)
<CTAButton size="lg">Get Started Free</CTAButton>

// Secondary / alternative action
<Button variant="secondary">Learn More</Button>`}
                </pre>
              </GlassCard>
            </div>
          </TabsContent>

          {/* Inputs */}
          <TabsContent value="inputs">
            <div className="space-y-8">
              <GlassCard>
                <h3 className="text-lg font-semibold mb-6">Form Inputs</h3>
                <div className="max-w-md space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="demo-input">Email Address</Label>
                    <Input id="demo-input" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="demo-password">Password</Label>
                    <Input id="demo-password" type="password" placeholder="Enter password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="demo-disabled">Disabled Input</Label>
                    <Input id="demo-disabled" disabled placeholder="Can't edit this" />
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-semibold mb-6">Textarea</h3>
                <div className="max-w-md space-y-2">
                  <Label htmlFor="demo-textarea">Message</Label>
                  <Textarea id="demo-textarea" placeholder="Type your message here..." />
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-semibold mb-6">Select</h3>
                <div className="max-w-md space-y-2">
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
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-semibold mb-4">Usage</h3>
                <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`import { Input, Label, Textarea, Select } from '@finitless/design-system';

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}
                </pre>
              </GlassCard>
            </div>
          </TabsContent>

          {/* Cards */}
          <TabsContent value="cards">
            <div className="space-y-8">
              <GlassCard>
                <h3 className="text-lg font-semibold mb-6">Glass Cards</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <GlassCard>
                    <p className="text-text-muted">Default glass card with subtle background and border.</p>
                  </GlassCard>
                  <GlassCard highlight="primary">
                    <p className="text-text-muted">Primary highlight with accent border.</p>
                  </GlassCard>
                  <GlassCard highlight="success">
                    <p className="text-text-muted">Success highlight for positive states.</p>
                  </GlassCard>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-semibold mb-6">Stat Cards</h3>
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
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-semibold mb-4">Usage</h3>
                <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`import { GlassCard, IconContainer } from '@finitless/design-system';

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
</GlassCard>`}
                </pre>
              </GlassCard>
            </div>
          </TabsContent>

          {/* Badges */}
          <TabsContent value="badges">
            <div className="space-y-8">
              <GlassCard>
                <h3 className="text-lg font-semibold mb-6">Badge Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="default">Default</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="error">Error</Badge>
                </div>
              </GlassCard>

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

              <GlassCard>
                <h3 className="text-lg font-semibold mb-4">Usage</h3>
                <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`import { Badge, StatusBadge } from '@finitless/design-system';

<Badge variant="primary">v0.0.1</Badge>
<StatusBadge status="live" />
<StatusBadge status="error">Connection Failed</StatusBadge>`}
                </pre>
              </GlassCard>
            </div>
          </TabsContent>

          {/* Form Patterns */}
          <TabsContent value="forms">
            <div className="space-y-8">
              <GlassCard>
                <h3 className="text-lg font-semibold mb-6">Login Form Pattern</h3>
                <div className="flex justify-center py-8">
                  <FormContainer className="w-full max-w-md">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold">Welcome back</h2>
                      <p className="text-text-muted mt-2">Sign in to your account</p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-email">Email</Label>
                        <Input id="login-email" type="email" placeholder="you@example.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="login-password">Password</Label>
                        <Input id="login-password" type="password" placeholder="Enter password" />
                      </div>

                      <CTAButton className="w-full">Sign In</CTAButton>
                    </div>

                    <FormDivider />

                    <Button variant="secondary" className="w-full">
                      Continue with Google
                    </Button>
                  </FormContainer>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg font-semibold mb-4">Usage</h3>
                <pre className="bg-background-deep rounded-lg p-4 overflow-x-auto text-sm">
{`import {
  FormContainer,
  FormDivider,
  CTAButton,
  Input,
  Label,
} from '@finitless/design-system';

<FormContainer>
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" />
    </div>
    <CTAButton className="w-full">Sign In</CTAButton>
  </div>
  <FormDivider />
  <Button variant="secondary">Continue with Google</Button>
</FormContainer>`}
                </pre>
              </GlassCard>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
