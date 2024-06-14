import './App.module.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from './Components/Navbar/navbar'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        {
          path: ":",
          element:"",
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
