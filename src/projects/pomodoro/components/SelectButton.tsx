import React from 'react';
import { addSelectedToButton } from '../utils';
interface Props {
  selectTheme: (theme: string) => void;
  dataType: string;
  text: string;
  className?: string;
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
  id: string;
}
const SelectButton: React.FC<Props> = ({
  selectTheme,
  dataType,
  text,
  reset,
  className = 'pomodoro-button',
  selection,
  id,
}) => {
  return (
    <button
      id={id}
      datatype={dataType}
      className={className}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        const dataTheme = e.currentTarget.getAttribute('datatype') as string;
        selectTheme(dataTheme);
        addSelectedToButton(e);

        reset(selection[id as keyof typeof selection].time * 60);
        for (const key in selection) {
          if (key === id) {
            selection[key as keyof typeof selection].selected = true;
          } else {
            selection[key as keyof typeof selection].selected = false;
          }
        }
      }}
    >
      {text}
    </button>
  );
};

export default SelectButton;
