import HeadComp from '@components/common/headcomponent';
import type { NextPage } from 'next';
import Link from 'next/link';

const FourZeroFourPage: NextPage = () => {
  return (
    <>
      <HeadComp headTitle='Page not found'></HeadComp>
      <main className='justify-centerpx-6 mx-auto flex w-full max-w-7xl flex-grow flex-col lg:px-8'>
        <div className='mt-36 py-16'>
          <div className='text-center'>
            <p className='font-inconsolata text-base text-themePrimary-300'>
              404
            </p>
            <h1 className='mt-2 font-secularOne text-4xl tracking-wide text-themePrimary-50 sm:text-5xl'>
              Page not found.
            </h1>
            <p className='mt-2 font-inconsolata text-sm text-themePrimary-50/80'>
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className='mt-6'>
              <Link
                href='/'
                className='text-base font-medium text-themePrimary-300 hover:text-themePrimary-500'>
                Go back home
                <span aria-hidden='true'> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <div className='absolute bottom-12 left-1/2 -translate-x-1/2'>
        <footer className='mx-auto w-full max-w-7xl flex-shrink-0  px-6 lg:px-8'>
          <nav className='flex justify-center space-x-4'>
            <Link
              href='https://github.com/prashantrahul141/Rock-Paper-Scissors'
              target={'_blank'}
              passHref={true}
              className='text-sm font-medium text-themePrimary-50/80 hover:text-themePrimary-50/70 hover:underline'>
              Source
            </Link>
            <span
              className='inline-block border-l border-gray-300'
              aria-hidden='true'
            />
            <Link
              href='https://twitter.com/prashrahul141'
              target={'_blank'}
              passHref={true}
              className='text-sm font-medium text-themePrimary-50/80 hover:text-themePrimary-50/70 hover:underline'>
              Twitter
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default FourZeroFourPage;
