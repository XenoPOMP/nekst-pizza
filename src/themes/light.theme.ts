import type { Defined } from '@xenopomp/advanced-types';
import type { Config } from 'tailwindcss';

type Theme = Defined<Defined<Config['theme']>['extend']>;

/**
 * This theme is **default**.
 */
export const lightTheme = {
  colors: {
    primary: {
      bg: '#FFFFFF',
      font: '#000000',
    },
    logo: {
      'accent-font': '#7B7B7B',
    },
  },
} satisfies Theme;
