import { createBrowserRouter } from "react-router-dom";

// Importando Rotas
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import PaginaErro from "./pages/PaginaError.jsx";
import RotasProtegidas from "./pages/RotasProtegidas.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    lement: <RotasProtegidas />,
    errorElement: <PaginaErro />,
    children: [{ path: "home", element: <Home /> }],
  },
]);

export default router;
