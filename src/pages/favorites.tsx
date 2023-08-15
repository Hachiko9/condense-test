import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Layout from './layout';
import useStorage from '@/hooks/useStorage';
import { MovieCard } from '@/components/movieCard';
import { IMovie } from './movies';
import styles from './pages.module.css';

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
      <div>
        {favorites?.map((movie, id) => (
          <MovieCard
            movie={movie}
            key={id}
            toggleFavorite={toggleFavorite}
            isFavorite={
              !!favorites.find((favMovie) => favMovie.id === movie.id)
            }
          />
        ))}
      </div>
    </div>
  );
};

Favorites.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Favorites;
