import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";

import Sun from "../assets/images/sun.png";

function SunSection() {
  return (
    <section
      id="sun"
      className="relative w-full h-[420px] md:h-[680px] lg:h-[840px]"
    >
      <div className="relative h-full max-w-[1280px] bg-[radial-gradient(circle_at_33.5%_50%,rgba(210,37,0,1.0)_0%,rgba(210,37,0,1.0)_30%,rgb(6,6,6,0.0)_38%)]">
        <div className="absolute z-0 top-[50%] left-[10%] md:left-[8.5%] lg:left-[6.5%] translate-y-[-50%] w-[calc(100vw-58%)]">
          <img src={Sun} alt="sun" loading="lazy" />
        </div>
      </div>
      <div className="absolute z-10 right-0 md:right-[5%] top-[15%] p-1 max-w-[180px] md:max-w-[225px] lg:max-w-[320px] xl:max-w-[380px]">
        <h2 className="section-title">The Sun</h2>
        <div className="hidden md:flex">
          <ChevronDoubleLeftIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel7" />
          <ChevronDoubleLeftIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel4" />
          <ChevronDoubleLeftIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulse" />
        </div>
        <p className="section-text">
          Our Sun is a 4.5 billion-year-old yellow dwarf star made of super-hot,
          electrically charged gas called plasma, at the center of our solar
          system. Its gravity holds the solar system together.
        </p>
      </div>
    </section>
  );
}

export default SunSection;
