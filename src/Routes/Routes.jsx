import { createBrowserRouter } from "react-router";
import App from "../App";
import { ErrorPage } from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage> </ErrorPage>
  },
]);
