import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Products from "./Components/Products/Products.jsx";
import Details from "./Components/Details/Details.jsx";
import Laptops from "./Components/Laptops/Laptops.jsx";
import Phone from "./Components/Phone/Phone.jsx";
import Accessories from "./Components/Accessories/Accessories.jsx";
import SmartWatches from "./Components/SmartWatches/SmartWatches.jsx";
import MacBook from "./Components/MacBook/MacBook.jsx";
import Iphone from "./Components/Iphone/Iphone.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Error from "./Components/Error/Error.jsx";
import About from "./Components/About/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Products></Products>,
            loader: () => fetch("/data.json"),
          },
          {
            path: "laptop",
            element: <Laptops></Laptops>,
            loader: () => fetch("/data.json"),
          },
          {
            path: "phone",
            element: <Phone></Phone>,
            loader: () => fetch("/data.json"),
          },
          {
            path: "accessories",
            element: <Accessories></Accessories>,
            loader: () => fetch("/data.json"),
          },
          {
            path: "smartwatches",
            element: <SmartWatches></SmartWatches>,
            loader: () => fetch("/data.json"),
          },
          {
            path: "macbook",
            element: <MacBook></MacBook>,
            loader: () => fetch("/data.json"),
          },
          {
            path: "iphone",
            element: <Iphone></Iphone>,
            loader: () => fetch("/data.json"),
          },
        ],
      },

      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
);
