import { createBrowserRouter } from "react-router-dom";
import MainPage from "../app/mainpage";
import App from "../App";
import Categories from "../app/categories";
import Sites from "../app/sites";
import About from "../app/about";
import OneItem from "../app/oneitem";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/categories",
                element: <Categories />
            },
            {
                path: "/sites",
                element: <Sites />
            },
            {
                path: "/about",
                element: <About />
            },
            {

                path: "/item",
                element: <OneItem />
            }
        ]
    }
])

export default router;