import { AccessTime, FitnessCenter, Link, Loop } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControl,
  Input,
  InputAdornment,
} from "@mui/material";
import React from "react";
import { Exercise } from "../../Training/Training";

interface ExerciseTrackingProps {
  exercise: Exercise;
  handleExerciseChange: (
    panel: number
  ) => (_event: React.SyntheticEvent, isExpanded: boolean) => void;
  expanded: boolean;
}

// TODO:
// - [ ] Add a total exercise timer

const ExerciseTracking = ({
  exercise,
  handleExerciseChange,
  expanded,
}: ExerciseTrackingProps) => {
  const [exerciseTracking, setExerciseTracking] =
    React.useState<Exercise>(exercise);

  const handleWeightChange = (event: any) => {
    const newWeight = Number(event.target.value);
    setExerciseTracking({
      ...exerciseTracking,
      weight: newWeight < 0 ? 0 : newWeight,
    });
  };

  return (
    <Accordion
      key={exercise.id}
      expanded={expanded}
      onChange={handleExerciseChange(exercise.id)}
    >
      <AccordionSummary>
        <h2>{exercise.name}</h2>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" gap={1}>
              <AccessTime /> <span>{exerciseTracking.restTime}s</span>
            </Box>
            <Box display="flex" gap={1}>
              <Link /> <span>{exerciseTracking.series} séries</span>
            </Box>
            <Box display="flex" gap={1}>
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
  );
};

export default ExerciseTracking;
