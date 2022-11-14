import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Props {
  time: number;
  toggle: () => void;
  minutes: string;
  seconds: string;
  message: string;
  INITIAL_TIME: number;
}
const Timer: React.FC<Props> = ({
  time,
  toggle,
  minutes,
  seconds,
  message,
  INITIAL_TIME,
}) => {
  return (
    <div className='pomodoro-project__timer '>
      <CircularProgressbarWithChildren
        styles={{
          root: {},
          path: {},
          trail: {},
          text: {
            fill: '#D7E0FF',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          },
        }}
        className='progress-bar '
        strokeWidth={3}
        value={time}
        maxValue={INITIAL_TIME}
        text={`${minutes}:${seconds}`}
      >
        <button
          type='button'
          className='btn  progress-bar__button'
          onClick={toggle}
        >
          {message}
        </button>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default Timer;
