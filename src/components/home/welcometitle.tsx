import type { FC } from 'react';

const WelcomeTitle: FC = () => {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='mb-20 grid text-left text-6xl tracking-wide sm:mb-40 sm:flex sm:gap-4'>
        <span className='font-secularOne text-themePrimary-50'>Rock</span>
        <span className='font-secularOne text-themePrimary-50'>Paper</span>
        <span className='font-secularOne text-themePrimary-50'>Scissors</span>
      </div>
    </div>
  );
};

export default WelcomeTitle;
