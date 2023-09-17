import { LoaderFunction, useLoaderData } from "react-router-dom";
import { Workout } from "../WorkoutsEdit/WorkoutsEdit.page";

export async function loader({ params }: any) {
  const workoutStorage = window.localStorage.getItem("workouts") as string;
  const workoutsJSON = JSON.parse(workoutStorage) || [];
  const workout = workoutsJSON.find(
    (workout: Workout) => workout.id === params.id
  );
  return { ...workout };
}

const WorkoutsDetails = () => {
  const workout = useLoaderData() as Workout;
  return (
    <main className="workouts-details">
      <h1>{workout.name}</h1>
      <h2>Exercises</h2>
      <button>Add exercises</button>
      <ul>
        {workout.exercises.map((exercise) => (
          <li>
            <span>{exercise.name}</span>
            <span>{exercise.sets}</span>
            <span>{exercise.reps}</span>
            <span>{exercise.weight}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default WorkoutsDetails;
