import { Link } from "react-router-dom";
import "./Home.styles.css";

const Home = () => (
  <main className="home-main">
    <h1>Workouts</h1>
    <Link to="/workouts/start">
      <button className="button">Start</button>
    </Link>
    <Link to="/workouts/edit">
      <button className="button">Workouts</button>
    </Link>
    <Link to="/workouts/results">
      <button className="button">Results</button>
    </Link>
  </main>
);

export default Home;
