import { useState } from "react";
import "./WorkoutsEdit.styles.css";
import { get } from "http";
import { Link } from "react-router-dom";

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight: number;
}

export interface Workout {
  id: string;
  name: string;
  exercises: Exercise[];
}

const workoutMock = {
  name: "Chest Day",
  id: "1",
  exercises: [
    {
      name: "Bench Press",
      sets: 3,
      reps: 10,
      weight: 135,
    },
    {
      name: "Incline Bench Press",
      sets: 3,
      reps: 10,
      weight: 135,
    },
    {
      name: "Decline Bench Press",
      sets: 3,
      reps: 10,
      weight: 135,
    },
  ],
};

export const getWorkouts = () => {
  const workoutsStorage = window.localStorage.getItem("workouts") as string;
  const workoutsJSON = JSON.parse(workoutsStorage) || [];
  return workoutsJSON;
};

const WorkoutsEdit = () => {
  //   window.localStorage.setItem("workouts", JSON.stringify([]));

  const [workouts, setWorkouts] = useState(getWorkouts);

  const addWorkout = () => {
    const workoutsJSON = getWorkouts();
    workoutsJSON.push({
      name: "Workout " + workouts.length,
      id: workouts.length + 1 + "",
      exercises: [],
    });
    window.localStorage.setItem("workouts", JSON.stringify(workoutsJSON));
    setWorkouts(workoutsJSON);
  };

  return (
    <main className="workouts-edit">
      <div className="header">
        <h1>Workouts</h1>
        <button onClick={addWorkout}>+</button>
      </div>
      <ul className="workouts-list">
        {workouts.map((workout: Workout) => (
          <li key={workout.id}>
            <span>{workout.name}</span>
            <Link to={`/workouts/details/${workout.id}`}>
              <button>Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default WorkoutsEdit;
