import Link from 'next/link';
import type { FC } from 'react';

const RulesContent: FC = () => {
  return (
    <div className='text-center'>
      <div className='mb-12'>
        <span className=' font-secularOne text-6xl text-themePrimary-50'>
          Rules!
        </span>
      </div>

      <div className='mb-12 grid font-inconsolata text-lg text-themePrimary-50'>
        <span>Rock beats Scissors</span>
        <span>Paper beats Rock</span>
        <span>Scissors beats Paper</span>
      </div>

      <div>
        <Link href={'/'}>
          <button className='btn '>Play!</button>
        </Link>
      </div>
    </div>
  );
};

export default RulesContent;
