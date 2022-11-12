import React from 'react';
import SelectButton from './components/SelectButton';
import { dataTypeButtons } from './utils';
import Timer from './components/Timer';
import Modal from '../../components/modal';
import { AiOutlineSetting } from 'react-icons/ai';
import './styles.css';

import useColorTheme from './hooks/useColorTheme';
import useTimer from './hooks/useTimer';
const PomodoroProject: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const { theme, selectTheme } = useColorTheme();
  const {
    time,
    toggle,
    minutes,
    seconds,
    message,
    reset,
    selection,
    setSelection,
    initialTime,
  } = useTimer();

  return (
    <>
      <div
        className='pomodoro-project  w-100  vh-100 bg-darkest d-flex flex-column justify-content-center align-items-center'
        data-theme={theme}
      >
        <Modal
          visible={visible}
          setVisible={setVisible}
          title='Settings'
          selection={selection}
          setSelection={setSelection}
          reset={reset}
        />
        <div className='pomodoro-project__wrapper'>
          <h1 className='text-light text-center'>pomodoro</h1>
          <div className='buttons-wrapper'>
            {dataTypeButtons.map(({ text, dataType, className, id }) => {
              return (
                <SelectButton
                  id={id}
                  key={dataType}
                  selectTheme={selectTheme}
                  dataType={dataType}
                  text={text}
                  className={className}
                  reset={reset}
                  selection={selection}
                  setSelection={setSelection}
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
            INITIAL_TIME={initialTime}
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
