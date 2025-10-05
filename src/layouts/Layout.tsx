import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo2.png";
import logoWebp from "../assets/logo2.webp";
import Footer from "./Footer";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import ScrollToSection from "../components/ScrollToSection";
import SliderInicio from "../components/SliderInicio";

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
            <picture>
              <source srcSet={logoWebp} type="image/webp"/>
              <source srcSet={logo} type="image/png" />
              
              <img src={logo} alt="logo" className="max-w-200 w-full h-auto" />
            </picture>
          </Link>

          <p className="header__texto inline">13 al 15 de noviembre de 2025</p>
          <p className="header__texto header__texto--modalidad inline">
            (Medellín, Colombia)
          </p>

          <div>
            <Link to="/paquetes" className="header__button inline">
              Inscríbete
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <SliderInicio />
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
