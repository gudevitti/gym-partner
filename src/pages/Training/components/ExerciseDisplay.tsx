import { TableCell, TableRow } from "@mui/material";
import { Exercise } from "../Training";

interface ExerciseDisplayProps {
  exercise: Exercise;
  index: number;
}

const ExerciseDisplay = ({ exercise, index }: ExerciseDisplayProps) => {
  const style = { backgroundColor: index % 2 === 0 ? "#eee" : "#fff" };

  return (
    <>
      <TableRow style={style}></TableRow>
      <TableRow style={style}>
        <TableCell style={{ border: 0 }}>
          <b>{exercise.name.toLocaleUpperCase()}</b>
        </TableCell>
        <TableCell align="center">{exercise.series}</TableCell>
        <TableCell align="center">{exercise.reps}</TableCell>
        <TableCell>{exercise.restTime}s</TableCell>
        {/* <TableCell style={{ whiteSpace: "nowrap" }}>
          {`
        ${exercise.weight}
        ${exercise.weightUnit}
        `}
        </TableCell> */}
      </TableRow>
    </>
  );
};

export default ExerciseDisplay;
