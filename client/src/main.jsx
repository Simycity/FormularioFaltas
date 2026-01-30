import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Provedor de rotas
import { RouterProvider } from "react-router-dom";

// Gerenciador de rotas
import MyRouter from "./MyRouter.jsx";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Contexto
import { FormProvider } from "./contexts/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormProvider>
      <RouterProvider router={MyRouter} />
    </FormProvider>
  </StrictMode>,
);
