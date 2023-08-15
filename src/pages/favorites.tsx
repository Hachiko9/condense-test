import type { ReactElement } from 'react';
import { forwardRef } from 'react';
import type { NextPageWithLayout } from './_app';
import Layout from './layout';
import { useStorage } from '@/hooks/useStorage';
import { MovieCard } from '@/components/movieCard';
import { IMovie } from './movies';
import styles from './pages.module.css';
import { Virtuoso } from 'react-virtuoso';

const Favorites: NextPageWithLayout = () => {
  const { value: favorites = [], set } = useStorage<IMovie[]>('favorites');

  const toggleFavorite = (movie: IMovie) => {
    if (favorites.find((favMovie) => favMovie.id === movie.id)) {
      set(favorites.filter((favMovie) => favMovie.id !== movie.id));
    } else {
      set([...favorites, movie]);
    }
  };

  return (
    <div className={styles.favorites}>
      <Virtuoso
        data={favorites}
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

Favorites.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Favorites;
