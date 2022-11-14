import React from 'react';
import SelectButton from './components/SelectButton';
import { dataTypeButtons } from './utils';
import Timer from './components/Timer';
import Modal from '../../components/modal';
import { AiOutlineSetting } from 'react-icons/ai';

import './styles.scss';

import useColorTheme from './hooks/useColorTheme';
import useTimer from './hooks/useTimer';
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
        // data-theme={theme}
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
          {/*  */}
          <div className='modal-body'>
            <div className='flex-spread p-t'>
              <span className='txt-pom-dark font-weight-bold letter-spacing-1'>
                FONT
              </span>
              <div className='font-selection-btns'>
                <label className='font-radio-input font-kumbh'>
                  <input
                    type='radio'
                    name='font-type'
                    defaultValue='font-type'
                    checked={themeFont === 'kumbh'}
                    onChange={() => setThemeFont('kumbh')}
                  />
                  <span></span>
                </label>
                <label className='font-radio-input font-roboto'>
                  <input
                    type='radio'
                    name='font-type'
                    defaultValue='font-type'
                    checked={themeFont === 'roboto'}
                    onChange={() => setThemeFont('roboto')}
                  />
                  <span></span>
                </label>
                <label className='font-radio-input font-mono'>
                  <input
                    type='radio'
                    name='font-type'
                    defaultValue='font-type'
                    checked={themeFont === 'mono'}
                    onChange={() => setThemeFont('mono')}
                  />
                  <span></span>
                </label>
              </div>
            </div>
          </div>

          {/*  */}
          <div className='modal-body'>
            <div className='flex-spread p-t'>
              <span className='txt-pom-dark font-weight-bold letter-spacing-1'>
                COLOR
              </span>
              <div className='color-selection-btns'>
                <label className='pomo-alert color-radio-input'>
                  <input
                    onClick={() => setThemeColor('alert')}
                    type='radio'
                    name='key'
                    defaultValue='value'
                    checked={themeColor === 'alert'}
                  />
                  <span></span>
                </label>
                <label className='pomo-success  color-radio-input'>
                  <input
                    onClick={() => setThemeColor('success')}
                    type='radio'
                    name='key'
                    defaultValue='value'
                    checked={themeColor === 'success'}
                  />
                  <span></span>
                </label>
                <label className='pomo-warning  color-radio-input'>
                  <input
                    onClick={() => setThemeColor('warning')}
                    type='radio'
                    name='key'
                    defaultValue='value'
                    checked={themeColor === 'warning'}
                  />
                  <span></span>
                </label>
              </div>
            </div>
          </div>
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
