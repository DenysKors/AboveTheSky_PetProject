import Header from "./Header";
import HeroSection from "./HeroSection";

function Wrapper() {
  return (
    <div className="pt-8 md:py-10 lg:py-[50px] bg-herobg">
      <Header />
      <HeroSection />
    </div>
  );
}

export default Wrapper;
