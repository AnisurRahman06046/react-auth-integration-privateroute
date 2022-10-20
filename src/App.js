import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Order from "./components/Order";
import Register from "./components/Register";
import Main from "./layout/Main";
import PrivateRoute from "./Routes/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Order></Order>
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <LogIn></LogIn> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
