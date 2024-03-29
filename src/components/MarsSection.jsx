import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";

import Mars from "../assets/images/mars.png";

function MarsSection() {
  return (
    <section
      id="mars"
      className="relative w-full h-[380px] md:h-[620px] lg:h-[840px] bg-herobg"
    >
      <div className="absolute z-0 top-[50%] left-[5%] translate-y-[-50%] w-[calc(100vw-48%)]">
        <img src={Mars} alt="mars" />
      </div>
      <div className="absolute z-10 right-[10%] top-[15%] p-1 max-w-[180px] md:max-w-[225px] lg:max-w-[320px] xl:max-w-[380px]">
        <h2 className="section-title">Mars</h2>
        <div className="hidden md:flex">
          <ChevronDoubleLeftIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel7" />
          <ChevronDoubleLeftIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel4" />
          <ChevronDoubleLeftIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulse" />
        </div>
        <p className="section-text">
          Its the only planet inhabited entirely by robots and home to the
          highest mountain in our solar system &ndash; Olympus Mons. Mars is
          also known as the &lsquo;Red Planet&rsquo;, this colour comes from the
          large amount of a iron oxide.
        </p>
      </div>
    </section>
  );
}

export default MarsSection;
