import './App.module.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/layout';
import Home from './pages/Home/home';
import SignIn from './pages/SignIn/signIn';
import User from './pages/User/user';
import ProtectedRoute from './protectedRoute/protectedRoute';

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
          path: "/login",
          element:<SignIn/>,
        },

        {
          path: "/profile",
          element:<ProtectedRoute><User/></ProtectedRoute>,
        }
      ],
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App
