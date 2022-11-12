import React from 'react';
import Delay from '../Delay.animation';
import { AiOutlineClose } from 'react-icons/ai';
import '../../styles/Modal.css';
interface Props {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
  title?: string;
  reset: (num: number) => void;

  setSelection: React.Dispatch<
    React.SetStateAction<{
      pomodoro: {
        time: number;
        type: string;
        selected: boolean;
      };
      shortBreak: {
        time: number;
        type: string;
        selected: boolean;
      };
      longBreak: {
        time: number;
        type: string;
        selected: boolean;
      };
    }>
  >;
  selection: {
    pomodoro: {
      time: number;
      type: string;
      selected: boolean;
    };
    shortBreak: {
      time: number;
      type: string;
      selected: boolean;
    };
    longBreak: {
      time: number;
      type: string;
      selected: boolean;
    };
  };
}

const Modal: React.FC<Props> = ({
  setVisible,
  visible,
  title = 'Modal Title',
  setSelection,
  selection,
  reset,
}) => {
  const [timeInputs, setTimeInputs] = React.useState({
    pomodoro: selection.pomodoro.time,
    shortBreak: selection.shortBreak.time,
    longBreak: selection.longBreak.time,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTimeInputs((prev) => ({ ...prev, [name]: value }));
  };

  const resetToDefault = () => {
    setTimeInputs({
      pomodoro: selection.pomodoro.time,
      shortBreak: selection.shortBreak.time,
      longBreak: selection.longBreak.time,
    });
  };

  const activeSelection = (): {
    time: number;
    type: string;
    selected: boolean;
  } => {
    if (selection.pomodoro.selected) {
      return selection.pomodoro;
    } else if (selection.shortBreak.selected) {
      return selection.shortBreak;
    } else if (selection.longBreak.selected) {
      return selection.longBreak;
    }
    return {
      time: 0,
      type: '',
      selected: false,
    };
  };

  if (!visible) {
    return null;
  }
  return (
    <div className={`modal ${visible ? 'enter-done' : 'exit'}`}>
      <Delay delay={500}>
        <div className='modal-content'>
          <div className='modal-header'>
            <h2>{title} </h2>
            <AiOutlineClose
              onClick={() => {
                setVisible(false);
                resetToDefault();
              }}
              className='pointer'
            />
          </div>
          <div className='modal-body'>
            <span className='txt-pom-dark font-weight-bold'>
              TIME (Minutes)
            </span>

            <div className='input-wrapper flex-spread'>
              <div className=' w-30'>
                <label className='_label' htmlFor='pomodoro'>
                  pomodoro
                </label>
                <input
                  type='number'
                  name='pomodoro'
                  id='pomodoro'
                  className='form-control'
                  min={1}
                  max={60}
                  value={timeInputs.pomodoro}
                  onChange={handleInputChange}
                />
              </div>
              <div className=' w-30'>
                <label className='_label' htmlFor='short-break'>
                  short break
                </label>
                <input
                  type='number'
                  name='shortBreak'
                  id='short-break'
                  className='form-control'
                  min={1}
                  max={60}
                  value={timeInputs.shortBreak}
                  onChange={handleInputChange}
                />
              </div>
              <div className=' w-30'>
                <label className='_label' htmlFor='long-break'>
                  long break
                </label>
                <input
                  type='number'
                  name='longBreak'
                  id='long-break'
                  className='form-control'
                  min={1}
                  max={60}
                  value={timeInputs.longBreak}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className='modal-body'>
            <p>Modal body text goes here.</p>
          </div>
          <div className='modal-footer '>
            <button
              onClick={() => {
                setVisible(false);
                setSelection({
                  pomodoro: {
                    ...selection.pomodoro,
                    time: Number(timeInputs.pomodoro),
                  },
                  shortBreak: {
                    ...selection.shortBreak,
                    time: Number(timeInputs.shortBreak),
                  },
                  longBreak: {
                    ...selection.longBreak,
                    time: Number(timeInputs.longBreak),
                  },
                });
                const time =
                  timeInputs[
                    activeSelection().type as
                      | 'pomodoro'
                      | 'shortBreak'
                      | 'longBreak'
                  ] * 60;
                reset(time);
              }}
              className='_btn absolute-bottom-edge-position '
            >
              Apply
            </button>
          </div>
        </div>
      </Delay>
    </div>
  );
};

export default Modal;
