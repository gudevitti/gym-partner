import React from "react";

type TimerStyle = "timer" | "stopwatch";

const styles = {
  timer: (timer: number) => timer + 1,
  stopwatch: (timer: number) => timer - 1,
};

const useTimer = (initialTimer = 0, style: TimerStyle = "timer") => {
  const [timer, setTimer] = React.useState(initialTimer);
  const [isRunning, setIsRunning] = React.useState(false);

  let timerInterval = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (timer === 0 && style === "stopwatch") {
      stop();
      setTimer(initialTimer);
    }
  }, [timer, style, initialTimer]);

  function start() {
    setIsRunning(true);
    timerInterval.current = setInterval(() => {
      setTimer((prevTimer) => styles[style](prevTimer));
    }, 1000);
  }

  function stop() {
    setIsRunning(false);
    clearInterval(timerInterval.current as NodeJS.Timeout);
    timerInterval.current = null;
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
