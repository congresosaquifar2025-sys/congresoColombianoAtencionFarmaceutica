import type { datosPonente } from "../types";

export default function Ponente({nombre,foto,descripcion,skills,}: datosPonente) {
  return (
    <>
      <div className="speaker" data-aos="fade-up" data-aos-duration="400">
        
        <img
          className="speaker__imagen-autor w-full h-auto"
          height="300"
          alt={nombre}
          src={foto}
        />

        <div className="speaker__informacion">
          <h4 className="speaker__nombre">{nombre}</h4>

          <p className="speaker__ubicacion">{descripcion}</p>

          <ul className="speaker__listado-skills">
            {skills.map((skill, index) => (
              <li className="speaker__skill" key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
