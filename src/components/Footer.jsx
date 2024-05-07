function Footer() {
  return (
    <footer className="relative mt-16 md:mt-28 lg:mt-36 h-[60vh]">
      <div className="w-[75vw] h-full bg-footerMoon bg-no-repeat bg-left-bottom bg-contain"></div>
      <div className="absolute right-[5%] bottom-[10%] h-[13vh] md:h-[16vh] flex flex-col justify-between">
        <a
          className="text-white"
          href="https://linkedin.com/in/denys-korsukov"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="text-white"
          href="https://github.com/DenysKors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <p className="absolute bottom-0 left-[50%] translate-x-[-50%] mb-2 z-10 text-text font-text text-xs md:text-sm lg:text-base">
        &copy; 2023 DenKors
        <br /> All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
