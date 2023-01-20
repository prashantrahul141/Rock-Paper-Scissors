import type { FC } from 'react';
import ChoiceButton from './choicebutton';

const Choices: FC<{ disabled: boolean }> = ({ disabled }) => {
  const choiceOptions = {
    rock: { color: 'border-red-400', icon: '@' },
    paper: { color: 'border-blue-400', icon: '#' },
    scissor: { color: 'border-yellow-400', icon: '$' },
  };

  return (
    <div className='relative mt-40 h-60 w-full max-w-sm sm:mt-28'>
      <div className='absolute left-2'>
        <ChoiceButton
          color={choiceOptions.paper.color}
          icon={choiceOptions.paper.icon}
          disabled={disabled}></ChoiceButton>
      </div>
      <div className='absolute right-2'>
        <ChoiceButton
          color={choiceOptions.rock.color}
          icon={choiceOptions.rock.icon}
          disabled={disabled}></ChoiceButton>
      </div>
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
        <ChoiceButton
          color={choiceOptions.scissor.color}
          icon={choiceOptions.scissor.icon}
          disabled={disabled}></ChoiceButton>
      </div>
    </div>
  );
};

export default Choices;
