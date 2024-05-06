function Footer() {
  return (
    <footer className="relative mt-16 md:mt-28 lg:mt-36 h-[60vh]">
      <div className="w-[75vw] h-full bg-footerMoon bg-no-repeat bg-left-bottom bg-contain"></div>
      <p className="absolute bottom-0 left-[50%] translate-x-[-50%] mb-2 text-text font-text text-xs md:text-sm lg:text-base">
        &copy; 2023 DenKors
      </p>
    </footer>
  );
}

export default Footer;
