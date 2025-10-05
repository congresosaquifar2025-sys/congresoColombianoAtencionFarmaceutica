import type { Colaboradores } from "../../data/organizan";

export default function Organiza({png,webp,alt,duration,} : Colaboradores ) {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <source srcSet={png} type="image/png" />
      <img
        className="h-20 md:h-28 object-contain"
        src={png}
        alt={alt}
        data-aos="fade-up"
        data-aos-duration={duration ? duration : 400}
      />
    </picture>
  );
}
