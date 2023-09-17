import { Link } from "react-router-dom";

const WorkoutsStart = () => {
  const localStorage = window.localStorage;

  if (localStorage.getItem("workout") === null) {
    return (
      <>
        <span>Looks like there's no workouts defined.</span>
        <p>Add your workouts at:</p>
        <Link to="/workouts/edit">
          <button className="button">Workouts</button>
        </Link>
      </>
    );
  }

  return (
    <div>
      <h1>WorkoutsStart</h1>
    </div>
  );
};

export default WorkoutsStart;
