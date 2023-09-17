interface TimerProps {
  seconds: number;
}

const Timer = ({ seconds }: TimerProps) => {
  const absSeconds = Math.abs(seconds);

  const formatedSeconds =
    absSeconds % 60 < 10 ? `0${absSeconds % 60}` : absSeconds % 60;

  const minutes = Math.floor(absSeconds / 60) % 60;
  const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const hours = Math.floor(absSeconds / 3600);
  const formatedHours = hours < 10 ? `0${hours}` : hours;

  const formatedTime = `${
    hours ? formatedHours + ":" : ""
  }${formatedMinutes}:${formatedSeconds}`;

  return (
    <>
      {seconds < 0 && "-"}
      {formatedTime}
    </>
  );
};

export default Timer;
