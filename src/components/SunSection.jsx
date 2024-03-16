import Sun from "../assets/images/sun.png";

function SunSection() {
  return (
    <section
      id="sun"
      className="w-full h-[450px] md:h-[680px] lg:h-[840px] bg-herobg"
    >
      <div className="relative h-full max-w-[1335px] bg-[radial-gradient(circle_at_30%_50%,rgba(210,37,0,1.0)_0%,rgba(210,37,0,1.0)_30%,rgb(6,6,6)_38%)]">
        <div className="absolute top-[50%] left-[5%] translate-y-[-50%] w-[calc(100vw-50%)]">
          <img src={Sun} alt="sun" />
        </div>
      </div>
      <h2 className="text-right font-main  text-text text-lg md:text-xl lg:text-7xl">
        Sun
      </h2>
    </section>
  );
}

export default SunSection;
