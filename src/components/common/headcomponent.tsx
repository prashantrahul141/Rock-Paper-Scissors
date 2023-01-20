import Head from 'next/head';
import type { FC } from 'react';

const HeadComp: FC<{ headTitle?: string | undefined }> = ({
  headTitle = undefined,
}) => {
  // Head component to define meta tags
  return (
    <Head>
      {headTitle === undefined && <title>{`Play Rock Paper Scissors`}</title>}
      {headTitle !== undefined && <title>{`${headTitle}`}</title>}
      <meta name='description' charSet='UTF-8' content='Rock Paper Scissors' />
      {/* <link rel='manifest' href='/manifest.json'></link> */}
      <meta name='darkreader-lock' />
      <meta content='Rock Paper Scissors' property='og:title' />
      <meta content='Play Rock Paper Scissors!' property='og:description' />
      <meta
        content='https://rock-paper-scissors.up.railway.app'
        property='og:url'
      />
      <meta content='' property='og:image' />
      <meta content='#448fef' data-react-helmet='true' name='theme-color' />
    </Head>
  );
};

export default HeadComp;
