import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Stepcounter from "./pages/stepcounter.jsx";
import Notfoundpage from "./pages/Notfoundpage.jsx";
import Tempconverter from "./pages/Tempconverter.jsx";
import Users from "./pages/userexplorer/Users.jsx";
import Dynamic_Home from "./pages/DynamicTaskboard/Dynamic_Home.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/stepcounter", element: <Stepcounter /> },
  { path: "/tempconverter", element: <Tempconverter /> },
  { path: "/user", element: <Users /> },
  { path: "/dynamichome", element: <Dynamic_Home /> },
  { path: "*", element: <Notfoundpage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
