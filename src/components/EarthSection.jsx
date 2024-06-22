import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

import Earth from "../assets/images/earth.png";

function EarthSection() {
  return (
    <section id="earth">
      <div className="mb-5 relative w-full h-[380px] md:h-[620px] lg:h-[840px] flex items-center justify-end">
        <div className="w-[calc(100vw-55%)] flex justify-end">
          <img src={Earth} alt="earth" loading="lazy" />
        </div>
        <div className="absolute z-10 left-0 md:left-[5%] top-[15%] p-1 max-w-[180px] md:max-w-[225px] lg:max-w-[320px] xl:max-w-[380px]">
          <h2 className="section-title">Earth</h2>
          <div className="flex">
            <ChevronDoubleRightIcon className="text-yellow-500 w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulse" />
            <ChevronDoubleRightIcon className="text-yellow-500 w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel4" />
            <ChevronDoubleRightIcon className="text-yellow-500 w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel7" />
          </div>
          <p className="section-text">
            Earth has a moon and an atmosphere that consists of 78% nitrogen,
            21% oxygen and 1% other gases. Its the only place we know of
            inhabited by living things. Beautiful nature and the perfect place
            for life.
          </p>
        </div>
      </div>
      <div className="text-center">
        <h3 className="inline-block text-text font-text text-sm md:text-base lg:text-lg select-none tracking-wider uppercase border-b-yellow-500 border-b-2 back">
          Earth views from space
        </h3>
      </div>
      <div className="flex flex-col gap-3 md:gap-4 xl:gap-8 md:flex-row justify-center items-center">
        <div className="relative pt-[55%] w-[calc(100vw-10%)] md:w-[calc(100vw-54%)] xl:w-[calc(100vw-65%)] md:pt-[35%] xl:pt-[30%]">
          <iframe
            src="https://player.vimeo.com/video/927491728?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="Earth dark side"
          ></iframe>
        </div>
        <div className="relative pt-[55%] w-[calc(100vw-10%)] md:w-[calc(100vw-54%)] xl:w-[calc(100vw-65%)] md:pt-[35%] xl:pt-[30%]">
          <iframe
            src="https://player.vimeo.com/video/927511584?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="Earth light side"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default EarthSection;
