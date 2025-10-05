import Mapa from "../components/Mapa";
import EjesTematicos from "../components/Tematicas";
import Organiza from "../components/Inicio/Organiza";
import { organizan, apoyan } from "../data/organizan";

import foto from "./../assets/152.jpg";
import fotoWebp from "./../assets/152.webp";
import video from "./../assets/Video.webm";
import video4 from "./../assets/Video.mp4";

export default function Inicio() {
  return (
    <>
      <h2 className="TetrisCoders__heading" id="inicio">
        VIII Congreso Colombiano de Atención Farmacéutica
      </h2>

      <div className="TetrisCoders__grid">
        <div className="TetrisCoders__imagen" data-aos="fade-up">
           <picture>
              <source srcSet={fotoWebp} type="image/webp"/>
              <source srcSet={foto} type="image/png" />
              
              <img
                src={foto}
                alt="Quimicas en un laboratorio"
                className="rounded  h-full w-auto"
              />
            </picture>
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
          {
            organizan.map((item, index) => (
              <Organiza
                key={index}
                png={item.png}
                webp={item.webp}
                alt={item.alt}
                duration={item.duration}
              />
            ))
          }
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
          {apoyan.map((item, index) => (
            <Organiza
              key={index}
              png={item.png}
              webp={item.webp}
              alt={item.alt}
              duration={item.duration}
            />
          ))}
        </div>
      </div>
    </>
  );
}
