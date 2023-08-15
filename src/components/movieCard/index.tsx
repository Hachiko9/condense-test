import { IMovie } from '@/pages/movies';
import { StarIcon } from '../starIcon/starIcon';
import type { FC } from 'react';
import { useState } from 'react';
import styles from './movieCard.module.css';
import Image from 'next/image';

interface IMovieProps {
  movie: IMovie;
  toggleFavorite: (movie: IMovie) => void;
  isFavorite: boolean;
}

export const MovieCard: FC<IMovieProps> = ({
  movie,
  toggleFavorite,
  isFavorite,
}) => {
  const { title, plot, posterUrl } = movie;

  const [imageLoaded, setImageLoaded] = useState(posterUrl);

  const fallbackImg =
    'https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg';

  return (
    <div className={styles.root}>
      <div className={styles.imgContainer}>
        {imageLoaded ? (
          <Image
            src={imageLoaded}
            height={87}
            width={87}
            alt={'movie poster'}
            onError={(e) => {
              e.preventDefault();
              setImageLoaded(fallbackImg);
            }}
          />
        ) : (
          <></>
        )}
      </div>

      <div className={styles.textContainer}>
        <div className={styles.title}>
          <h4>{title}</h4>

          <button
            onClick={() => {
              toggleFavorite(movie);
            }}
          >
            <StarIcon color={isFavorite ? '#FFD056' : '#D9D9D9'} />
          </button>
        </div>

        <p>{plot}</p>
      </div>
    </div>
  );
};
