import Sun from "../assets/images/sun.png";

function SunSection() {
  return (
    <section
      id="sun"
      className="w-full h-[450px] md:h-[720px] lg:h-[860px] bg-herobg"
    >
      <div className="relative h-full max-w-[1200px] bg-[radial-gradient(circle_at_20%_50%,rgba(230,65,4,1.0)_0%,rgba(230,65,4,1.0)_30%,rgb(6,6,6)_50%)]">
        <div className="absolute top-[50%] left-[5%] translate-y-[-50%] w-[calc(100vw-40%)]">
          <img src={Sun} alt="sun" />
        </div>
      </div>
      <h2 className="text-right font-main  text-text text-lg md:text-xl  lg:text-7xl">
        Sun
      </h2>
    </section>
  );
}

export default SunSection;
