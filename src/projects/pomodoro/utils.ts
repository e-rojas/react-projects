export const addSelectedToButton = (e: React.MouseEvent<HTMLButtonElement>) => {
  const buttons = document.querySelectorAll('.pomodoro-button');
  buttons.forEach((button) => {
    button.classList.remove('selected');
  });
  e.currentTarget.classList.add('selected');
};

export const dataTypeButtons = [
  {
    id: 'pomodoro',
    text: 'pomodoro',
    dataType: 'system',
    className: 'pomodoro-button selected',
  },
  {
    id: 'shortBreak',
    text: 'short break',
    dataType: 'roboto',
    className: 'pomodoro-button',
  },
  {
    id: 'longBreak',
    text: 'long break',
    dataType: 'mono',
    className: 'pomodoro-button',
  },
];

export const timeLabeledInputsData = (
  timeInputs: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  },
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
): {
  label: string;
  input: {
    name: string;
    className: string;
    min: number;
    max: number;
    id: string;
    type: string;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}[] => {
  return [
    {
      label: 'pomodoro',
      input: {
        type: 'number',
        name: 'pomodoro',
        id: 'pomodoro',
        className: 'form-control',
        min: 1,
        max: 60,
        value: timeInputs.pomodoro,
        onChange: handleInputChange,
      },
    },
    {
      label: 'short break',
      input: {
        type: 'number',
        name: 'shortBreak',
        id: 'shortBreak',
        className: 'form-control',
        min: 1,
        max: 60,
        value: timeInputs.shortBreak,
        onChange: handleInputChange,
      },
    },
    {
      label: 'long break',
      input: {
        type: 'number',
        name: 'longBreak',
        id: 'longBreak',
        className: 'form-control',
        min: 1,
        max: 60,
        value: timeInputs.longBreak,
        onChange: handleInputChange,
      },
    },
  ];
};
