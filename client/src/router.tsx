import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import FindQuestion from "./pages/FindQuestion";
import SingleQuestion from "./pages/SingleQuesiton";
import Simulation from "./pages/Simulation";

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/question', element: <FindQuestion /> },
  { path: '/question/:id', element: <SingleQuestion /> },
  { path: '/simulation', element: <Simulation /> },
  { path: '*', element: <NotFound /> }
])