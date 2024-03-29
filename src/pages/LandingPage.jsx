import Wrapper from "../components/Wrapper";
import SunSection from "../components/SunSection";
import MercurySection from "../components/MercurySection";
import VenusSection from "../components/VenusSection";
import EarthSection from "../components/EarthSection";
import MarsSection from "../components/MarsSection";

function LandingPage() {
  return (
    <>
      <Wrapper />
      <main>
        <SunSection />
        <MercurySection />
        <VenusSection />
        <EarthSection />
        <MarsSection />
      </main>
    </>
  );
}

export default LandingPage;
