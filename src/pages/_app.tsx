import { type AppType } from 'next/app';

import { api } from '../utils/api';

import '../styles/globals.css';
import BackgroundGradient from '@components/common/backgroundgradient';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <BackgroundGradient></BackgroundGradient>
      <Component {...pageProps} />;
    </>
  );
};

export default api.withTRPC(MyApp);
