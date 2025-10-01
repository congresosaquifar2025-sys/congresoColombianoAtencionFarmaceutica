import { BookOpen, Stethoscope, Pill, Activity } from "lucide-react";

const ejes = [
  {
    id: 1,
    titulo: "Aportes al uso adecuado de medicamentos",
    descripcion: "Desde los Servicios Farmacéuticos Ambulatorios (Farmacias Comunitarias).",
    icono: BookOpen,
  },
  {
    id: 2,
    titulo:"Diseño e implementación de Servicios Profesionales Farmacéuticos Asistenciales (SPFA)-híbridos",
    descripcion: "Cobertura y efecto de SPFA - híbridos.",
    icono: Stethoscope,
  },
  {
    id: 3,
    titulo: "Indicación Farmacéutica",
    descripcion: "Hacia la automedicación responsable y uso adecuado de medicamentos de venta libre.",
    icono: Pill,
  },
  {
    id: 4,
    titulo: "Temas farmacéuticos de impacto en sistemas de salud",
    descripcion: "Adopción y utilización de biosimilares, resultados de la terapia génica medicina personalizada y cannabis medicinal.",
    icono: Activity,
  },
];

export default function EjesTematicos() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a2bac] mb-10">
          Ejes Temáticos Definidos
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {ejes.map((eje) => {
            const Icono = eje.icono;
            return (
              <div
                key={eje.id}
                className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white p-6 flex items-start space-x-4"
              >
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 flex items-center justify-center">
                  <Icono className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{eje.titulo}</p>
                  <p className="text-gray-600 mt-2">{eje.descripcion}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
