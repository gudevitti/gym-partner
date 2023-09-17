import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import TrainingPage from "./pages/Training/Training.page";
import WorkoutTrackingPage from "./pages/WorkoutTracking/WorkoutTracking.page";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        /*
         Training page:
          - Main training dashboard
            - Workout of the day
          - Workout session tracker
          - Workout journal
          - Exercise log
      */
        {
          path: "/",
          element: <TrainingPage />,
        },
        {
          path: "/workout-tracking",
          element: <WorkoutTrackingPage />,
        },
        /*
        Workout and exercise editing page:
          - Edit Workouts
          - Customzie Exercises
          - Create Training plan
      */
        { path: "/workouts", element: <div>Workouts</div> },
        /*
        Statistics page:
          - Workout history
          - Performance analytics
          - Progress tracker
          - Fitness stats
      */
        { path: "/statistics", element: <div>Statistics</div> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
