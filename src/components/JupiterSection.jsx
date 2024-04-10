import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

import Jupiter from "../assets/images/jupiter.png";

function JupiterSection() {
  return (
    <section className="md:pt-28 lg:pt-36" id="jupiter">
      <div className="relative w-full h-[380px] md:h-[620px] lg:h-[840px] flex items-center justify-end">
        <div className="w-[calc(100vw-50%)] flex justify-end">
          <img src={Jupiter} alt="jupiter" />
        </div>
        <div className="absolute z-10 left-0 md:left-[5%] top-[15%] p-1 max-w-[180px] md:max-w-[225px] lg:max-w-[320px] xl:max-w-[380px]">
          <h2 className="section-title">Jupiter</h2>
          <div className="hidden md:flex">
            <ChevronDoubleRightIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulse" />
            <ChevronDoubleRightIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel4" />
            <ChevronDoubleRightIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel7" />
          </div>
          <p className="section-text">
            The largest in the solar system &ndash; more than twice as massive
            as the other planets combined. A gas giant planet, it does not have
            a true solid surface and made almost entirely of only two elements
            &ndash; hydrogen and helium.
          </p>
        </div>
      </div>
    </section>
  );
}

export default JupiterSection;
