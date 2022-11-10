import React from 'react';
import { addSelectedToButton } from '../utils';
interface Props {
  selectTheme: (theme: string) => void;
  dataType: string;
  text: string;
  className?: string;
  reset: () => void;
}
const SelectButton: React.FC<Props> = ({
  selectTheme,
  dataType,
  text,
  reset,
  className = 'pomodoro-button',
}) => {
  return (
    <button
      datatype={dataType}
      className={className}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        reset();
        const dataTheme = e.currentTarget.getAttribute('datatype') as string;
        selectTheme(dataTheme);
        addSelectedToButton(e);
      }}
    >
      {text}
    </button>
  );
};

export default SelectButton;
