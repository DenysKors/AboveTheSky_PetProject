import Sun from "../assets/images/sun.png";

function SunSection() {
  return (
    <section
      id="sun"
      className="relative w-full h-[450px] md:h-[680px] lg:h-[840px] bg-herobg"
    >
      <div className="relative h-full max-w-[1335px] bg-[radial-gradient(circle_at_30%_50%,rgba(210,37,0,1.0)_0%,rgba(210,37,0,1.0)_30%,rgb(6,6,6)_38%)]">
        <div className="absolute top-[50%] left-[5%] translate-y-[-50%] w-[calc(100vw-50%)]">
          <img src={Sun} alt="sun" />
        </div>
      </div>
      <div className="absolute right-[10%] top-[15%] p-1 max-w-[180px] md:max-w-[225px] lg:max-w-[320px] xl:max-w-[380px]">
        <h2 className="mb-3 md:mb-5 font-main text-text text-2xl md:text-5xl lg:text-7xl">
          The Sun
        </h2>
        <p className="text-text font-text md:text-base lg:text-lg">
          Our Sun is a 4.5 billion-year-old yellow dwarf star made of super-hot,
          electrically charged gas called plasma, at the center of our solar
          system. Its gravity holds the solar system together.
        </p>
      </div>
    </section>
  );
}

export default SunSection;
