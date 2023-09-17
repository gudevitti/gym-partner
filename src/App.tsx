import { Box } from "@mui/material";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <Box p={2}>
      <nav>
        <Link to="/">Training</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/statistics">Statistics</Link>
      </nav>
      <Outlet />
    </Box>
  );
}

export default App;
