import { createBrowserRouter } from "react-router-dom";
import { App } from "../layout";
import { HomePage, PokemonPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/pokemon/:id",
        element: <PokemonPage />,
      },
    ],
  },
]);
