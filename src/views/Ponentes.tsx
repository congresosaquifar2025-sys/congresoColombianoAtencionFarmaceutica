import Ponente from "../components/Ponente";
import type { datosPonente } from "../types";
import ponente1 from "./../assets/ponentes/Ponente (1).jpg";
import ponente2 from "./../assets/ponentes/Ponente (2).jpg";
import ponente3 from "./../assets/ponentes/Ponente (3).jpg";
import ponente4 from "./../assets/ponentes/Ponente (4).jpg";
import ponente5 from "./../assets/ponentes/Ponente (5).jpg";
import ponente6 from "./../assets/ponentes/Ponente (6).jpg";
import ponente7 from "./../assets/ponentes/Ponente (7).jpg";
import ponente8 from "./../assets/ponentes/Ponente (8).jpg";
import ponente9 from "./../assets/ponentes/Ponente (9).jpg";
import ponente10 from "./../assets/ponentes/Ponente (10).jpg";
import ponente11 from "./../assets/ponentes/Ponente (11).jpg";
import ponente12 from "./../assets/ponentes/Ponente (12).jpg";

export default function Ponentes() {

  const datos : datosPonente[] = [
  {
    id: 1,
    nombre: "Raquel Agudelo",
    foto: ponente1,
    descripcion: "Tecnóloga en Regencia de Farmacia, Química Farmacéutica y Magíster en Ciencias Farmacéuticas y Alimentarias (línea de Atención Farmacéutica) de la Universidad de Antioquia. Docente de cátedra de la misma universidad, con experiencia en la organización, planeación, ejecución, control y evaluación de procesos administrativos y técnicos en servicios y establecimientos farmacéuticos, negociación de medicamentos, auditoría, seguimiento farmacoterapéutico, farmacovigilancia y tecnovigilancia. Además, manejo herramientas de análisis estadístico básico en Python y Jamovi, así como métodos de investigación cuantitativos. Mi perfil combina conocimientos técnicos, investigativos y administrativos orientados a la gestión eficiente y segura de los servicios farmacéuticos.",
    skills: ["Atención Farmacéutica", "Auditoría", "Seguimiento farmacoterapéutico", "Farmacovigilancia"]
  },
  {
    id: 2,
    nombre: "Johanna Rios Ospina",
    foto: ponente2,
    descripcion: "Química Farmacéutica, Máster en  Atención Farmacéutica. Más de 18 años de experiencia en farmacia hospitalaria, ambulatoria y articulación de redes de salud. Ha liderado estrategias de acompañamiento centradas en el paciente, apoyadas en tecnología, para mejorar adherencia, experiencia y resultados clínicos. Cuenta con amplia trayectoria liderando equipos de farmacéuticos y profesionales de la salud. Actualmente es Directora de Continuidad del Cuidado en Cielum Health, impulsando modelos innovadores de atención integrada.",
    skills: ["Atención Farmacéutica", "Farmacia hospitalaria", "Farmacia ambulatoria"]
  },
  {
    id: 3,
    nombre: "Pedro Amariles Muñoz",
    foto: ponente3,
    descripcion: "El profesor Amariles es Químico Farmacéutico de la Universidad de Antioquia, Especialista y Máster en atención farmacéutica, Magíster en farmacia clínica y farmacoterapia, Doctor en Farmacia (homologado a Doctor en Farmacología). Ha trabajado como profesor, tutor en diferentes investigaciones de pregrado y posgrado, cuenta con más de 200 publicaciones académicas, entre artículos científicos y libros, y capítulos de libros, relacionadas con el uso adecuado de medicamentos y con la Atención Farmacéutica, en general.",
    skills: ["Atención farmacéutica", "Farmacia clínica", "Farmacoterapia", "Farmacología"]
  },
  {
    id: 4,
    nombre: "Johan Granados",
    foto: ponente4,
    descripcion: "Johan Granados es Químico Farmacéutico (Universidad de Antioquia), Ingeniero de Software (Politécnico Grancolombiano), magíster en Epidemiología (Universidad CES) y doctor en Ciencias Farmacéuticas y Alimentarias (Universidad de Antioquia). Integra competencias en ciencia de datos y desarrollo de software para enfrentar problemas de seguridad del paciente y uso seguro de medicamentos. Es profesor de bioestadística y metodologías cuantitativas, con experiencia en ensayos clínicos y analítica aplicada a servicios farmacéuticos. Sus líneas de trabajo abarcan atención farmacéutica, diseño y evaluación de intervenciones, y transformación digital en salud. Publica y trabaja con equipos interdisciplinarios, donde integra evidencia, análisis estadístico y soluciones de software para apoyar decisiones clínicas y para fortalecer la formación universitaria en el campo de la salud",
    skills: ["Epidemiología", "Ciencia de datos", "Bioestadística", "Ensayos clínicos", "Atención farmacéutica"]
  },
  {
    id: 5,
    nombre: "Andrés Felipe Valencia",
    foto: ponente5,
    descripcion: "Andrés Felipe Valencia Quintero, Químico farmacéutico y Magister en Ciencias farmacéuticas de la Universidad de Antioquia, con más de 15 años de experiencia en el ámbito hospitalario con conocimiento en el desarrollo de actividades generales y especiales de la farmacia clínica y hospitalaria, así como programas de uso seguro de medicamentos y seguridad del paciente.\nActualmente es el líder de aseguramiento de la calidad del servicio farmacéutico del Hospital Pablo Tobón Uribe, director académico de la Asociación Colombiana de Químicos Farmacéuticos Hospitalarios y profesor de cátedra Universitaria.",
    skills: ["Farmacia clínica", "Farmacia hospitalaria","Seguridad del paciente"]
  },
  {
    id: 6,
    nombre: "Milena Ortiz Rendón",
    foto: ponente6,
    descripcion: "Milena Ortiz Rendón Química Farmacéutica (Universidad de Antioquia), magíster en Epidemiología (Universidad CES) y estudiante de doctorado en Ciencias Farmacéuticas y Alimentarias (Universidad de Antioquia). Profesora de asignaturas como vigilancia farmacológica, seminario de dispositivos médicos y seguridad social entre otros,  coordinadora de prácticas profesionales del programa de Tecnología en Regencia de Farmacia de la Universidad de Antioquia. Con experiencia en el manejo de servicios y establecimientos farmacéuticos por mas de 15 años.",
    skills: ["Epidemiología", "Vigilancia farmacológica", "Dispositivos médicos", "Seguridad social"]
  },
  {
    id: 7,
    nombre: "Andrea Salazar Ospina",
    foto: ponente7,
    descripcion: "Andrea Salazar Ospina, Química Farmacéutica  y doctora en Ciencias Farmacéuticas y Alimentarias en la línea de Atención Farmacéutica de la Universidad de Antioquia. Profesora de la Facultad de Ciencias Farmacéuticas y Alimentarias de la Universidad de Antioquia de las asignaturas de Prácticas en Farmacia Clínica y Prácticas en comunidad. Integrante del Grupo de Promoción y Prevención Farmacéutica (UdeA).  Coordinadora del Servicio de Orientación Farmacéutica y Alimentaria (SOFYA), iniciativa de extensión solidaria que brinda asesoría a la comunidad en uso adecuado de medicamentos y alimentos. Sus temas de trabajo incluyen educación en salud, seguimiento farmacoterapéutico, farmacia social y comunitaria, salud mental y telefarmacia.",
    skills: ["Atención Farmacéutica", "Farmacia Clínica", "Farmacia comunitaria", "Salud mental", "Telefarmacia"]
  },
  {
    id: 8,
    nombre: "Jaime Alejandro Hincapié",
    foto: ponente8,
    descripcion: "Jaime Alejandro Hincapié García, Químico Farmacéutico, Magíster en Farmacología Clínica y candidato a Doctorado en Ciencias Farmacéuticas y Alimentarias. Vicedecano de la Facultad de Ciencias Farmacéuticas y Alimentarias (UdeA). Posee amplia trayectoria en docencia universitaria, investigación y gestión académica y empresarial. Ha liderado y desarrollado proyectos de investigación e innovación orientados a garantizar el acceso equitativo y el uso adecuado de medicamentos y servicios de salud, en colaboración con equipos multidisciplinarios en las áreas de farmacología clínica, evaluación económica de tecnologías en salud, investigación de la implementación y atención farmacéutica.",
    skills: ["Farmacología clínica", "Evaluación económica", "Atención farmacéutica"]
  },
  {
    id: 9,
    nombre: "Jorge Estrada",
    foto: ponente9,
    descripcion: "Farmacéutico, magister en Epidemiologia, candidato a doctorado en Epidemiologia y bioestadística, director del grupo en investigación en farmacoepidemiologia y gestión de riesgo, representante legal y director de generación de valor y de atención en salud en +helPharma grupo zentria salud. Profesor en postgrado de Epidemiologia y salud pública. Lider, autor y coautor de diversos trabajos de investigación relacionadas con ineficiencias farmacológicas, uso adecuado, adherencia y persistencia de medicamentos.",
    skills: ["Farmacéutico", "Epidemiologia", "Salud pública"]
  },  
  {
    id: 10,
    nombre: "Angela Caro Rojas",
    foto: ponente10,
    descripcion: "Líder global en seguridad de medicamentos, actualmente Presidente de la Sociedad Internacional de Farmacovigilancia (International Society of Pharmacovigillance- ISoP), institución con presencia en 100 países, cuya misión es mejorar la seguridad en el uso de los medicamentos globalmente.Farmacéutica, Epidemióloga, Master en Atención Farmacéutica y Magister en Educación, con estudios formales en Liderazgo y Seguridad del Paciente. Con más de 20 años de experiencia es consultora y conferencista internacional en farmacovigilancia, uso seguro de medicamentos y dispositivos médicos, seguridad del paciente, liderazgo y comunicación. Ha sido consultora para la Organización Panamericana de la Salud, la Organización Iberoamericana de Seguridad Social y el INVIMA. Miembro de Comités de ética en la investigación, fue presidenta de la Asociación Colombiana de Farmacovigilancia por 5 años, miembro fundador de la Red Latinoamericana de Ergonomía y Factores humanos en los Sistemas de Salud (RELAESA). Actualmente directora de la Carrera de Química Farmacéutica de la Pontificia Universidad Javeriana.",
    skills: ["Farmacovigilancia", "Medicamentos", "Seguridad del paciente"]
  },
  {
    id: 11,
    nombre: "Esther Bravo",
    foto: ponente11, 
    descripcion: "Química Farmacéutica  con especialización en Evaluaciones economicas en Salud, y más de 20 años de experiencia en el ámbito de la asistencia hospitalaria. Ha desempeñado como coordinador del programa de Farmacovigilancia en oncología clínica y estudios clínicos, liderando iniciativas orientadas a la seguridad del paciente y la optimización terapéutica en contextos de alta complejidad. Su trayectoria profesional se complementa con una sólida experiencia en el ámbito académico, tanto en pregrado como en posgrado, donde ha participado en la formación de profesionales de la salud, impartiendo asignaturas relacionadas con farmacología clínica, farmacovigilancia y  uso clínico de medicamentos biológicos y biosimilares. Reconocido por su capacidad de integrar el conocimiento científico con la práctica clínica, ha contribuido al desarrollo de políticas institucionales de uso seguro de medicamentos, así como a la implementación de protocolos para el uso seguro de medicamentos biosimilares.",
    skills: ["Farmacovigilancia", "Oncología", "Biosimilares"]
  },
  {
    id: 12,
    nombre: "Jorge Enrique Machado Alba",
    foto: ponente12,
    descripcion: "Médico, Doctor en Farmacologia y Master en Farmacoepidemiologia, Director del Grupo de Investigación en Farmacoepidemiologia y Farmacovigilancia (Categoría A1 de Minciencias), profesor titular de farmacología y toxicología del programa de Medicina de la Facultad de Ciencias de la Salud de la Universidad Tecnológica de Pereira desde hace más de 30 años y líder del área de investigación de Audifarma SA. Con experiencia académica e investigativa especialmente en estudios de utilización de medicamentos en la población colombiana.",
    skills: ["Farmacoepidemiologia", "Farmacovigilancia", "Farmacología"]
  },  
];

  return (
    <>
      <section className="speakers" id="ponentes">
        <h2 className="speakers__heading">Conferencistas expertos</h2>
        <p className="speakers__descripcion">
          Expertos nacionales e internacionales presentando el estado del arte y
          experiencias prácticas en los respectivos ejes temáticos.
        </p>

        <div className="speakers__grid">

          {datos.map(item => (
            <Ponente
            key = {item.id}
            id = {item.id}
            nombre = {item.nombre}
            foto = {item.foto}
            descripcion={item.descripcion}
            skills = {item.skills}
            />
          ))}

        </div>
      </section>
    </>
  );
}
