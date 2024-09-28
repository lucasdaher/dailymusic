import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Descubra from "./pages/Descubra";

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
    element: <Home />,
    errorElement: <Home />,
  },
  {
    path: "/eventos",
    element: <Home />,
    errorElement: <Home />,
  },
]);
