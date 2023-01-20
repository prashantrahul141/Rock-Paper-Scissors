import type { FC } from 'react';
import type TypeStatusText from 'src/types/types';

const StatusText: FC<{ statustext: TypeStatusText }> = ({ statustext }) => {
  return (
    <>
      <span className='font-inconsolata text-themePrimary-50'>
        {statustext}
      </span>
    </>
  );
};

export default StatusText;
