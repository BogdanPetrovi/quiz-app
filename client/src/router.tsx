import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import FindQuestion from "./pages/FindQuestion";
import SingleQuestion from "./pages/SingleQuesiton";

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/question', element: <FindQuestion /> },
  { path: '/question/:id', element: <SingleQuestion /> },
  { path: '*', element: <NotFound /> }
])