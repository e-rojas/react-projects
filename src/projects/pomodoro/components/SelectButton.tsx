import React from 'react';
import { addSelectedToButton } from '../utils';
import Selection from '../models/selection.interface';
interface Props {
  selectTheme: (theme: string) => void;
  dataType: string;
  text: string;
  className?: string;
  reset: (num: number) => void;

  setSelection: React.Dispatch<React.SetStateAction<Selection>>;
  selection: Selection;
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
