import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0e0e10', // background.base
        },
        {
          name: 'deep',
          value: '#08080a', // background.deep
        },
        {
          name: 'elevated',
          value: '#151517', // background.elevated
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    docs: {
      theme: {
        base: 'dark',
        brandTitle: 'Finitless Design System',
        brandUrl: 'https://brand.finitless.com',
        colorPrimary: '#165DFC',
        colorSecondary: '#00B7FF',
        appBg: '#0e0e10',
        appContentBg: '#151517',
        appBorderColor: 'rgba(255, 255, 255, 0.10)',
        appBorderRadius: 12,
        textColor: '#ffffff',
        textMutedColor: 'rgba(255, 255, 255, 0.60)',
        barTextColor: 'rgba(255, 255, 255, 0.60)',
        barSelectedColor: '#00B7FF',
        barBg: '#08080a',
        inputBg: 'rgba(255, 255, 255, 0.05)',
        inputBorder: 'rgba(255, 255, 255, 0.10)',
        inputTextColor: '#ffffff',
        inputBorderRadius: 12,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['dark', 'light'],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
