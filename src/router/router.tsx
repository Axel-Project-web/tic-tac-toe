//context
import GameProvider from "../context/game.context";

//react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Home from "../pages/Home";
import Game from "../pages/Game";

//Route Object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/start",
    element: <Game />,
  },
]);

export default function RouterGameApp() {
  return (
    <GameProvider>
      <RouterProvider router={router} />
    </GameProvider>
  );
}
