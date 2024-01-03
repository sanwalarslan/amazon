import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Blogs from "./Blogs/Blogs";
import Shop from "./Shop/Shop";
import Contact from "./Pages/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Blogs",
        element: <Blogs />,
      },
      {
        path: "/shop",
        element: <Shop/>
      }
      
    ],
  },
  {
    path:"/contact",
    element:<Contact/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
