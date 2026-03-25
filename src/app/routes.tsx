import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { Programacion } from "./components/Programacion";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/programacion",
    Component: Programacion,
  },
]);
