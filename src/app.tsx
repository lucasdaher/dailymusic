import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Descubra from "./pages/Descubra";
import Generos from "./pages/Generos";
import Eventos from "./pages/Eventos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
  },
  {
    path: "/descubra",
    element: <Descubra />,
    errorElement: <Home />,
  },
  {
    path: "/generos",
    element: <Generos />,
    errorElement: <Home />,
  },
  {
    path: "/eventos",
    element: <Eventos />,
    errorElement: <Home />,
  },
]);
