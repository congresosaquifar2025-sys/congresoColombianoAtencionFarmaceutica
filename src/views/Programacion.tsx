import Evento from "../components/Evento";
import { useState } from "react";

import {
  jueves,
  jueves2,
  jueves3,
  jueves4,
  jueves5,
  jueves6,
  sabado,
  sabado2,
  sabado3,
  viernes,
  viernes2,
  viernes3,
  viernes4,
  viernes5,
  viernes6,
} from "../data";
import FlechaAbajoSVG from "../components/FlechaAbajoSVG";
import FlechaDerechaSVG from "../components/FlechaDerechaSVG";

export default function Programacion() {
  const [abierto, setAbierto] = useState(false);
  const [abierto2, setAbierto2] = useState(false);
  const [abierto3, setAbierto3] = useState(false);

  const toggleSeccion = (number: number) => {
    switch (number) {
      case 1:
        setAbierto(!abierto);
        break;
      case 2:
        setAbierto2(!abierto2);
        break;
      case 3:
        setAbierto3(!abierto3);
        break;
    }
  };

  return (
    <>
      <div className="eventos max-w-650 m-auto">
        <section className="mb-6">
          <h3
            className="eventos__heading inline-flex items-center gap-2 cursor-pointer select-none p-4 w-full border-b-2 border-solid border-[#1d3557]"
            onClick={() => toggleSeccion(1)}
          >
            {abierto ? <FlechaAbajoSVG /> : <FlechaDerechaSVG />}
            Jueves 13
          </h3>

          {abierto && (
            <>
              <div className="eventos__listado slider mt-4">
                <div className="md:grid grid-cols-3 gap-1">
                  {jueves.map((item) => (
                    <Evento
                      key={item.id}
                      id={item.id}
                      horario={item.horario}
                      tema={item.tema}
                      conferencia={item.conferencia}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>

              <div className="eventos__listado slider mt-4">
                <div className="md:grid grid-cols-1 gap-1">
                  {jueves2.map((item) => (
                    <Evento
                      key={item.id}
                      id={item.id}
                      horario={item.horario}
                      tema={item.tema}
                      conferencia={item.conferencia}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>

              <div className="eventos__listado slider mt-4">
                <div className="md:grid grid-cols-6 gap-0.5">
                  {jueves3.map((item) => (
                    <Evento
                      key={item.id}
                      id={item.id}
                      horario={item.horario}
                      tema={item.tema}
                      conferencia={item.conferencia}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>

              <div className="eventos__listado slider mt-4">
                <div className="md:grid grid-cols-1 gap-1">
                  {jueves6.map((item) => (
                    <Evento
                      key={item.id}
                      id={item.id}
                      horario={item.horario}
                      tema={item.tema}
                      conferencia={item.conferencia}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>

              <div className="eventos__listado slider mt-4">
                <div className="md:grid grid-cols-6 gap-0.5">
                  {jueves4.map((item) => (
                    <Evento
                      key={item.id}
                      id={item.id}
                      horario={item.horario}
                      tema={item.tema}
                      conferencia={item.conferencia}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>

              <div className="eventos__listado slider mt-4">
                <div className="md:grid grid-cols-1 gap-1">
                  {jueves5.map((item) => (
                    <Evento
                      key={item.id}
                      id={item.id}
                      horario={item.horario}
                      tema={item.tema}
                      conferencia={item.conferencia}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </section>

        <section className="mb-6">
          <h3
            className="eventos__heading inline-flex items-center gap-2 cursor-pointer select-none p-4 w-full border-b-2 border-solid border-[#1d3557]"
            onClick={() => toggleSeccion(2)}
          >
            {abierto2 ? <FlechaAbajoSVG /> : <FlechaDerechaSVG />}
            Viernes 14
          </h3>

          {abierto2 && (
            <>
              <div className="eventos__listado slider mt-4">
                <div className="md:grid grid-cols-6 gap-0.5">
                  {viernes.map((item) => (
                    <Evento
                      key={item.id}
                      id={item.id}
                      horario={item.horario}
                      tema={item.tema}
                      conferencia={item.conferencia}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>

              <div className="eventos__listado slider mt-4">
                <div className="md:grid grid-cols-1 gap-1">
                  {viernes2.map((item) => (
                    <Evento
                      key={item.id}
                      id={item.id}
                      horario={item.horario}
                      tema={item.tema}
                      conferencia={item.conferencia}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>

              <div className="eventos__listado slider mt-4">
                <div className="md:grid grid-cols-1 gap-0.5">
                  {viernes3.map((item) => (
                    <Evento
                      key={item.id}
                      id={item.id}
                      horario={item.horario}
                      tema={item.tema}
                      conferencia={item.conferencia}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>

              <div className="eventos__listado slider mt-4">
                <div className="md:grid grid-cols-1 gap-1">
                  {viernes4.map((item) => (
                    <Evento
                      key={item.id}
                      id={item.id}
                      horario={item.horario}
                      tema={item.tema}
                      conferencia={item.conferencia}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>

              <div className="eventos__listado slider mt-4">
                <div className="md:grid grid-cols-6 gap-0.5">
                  {viernes5.map((item) => (
                    <Evento
                      key={item.id}
                      id={item.id}
                      horario={item.horario}
                      tema={item.tema}
                      conferencia={item.conferencia}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>

              <div className="eventos__listado slider mt-4">
                <div className="md:grid grid-cols-1 gap-1">
                  {viernes6.map((item) => (
                    <Evento
                      key={item.id}
                      id={item.id}
                      horario={item.horario}
                      tema={item.tema}
                      conferencia={item.conferencia}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </section>

        <section className="mb-6">
          <h3
            className="eventos__heading inline-flex items-center gap-2 cursor-pointer select-none p-4 w-full border-b-2 border-solid border-[#1d3557]"
            onClick={() => toggleSeccion(3)}
          >
            {abierto3 ? <FlechaAbajoSVG /> : <FlechaDerechaSVG />}
            Sábado 15
          </h3>

          {abierto3 && (
            <>
              <div className="eventos__listado slider mt-4">
                <div className="md:grid grid-cols-6 gap-1">
                  {sabado.map((item) => (
                    <Evento
                      key={item.id}
                      id={item.id}
                      horario={item.horario}
                      tema={item.tema}
                      conferencia={item.conferencia}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>

              <div className="eventos__listado slider mt-4">
                <div className="md:grid grid-cols-1 gap-1">
                  {sabado2.map((item) => (
                    <Evento
                      key={item.id}
                      id={item.id}
                      horario={item.horario}
                      tema={item.tema}
                      conferencia={item.conferencia}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>

              <div className="eventos__listado slider mt-4">
                <div className="md:grid grid-cols-1 gap-0.5">
                  {sabado3.map((item) => (
                    <Evento
                      key={item.id}
                      id={item.id}
                      horario={item.horario}
                      tema={item.tema}
                      conferencia={item.conferencia}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
}
