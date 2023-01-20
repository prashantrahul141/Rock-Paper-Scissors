import RulesContent from '@components/rules/content';
import type { NextPage } from 'next';

const Rules: NextPage = () => {
  return (
    <div className='absolute top-1/4 left-1/2 -translate-x-1/2'>
      <RulesContent></RulesContent>
    </div>
  );
};

export default Rules;
