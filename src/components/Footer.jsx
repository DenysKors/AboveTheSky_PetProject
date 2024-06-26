import { useState } from "react";
import { ArrowUturnRightIcon } from "@heroicons/react/24/outline";

import { useUser } from "../hooks/useContext";
import Pizza from "../assets/images/pizza_slice.png";
import Astronaut from "../assets/images/footer_astronaut.png";
import QuizModal from "./QuizModal";

function Footer() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const { nickname, userScore } = useUser();

  return (
    <footer className="relative pt-12 mt-14 md:mt-20 lg:mt-36 px-3 md:px-8 lg:px-16 h-[55vh] md:h-[80vh] lg:h-[100vh] overflow-hidden bg-footerMoon bg-no-repeat bg-left-bottom bg-footerSm md:bg-footerMd lg:bg-footerLg">
      {!nickname && (
        <div className="inline-flex flex-row gap-2 items-end">
          <button
            className="font-logo text-sm text-right text-logo md:text-lg lg:text-xl transition duration-1000 hover:text-yellow-500 focus:text-yellow-500"
            type="button"
            onClick={() => setIsFormModalOpen(true)}
          >
            Check yourself here, <br />
            astronaut
          </button>
          <ArrowUturnRightIcon className="text-yellow-500 w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 animate-pulseDel7 rotate-180" />
        </div>
      )}
      {nickname && userScore && (
        <div className="inline-flex flex-col items-end">
          <span className="font-logo text-sm text-right text-logo md:text-lg lg:text-xl">{`Congratulations, ${nickname}.`}</span>
          <span className="font-logo text-sm text-right text-logo md:text-lg lg:text-xl">{`Your score is ${userScore}.`}</span>
        </div>
      )}
      <QuizModal isOpen={isFormModalOpen} setIsOpen={setIsFormModalOpen} />
      <div className="absolute top-[10%] right-[calc(100vw-85%)] w-[50px] md:top-[5%] md:right-[15%] md:w-[80px] lg:top-[5%] lg:right-[calc(100vw-70%)] lg:w-[100px] animate-wigle">
        <img src={Pizza} alt="pizza slice" loading="lazy" />
      </div>
      <div className="absolute -rotate-45 top-[15%] right-[calc(100vw-85%)] w-[150px] md:top-[10%] md:right-[15%] md:w-[220px] lg:top-[10%] lg:right-[calc(100vw-70%)] lg:w-[260px]">
        <img src={Astronaut} alt="astronaut" loading="lazy" />
      </div>
      <div className="link-wrapper right-[15%] bottom-[10%] md:bottom-[15%] md:right-[10%] h-20 md:h-36 flex flex-col justify-between">
        <a
          className="p-1 bg-gray-300 rounded transition duration-300 hover:shadow-nav"
          href="https://linkedin.com/in/denys-korsukov"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <span>
            <svg
              className="h-5 w-5 md:h-7 md:w-7 fill-[#0077b5]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
          </span>
        </a>
        <a
          className="p-1 bg-gray-300 rounded-full transition duration-300 hover:shadow-nav"
          href="https://github.com/DenysKors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <span>
            <svg
              className="h-5 w-5 md:h-7 md:w-7 fill-[#333]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </span>
        </a>
      </div>
      <p className="absolute bottom-0 left-[50%] translate-x-[-50%] mb-2 z-10 text-text font-text text-xs md:text-sm lg:text-base">
        &copy; 2024 DenKors
        <br /> All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
