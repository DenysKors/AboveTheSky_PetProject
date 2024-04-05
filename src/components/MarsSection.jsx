import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";

import Mars from "../assets/images/mars.png";
import Marsmission_1 from "../assets/images/marsmission_1.png";
import Marsmission_2 from "../assets/images/marsmission_2.png";
import Marsmission_3 from "../assets/images/marsmission_3.png";
import Marsmission_4 from "../assets/images/marsmission_4.png";
import Marsmission_5 from "../assets/images/marsmission_5.png";
import Marsmission_6 from "../assets/images/marsmission_6.png";

function MarsSection() {
  return (
    <section id="mars">
      <div className="relative w-full h-[380px] md:h-[620px] lg:h-[840px] flex items-center">
        <div className="w-[calc(100vw-54%)]">
          <img src={Mars} alt="mars" />
        </div>
        <div className="absolute z-10 right-0 md:right-[5%] top-[15%] p-1 max-w-[180px] md:max-w-[225px] lg:max-w-[320px] xl:max-w-[380px]">
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
      <div className="lg:pt-24">
        <h3 className="text-text font-text text-sm md:text-base lg:text-lg select-none text-center tracking-wider uppercase shadow-2xl">
          Mars robots missions
        </h3>
        <ul className="m-auto pt-2 lg:pt-6 md:pt-4 max-w-[1440px] max-h-[1180px] grid grid-cols-3 gap-1 md:gap-2 lg:gap-3">
          <li className="rounded-md overflow-hidden lg:rounded-lg">
            <img
              className="w-full h-full"
              src={Marsmission_1}
              alt="marsmission"
            />
          </li>
          <li className="rounded-md overflow-hidden lg:rounded-lg">
            <img
              className="w-full h-full"
              src={Marsmission_2}
              alt="marsmission"
            />
          </li>
          <li className="rounded-md overflow-hidden lg:rounded-lg">
            <img
              className="w-full h-full"
              src={Marsmission_3}
              alt="marsmission"
            />
          </li>
          <li className="rounded-md overflow-hidden lg:rounded-lg">
            <img
              className="w-full h-full"
              src={Marsmission_4}
              alt="marsmission"
            />
          </li>
          <li className="rounded-md overflow-hidden lg:rounded-lg col-span-2">
            <img
              className="w-full h-full"
              src={Marsmission_5}
              alt="marsmission"
            />
          </li>
          <li className="rounded-md overflow-hidden lg:rounded-lg col-span-3">
            <img
              className="w-full h-full"
              src={Marsmission_6}
              alt="marsmission"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MarsSection;
