import type { FC } from 'react';

const WelcomeInput: FC = () => {
  return (
    <div className='flex gap-4'>
      <input className='input flex-grow' placeholder='Room number'></input>
      <div className='flex items-center justify-center'>
        <button className='btn h-fit w-fit'>Join!</button>
      </div>
    </div>
  );
};

export default WelcomeInput;
