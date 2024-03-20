import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import Venus from "../assets/images/venus.png";

function VenusSection() {
  return (
    <section
      id="venus"
      className="relative w-full h-[380px] md:h-[620px] lg:h-[840px] bg-herobg"
    >
      <div className="absolute z-0 top-[50%] left-[5%] translate-y-[-50%] w-[calc(100vw-50%)]">
        <img src={Venus} alt="venus" />
      </div>
      <div className="absolute z-10 right-[10%] top-[15%] p-1 max-w-[180px] md:max-w-[225px] lg:max-w-[320px] xl:max-w-[380px]">
        <h2 className="section-title">Venus</h2>
        <ArrowLeftIcon className="text-yellow-500 hidden md:block md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulse" />
        <p className="section-text">
          The hottest and brightest planet in the solar system. Similar in
          structure and size to Earth, Venus spins slowly in the opposite
          direction from most planets. One Venusian day takes 243 Earth days.
        </p>
      </div>
    </section>
  );
}

export default VenusSection;
