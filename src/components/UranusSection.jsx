import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

import Uranus from "../assets/images/uranus.png";

function UranusSection() {
  return (
    <section className="md:pt-28 lg:pt-36" id="uranus">
      <div className="relative w-full h-[380px] md:h-[620px] lg:h-[840px] flex items-center justify-end">
        <div className="w-[calc(100vw-50%)] flex justify-end">
          <img src={Uranus} alt="uranus" />
        </div>
        <div className="absolute z-10 left-0 md:left-[5%] top-[15%] p-1 max-w-[180px] md:max-w-[225px] lg:max-w-[320px] xl:max-w-[380px]">
          <h2 className="section-title">Uranus</h2>
          <div className="hidden md:flex">
            <ChevronDoubleRightIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulse" />
            <ChevronDoubleRightIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel4" />
            <ChevronDoubleRightIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel7" />
          </div>
          <p className="section-text">
            Uranus is a very cold and windy planet, blue-green in color due to
            large amounts of methane. The lowest temperature recorded here is
            -224&#8451;. One day on Uranus takes about 17 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

export default UranusSection;
