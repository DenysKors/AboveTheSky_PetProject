import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";

import Saturn from "../assets/images/saturn.png";

function SaturnSection() {
  return (
    <section id="saturn">
      <div className="mb-5 relative w-full h-[380px] md:h-[620px] lg:h-[840px] flex items-center">
        <div className="w-[calc(100vw-35%)]">
          <img src={Saturn} alt="saturn" loading="lazy" />
        </div>
        <div className="absolute z-10 right-0 md:right-[5%] top-[15%] p-1 max-w-[180px] md:max-w-[225px] lg:max-w-[320px] xl:max-w-[380px]">
          <h2 className="section-title">Saturn</h2>
          <div className="flex">
            <ChevronDoubleLeftIcon className="text-yellow-500 w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel7" />
            <ChevronDoubleLeftIcon className="text-yellow-500 w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel4" />
            <ChevronDoubleLeftIcon className="text-yellow-500 w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulse" />
          </div>
          <p className="section-text">
            For now, it has 146 moons in its orbit. Saturn&apos;s rings are
            thought to be pieces of comets, asteroids or shattered moons. They
            are made of billions of small chunks of ice and rock coated with
            other materials such as dust.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SaturnSection;
