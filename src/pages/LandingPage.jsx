import Wrapper from "../components/Wrapper";
import SunSection from "../components/SunSection";
import MercurySection from "../components/MercurySection";
import VenusSection from "../components/VenusSection";
import EarthSection from "../components/EarthSection";
import MarsSection from "../components/MarsSection";
import JupiterSection from "../components/JupiterSection";
import SaturnSection from "../components/SaturnSection";
import UranusSection from "../components/UranusSection";
import NeptuneSection from "../components/NeptuneSection";
import PlutoSection from "../components/PlutoSection";
import SolarPlanetsSection from "../components/SolarPlanetsSection";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import NoteModal from "../components/NoteModal";

import UserProvider from "../components/UserContext";

function LandingPage() {
  return (
    <UserProvider>
      <Wrapper />
      <main className="m-auto px-3 md:px-8 lg:px-16 max-w-[1920px] bg-section">
        <SunSection />
        <MercurySection />
        <VenusSection />
        <EarthSection />
        <MarsSection />
        <JupiterSection />
        <SaturnSection />
        <UranusSection />
        <NeptuneSection />
        <PlutoSection />
        <SolarPlanetsSection />
      </main>
      <Footer />
      <NoteModal />
      <ScrollToTop />
    </UserProvider>
  );
}

export default LandingPage;
