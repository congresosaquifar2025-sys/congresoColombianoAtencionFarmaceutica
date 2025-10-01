import { Link} from "react-router-dom";
import { Outlet } from 'react-router-dom'
import logo from '../assets/logo2.png';
import Footer from "./Footer";
import 'aos/dist/aos.css';
import { useEffect} from "react";
import AOS from "aos";
import ScrollToSection from "../components/ScrollToSection";

export default function Layout() {

   useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__contenedor">
          <nav className="header__navegacion"></nav>

          <div className="contenido">
            <Link
                to="/"
                className="header__logo "
            >
                <img src={logo} alt="logo" className="max-w-200 w-full h-auto"/>
            </Link>

            <p className="header__texto">13 al 15 de noviembre de 2025</p>
            <p className="header__texto header__texto--modalidad">
               (Medellín, Colombia)
            </p>

            <Link
                to="/paquetes"
                className="header__button"
            >
                Inscríbete
            </Link>
            
          </div>
        </div>
      </header>

      <div className="barra">
        <div className="barra__contenido">
          <div className=" block"></div>

          <nav className="navegacion">

            <Link
                to="/"
                className="navegacion__enlace <?php echo pagina_actual('/tetrisCoders') ? 'navegacion__enlace--actual' : ''; ?>"
            >
                Inicio
            </Link>

            <Link
                to="/programacion"
                className="navegacion__enlace <?php echo pagina_actual('/registro') ? 'navegacion__enlace--actual' : ''; ?>"
            >
              Programación
            </Link>

            <Link
                to="/ponentes"
                className="navegacion__enlace <?php echo pagina_actual('/torneos-conferencias') ? 'navegacion__enlace--actual' : ''; ?>"
            >
              Ponentes
            </Link>

            <Link
                to="/paquetes"
                className="navegacion__enlace <?php echo pagina_actual('/paquetes') ? 'navegacion__enlace--actual' : ''; ?>"
            >
                Paquetes
            </Link>
          </nav>
        </div>
      </div>

      <main className=''>
        <ScrollToSection />
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
