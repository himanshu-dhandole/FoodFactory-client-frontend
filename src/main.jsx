import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import Explore from "./Pages/Explore.jsx";
import Contactus from "./Pages/Contactus.jsx";
import { StoreContextProvider } from "./Components/Context/StoreContext.jsx";
import Login from "./Components/auth/Login.jsx";
import FoodDetails from "./Components/FoodDisplay/FoodDetails.jsx";
import Cart from "./Pages/Cart.jsx";
import Register from "./Components/auth/Register.jsx";
import PlaceOrder from "./Components/Order/PlaceOrder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/food/:id",
        element: <FoodDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <PlaceOrder />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StoreContextProvider>
    <RouterProvider router={router} />
  </StoreContextProvider>
);
