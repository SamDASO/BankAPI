import './App.module.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout/layout';
import Home from './Pages/Home/home';

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
