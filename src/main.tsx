import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { DiNapoliI } from "./pages/DiNapoliI/index.tsx";
import { DiNapoliII } from "./pages/DiNapoliII/index.tsx";
import { ToastContainer } from "react-toastify";
import { WhatsappButton } from "./components/elements/WhatsappButton/index.tsx";
import "react-toastify/dist/ReactToastify.css";

function WhatsappRedirect() {
  window.location.href =
    "https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20empreendimentos%20da%20%C3%81rea%20Incr%C3%ADvel!";
  return null; // Não renderiza nada
}

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
  {
    path: "/dn2-folder",
    element: <WhatsappRedirect />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
    <WhatsappButton />
  </React.StrictMode>
);
