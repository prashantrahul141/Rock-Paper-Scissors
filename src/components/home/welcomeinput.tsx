import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';

const WelcomeInput: FC = () => {
  const [disableButton, setDisableButton] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = e.target.value.trim();
    setInputValue(trimmedValue);
    trimmedValue.length === 6
      ? setDisableButton(false)
      : setDisableButton(true);
  };

  return (
    <div className='flex gap-4'>
      <input
        min={5}
        max={6}
        type={'text'}
        onChange={inputHandler}
        className='input flex-grow'
        placeholder='Room number'></input>
      <div className='flex items-center justify-center'>
        <button disabled={disableButton} className='btn h-fit w-fit'>
          Join!
        </button>
      </div>
    </div>
  );
};

export default WelcomeInput;
