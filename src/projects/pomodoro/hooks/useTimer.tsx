import React from 'react';
const useTimer = () => {
  const [selection, setSelection] = React.useState<{
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
  }>({
    pomodoro: {
      time: 3,
      type: 'pomodoro',
      selected: true,
    },
    shortBreak: {
      time: 1,
      type: 'shortBreak',
      selected: false,
    },
    longBreak: {
      time: 2,
      type: 'longBreak',
      selected: false,
    },
  });

  const [initialTime, setInitialTime] = React.useState(
    selection.pomodoro.time * 60
  );
  const [time, setTime] = React.useState(initialTime);
  const [isActive, setIsActive] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const [message, setMessage] = React.useState('start');
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');

  const toggle = () => {
    setIsActive(!isActive);
    setMessage(isActive ? 'start' : 'pause');
    if (!isActive && time === 0) {
      reset();
    }
  };

  const reset = (num?: number) => {
    if (num) {
      setTime(num);
      setInitialTime(num);
    } else {
      setTime(initialTime);
    }
    setIsActive(false);
    setIsPaused(false);
    setMessage('start');
  };

  const pause = () => {
    setIsPaused(!isPaused);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (isActive && time > 0) {
        setTime(time - 1);
      } else if (isActive && time === 0) {
        setIsActive(false);
        setMessage('reset');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, isPaused, time]);

  return {
    time,
    isActive,
    isPaused,
    toggle,
    reset,
    pause,
    minutes,
    seconds,
    message,
    setTime,
    initialTime,
    setInitialTime,
    selection,
    setSelection,
  };
};

export default useTimer;
