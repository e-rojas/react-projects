import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import SelectButton from './components/SelectButton';
import { dataTypeButtons } from './utils';
import 'react-circular-progressbar/dist/styles.css';
import './styles.css';
import 'react-circular-progressbar/dist/styles.css';
import useColorTheme from './hooks/useColorTheme';
import useTimer from './hooks/useTimer';
const INITIAL_TIME = 1 * 60;
const PomodoroProject: React.FC = () => {
  const { theme, selectTheme } = useColorTheme();
  const { time, toggle, minutes, seconds, message, reset } =
    useTimer(INITIAL_TIME);

  return (
    <div
      className='pomodoro-project  w-100  vh-100 bg-darkest d-flex flex-column justify-content-center align-items-center'
      data-theme={theme}
    >
      <div className='pomodoro-project__wrapper'>
        <h1 className='text-light text-center'>pomodoro</h1>
        <div className='buttons-wrapper'>
          {dataTypeButtons.map(({ text, dataType, className }) => {
            return (
              <SelectButton
                key={dataType}
                selectTheme={selectTheme}
                dataType={dataType}
                text={text}
                className={className}
                reset={reset}
              />
            );
          })}
        </div>
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
              {
                //show message pause, start and if timer is over reset
                message
              }
            </button>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};

export default PomodoroProject;
