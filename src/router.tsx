import { createBrowserRouter} from "react-router-dom"
import Inicio from "./views/Inicio"
import Layout from "./layouts/Layout"
import Paquetes from "./views/Paquetes"
import Ponentes from "./views/Ponentes"
import Programacion from "./views/Programacion"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // will load with the main page
        element: <Inicio />
      },
      {
        path: "paquetes",
        element: <Paquetes />,
      },
      {
        path: "ponentes",
        element: <Ponentes />,
      },
      {
        path: "programacion",
        element: <Programacion />,
      }
    ]
  },
])