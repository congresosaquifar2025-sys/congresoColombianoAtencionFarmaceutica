import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    let targetId = "";

    // 👇 Asocia cada ruta con un id
    if (location.pathname === "/programacion") targetId = "programacion";
    if (location.pathname === "/ponentes") targetId = "ponentes";
    if (location.pathname === "/paquetes") targetId = "paquetes";

    if (targetId) {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}
