import { Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { useNavigate } from "react-router";
/*
Training page:
    - Main training dashboard
    - Workout of the day
    - Workout session tracker
    - Workout journal
    - Exercise log
*/

interface Exercise {
  id: number;
  name: string;
  restTime: number;
  weight: number;
  reps: number;
}
interface Workout {
  id: number;
  name: string;
  exercises: Exercise[];
}

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
        reps: 10,
      },
      {
        id: 2,
        name: "Bench Press",
        restTime: 45,
        weight: 80,
        reps: 8,
      },
      {
        id: 3,
        name: "Deadlift",
        restTime: 90,
        weight: 120,
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
        reps: 10,
      },
      {
        id: 2,
        name: "Pull-ups",
        restTime: 45,
        weight: 0,
        reps: 8,
      },
      {
        id: 3,
        name: "Barbell Row",
        restTime: 90,
        weight: 70,
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
        reps: 10,
      },
      {
        id: 2,
        name: "Dumbbell Fly",
        restTime: 45,
        weight: 20,
        reps: 8,
      },
      {
        id: 3,
        name: "Cable Tricep Extension",
        restTime: 90,
        weight: 30,
        reps: 6,
      },
    ],
  },
];

const TrainingPage = () => {
  const workouts: Workout[] = workoutsMock;

  const navigate = useNavigate();

  const [selectedWorkout, setSelectedWorkout] = React.useState(
    workouts[0].name
  );

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedWorkout(event.target.value as string);
  };

  const handleStartWorkout = () => {
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
          value={selectedWorkout}
          label="Treino"
          onChange={handleChange}
        >
          {workouts.map((workout) => (
            <MenuItem value={workout.name}>{workout.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <Button variant="contained" onClick={handleStartWorkout}>
          Start
        </Button>
      </FormControl>
    </div>
  );
};

export default TrainingPage;
