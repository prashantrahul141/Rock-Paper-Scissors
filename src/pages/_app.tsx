import { type AppType } from 'next/app';

import { api } from '../utils/api';

import '../styles/globals.css';
import BackgroundGradient from '@components/common/backgroundgradient';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className='fixed top-0 left-0 h-screen w-screen'>
      <BackgroundGradient></BackgroundGradient>
      <Component {...pageProps} />;
    </div>
  );
};

export default api.withTRPC(MyApp);
