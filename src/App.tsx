import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoutes from "./auth/PrivateRoutes/PrivateRoutes";
import LoginPage from "./pages/LoginPage/LoginPage";
import TrainingPage from "./pages/Training/Training.page";

function App() {

  return (
    <Box p={2}>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route element={<TrainingPage/>} path="/home" />
            <Route element={<Navigate to="/home" />} path="*" />
          </Route>
          <Route element={<LoginPage/>} path="/login" />
          <Route element={<Navigate to="/login" />} path="*" />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
