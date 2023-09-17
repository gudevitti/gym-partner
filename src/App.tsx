import "./App.css";
import {
  LoaderFunction,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home/Home.page";
import WorkoutsStart from "./pages/WorkoutsStart/WorkoutsStart.page";
import WorkoutsEdit from "./pages/WorkoutsEdit/WorkoutsEdit.page";
import WorkoutsDetails, {
  loader as workoutLoader,
} from "./pages/WorkoutsDetails/WorkoutsDetails.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/workouts/start",
    element: <WorkoutsStart />,
  },
  {
    path: "/workouts/edit",
    element: <WorkoutsEdit />,
  },
  {
    path: "/workouts/results",
    element: <h1>Results</h1>,
  },
  {
    path: "/workouts/details/:id",
    element: <WorkoutsDetails />,
    loader: workoutLoader as LoaderFunction,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
