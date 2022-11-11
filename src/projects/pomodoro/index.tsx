import React from 'react';
import SelectButton from './components/SelectButton';
import { dataTypeButtons } from './utils';
import Timer from './components/Timer';
import Modal from '../../components/modal';
import { AiOutlineSetting } from 'react-icons/ai';
import './styles.css';

import useColorTheme from './hooks/useColorTheme';
import useTimer from './hooks/useTimer';
const INITIAL_TIME = 1 * 60;
const PomodoroProject: React.FC = () => {
  const [initialTime, setInitialTime] = React.useState({
    pomodoro: 3,
    shortBreak: 1,
    longBreak: 2,
  });
  const [visible, setVisible] = React.useState(false);
  const { theme, selectTheme } = useColorTheme();
  const { time, toggle, minutes, seconds, message, reset } =
    useTimer(INITIAL_TIME);

  return (
    <>
      <div
        className='pomodoro-project  w-100  vh-100 bg-darkest d-flex flex-column justify-content-center align-items-center'
        data-theme={theme}
      >
        <Modal
          initialTime={initialTime}
          setInitialTime={setInitialTime}
          visible={visible}
          setVisible={setVisible}
          title='Settings'
        />
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
          <Timer
            time={time}
            toggle={toggle}
            minutes={minutes}
            seconds={seconds}
            message={message}
            INITIAL_TIME={INITIAL_TIME}
          />
          <div className='center mt-3 '>
            <AiOutlineSetting
              className='txt-pom-gray pointer'
              size={43}
              onClick={() => setVisible(!visible)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PomodoroProject;
