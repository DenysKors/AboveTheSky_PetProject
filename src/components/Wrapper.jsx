import Header from "./Header";
import HeroSection from "./HeroSection";

function Wrapper() {
  return (
    <div className="pt-8 md:pt-10 lg:pt-[50px] bg-herobg">
      <Header />
      <HeroSection />
    </div>
  );
}

export default Wrapper;
