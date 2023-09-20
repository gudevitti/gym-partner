import { Box, LinearProgress } from "@mui/material";
import Timer from "../../../../components/Timer/Timer";

interface RestTimerProps {
  isResting: boolean;
  seconds: number;
  maxSeconds: number;
}

const ExerciseRestTimer = ({
  isResting,
  seconds,
  maxSeconds,
}: RestTimerProps) => {
  if (!isResting) return null;

  const progress = (seconds / maxSeconds) * -100 + 100;

  console.log(progress);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <div>
        <Timer seconds={seconds} />
      </div>
      <Box mb={1} sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            "&.MuiLinearProgress-root": {
              height: "25px",
              "& span": {
                transition: "transform 1s linear",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ExerciseRestTimer;
