import './App.module.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout/layout';
import Home from './Pages/Home/home';
import SignIn from './Pages/SignIn/signIn';
import User from './Pages/User/user';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "",
          element:<Home/>,
        },

        {
          path: "/sign-in",
          element:<SignIn/>,
        },

        {
          path: "/user",
          element:<User/>,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
