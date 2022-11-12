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
