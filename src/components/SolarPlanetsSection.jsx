import { LettersColor } from "./LettersColor";

import SolarSystem from "../assets/images/solar_system.jpg";

function SolarPlanetsSection() {
  return (
    <section className="md:pt-28 lg:pt-36 text-center">
      <LettersColor userString="Solar System planets parade" />
      <div>
        <img className="object-fill" src={SolarSystem} alt="solar_system" />
      </div>
    </section>
  );
}

export default SolarPlanetsSection;
