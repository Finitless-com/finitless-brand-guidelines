import type { Config } from 'tailwindcss';
import { finitlessPreset } from '@finitless/design-system/tailwind';

const config: Config = {
  presets: [finitlessPreset],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/design-system/src/**/*.{js,ts,jsx,tsx}',
  ],
};

export default config;
