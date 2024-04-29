import SolarSystem from "../assets/images/solar_system.jpg";

function SolarPlanetsSection() {
  return (
    <section className="md:py-28 lg:py-36 text-center">
      <h3 className="mb-2 md:mb-4 lg:mb-6 inline-block section-title underline decoration-yellow-500">
        Solar System planets parade
      </h3>
      <div>
        <img className="object-fill" src={SolarSystem} alt="solar_system" />
      </div>
    </section>
  );
}

export default SolarPlanetsSection;
