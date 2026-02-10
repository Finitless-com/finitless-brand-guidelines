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
  MessageSquare,
  Check,
  X,
  Copy,
  Target,
  DollarSign,
  Zap,
  Megaphone,
  Monitor,
  HeadphonesIcon,
  AlertCircle,
} from 'lucide-react';

function CopyBadge({ word }: { word: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(word);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-semantic-success/10 text-semantic-success text-sm font-medium hover:bg-semantic-success/20 transition-colors cursor-pointer"
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {word}
    </button>
  );
}

function AvoidBadge({ word, reason }: { word: string; reason: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-semantic-error/10 text-semantic-error text-sm font-medium group relative">
      <X className="h-3 w-3" />
      {word}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-background-surface border border-border rounded-lg text-xs text-text-muted whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-10">
        {reason}
      </span>
    </div>
  );
}

const personalityTraits = [
  {
    we: 'Confident',
    not: 'Arrogant',
    example: {
      yes: 'Finitless captures orders your staff would miss.',
      no: 'We are the best AI company in the restaurant industry.',
    },
  },
  {
    we: 'Revolutionary',
    not: 'Combative',
    example: {
      yes: 'The future of restaurant ordering is already here.',
      no: 'Traditional ordering systems are dead.',
    },
  },
  {
    we: 'Practical',
    not: 'Visionary',
    example: {
      yes: 'Recover $31,000 in missed orders this year.',
      no: 'Imagine a world where every restaurant uses AI.',
    },
  },
  {
    we: 'Direct',
    not: 'Salesy',
    example: {
      yes: 'Your phone rings 200 times a day. You miss 40%. That\'s $31,000 walking out the door.',
      no: 'Don\'t miss out on this incredible limited-time opportunity!',
    },
  },
];

const wordsWeUse = [
  'AI agents',
  'AI ordering agents',
  'AI-powered',
  'recover',
  'capture',
  'own',
  'direct',
  'efficient',
  '24/7',
  'never miss',
  'revenue',
  'every order',
];

const wordsWeAvoid = [
  { word: 'chatbot', reason: 'Sounds cheap and outdated' },
  { word: 'bot', reason: 'Diminishes what the product does' },
  { word: 'artificial intelligence', reason: 'Too formal — say "AI"' },
  { word: 'smart', reason: 'Vague marketing fluff' },
  { word: 'virtual assistant', reason: 'Overused and generic' },
  { word: 'disrupt', reason: 'Tech-bro jargon' },
  { word: 'leverage', reason: 'Corporate jargon — say "use"' },
  { word: 'synergy', reason: 'No.' },
  { word: 'maybe', reason: 'Weak — we are confident' },
  { word: 'try', reason: 'Say "start" or "get" instead' },
  { word: 'revolutionize', reason: 'Too grandiose' },
  { word: 'hopefully', reason: 'Uncertain — we are confident' },
];

const keyThemes = [
  {
    icon: Target,
    title: 'Power & Control',
    description: 'Restaurant owners should own their customer relationships, not rent them from marketplaces.',
    examples: [
      'Own your customers. Own your data. Own your margins.',
      'Stop paying 30% to a middleman. Take orders directly.',
      'Your customers, your brand, your revenue.',
    ],
  },
  {
    icon: DollarSign,
    title: 'Financial Impact',
    description: 'Ground every claim in money. Restaurants think in dollars.',
    examples: [
      '$31,000 per year in missed phone orders — that\'s the average for a single location.',
      '40% of calls go unanswered during peak hours.',
      'Every missed call is a lost order. Every lost order is lost revenue.',
    ],
  },
  {
    icon: Zap,
    title: 'Inevitability',
    description: 'AI ordering is not experimental. It\'s here, it works, and early adopters gain the advantage.',
    examples: [
      'AI ordering agents are already live in hundreds of restaurants.',
      'The question isn\'t if, but when. Early adopters are already recovering revenue.',
      'This isn\'t a pilot program. This is production-ready technology.',
    ],
  },
];

