import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Layout from './layout';

const Favorites: NextPageWithLayout = () => {
  return <div>Favorites</div>;
};

Favorites.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Favorites;
