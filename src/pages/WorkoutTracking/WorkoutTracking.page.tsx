import { Box, Button } from "@mui/material";
import React from "react";
import { Workout } from "../Training/Training";
import ExerciseTracking from "./components/ExerciseTracking";

const WorkoutTrackingPage = () => {
  const storageWorkout =
    (window.localStorage.getItem("workout") as string) || "{}";
  const workout: Workout = JSON.parse(storageWorkout);

  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleExerciseChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <h1>{workout.name}</h1>
        <Button variant="contained">Start</Button>
      </Box>
      {workout.exercises.map((exercise) => (
        <ExerciseTracking
          exercise={exercise}
          handleExerciseChange={handleExerciseChange}
          expanded={expanded === exercise.id}
        />
      ))}
    </>
  );
};

export default WorkoutTrackingPage;
