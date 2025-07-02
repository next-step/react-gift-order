import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterPath } from "@/routes/path";
import HomePage from "@/pages/Home/Home";
import LoginPage from "@/pages/Login/Login";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: RouterPath.HOME,
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: RouterPath.LOGIN,
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
