import { createBrowserRouter } from "react-router-dom";
import MainPage from "../app/pages/mainpage";
import App from "../App";
import Categories from "../app/pages/categories";
import Sites from "../app/pages/sites";
import About from "../app/pages/about";
import OneItem from "../app/pages/oneitem";
import OneCategory from "../app/pages/onecategory";

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
        path: "/categories/:id",
        element: <OneCategory />,
      },
      {
        path: "/sites",
        element: <Sites />,
      },
      {
        path: "/item/:id",
        element: <OneItem />,
      },
    ],
  },
]);

export default router;
