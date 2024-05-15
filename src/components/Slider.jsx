import Slider from "react-slick";

import Miranda from "../assets/images/miranda.jpg";
import Ariel from "../assets/images/ariel.webp";
import Umbriel from "../assets/images/umbriel.webp";
import Titania from "../assets/images/titania.webp";
import Oberon from "../assets/images/oberon.webp";

function ImageSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    pauseOnFocus: false,
    pauseOnHover: false,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="bg-black">
          <div className="flex justify-center">
            <img
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[420px] object-contain flex justify-center"
              src={Miranda}
              alt="miranda"
              loading="lazy"
            />
          </div>
          <p className="mb-2 md:mb-4 lg:mb-6 text-text font-text md:text-base lg:text-lg select-none">
            Miranda
          </p>
        </div>
        <div className="bg-black">
          <div className="flex justify-center">
            <img
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[420px] object-contain"
              src={Ariel}
              alt="ariel"
              loading="lazy"
            />
          </div>
          <p className="mb-2 md:mb-4 lg:mb-6 text-text font-text md:text-base lg:text-lg select-none">
            Ariel
          </p>
        </div>
        <div className="bg-black">
          <div className="flex justify-center">
            <img
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[420px] object-contain"
              src={Umbriel}
              alt="umbriel"
              loading="lazy"
            />
          </div>
          <p className="mb-2 md:mb-4 lg:mb-6 text-text font-text md:text-base lg:text-lg select-none">
            Umbriel
          </p>
        </div>
        <div className="bg-black">
          <div className="flex justify-center">
            <img
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[420px] object-contain"
              src={Titania}
              alt="titania"
              loading="lazy"
            />
          </div>
          <p className="mb-2 md:mb-4 lg:mb-6 text-text font-text md:text-base lg:text-lg select-none">
            Titania
          </p>
        </div>
        <div className="bg-black">
          <div className="flex justify-center">
            <img
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[420px] object-contain"
              src={Oberon}
              alt="oberon"
              loading="lazy"
            />
          </div>
          <p className="mb-2 md:mb-4 lg:mb-6 text-text font-text md:text-base lg:text-lg select-none">
            Oberon
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
