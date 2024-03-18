import Mercury from "../assets/images/mercury.png";

function MercurySection() {
  return (
    <section
      id="mercury"
      className="relative w-full h-[450px] md:h-[680px] lg:h-[840px] bg-herobg"
    >
      <div className="absolute z-0 top-[50%] right-[5%] translate-y-[-50%] w-[calc(100vw-55%)] flex justify-end">
        <img src={Mercury} alt="mercury" />
      </div>
      <div className="absolute z-10 left-[10%] top-[15%] p-1 max-w-[180px] md:max-w-[225px] lg:max-w-[320px] xl:max-w-[380px]">
        <h2 className="section-title">Mercury</h2>
        <p className="section-text">
          The closest planet to the Sun and the smallest planet in the Solar
          System. It is barely bigger than our Moon. Mercury's sun-facing side
          is scorched by temperatures of around 430&#8451;, hot enough to melt
          lead.
        </p>
      </div>
    </section>
  );
}

export default MercurySection;
