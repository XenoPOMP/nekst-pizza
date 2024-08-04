import cn from 'classnames';
import { type Metadata } from 'next';

import { AppConstants } from '@/app/app.constants.ts';
import { CoreLayout } from '@/src/components/layout';
import { UiContainer } from '@/src/components/ui';
import { generateStaticMetadata } from '@/src/utils/seo';

import styles from './main-page.module.scss';

export const metadata: Metadata = generateStaticMetadata({
  title: `${AppConstants.appName} | Вкусно будет точно!`,
});

export default function Home() {
  return (
    <CoreLayout>
      <main className={cn(styles.mainPage)}>
        <UiContainer>index page</UiContainer>
      </main>
    </CoreLayout>
  );
}
