import React from "react";

const useTimer = () => {
  const [timer, setTimer] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);

  let timerInterval: any;

  function start() {
    setIsRunning(true);
    timerInterval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }

  function stop() {
    setIsRunning(false);
    clearInterval(timerInterval);
  }

  function reset() {
    setIsRunning(false);
    setTimer(0);
    stop();
  }

  return {
    timer: timer,
    isRunning: isRunning,
    start: start,
    stop: stop,
    reset: reset,
  };
};

export default useTimer;
