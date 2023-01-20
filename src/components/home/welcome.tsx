import type { FC } from 'react';
import WelcomeTitle from './welcometitle';
import WelcomeInput from './welcomeinput';
import WelcomeButtons from './welcomebuttons';

const Welcome: FC = () => {
  return (
    <div className='absolute flex h-screen w-screen items-center justify-center'>
      <div className='h-max w-96 max-w-full'>
        {/* Title */}
        <WelcomeTitle></WelcomeTitle>

        {/* input  */}
        <WelcomeInput></WelcomeInput>

        {/* bottom buttons */}
        <WelcomeButtons></WelcomeButtons>
      </div>
    </div>
  );
};
export default Welcome;
