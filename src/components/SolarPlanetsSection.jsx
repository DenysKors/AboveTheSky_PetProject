import { LettersColor } from "./LettersColor";

import SolarSystem from "../assets/images/solar_system.jpg";

function SolarPlanetsSection() {
  return (
    <section className="md:py-28 lg:py-36 text-center">
      <LettersColor userString="Solar System parade of the planets" />
      <div>
        <img className="object-fill" src={SolarSystem} alt="solar_system" />
      </div>
    </section>
  );
}

export default SolarPlanetsSection;
