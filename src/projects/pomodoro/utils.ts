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
    id: 'short-break',
    text: 'short break',
    dataType: 'roboto',
    className: 'pomodoro-button',
  },
  {
    id: 'long-break',
    text: 'long break',
    dataType: 'mono',
    className: 'pomodoro-button',
  },
];
