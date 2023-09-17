import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

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
      { path: "/", element: <div>Training</div> },
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
