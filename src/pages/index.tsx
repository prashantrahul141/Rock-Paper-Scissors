import HeadComp from '@components/common/headcomponent';
import Welcome from '@components/home/welcome';
import { type NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <HeadComp></HeadComp>

      <Welcome></Welcome>
    </>
  );
};

export default Home;
