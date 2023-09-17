import { AccessTime, FitnessCenter, Loop } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { useNavigate } from "react-router";
import { Workout } from "./Training";
/*
Training page:
    - Main training dashboard
    - Workout of the day
    - Workout session tracker
    - Workout journal
    - Exercise log
*/

const workoutsMock = [
  {
    id: 1,
    name: "Treino A",
    exercises: [
      {
        id: 1,
        name: "Squat",
        restTime: 60,
        weight: 100,
        weightUnit: "kg",
        series: 3,
        reps: 10,
      },
      {
        id: 2,
        name: "Bench Press",
        restTime: 45,
        weight: 80,
        weightUnit: "kg",
        series: 3,
        reps: 8,
      },
      {
        id: 3,
        name: "Deadlift",
        restTime: 90,
        weight: 120,
        weightUnit: "kg",
        series: 3,
        reps: 6,
      },
    ],
  },
  {
    id: 2,
    name: "Treino B",
    exercises: [
      {
        id: 1,
        name: "Overhead Press",
        restTime: 60,
        weight: 50,
        weightUnit: "kg",
        series: 3,
        reps: 10,
      },
      {
        id: 2,
        name: "Pull-ups",
        restTime: 45,
        weight: 30,
        weightUnit: "kg",
        series: 3,
        reps: 8,
      },
      {
        id: 3,
        name: "Barbell Row",
        restTime: 90,
        weight: 70,
        weightUnit: "kg",
        series: 3,
        reps: 6,
      },
    ],
  },
  {
    id: 3,
    name: "Treino C",
    exercises: [
      {
        id: 1,
        name: "Leg Press",
        restTime: 60,
        weight: 150,
        weightUnit: "kg",
        series: 3,
        reps: 10,
      },
      {
        id: 2,
        name: "Dumbbell Fly",
        restTime: 45,
        weight: 20,
        weightUnit: "kg",
        series: 3,
        reps: 8,
      },
      {
        id: 3,
        name: "Cable Tricep Extension",
        restTime: 90,
        weight: 30,
        weightUnit: "kg",
        series: 3,
        reps: 6,
      },
    ],
  },
];

const TrainingPage = () => {
  const workouts: Workout[] = workoutsMock;

  const navigate = useNavigate();

  const [selectedWorkout, setSelectedWorkout] = React.useState(workouts[0]);

  const handleChange = (event: SelectChangeEvent) => {
    const workout =
      workouts.find((workout) => workout.name === event.target.value) ||
      workouts[0];
    setSelectedWorkout(workout);
  };

  const handleStartWorkout = () => {
    window.localStorage.setItem("workout", JSON.stringify(selectedWorkout));
    navigate("/workout-tracking");
  };

  return (
    <div>
      <h1>Training</h1>
      <FormControl fullWidth>
        <InputLabel id="workout-select-label">Treino</InputLabel>
        <Select
          variant="outlined"
          labelId="workout-select-label"
          id="workout-select"
          value={selectedWorkout.name}
          label="Treino"
          onChange={handleChange}
        >
          {workouts.map((workout) => (
            <MenuItem key={workout.id} value={workout.name}>
              {workout.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <Button variant="contained" onClick={handleStartWorkout}>
          Start
        </Button>
      </FormControl>
      {/* display list of exercises */}
      {selectedWorkout.exercises.map((exercise) => (
        <Box key={exercise.id}>
          <h2>{exercise.name}</h2>
          <p>
            <AccessTime /> {exercise.restTime}s
          </p>
          <p>
            <FitnessCenter /> {exercise.weight}
            {exercise.weightUnit}
          </p>
          <p>
            <Loop />
            {exercise.series} séries - {exercise.reps} rep.
          </p>
        </Box>
      ))}
    </div>
  );
};

export default TrainingPage;
