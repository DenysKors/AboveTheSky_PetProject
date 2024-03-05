import { useState } from "react";

function Navigation() {
  const [BurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  return (
    <nav className="mx-auto flex items-center justify-between p-6 lg:p-8">
      <div className="flex ">
        <a href="#" className="font-main p-1.5 text-base lg:text-xl">
          AboveTheSky
        </a>
      </div>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => setBurgerMenuOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  );
}

export default Navigation;
