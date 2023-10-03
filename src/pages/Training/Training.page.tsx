import { TimerOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { useNavigate } from "react-router";
import workoutsMock from "../../mocks/workouts/workoutsMock";
import { Workout } from "./Training";
import ExerciseDisplay from "./components/ExerciseDisplay";

/*
Training page:
    - Main training dashboard
    - Workout of the day
    - Workout session tracker
    - Workout journal
    - Exercise log
*/

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
    <Box display="flex" flexDirection="column" height="100%" gap="16px">
      <h1>Escolha seu treino 🔥</h1>
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
      <Box mt={2} mb={3}>
        <Table size="small">
          <TableHead>
            <TableCell></TableCell>
            <TableCell>Série</TableCell>
            <TableCell>Reps.</TableCell>
            <TableCell>
              <TimerOutlined />
            </TableCell>
            <TableCell>Carga</TableCell>
          </TableHead>
          <TableBody>
            {/* display list of exercises */}
            {selectedWorkout.exercises.map((exercise, index) => (
              <ExerciseDisplay
                key={exercise.id}
                exercise={exercise}
                index={index}
              />
            ))}
          </TableBody>
        </Table>
      </Box>
      <FormControl fullWidth>
        <Button variant="contained" onClick={handleStartWorkout}>
          Start
        </Button>
      </FormControl>
    </Box>
  );
};

export default TrainingPage;
