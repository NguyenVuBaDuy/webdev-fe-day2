import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.page/login.page"
import RegisterPage from "./pages/register.page/register.page";
import HomePage from "./pages/home.page/home.page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },

  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App