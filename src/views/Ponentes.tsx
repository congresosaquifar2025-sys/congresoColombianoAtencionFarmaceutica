import Ponente from "../components/Ponente";
import { datosPonentes as datos } from "../data/ponentes";

export default function Ponentes() {

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
            foto1 = {item.foto1} 
            descripcion={item.descripcion}
            skills = {item.skills}
            />
          ))}

        </div>
      </section>
    </>
  );
}
