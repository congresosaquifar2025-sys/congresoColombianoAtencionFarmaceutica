import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo2.png";
import abc from "../assets/152.jpg";
import Footer from "./Footer";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import ScrollToSection from "../components/ScrollToSection";

export default function Layout() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <header className="header md:flex justify-around gap-13">
        <div className="contenido flex flex-col">
          <Link to="/">
            <img src={logo} alt="logo" className="max-w-200 w-full h-auto" />
          </Link>

          <p className="header__texto inline">13 al 15 de noviembre de 2025</p>
          <p className="header__texto header__texto--modalidad inline">
            (Medellín, Colombia)
          </p>

          <Link to="/paquetes" className="header__button inline">
            Inscríbete
          </Link>
        </div>

        <div className="h-auto w-auto">
          <img className="w-200" src={abc} alt="" />
        </div>
      </header>

      <div className="barra">
        <div className="barra__contenido">
          <div className=" block"></div>

          <nav className="navegacion">
            <Link to="/" className="navegacion__enlace">
              Inicio
            </Link>

            <Link to="/programacion" className="navegacion__enlace">
              Programación
            </Link>

            <Link to="/ponentes" className="navegacion__enlace">
              Ponentes
            </Link>

            <Link to="/paquetes" className="navegacion__enlace">
              Paquetes
            </Link>
          </nav>
        </div>
      </div>

      <main>
        <ScrollToSection />
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
