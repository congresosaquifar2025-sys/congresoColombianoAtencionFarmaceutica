import type { datosProgramacion } from "../types";

export default function Evento({horario, tema, conferencia, color} : datosProgramacion) {

  return (
    <>
      <div className="evento m-3 md:mr-auto md:ml-auto md:w-full"
            data-aos="fade-up" 
            data-aos-duration="400"
      >
        <p className="evento__hora p-5">{horario}</p>

        <div className="evento__informacion" style={{backgroundColor : color}}>
          <h4 className="evento__nombre">{tema}</h4>

          <p className="evento__introduccion">{conferencia}</p>
        </div>
      </div>
    </>
  );
}
