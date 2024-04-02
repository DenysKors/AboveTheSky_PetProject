import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";

import Mars from "../assets/images/mars.png";

function MarsSection() {
  return (
    <section id="mars" className="px-3 md:px-8 lg:px-16 bg-herobg">
      <div className="relative w-full h-[380px] md:h-[620px] lg:h-[840px] flex items-center">
        <div className="w-[calc(100vw-54%)]">
          <img src={Mars} alt="mars" />
        </div>
        <div className="absolute z-10 right-[5%] top-[15%] p-1 max-w-[180px] md:max-w-[225px] lg:max-w-[320px] xl:max-w-[380px]">
          <h2 className="section-title">Mars</h2>
          <div className="hidden md:flex">
            <ChevronDoubleLeftIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel7" />
            <ChevronDoubleLeftIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel4" />
            <ChevronDoubleLeftIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulse" />
          </div>
          <p className="section-text">
            Its the only planet inhabited entirely by robots and home to the
            highest mountain in our solar system &ndash; Olympus Mons. Mars is
            also known as the &lsquo;Red Planet&rsquo;, this colour comes from
            the large amount of a iron oxide.
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-text font-text md:text-base lg:text-lg select-none text-center tracking-wider uppercase">
          Mars robots missions
        </h3>
        <ul>
          <li>img</li>
          <li>img</li>
          <li>img</li>
          <li>img</li>
        </ul>
      </div>
    </section>
  );
}

export default MarsSection;
