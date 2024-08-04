import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { type ReactNode } from 'react';

import { Providers } from '@/src/components/layout';
import { useEnv } from '@/src/hooks';
import { generateOpenGraph, generateStaticMetadata } from '@/src/utils/seo';

import { AppConstants } from './app.constants';
import './globals.scss';

const mainFont = Nunito({ subsets: ['latin', 'cyrillic'] });

export async function generateMetadata(): Promise<Metadata> {
  const env = useEnv();
  const CANONICAL_URL =
    env.get('CANONICAL_URL') || AppConstants.defaultCanonical;
  const description = undefined;

  return generateStaticMetadata({
    metadataBase: new URL(CANONICAL_URL),
    title: {
      template: `${AppConstants.appName} | %s`,
      default: AppConstants.appName,
    },
    description,
    appleWebApp: {
      title: AppConstants.appName,
      capable: false,
    },
    alternates: {
      canonical: CANONICAL_URL,
      languages: {
        // ru: CANONICAL_URL,

        // Should be changed to another one, if i18n has been implemented
        'x-default': CANONICAL_URL,
      },
    },
    openGraph: generateOpenGraph({
      title: 'Главная страница',
      description,
    }),
  });
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ru'>
      <body className={mainFont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
