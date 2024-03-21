import Astronaut from "../assets/images/astronaut.png";
import Spaceship from "../assets/images/spaceship.png";

function HeroSection() {
  return (
    <section className="relative w-full h-[390px] md:h-[620px] lg:h-[720px] bg-inherit bg-hero bg-contain bg-no-repeat bg-[right_-3rem_bottom] md:bg-[right_bottom]">
      <h1 className="sr-only">The Solar System</h1>
      <div className="pt-8 pl-8 max-w-[300px] md:pt-20 lg:pl-28 lg:max-w-[550px]">
        <q className="text-text font-text md:text-base lg:text-lg select-none">
          It is a beautiful and delightful sight to behold the body of the Moon
        </q>
        <br />
        <span className="italic text-text select-none"> - Galileo Galilei</span>
      </div>
      <div className="absolute bottom-[10px] right-[210px] w-[100px] md:bottom-[20px] md:right-[480px] md:w-[220px] lg:bottom-[30px] lg:right-[560px] lg:w-[340px]">
        <img src={Spaceship} alt="spaceship" />
      </div>
      <div className="absolute bottom-[100px] left-0 w-[130px] md:bottom-[200px] md:w-[260px] lg:bottom-[240px] lg:w-[380px] animate-flyMobile md:animate-flyTablet">
        <img src={Astronaut} alt="astronaut" />
      </div>
    </section>
  );
}

export default HeroSection;
