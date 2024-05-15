import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

import Pluto from "../assets/images/pluto.png";

function PlutoSection() {
  return (
    <section className="md:pt-28 lg:pt-36" id="pluto">
      <div className="relative w-full h-[380px] md:h-[620px] lg:h-[840px] flex items-center justify-end">
        <div className="w-[calc(100vw-52%)] flex justify-end">
          <img src={Pluto} alt="pluto" loading="lazy" />
        </div>
        <div className="absolute z-10 left-0 md:left-[5%] top-[15%] p-1 max-w-[180px] md:max-w-[225px] lg:max-w-[320px] xl:max-w-[380px]">
          <h2 className="section-title">Pluto</h2>
          <div className="hidden md:flex">
            <ChevronDoubleRightIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulse" />
            <ChevronDoubleRightIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel4" />
            <ChevronDoubleRightIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel7" />
          </div>
          <p className="section-text">
            Dwarf planets like Pluto were defined as objects that orbit the Sun,
            and are nearly round, but have not been able to clear their orbit of
            debris. It is only about 1,151 km wide.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PlutoSection;
