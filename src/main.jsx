import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Stepcounter from "./pages/stepcounter.jsx";
import Notfoundpage from "./pages/Notfoundpage.jsx";
import Tempconverter from "./pages/Tempconverter.jsx";
import Users from "./pages/userexplorer/Users.jsx";
import Dynamic_Home from "./pages/DynamicTaskboard/Dynamic_Home.jsx";
import ProfileHome from "./pages/ProfileCardApp/ProfileHome.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FormPractice from "./pages/FromPractice/FormPractice.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/stepcounter", element: <Stepcounter /> },
  { path: "/tempconverter", element: <Tempconverter /> },
  { path: "/user", element: <Users /> },
  { path: "/dynamichome", element: <Dynamic_Home /> },
  { path: "/profilecard", element: <ProfileHome /> },
  {path: "/formpractice" , element: <FormPractice />},
  { path: "*", element: <Notfoundpage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
