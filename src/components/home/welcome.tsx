import type { FC } from 'react';

const Welcome: FC = () => {
  return (
    <div className='absolute flex h-screen w-screen items-center justify-center'>
      <div className='h-max w-96 max-w-full'>
        <div className='flex h-full w-full items-center justify-center'>
          <div className='mb-20 grid text-left text-6xl tracking-wide sm:mb-40 sm:flex sm:gap-4'>
            <span className='font-bebasNeue text-themePrimary-50'>Rock</span>
            <span className='font-bebasNeue text-themePrimary-50'>Paper</span>
            <span className='font-bebasNeue text-themePrimary-50'>
              Scissors
            </span>
          </div>
        </div>

        <div className='flex gap-4'>
          <input className='input flex-grow' placeholder='Room number'></input>
          <div className='flex items-center justify-center'>
            <button className='btn h-fit w-fit'>Join!</button>
          </div>
        </div>

        <div className='mt-10 flex items-center justify-center gap-4'>
          <button className='btn w-fit'>Create room!</button>
          <button className='btn flex w-fit border border-themePrimary-300 bg-transparent hover:bg-themePrimary-200/20'>
            Rules
          </button>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
