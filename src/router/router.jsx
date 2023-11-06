import { createBrowserRouter } from "react-router-dom";
import MainPage from "../app/pages/mainpage";
import App from "../App";
import Categories from "../app/pages/categories";
import Sites from "../app/pages/sites";
import About from "../app/pages/about";
import OneItem from "../app/pages/oneitem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/sites",
        element: <Sites />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/item/:id",
        element: <OneItem />,
      },
    ],
  },
]);

export default router;
