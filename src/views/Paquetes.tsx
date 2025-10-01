export default function Paquetes() {
  return (
    <>
      <div className="paquetes">
        <div className="flex flex-col justify-center mb-16">
          <h2 id="paquetes" className="paquetes__heading">Tarifas de inscripción</h2>

          <p className="text-5xl font-bold text-center mb-7 text-[#4a2bac] leading-normal">
            <a href="https://wa.me/+573128336045">
              Escríbenos al WhatsApp
              <br></br>
              Aquifar: +57(312)833-6045
            </a>
          </p>

          <a
            href="https://wa.me/+573128336045"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit m-auto inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.16 1.6 5.95L0 24l6.22-1.62A11.97 11.97 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22a9.93 9.93 0 01-5.06-1.37l-.36-.22-3.69.96.99-3.6-.23-.37A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10 2.67 0 5.18 1.04 7.07 2.93S22 9.33 22 12c0 5.52-4.48 10-10 10zm5.2-7.35c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.62.14-.19.28-.72.9-.88 1.09-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.38-1.65-1.54-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.62-1.49-.85-2.04-.22-.53-.44-.46-.62-.46-.16 0-.35-.02-.54-.02s-.49.07-.75.35c-.26.28-.99.97-.99 2.37s1.02 2.74 1.16 2.93c.14.19 2 3.05 4.85 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.12-.26-.19-.54-.33z" />
            </svg>
            Clic para chatear
          </a>
        </div>

        <div className="paquetes__grid shadow-lg shadow-[rgba(84,132,230,0.65)]">
          <div className="paquete">
            <h3 className="paquete__nombre">Derechos de la inscripción</h3>
            <ul className="paquete__lista">
              <li className="paquete__elemento">
                ✅ Participación en las actividades Académicas.
              </li>
              <li className="paquete__elemento">
                ✅ Participación en la muestra comercial.
              </li>
              <li className="paquete__elemento">
                ✅ Presentar trabajos académicos por el{" "}
                <b>Premio al Mejor Aporte a la Atención Farmacéutica.</b>
              </li>
              <li className="paquete__elemento">
                ✅ Memorias del evento en Revista VITAE.
              </li>
              <li className="paquete__elemento">
                ✅ Certificado digital de memorias del evento.
              </li>
            </ul>

            <div className="m-12 flex flex-col justify-center items-center">
              <p className="flex flex-col items-center font-bold">
                Profesionales en general
              </p>
              <p className="paquete__precio inline-flex items-start gap-1">
                $476.000<span className="text-5xl mt-3">*</span>
              </p>
            </div>

            <div className="m-12 flex flex-col justify-center items-center">
              <p className="flex flex-col items-center font-bold">
                Estudiantes acreditados de pregado
              </p>
              <p className="paquete__precio inline-flex items-start gap-0.5">
                $238.000<span className="text-5xl mt-3">*</span>
              </p>
            </div>

            <div className="m-12">
              <p className="flex flex-col items-center font-bold">
                Precio Dolares
              </p>
              <p className="paquete__precio">USD 100</p>
            </div>

            <div className="m-12">
              <p className="flex flex-col items-center font-bold text-[#4a2bac]">
                *IVA incluido
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
