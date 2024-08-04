import { type FC } from 'react';

import { Logo, UiContainer } from '@/src/components/ui';

import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <UiContainer>
        <Logo />
      </UiContainer>
    </header>
  );
};

export default Header;
