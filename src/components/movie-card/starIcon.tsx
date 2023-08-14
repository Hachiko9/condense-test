import type { FC } from 'react';

interface IStarProps {
  color: string;
}

export const StarIcon: FC<IStarProps> = ({ color = '#D9D9D9'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
    >
      <path
        d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
        fill={color}
      />
    </svg>
  );
};
