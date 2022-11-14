import React from 'react';
import Delay from '../Delay.animation';
import { AiOutlineClose } from 'react-icons/ai';
import Selection from '../../projects//pomodoro/models//selection.interface';
import { timeLabeledInputsData } from '..//../projects//pomodoro/utils';
import '../../styles/Modal.css';
interface Props {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
  title?: string;
  children: React.ReactNode;
  reset: (num: number) => void;

  setSelection: React.Dispatch<React.SetStateAction<Selection>>;
  selection: Selection;
}

const Modal: React.FC<Props> = ({
  setVisible,
  visible,
  title = 'Modal Title',
  setSelection,
  selection,
  reset,
  children,
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
            <span className='txt-pom-dark font-weight-bold letter-spacing-1'>
              TIME (Minutes)
            </span>

            <div className='input-wrapper flex-spread'>
              {timeLabeledInputsData(timeInputs, handleInputChange).map(
                (item) => (
                  <div className=' w-30' key={item.label}>
                    <label className='_label' htmlFor={item.label}>
                      {item.label}
                    </label>
                    <input
                      type={item.input.type}
                      name={item.input.name}
                      id={item.input.id}
                      className={item.input.className}
                      min={item.input.min}
                      max={item.input.max}
                      value={item.input.value}
                      onChange={item.input.onChange}
                    />
                  </div>
                )
              )}
            </div>
          </div>
          {children}
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
