import { AccessTime, FitnessCenter, Link, Loop } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
} from "@mui/material";
import React from "react";
import useTimer from "../../../../hooks/useTimer/useTimer";
import { Exercise } from "../../../Training/Training";
import ExerciseRestTimer from "../ExerciseRestTimer/ExerciseRestTimer";

interface ExerciseTrackingProps {
  exercise: Exercise;
  handleExerciseChange: (panel: number) => void;
  expanded: boolean;
}

// TODO:
// - [ ] Add a total exercise timer

const ExerciseTracking = ({
  exercise,
  handleExerciseChange,
  expanded,
}: ExerciseTrackingProps) => {
  const { start, reset, isRunning, timer } = useTimer(
    exercise.restTime,
    "stopwatch"
  );

  const [exerciseTracking, setExerciseTracking] =
    React.useState<Exercise>(exercise);

  const handleWeightChange = (event: any) => {
    const newWeight = event.target.value;
    setExerciseTracking({
      ...exerciseTracking,
      weight: newWeight,
    });
  };

  const handleRestTimer = () => {
    if (isRunning) {
      reset();
    } else {
      start();
    }
  };

  React.useEffect(() => {
    if (!isRunning) {
      reset();
    }
  }, [isRunning, reset]);

  return (
    <>
      <Accordion key={exercise.id} expanded={expanded}>
        <AccordionSummary>
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="nowrap"
            justifyContent="space-between"
            width="100%"
          >
            <Box
              display="flex"
              width="100%"
              onClick={() => handleExerciseChange(exercise.id)}
            >
              <h2>{exercise.name}</h2>
            </Box>
            {expanded && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleRestTimer}
              >
                Rest
              </Button>
            )}
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <ExerciseRestTimer
              isResting={isRunning}
              seconds={timer}
              maxSeconds={exercise.restTime}
            />
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" gap={1} alignItems="center">
                <AccessTime /> <span>{exerciseTracking.restTime}s</span>
              </Box>
              <Box display="flex" gap={1} alignItems="center">
                <Link /> <span>{exerciseTracking.series} séries</span>
              </Box>
              <Box display="flex" gap={1} alignItems="center">
                <Loop /> <span>{exerciseTracking.reps} rep.</span>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Box my={1} display="flex" gap={1}>
                <FitnessCenter />
                Peso:
              </Box>
              <FormControl sx={{ m: 1, width: "13ch" }} variant="outlined">
                <Input
                  type="number"
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">kg</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  onChange={handleWeightChange}
                  value={exerciseTracking.weight}
                />
              </FormControl>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ExerciseTracking;
