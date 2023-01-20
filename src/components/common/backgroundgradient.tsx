import type { FC } from 'react';

const BackgroundGradient: FC = () => {
  return (
    <div className='h-screen w-screen'>
      <div className='h-full w-full bg-themePrimary-1300'>
        <div className='absolute -top-[13rem] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-radial from-themePrimary-500 to-themePrimary-1000 opacity-20 blur-[120px]'></div>
      </div>
    </div>
  );
};

export default BackgroundGradient;
