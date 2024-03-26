function VenusSection() {
  return (
    <section id="earth" className="bg-herobg">
      <div className="flex flex-col gap-3 md:flex-row justify-center items-center">
        <div className="relative pt-[55%] border-gray-300 border-2 rounded  w-[calc(100vw-10%)]">
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
        <div className="relative pt-[55%] border-gray-300 border-2 rounded  w-[calc(100vw-10%)]">
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
      {/* <div className="absolute z-0 top-[50%] left-[5%] translate-y-[-50%] w-[calc(100vw-50%)]">
        <iframe
          src="https://player.vimeo.com/video/927491728?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style="width:100%;height:100%;"
          title="Earth dark side"
        ></iframe>
      </div> */}
      {/* <div className="absolute z-10 right-[10%] top-[15%] p-1 max-w-[180px] md:max-w-[225px] lg:max-w-[320px] xl:max-w-[380px]">
          <h2 className="section-title">Venus</h2>
          <ArrowLeftIcon className="text-yellow-500 hidden md:block md:w-5 md:h-5 lg:w-7 lg:h-7 animate-pulse" />
          <p className="section-text">
            The hottest and brightest planet in the solar system. Similar in
            structure and size to Earth, Venus spins slowly in the opposite
            direction from most planets. One Venusian day takes 243 Earth days.
          </p>
        </div> */}
    </section>
  );
}

export default VenusSection;
