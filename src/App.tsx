import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Training</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/statistics">Statistics</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
