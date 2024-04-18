import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

import Uranus from "../assets/images/uranus.png";
import Miranda from "../assets/images/miranda.jpg";
import Ariel from "../assets/images/ariel.webp";
import Umbriel from "../assets/images/umbriel.webp";
import Titania from "../assets/images/titania.webp";
import Oberon from "../assets/images/oberon.webp";

function UranusSection() {
  return (
    <section className="md:pt-28 lg:pt-36 pb-60" id="uranus">
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
            -224&#8451;. Uranus has 28 known moons.
          </p>
        </div>
      </div>
      <div className="text-center">
        <h3 className="inline-block text-text font-text text-sm md:text-base lg:text-lg select-none tracking-wider uppercase border-b-yellow-500 border-b-2 back">
          Uranus five major moons
        </h3>
        <div className="m-auto py-2 md:py-4 lg:py-6 w-full md:w-[calc(100vw-30%)] overflow-x-auto snap-x snap-mandatory flex gap-2 md:gap-6 lg:gap-8">
          <div className="shrink-0 snap-always snap-center">
            <div className="w-[35px] h-[200px] md:w-[100px] md:h-[300px] lg:w-[210px] lg:h-[420px]"></div>
          </div>
          <div className="shrink-0 snap-always snap-center rounded-md overflow-hidden lg:rounded-lg bg-black">
            <img
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[420px] object-contain"
              src={Miranda}
              alt="miranda"
            />
            <p className="mb-2 md:mb-4 lg:mb-6 text-text font-text md:text-base lg:text-lg select-none ">
              Miranda
            </p>
          </div>
          <div className="shrink-0 snap-always snap-center rounded-md overflow-hidden lg:rounded-lg bg-black">
            <img
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[420px] object-contain"
              src={Ariel}
              alt="ariel"
            />
            <p className="mb-2 md:mb-4 lg:mb-6 text-text font-text md:text-base lg:text-lg select-none">
              Ariel
            </p>
          </div>
          <div className="shrink-0 snap-always snap-center rounded-md overflow-hidden lg:rounded-lg bg-black">
            <img
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[420px] object-contain"
              src={Umbriel}
              alt="umbriel"
            />
            <p className="mb-2 md:mb-4 lg:mb-6 text-text font-text md:text-base lg:text-lg select-none">
              Umbriel
            </p>
          </div>
          <div className="shrink-0 snap-always snap-center rounded-md overflow-hidden lg:rounded-lg bg-black">
            <img
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[420px] object-contain"
              src={Titania}
              alt="titania"
            />
            <p className="mb-2 md:mb-4 lg:mb-6 text-text font-text md:text-base lg:text-lg select-none">
              Titania
            </p>
          </div>
          <div className="shrink-0 snap-always snap-center rounded-md overflow-hidden lg:rounded-lg bg-black">
            <img
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[420px] object-contain"
              src={Oberon}
              alt="oberon"
            />
            <p className="mb-2 md:mb-4 lg:mb-6 text-text font-text md:text-base lg:text-lg select-none">
              Oberon
            </p>
          </div>
          <div className="shrink-0 snap-always snap-center">
            <div className="w-[35px] h-[200px] md:w-[100px] md:h-[300px] lg:w-[210px] lg:h-[420px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UranusSection;
