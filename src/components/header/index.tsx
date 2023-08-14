'use client';
import { useMemo, type FC, useCallback } from 'react';
import styles from './header.module.css';
import { usePathname } from 'next/navigation';
import { Property } from 'csstype';
import FlexDirection = Property.FlexDirection;
import TextTransform = Property.TextTransform;
import { useRouter } from 'next/router';

export const Header: FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const pageTitle: string = useMemo(() => {
    return pathname?.split('/')[1] as string;
  }, [pathname]);

  const titleStyle: {
    direction: FlexDirection;
    transform: TextTransform;
  } = useMemo(() => {
    if (pathname === '/favorites') {
      return { direction: 'row-reverse', transform: 'none' };
    }

    return {
      direction: 'row',
      transform: 'uppercase',
    };
  }, [pathname]);

  const buttonLabel: string = useMemo(() => {
    if (pathname === '/movies') {
      return 'favorites ->';
    } else if (pathname === '/favorites') {
      return 'movies';
    } else {
      return pathname as string;
    }
  }, [pathname]);

  const handleNavigation = useCallback(() => {
    if (pathname === '/movies') {
      return router.push('/favorites');
    } else if (pathname === '/favorites') {
      return router.push('/movies');
    }
  }, [pathname]);

  return (
    <div
      className={styles.root}
      style={{
        flexDirection: titleStyle.direction,
        textTransform: titleStyle.transform,
      }}
    >
      <h1 className={styles.title}>{pageTitle}</h1>
      <button className={styles.button} onClick={handleNavigation}>
        {buttonLabel}
      </button>
    </div>
  );
};
