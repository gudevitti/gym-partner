import { AccessTime, FitnessCenter, Link, Loop } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
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

const WeightButton = ({ value, onClick }: any) => {
  const operator = value < 0 ? "" : "+";
  return (
    <Button value={value} onClick={onClick} variant="outlined">
      {operator}
      {value}
    </Button>
  );
};

const ExerciseTracking = ({
  exercise,
  handleExerciseChange,
  expanded,
}: ExerciseTrackingProps) => {
  const [exerciseTracking, setExerciseTracking] =
    React.useState<Exercise>(exercise);

  const handleWeightChange = (event: any) => {
    const newWeight = Number(event.target.value) + exerciseTracking.weight;
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
          <Box my={1} display="flex" gap={1}>
            <FitnessCenter />
            Peso:
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <WeightButton value={-10} onClick={handleWeightChange} />
            <WeightButton value={-1} onClick={handleWeightChange} />

            <h4>
              {exerciseTracking.weight}
              {exerciseTracking.weightUnit}
            </h4>
            <WeightButton value={1} onClick={handleWeightChange} />
            <WeightButton value={10} onClick={handleWeightChange} />
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default ExerciseTracking;
