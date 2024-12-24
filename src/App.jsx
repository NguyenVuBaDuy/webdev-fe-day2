import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.page/login.page"


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>test</div>
  },

  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <div></div>
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App