import Link from 'next/link';
import type { FC } from 'react';

const WelcomeButtons: FC = () => {
  return (
    <div className='mt-10 flex items-center justify-center gap-4'>
      <button className='btn w-fit'>Create room!</button>
      <Link href={'/rules'}>
        <button className='btn flex w-fit border border-themePrimary-300 bg-transparent hover:bg-themePrimary-200/20'>
          Rules
        </button>
      </Link>
    </div>
  );
};
export default WelcomeButtons;
