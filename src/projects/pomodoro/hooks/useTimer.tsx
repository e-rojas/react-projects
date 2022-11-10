import React from 'react';

const useTimer = (initialState: number) => {
  const [time, setTime] = React.useState(initialState);
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
      setMessage('start');
    }
  };

  const reset = () => {
    setTime(initialState);
    setIsActive(false);
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
  };
};

export default useTimer;
