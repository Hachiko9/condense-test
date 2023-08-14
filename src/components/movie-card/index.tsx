import { StarIcon } from './starIcon';
import type { FC } from 'react';

interface IMovieProps {
  movie: IMovie;
}

interface IMovie {
  image: string;
  title: string;
  description: string;
}

export const MovieCard: FC<IMovieProps> = ({ movie }) => {
  const { title, description, image } = movie;

  return (
    <div
      style={{
        display: 'flex',
        borderRadius: '6px',
        boxShadow: '-4px 0px 0px 0px #B0C0C8 inset',
      }}
    >
      <img
        style={{ width: '8.7rem', height: '8.7rem', borderRadius: '6px' }}
        src={image}
      />
      <div
        style={{
          padding: '6px 10px 6px 14px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <h4 style={{ color: '#000', fontSize: '1.2rem' }}>{title}</h4>
          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            // onClick={addFavorite()}
          >
            <StarIcon />
          </button>
        </div>
        <p style={{ color: '#000', fontSize: '1.2rem' }}>{description}</p>
      </div>
    </div>
  );
};
