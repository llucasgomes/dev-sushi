import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

export const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
