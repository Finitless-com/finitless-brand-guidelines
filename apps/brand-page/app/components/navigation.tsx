'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@finitless/design-system';
import {
  Home,
  Palette,
  Type,
  Layout,
  MessageSquare,
  Download,
  Grid3X3,
  Sparkles,
  Eye,
  AlertTriangle,
  Building2,
  Menu,
  X,
  ExternalLink,
  Bot,
} from 'lucide-react';

const BRAND_BASE_URL = 'https://brand.finitless.com';

const navItems = [
  { href: '/', label: 'Overview', icon: Home },
  { href: '/colors', label: 'Colors', icon: Palette },
  { href: '/typography', label: 'Typography', icon: Type },
  { href: '/components', label: 'Components', icon: Layout },
  { href: '/voice', label: 'Voice & Tone', icon: MessageSquare },
  { href: '/assets', label: 'Logo Assets', icon: Download },
  { href: '/spacing', label: 'Spacing', icon: Grid3X3 },
  { href: '/motion', label: 'Motion', icon: Sparkles },
  { href: '/accessibility', label: 'Accessibility', icon: Eye },
  { href: '/patterns', label: 'Patterns', icon: AlertTriangle },
  { href: '/about', label: 'About', icon: Building2 },
  { href: '/BRAND-GUIDELINES.md', label: 'For AI', icon: Bot, external: true },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-background-deep/95 backdrop-blur-lg border-b border-border">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/">
            <img
              src={`${BRAND_BASE_URL}/assets/logos/finitless-logo-horizontal-on-dark-480w.png`}
              srcSet={`
                ${BRAND_BASE_URL}/assets/logos/finitless-logo-horizontal-on-dark-300w.png 1x,
                ${BRAND_BASE_URL}/assets/logos/finitless-logo-horizontal-on-dark-480w.png 1.5x,
                ${BRAND_BASE_URL}/assets/logos/finitless-logo-horizontal-on-dark-800w.png 2x
              `}
              alt="Finitless"
              className="h-6 w-auto"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-muted hover:text-white transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-out Menu */}
      <nav
        className={`lg:hidden fixed top-14 left-0 z-50 h-[calc(100vh-56px)] w-64 bg-background-deep border-r border-border transform transition-transform duration-200 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            const linkClass = `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? 'bg-brand-link/10 text-brand-link'
                : 'text-text-muted hover:text-white hover:bg-white/5'
            }`;

            if ('external' in item && item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className={linkClass}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                  <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                </a>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={linkClass}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <a
            href="https://github.com/Finitless-com/finitless-brand-guidelines"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="sm" className="w-full gap-2">
              <ExternalLink className="h-4 w-4" />
              GitHub
            </Button>
          </a>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 z-40 h-screen w-60 flex-col bg-background-deep border-r border-border">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-border">
          <Link href="/">
            <img
              src={`${BRAND_BASE_URL}/assets/logos/finitless-logo-horizontal-on-dark-480w.png`}
              srcSet={`
                ${BRAND_BASE_URL}/assets/logos/finitless-logo-horizontal-on-dark-300w.png 1x,
                ${BRAND_BASE_URL}/assets/logos/finitless-logo-horizontal-on-dark-480w.png 1.5x,
                ${BRAND_BASE_URL}/assets/logos/finitless-logo-horizontal-on-dark-800w.png 2x
              `}
              alt="Finitless"
              className="max-w-full h-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            const linkClass = `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? 'bg-brand-link/10 text-brand-link'
                : 'text-text-muted hover:text-white hover:bg-white/5'
            }`;

            if ('external' in item && item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                  <ExternalLink className="h-3 w-3 ml-auto opacity-50" />
                </a>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <a
            href="https://github.com/Finitless-com/finitless-brand-guidelines"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="sm" className="w-full gap-2">
              <ExternalLink className="h-4 w-4" />
              GitHub
            </Button>
          </a>
        </div>
      </aside>
    </>
  );
}
