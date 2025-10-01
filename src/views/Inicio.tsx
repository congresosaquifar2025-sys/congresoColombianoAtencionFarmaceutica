import foto from "./../assets/152.jpg";
import video from "./../assets/Video.webm";
import video4 from "./../assets/Video.mp4";

import udea from "./../assets/logosInicio/udea1.png";
import aquifar from "./../assets/logosInicio/aquifar1.png";
import asociacion from "./../assets/logosInicio/asociacion1.png";
import catedra from "./../assets/logosInicio/mfd2.png";
import giaf from "./../assets/logosInicio/GIAF.png"
import cieulm from "./../assets/logosInicio/cielum1.png";
import citeSalud from "./../assets/logosInicio/citesalud1.png";
import pharmaceutical from "./../assets/logosInicio/funcaion1.png";
import colegio from "./../assets/logosInicio/colegio1.png";

import Mapa from "../components/Mapa";
import EjesTematicos from "../components/Tematicas";

export default function Inicio() {
  return (
    <>
      <h2 className="TetrisCoders__heading" id="inicio">
        VIII Congreso Colombiano de Atención Farmacéutica
      </h2>

      <div className="TetrisCoders__grid">
        <div className="TetrisCoders__imagen" data-aos="fade-up">
          <img
            src={foto}
            alt="Quimicas en un laboratorio"
            className="rounded  h-full w-auto"
          />
        </div>

        <div className="TetrisCoders__contenido">
          <p className="TetrisCoders__texto">
            La motivación y justificación del lema “Hacia Servicios
            Profesionales Farmacéuticos ultraInteligentes y optimización de
            resultados en la salud para pacientes y los sistemas de salud” y,
            por tanto, del foco académico de esta VIII versión del Congreso
            Colombiano de Atención Farmacéutica (AF) han sido detalladas en dos
            publicaciones recientes.
            <br></br>
            <br></br>La primera relacionada con la Inteligencia Artificial
            generativa (IA-Gen) y su relevancia en la prestación de Servicios
            Profesionales Farmacéuticos Asistenciales (SPFA) (1); y la segunda con los retos actuales y escenarios visualizados de
            la práctica farmacéutica asistencial en Colombia (2).
            <br></br>
          </p>

          <p className="text-lg text-gray-800">
            <br></br>
            <span className="font-semibold">Referencias recomendadas:</span>
            <br></br>
            1.Amariles P, Hincapié JA. Inteligencia híbrida aplicada a los servicios profesionales farmacéuticos asistenciales:
            potenciando la inteligencia humana con las tecnologías avanzadas. Ars Pharm. 2025;66(2):122-125. DOI:&nbsp;
            <a 
              href="https://doi.org/10.30827/ars.v66i2.33007"
              className=" cursor-pointer text-[#00649d] underline">
                https://doi.org/10.30827/ars.v66i2.33007
            </a>
            
          </p>
          <p className="text-lg text-gray-800">
            2. Amariles P. Retos actuales y escenarios visualizados de la práctica farmacéutica asistencial en Colombia.
            Portal Universidad de Antioquia, UdeA Noticias. Disponible en:&nbsp;
            <a 
              href="https://bit.ly/farmacia-inteligente"
              className=" cursor-pointer text-[#00649d] underline">
              https://bit.ly/farmacia-inteligente
            </a>
          </p>
        </div>
      </div>

      <div className="w-[min(95%,140rem)] mx-auto grid gap-12 grid-cols-1 
            lg:grid-cols-2 lg:gap-20 lg:items-center">
        <div className="TetrisCoders__contenido mt-10">
          <EjesTematicos/>
        </div>

        <div className="flex justify-center" data-aos="fade-up">
          <video 
            controls 
            autoPlay 
            muted 
            className="rounded shadow mt-15 shadow-[0_4px_5px_1px_rgba(84,132,230,0.65)]"
            >
            <source src={video} type="video/webm" />
            <source src={video4} type="video/mp4" />
            Error: El navegador no soporta el video.
          </video>
        </div>
      </div>

      <h3
        className="TetrisCoders__heading text-center p-7
        border-b-2 border-solid border-[#4a2bac] 
        shadow-[0_3px_12px_1px_rgba(74,42,172,0.5)]"
        style={{ marginTop: 80, marginBottom: 80 }}
      >
        Ubicación
      </h3>

      <p className="TetrisCoders__descripcion">
        📍Auditorio principal - SIU (Sede Investigación Universitaria)
        Universidad de Antioquia Medellín Colombia
      </p>

      <div className="max-w-260 mx-auto p-6" data-aos="fade-up">
        <Mapa></Mapa>
      </div>

      <h3
        className="TetrisCoders__heading text-center p-7
        border-b-2 border-solid border-[#4a2bac] 
        shadow-[0_3px_12px_1px_rgba(74,42,172,0.5)]"
        style={{ marginTop: 50, marginBottom: 90 }}
      >
        Organizan
      </h3>

      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-12 mt-10">
          <img
            className="h-20 md:h-28 object-contain"
            src={udea}
            alt="Grupo de investigación Promoción y Prevención Farmacéutica, Universidad de Antioquia, Colombia"
            data-aos="fade-up"
            data-aos-duration="400"
          />
          <img
            className="h-20 md:h-28 object-contain"
            src={aquifar}
            alt="Asociación de Químicos Farmacéuticos de Antioquia"
            data-aos="fade-up"
            data-aos-duration="800"
          />
          <img
            className="h-20 md:h-28 object-contain"
            src={asociacion}
            alt="Asociación Colombiana de Químicos Farmacéuticos Hospitalarios"
            data-aos="fade-up"
            data-aos-duration="1200"
          />
        </div>
      </div>

      <h3
        className="TetrisCoders__heading text-center p-7
        border-b-2 border-solid border-[#4a2bac] 
        shadow-[0_3px_12px_1px_rgba(74,42,172,0.5)]"
        style={{ marginTop: 80, marginBottom: 80 }}
      >
        Con el apoyo de
      </h3>

      <div className="flex justify-center items-center m-1">
        <div className="flex flex-wrap justify-center items-center gap-15 md:gap-26 mt-10">
          <img
            className="h-20 md:h-28 object-contain"
            src={colegio}
            alt="Colegio Nacional de Químicos Farmacéuticos de Colombia"
            data-aos="fade-up"
            data-aos-duration="400"
          />
          <img
            className="h-20 md:h-28 object-contain"
            src={giaf}
            alt="Grupo de Investigación en Atención Farmacéutica, Universidad de Granada, España"
            data-aos="fade-up"
            data-aos-duration="400"
          />
          <img
            className="h-20 md:h-28 object-contain"
            src={catedra}
            alt="Cátedra de Atención Farmacéutica Universidad de Granada, España"
            data-aos="fade-up"
            data-aos-duration="600"
          />
          <img
            className="h-20 md:h-28 object-contain"
            src={cieulm}
            alt="Cielum Health, Colombia"
            data-aos="fade-up"
            data-aos-duration="800"
          />
          <img
            className="h-20 md:h-28 object-contain"
            src={pharmaceutical}
            alt="Fundación Pharmaceutical Care-España"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <img
            className="h-20 md:h-28 object-contain"
            src={citeSalud}
            alt="Asociación ciencia y tecnología para la salud, EIBA-Farmacia Hospitalaria, España"
            data-aos="fade-up"
            data-aos-duration="1200"
          />
        </div>
      </div>
    </>
  );
}
