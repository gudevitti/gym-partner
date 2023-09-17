import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Box p={2}>
      <Box pb={2}>
        <nav>
          <Link to="/">Training</Link>
          <Link to="/workouts">Workouts</Link>
          <Link to="/statistics">Statistics</Link>
        </nav>
      </Box>
      <Outlet />
    </Box>
  );
}

export default App;
