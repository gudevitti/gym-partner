interface TimerProps {
  seconds: number;
}

const Timer = ({ seconds }: TimerProps) => {
  const formatedSeconds = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;

  const minutes = Math.floor(seconds / 60) % 60;
  const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const hours = Math.floor(seconds / 3600);
  const formatedHours = hours < 10 ? `0${hours}` : hours;

  const formatedTime = `${
    hours ? formatedHours + ":" : ""
  }${formatedMinutes}:${formatedSeconds}`;

  return <>{formatedTime}</>;
};

export default Timer;
