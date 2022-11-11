import React from 'react';
import SelectButton from './components/SelectButton';
import { dataTypeButtons } from './utils';
import Timer from './components/Timer';
import Modal from '../../components/modal';
import './styles.css';

import useColorTheme from './hooks/useColorTheme';
import useTimer from './hooks/useTimer';
const INITIAL_TIME = 1 * 60;
const PomodoroProject: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const { theme, selectTheme } = useColorTheme();
  const { time, toggle, minutes, seconds, message, reset } =
    useTimer(INITIAL_TIME);

  //   const [show, setShow] = React.useState(false);
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      <div
        className='pomodoro-project  w-100  vh-100 bg-darkest d-flex flex-column justify-content-center align-items-center'
        data-theme={theme}
      >
        <Modal visible={visible} setVisible={setVisible} />
        <div className='pomodoro-project__wrapper'>
          <h1 className='text-light text-center'>pomodoro</h1>
          <button onClick={() => setVisible(!visible)} className='_btn w-25'>
            Click
          </button>
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
        </div>
      </div>
    </>
  );
};

export default PomodoroProject;
