import Slider from "react-slick";
import slide2 from "../assets/slider/Recurso 1.jpg";
import slide2Webp from "../assets/slider/Recurso 1.webp";
import slide1 from "../assets/slider/Recurso 2.jpg";
import slide1Webp from "../assets/slider/Recurso 2.webp";

function SliderInicio() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500
  };

  return (
    <div className="slider-container max-w-195 p-12">
      <div className="max-w-200 w-[80vw]">
        <Slider {...settings}>
          
          <div
            className="rounded-lg"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <picture>
              <source srcSet={slide1Webp} type="image/webp"/>
              <source srcSet={slide1} type="image/jpg" />
              
              <img className=" w-full h-auto" src={slide1} alt={slide1} />
            </picture>
          </div>

          <div
            className="rounded-lg"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <picture>
              <source srcSet={slide2Webp} type="image/webp"/>
              <source srcSet={slide2} type="image/jpg" />
              
              <img className=" w-full h-auto" src={slide2} alt={slide2} />
            </picture>
          </div>
          
        </Slider>
      </div>
    </div>
  );
}

export default SliderInicio;
