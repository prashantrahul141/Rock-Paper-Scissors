import type { FC } from 'react';
import WelcomeTitle from './welcometitle';
import WelcomeInput from './welcomeinput';
import WelcomeButtons from './welcomebuttons';
import { api } from '@utils/api';
import { useRouter } from 'next/router';

const Welcome: FC = () => {
  const createRoomMutation = api.mainRouter.createRoom.useMutation();
  const router = useRouter();

  const createRoomCallback = async () => {
    const createdRoom = await createRoomMutation.mutateAsync();
    void router.push(`/${createdRoom.roomId}`);
  };

  return (
    <div className='absolute flex h-screen w-screen items-center justify-center'>
      <div className='h-max w-96 max-w-full'>
        {/* Title */}
        <WelcomeTitle></WelcomeTitle>

        {/* input  */}
        <WelcomeInput></WelcomeInput>

        {/* bottom buttons */}
        <WelcomeButtons createCallback={createRoomCallback}></WelcomeButtons>
      </div>
    </div>
  );
};
export default Welcome;
