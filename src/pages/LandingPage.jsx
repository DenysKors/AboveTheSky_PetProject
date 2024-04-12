import Wrapper from "../components/Wrapper";
import SunSection from "../components/SunSection";
import MercurySection from "../components/MercurySection";
import VenusSection from "../components/VenusSection";
import EarthSection from "../components/EarthSection";
import MarsSection from "../components/MarsSection";
import JupiterSection from "../components/JupiterSection";
import SaturnSection from "../components/SaturnSection";

function LandingPage() {
  return (
    <>
      <Wrapper />
      <main className="m-auto px-3 md:px-8 lg:px-16 max-w-[1920px] bg-herobg">
        <SunSection />
        <MercurySection />
        <VenusSection />
        <EarthSection />
        <MarsSection />
        <JupiterSection />
        <SaturnSection />
      </main>
    </>
  );
}

export default LandingPage;
