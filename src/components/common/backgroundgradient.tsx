import type { FC } from 'react';

const BackgroundGradient: FC = () => {
  return (
    <div className='fixed -z-50 h-screen w-screen bg-themePrimary-1300'>
      <div className='fixed -top-[32rem] left-1/2 -z-40 h-[64rem] w-[64rem] -translate-x-1/2 rounded-full bg-gradient-radial from-themePrimary-500 to-themePrimary-1000 opacity-20 blur-[120px]'></div>
    </div>
  );
};

export default BackgroundGradient;
