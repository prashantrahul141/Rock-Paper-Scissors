import type { FC } from 'react';

const Score: FC<{ score: number }> = ({ score }) => {
  return (
    <div className='mt-12 w-max select-none rounded-md border border-themePrimary-300 bg-themePrimary-50/5 py-3 px-4 text-center'>
      <div>
        <span className='font-inconsolata text-themePrimary-50'>Score</span>
      </div>
      <div>
        <span className='font-secularOne text-6xl text-themePrimary-400'>
          {score}
        </span>
      </div>
    </div>
  );
};

export default Score;
