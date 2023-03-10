import HeadComp from '@components/common/headcomponent';
import Choices from '@components/room/choices';
import Score from '@components/room/score';
import StatusText from '@components/room/statustext';
import { api } from '@utils/api';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import TypeStatusText from 'src/types/types';

const RoomPage: NextPage = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentStatus, setCurrentState] = useState(
    TypeStatusText.WAITING_FOR_PLAYER
  );
  const router = useRouter();
  const joinRoomMutation = api.mainRouter.joinRoom.useMutation();

  return (
    <>
      <HeadComp headTitle='Playing'></HeadComp>
      <div className='flex flex-col items-center justify-center'>
        <Score score={currentScore}></Score>
        <div className='mt-12'>
          <StatusText statustext={currentStatus}></StatusText>
        </div>
        <Choices disabled={false}></Choices>
      </div>
    </>
  );
};

export default RoomPage;
