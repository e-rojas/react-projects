import React from 'react';
import SelectButton from './components/SelectButton';
import { dataTypeButtons } from './utils';
import Timer from './components/Timer';
import Modal from '../../components/modal';
import { AiOutlineSetting } from 'react-icons/ai';

import './styles.scss';

import useColorTheme from './hooks/useColorTheme';
import useTimer from './hooks/useTimer';
import ModalBody from './components/ModalBody';
const PomodoroProject: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const { selectTheme } = useColorTheme();
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
    pause,
  } = useTimer();

  const [themeColor, setThemeColor] = React.useState('');
  const [themeFont, setThemeFont] = React.useState('');

  React.useEffect(() => {
    setThemeColor('alert');
    setThemeFont('kumbh');
  }, []);

  return (
    <>
      <div
        className='pomodoro-project  w-100  vh-100 bg-darkest d-flex flex-column justify-content-center align-items-center'
        data-color={themeColor}
        data-font={themeFont}
      >
        <Modal
          visible={visible}
          setVisible={setVisible}
          title='Settings'
          selection={selection}
          setSelection={setSelection}
          reset={reset}
        >
          <ModalBody
            themeFont={themeFont}
            themeColor={themeColor}
            setThemeFont={setThemeFont}
            setThemeColor={setThemeColor}
          />
        </Modal>
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
              onClick={() => {
                setVisible(!visible);
                pause();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PomodoroProject;
