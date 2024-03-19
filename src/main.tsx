import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DiNapoliI } from "./pages/DiNapoliI/index.tsx";
import { DiNapoliII } from "./pages/DiNapoliII/index.tsx";
import { ToastContainer } from "react-toastify";
import { WhatsappButton } from "./components/elements/WhatsappButton/index.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/di-napoli-i",
    element: <DiNapoliI />,
  },
  {
    path: "/di-napoli-ii",
    element: <DiNapoliII />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
    <WhatsappButton />
  </React.StrictMode>
);
