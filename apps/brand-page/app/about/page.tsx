'use client';

import {
  GlassCard,
  GradientText,
  Badge,
  IconContainer,
} from '@finitless/design-system';
import {
  Building2,
  MessageSquare,
  Phone,
  Globe,
  Target,
  Users,
  Zap,
} from 'lucide-react';

const BRAND_BASE_URL = 'https://brand.finitless.com';

const channels = [
  { name: 'Voice', icon: Phone, description: 'Phone ordering agents that answer calls 24/7' },
  { name: 'WhatsApp', icon: MessageSquare, description: 'Conversational ordering via WhatsApp' },
  { name: 'Web Chat', icon: Globe, description: 'Embedded chat on restaurant websites' },
];

const audience = [
  'Care about revenue, not technology for its own sake',
  'Are skeptical of "AI" promises — they\'ve heard it all before',
  'Respond to specific numbers and proven results',
  'Value their time and don\'t want long-winded pitches',
  'Think in terms of cost, labor, and orders per hour',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 lg:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <IconContainer color="primary">
            <Building2 className="h-6 w-6" />
          </IconContainer>
          <h1 className="text-3xl lg:text-4xl font-bold">
            <GradientText>About Finitless</GradientText>
          </h1>
        </div>
        <p className="text-lg text-text-muted mb-12 max-w-2xl">
          Company information, brand positioning, and target audience for the Finitless brand.
        </p>

        {/* Company Info */}
        <section className="mb-12">
          <GlassCard>
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="lg:w-48 shrink-0 flex justify-center lg:justify-start">
                <img
                  src={`${BRAND_BASE_URL}/assets/icons/finitless-icon-on-dark-256.png`}
                  alt="Finitless icon"
                  className="w-32 h-32"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">Finitless</h2>
                <p className="text-xl text-brand-link font-semibold mb-4">
                  "Never Miss a Sale. Ever."
                </p>
                <p className="text-text-muted mb-4">
                  AI ordering agents that recover missed revenue for restaurants via voice, WhatsApp, and web chat.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="primary">Restaurant Technology</Badge>
                  <Badge variant="info">AI</Badge>
                  <a href="https://finitless.com" target="_blank" rel="noopener noreferrer">
                    <Badge variant="info" className="hover:bg-brand-link/20 transition-colors cursor-pointer">
                      finitless.com
                    </Badge>
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Channels */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ordering Channels</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <GlassCard key={channel.name}>
                  <IconContainer color="link" className="mb-4">
                    <Icon className="h-6 w-6" />
                  </IconContainer>
                  <h3 className="text-lg font-semibold mb-2">{channel.name}</h3>
                  <p className="text-sm text-text-muted">{channel.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Value Proposition</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard highlight="primary">
              <IconContainer color="primary" className="mb-4">
                <Zap className="h-6 w-6" />
              </IconContainer>
              <h3 className="text-lg font-semibold mb-2">The Problem</h3>
              <p className="text-text-muted">
                Restaurants miss up to <strong className="text-white">40% of phone orders</strong> during peak hours.
                That's an average of <strong className="text-white">$31,000 per year</strong> in lost revenue for a single location.
              </p>
            </GlassCard>

            <GlassCard highlight="success">
              <IconContainer color="success" className="mb-4">
                <Target className="h-6 w-6" />
              </IconContainer>
              <h3 className="text-lg font-semibold mb-2">The Solution</h3>
              <p className="text-text-muted">
                Finitless AI agents answer every call, take every order, and never put a customer on hold.
                <strong className="text-white"> 24/7 availability</strong> with zero wait times.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Target Audience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Target Audience</h2>
          <GlassCard>
            <div className="flex items-start gap-4 mb-6">
              <IconContainer color="link">
                <Users className="h-6 w-6" />
              </IconContainer>
              <div>
                <h3 className="text-lg font-semibold mb-2">Restaurant Owners and Operators</h3>
                <p className="text-text-muted">
                  Busy people running high-pressure, thin-margin businesses. They:
                </p>
              </div>
            </div>
            <ul className="space-y-3 ml-14">
              {audience.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-link mt-2 shrink-0" />
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-background-deep rounded-lg ml-14">
              <p className="text-sm font-medium text-semantic-warning">
                Always write for someone who has 30 seconds to decide if they care.
              </p>
            </div>
          </GlassCard>
        </section>

        {/* Brand Positioning */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Brand Positioning</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard>
              <h3 className="text-lg font-semibold mb-4 text-semantic-success">What We Say</h3>
              <ul className="space-y-3">
                <li className="text-text-muted">"AI agents" and "AI ordering agents"</li>
                <li className="text-text-muted">"Recover missed revenue"</li>
                <li className="text-text-muted">"Capture every order, 24/7"</li>
                <li className="text-text-muted">"Own your customers"</li>
                <li className="text-text-muted">Specific numbers: "$31,000/year"</li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h3 className="text-lg font-semibold mb-4 text-semantic-error">What We Avoid</h3>
              <ul className="space-y-3">
                <li className="text-text-muted">"Chatbot" or "bot" (sounds cheap)</li>
                <li className="text-text-muted">"Artificial intelligence" (too formal)</li>
                <li className="text-text-muted">"Smart" or "virtual assistant" (overused)</li>
                <li className="text-text-muted">"Disrupt" or "revolutionize" (tech jargon)</li>
                <li className="text-text-muted">Vague claims without numbers</li>
              </ul>
            </GlassCard>
          </div>
        </section>

        {/* Founder */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Founder</h2>
          <GlassCard>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-brand-link/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-brand-link">SK</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Sergio Khoury</h3>
                <p className="text-text-muted">Founder, Finitless</p>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
