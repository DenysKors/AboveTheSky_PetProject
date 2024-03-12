function HeroSection() {
  return (
    <section className="w-full h-390 md:h-620 lg:h-720 bg-inherit bg-hero bg-contain bg-no-repeat bg-[right_-3rem_bottom] md:bg-[right_bottom]">
      <h1 className="sr-only">The Solar System</h1>
      <div className="pt-8 pl-4 max-w-[300px] md:pt-20 lg:pl-28 lg:max-w-[550px]">
        <q className="text-white font-text md:text-base lg:text-lg">
          It is a beautiful and delightful sight to behold the body of the Moon
        </q>
        <br />
        <span className="italic text-white"> - Galileo Galilei</span>
      </div>
    </section>
  );
}

export default HeroSection;