export default function VoicePage() {
  return (
    <div className="min-h-screen py-12 lg:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <IconContainer color="success">
            <MessageSquare className="h-6 w-6" />
          </IconContainer>
          <h1 className="text-3xl lg:text-4xl font-bold">
            <GradientText>Voice & Tone</GradientText>
          </h1>
        </div>
        <p className="text-lg text-text-muted mb-12 max-w-2xl">
          How Finitless speaks — from marketing headlines to error messages. Every piece of copy should reflect these principles.
        </p>

        {/* Brand Personality */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Brand Personality</h2>
          <p className="text-text-muted mb-8">
            Finitless speaks with the confidence of a product that works and the practicality of someone who respects your time.
          </p>

          <div className="space-y-4">
            {personalityTraits.map((trait) => (
              <GlassCard key={trait.we}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-48 shrink-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="success">{trait.we}</Badge>
                      <span className="text-text-muted">not</span>
                      <Badge variant="error">{trait.not}</Badge>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-semantic-success mt-1 shrink-0" />
                      <p className="text-sm">{trait.example.yes}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="h-4 w-4 text-semantic-error mt-1 shrink-0" />
                      <p className="text-sm text-text-muted line-through">{trait.example.no}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Target Audience */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Target Audience</h2>
          <GlassCard highlight="primary">
            <h3 className="text-lg font-semibold mb-4">Restaurant Owners and Operators</h3>
            <p className="text-text-muted mb-6">
              These are busy people running high-pressure, thin-margin businesses. They:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-link mt-2 shrink-0" />
                <span>Care about revenue, not technology for its own sake</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-link mt-2 shrink-0" />
                <span>Are skeptical of "AI" promises — they've heard it all before</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-link mt-2 shrink-0" />
                <span>Respond to specific numbers and proven results over vague claims</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-link mt-2 shrink-0" />
                <span>Value their time and don't want to read long-winded pitches</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-link mt-2 shrink-0" />
                <span>Think in terms of cost, labor, and orders per hour</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-background-deep rounded-lg">
              <p className="text-sm font-medium text-semantic-warning">
                Always write for someone who has 30 seconds to decide if they care.
              </p>
            </div>
          </GlassCard>
        </section>

        {/* Tone by Context */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Tone by Context</h2>
          <Tabs defaultValue="marketing" className="w-full">
            <TabsList className="mb-6 flex-wrap">
              <TabsTrigger value="marketing" className="gap-2">
                <Megaphone className="h-4 w-4" />
                Marketing
              </TabsTrigger>
              <TabsTrigger value="product" className="gap-2">
                <Monitor className="h-4 w-4" />
                Product UI
              </TabsTrigger>
              <TabsTrigger value="support" className="gap-2">
                <HeadphonesIcon className="h-4 w-4" />
                Support
              </TabsTrigger>
              <TabsTrigger value="errors" className="gap-2">
                <AlertCircle className="h-4 w-4" />
                Errors
              </TabsTrigger>
            </TabsList>

            <TabsContent value="marketing">
              <GlassCard>
                <h3 className="text-lg font-semibold mb-2">Bold, Results-Focused, Data-Driven</h3>
                <p className="text-text-muted mb-6">Use specific numbers. Lead with the problem. Deliver the solution in one sentence.</p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Headlines</h4>
                    <ul className="space-y-2">
                      <li className="text-lg font-semibold">"Never Miss a Sale. Ever."</li>
                      <li className="text-lg font-semibold">"Your Phone Rings 200 Times a Day. How Many Orders Are You Losing?"</li>
                      <li className="text-lg font-semibold">"AI-Powered Voice and WhatsApp Agents That Capture Every Order, 24/7"</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Body Copy</h4>
                    <ul className="space-y-2 text-text-muted">
                      <li>"Restaurants miss up to 40% of phone orders during peak hours. That's $31,000 a year in lost revenue."</li>
                      <li>"Stop paying 30% commission to marketplaces. Own your customers. Keep your margins."</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Calls to Action</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="primary">See How Much You're Losing</Badge>
                      <Badge variant="primary">Start Recovering Revenue</Badge>
                      <Badge variant="primary">Get Your Free Revenue Report</Badge>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </TabsContent>

            <TabsContent value="product">
              <GlassCard>
                <h3 className="text-lg font-semibold mb-2">Clear, Helpful, Efficient</h3>
                <p className="text-text-muted mb-6">No jargon. No branding in the interface. Just useful information.</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-semantic-success uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Check className="h-4 w-4" /> Good
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>"Order received. Estimated prep time: 12 minutes."</li>
                      <li>"3 new orders since you last checked."</li>
                      <li>"This customer has ordered 7 times in the past 30 days."</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-semantic-error uppercase tracking-wider mb-3 flex items-center gap-2">
                      <X className="h-4 w-4" /> Bad
                    </h4>
                    <ul className="space-y-2 text-sm text-text-muted line-through">
                      <li>"Your Finitless AI agent has successfully captured another order!"</li>
                      <li>"Wow, you're really popular today!"</li>
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </TabsContent>

            <TabsContent value="support">
              <GlassCard>
                <h3 className="text-lg font-semibold mb-2">Warm, Patient, Solution-Oriented</h3>
                <p className="text-text-muted mb-6">Acknowledge the problem. Offer a clear next step. Don't make the customer feel stupid.</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-semantic-success uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Check className="h-4 w-4" /> Good
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>"Let's get this sorted out. Can you tell me which order number you're seeing the issue with?"</li>
                      <li>"That's a known issue with the weekend schedule. Here's how to fix it..."</li>
                      <li>"I understand that's frustrating. Let me look into this right now."</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-semantic-error uppercase tracking-wider mb-3 flex items-center gap-2">
                      <X className="h-4 w-4" /> Bad
                    </h4>
                    <ul className="space-y-2 text-sm text-text-muted line-through">
                      <li>"As per our documentation, you need to..."</li>
                      <li>"That's user error."</li>
                      <li>"Please submit a ticket."</li>
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </TabsContent>

            <TabsContent value="errors">
              <GlassCard>
                <h3 className="text-lg font-semibold mb-2">Honest, Reassuring, Actionable</h3>
                <p className="text-text-muted mb-6">Say what went wrong. Say it's okay. Say what to do next.</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-semantic-success uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Check className="h-4 w-4" /> Good
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>"We couldn't process that payment. Please check your card details and try again."</li>
                      <li>"The menu couldn't be loaded. Pull down to refresh, or check your internet connection."</li>
                      <li>"Something went wrong on our end. We're looking into it. Your order hasn't been lost."</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-semantic-error uppercase tracking-wider mb-3 flex items-center gap-2">
                      <X className="h-4 w-4" /> Bad
                    </h4>
                    <ul className="space-y-2 text-sm text-text-muted line-through">
                      <li>"Error 500: Internal Server Error"</li>
                      <li>"An unexpected error occurred."</li>
                      <li>"Payment failed."</li>
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </TabsContent>
          </Tabs>
        </section>

        {/* Key Messaging Themes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Key Messaging Themes</h2>
          <p className="text-text-muted mb-8">
            Use these themes as the foundation for all marketing and sales copy.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {keyThemes.map((theme) => {
              const Icon = theme.icon;
              return (
                <GlassCard key={theme.title}>
                  <IconContainer color="link" className="mb-4">
                    <Icon className="h-6 w-6" />
                  </IconContainer>
                  <h3 className="text-lg font-semibold mb-2">{theme.title}</h3>
                  <p className="text-sm text-text-muted mb-4">{theme.description}</p>
                  <ul className="space-y-2">
                    {theme.examples.map((example, i) => (
                      <li key={i} className="text-sm text-text-muted italic">"{example}"</li>
                    ))}
                  </ul>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Words We Use */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Words We Use</h2>
          <p className="text-text-muted mb-6">
            These words align with the brand personality. Click to copy.
          </p>
          <GlassCard>
            <div className="flex flex-wrap gap-3">
              {wordsWeUse.map((word) => (
                <CopyBadge key={word} word={word} />
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Words We Avoid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Words We Avoid</h2>
          <p className="text-text-muted mb-6">
            Hover to see why we avoid these words.
          </p>
          <GlassCard>
            <div className="flex flex-wrap gap-3">
              {wordsWeAvoid.map(({ word, reason }) => (
                <AvoidBadge key={word} word={word} reason={reason} />
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Example Copy */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Example Copy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard>
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Homepage Hero</h3>
              <p className="text-2xl font-bold mb-2">Never Miss a Sale. Ever.</p>
              <p className="text-text-muted">
                AI-powered voice and WhatsApp agents that capture every order, 24/7. No missed calls. No lost revenue. No commissions.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Feature Description</h3>
              <p className="font-semibold mb-2">Voice Ordering Agent</p>
              <p className="text-sm text-text-muted">
                Your phone rings during the Friday rush. Your staff is buried. Finitless answers, takes the order, confirms it, and sends it straight to your kitchen — all in under 60 seconds.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Pricing CTA</h3>
              <p className="font-semibold mb-2">See How Much Revenue You're Losing</p>
              <p className="text-sm text-text-muted">
                Enter your average daily calls and ticket size. We'll show you exactly how much Finitless recovers.
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Email Subject Lines</h3>
              <ul className="space-y-2 text-sm">
                <li>"You missed 12 orders last week. Here's the math."</li>
                <li>"Your AI agent is live. Here's what to expect."</li>
                <li>"This week: 47 orders captured, $2,300 recovered."</li>
              </ul>
            </GlassCard>
          </div>
        </section>
      </div>
    </div>
  );
}
