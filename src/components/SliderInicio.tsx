import Slider from "react-slick";
import slide2 from "../assets/slider/Recurso 1.jpg";
import slide1 from "../assets/slider/Recurso 2.jpg";

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
            <img className=" w-full h-auto" src={slide1} alt={slide1} />
          </div>

          <div
            className="rounded-lg"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img className="w-full h-auto" src={slide2} alt={slide2} />
          </div>
          
        </Slider>
      </div>
    </div>
  );
}

export default SliderInicio;
