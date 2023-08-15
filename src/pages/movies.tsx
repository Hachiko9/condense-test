'use client';
import styles from './pages.module.css';
import { MovieCard } from '@/components/movieCard';
import { forwardRef, useContext } from 'react';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Layout from './layout';
import { useMovies } from '@/hooks/useMovies';
import { useStorage } from '@/hooks/useStorage';
import { NotificationsContext } from '@/components/notificationsManager/notificationsContext';
import { Virtuoso } from 'react-virtuoso';

interface IMovie {
  posterUrl: string;
  title: string;
  plot: string;
  id: number;
}

const Movies: NextPageWithLayout = () => {
  const { data: movies } = useMovies();

  const { dispatchNotification } = useContext(NotificationsContext);

  const { value: favorites = [], set } = useStorage<IMovie[]>('favorites');

  const toggleFavorite = (movie: IMovie) => {
    if (favorites.find((favMovie) => favMovie.id === movie.id)) {
      set(favorites.filter((favMovie) => favMovie.id !== movie.id));
      dispatchNotification({
        id: Math.random() + new Date().getTime(),
        action: 'remove',
      });
    } else {
      set([...favorites, movie]);
      dispatchNotification({
        id: Math.random() + new Date().getTime(),
        action: 'add',
      });
    }
  };

  return (
    <div className={styles.movies}>
      <Virtuoso
        data={movies}
        className={styles.scroller}
        totalCount={200}
        components={{
          List: forwardRef<HTMLDivElement>((props, ref) => (
            <div className={styles.moviesList} ref={ref} {...props} />
          )),
        }}
        itemContent={(idx, movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleFavorite={toggleFavorite}
            isFavorite={
              !!favorites.find((favMovie) => favMovie.id === movie.id)
            }
          />
        )}
      />
    </div>
  );
};

Movies.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Movies;
export type { IMovie };
