import Header from "./Header";
import HeroSection from "./HeroSection";

function Wrapper() {
  return (
    <div className="pt-8 md:pt-10 xl:pt-14 bg-herobg">
      <Header />
      <HeroSection />
    </div>
  );
}

export default Wrapper;
