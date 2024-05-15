import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";

import Neptune from "../assets/images/neptune.png";

function NeptuneSection() {
  return (
    <section className="pt-10 md:pt-28 lg:pt-36" id="neptune">
      <div className="mb-5 relative w-full h-[380px] md:h-[620px] lg:h-[840px] flex items-center">
        <div className="w-[calc(100vw-50%)]">
          <img src={Neptune} alt="neptune" loading="lazy" />
        </div>
        <div className="absolute z-10 right-0 md:right-[5%] top-[15%] p-1 max-w-[180px] md:max-w-[225px] lg:max-w-[320px] xl:max-w-[380px]">
          <h2 className="section-title">Neptune</h2>
          <div className="hidden md:flex">
            <ChevronDoubleLeftIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel7" />
            <ChevronDoubleLeftIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel4" />
            <ChevronDoubleLeftIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulse" />
          </div>
          <p className="section-text">
            Not visible to the naked eye and was the first planet located
            through math. calculations. Neptune has the strongest sustained
            winds of any planet in the Solar System, as high as 2,100 km/h.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NeptuneSection;
