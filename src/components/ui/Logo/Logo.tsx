import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';

import pizzaIcon from '@/public/img/pizza-icon.png';

import styles from './Logo.module.scss';
import type { LogoProps } from './Logo.props';

// Logotype component. Contains icon, project name
// and slogan.
const Logo: FC<LogoProps> = () => {
  return (
    <Link
      href={'/'}
      className={cn(styles.logo)}
    >
      <Image
        src={pizzaIcon}
        alt={'Иконка пицца в логотипе'}
        className={cn(styles.logoIcon)}
        width={70}
        height={70}
      />

      <div>
        <h1 className={cn('text-24 font-black', styles.appName)}>
          Некст PIZZA
        </h1>

        <p className={cn(styles.slogan)}>вкусно будет точно</p>
      </div>
    </Link>
  );
};

export default Logo;
