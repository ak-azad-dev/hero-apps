import { createBrowserRouter } from "react-router";
import App from "../App";
import { ErrorPage } from "../Pages/ErrorPage/ErrorPage";
import { Banner } from "../Components/Banner/Banner";
import { Home } from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Details from "../Pages/Details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: ErrorPage,
    children: [
      {
        index: true,
        loader: () => fetch("/appsData.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/appsData.json"),
        Component: Apps,
      },
      {
        path: "/app/details/:id",
        loader: () => fetch("/appsData.json"),
        Component: Details,
      },
    ],
  },
]);
