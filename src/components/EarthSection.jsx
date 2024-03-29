import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

import Earth from "../assets/images/earth.png";

function VenusSection() {
  return (
    <section id="earth" className="bg-herobg">
      <div className="relative w-full h-[380px] md:h-[620px] lg:h-[840px]">
        <div className="absolute z-0 top-[50%] right-[5%] translate-y-[-50%] w-[calc(100vw-48%)] flex justify-end">
          <img src={Earth} alt="earth" />
        </div>
        <div className="absolute z-10 left-[10%] top-[15%] p-1 max-w-[180px] md:max-w-[225px] lg:max-w-[320px] xl:max-w-[380px]">
          <h2 className="section-title">Earth</h2>
          <div className="hidden md:flex">
            <ChevronDoubleRightIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulse" />
            <ChevronDoubleRightIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel4" />
            <ChevronDoubleRightIcon className="text-yellow-500 md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulseDel7" />
          </div>
          <p className="section-text">
            Earth has a moon and an atmosphere that consists of 78% nitrogen,
            21% oxygen, and 1% other gases. It's the only place we know of
            inhabited by living things. Beautiful nature and the perfect place
            for life.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-4 md:flex-row justify-center items-center">
        <div className="relative pt-[55%] w-[calc(100vw-10%)] md:w-[calc(100vw-54%)]">
          <iframe
            src="https://player.vimeo.com/video/927491728?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
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
        <div className="relative pt-[55%] w-[calc(100vw-10%)] md:w-[calc(100vw-54%)]">
          <iframe
            src="https://player.vimeo.com/video/927511584?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
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

export default VenusSection;
