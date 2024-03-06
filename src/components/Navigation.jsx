import { Fragment, useState } from "react";

import { Bars3Icon, ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";

const solarPlanets = [
  { name: "Sun", href: "#sun" },
  { name: "Mercury", href: "#mercury" },
  { name: "Venus", href: "#venus" },
  { name: "Earth", href: "#earth" },
  { name: "Mars", href: "#mars" },
  { name: "Jupiter", href: "#jupiter" },
  { name: "Saturn", href: "#saturn" },
  { name: "Uranus", href: "#uranus" },
  { name: "Neptune", href: "#neptune" },
];

function Navigation() {
  const [BurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  return (
    <nav className="mx-auto flex items-center justify-between p-6 lg:p-8">
      <div className="flex ">
        <a href="#home" className="font-logo p-1.5 text-base lg:text-xl">
          AboveTheSky
        </a>
      </div>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => setBurgerMenuOpen(true)}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="p-1 flex items-center gap-x-1 text-sm font-semibold uppercase leading-6 text-gray-900 border-2 rounded-lg">
                The Solar system
                <ChevronDoubleDownIcon
                  className={`${open ? "rotate-180 transition" : ""}
                      h-5 w-5 flex-none text-gray-400
                      `}
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -right-0 top-full z-10 mt-3  max-w-48 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                  <ul>
                    {solarPlanets.map((planet) => (
                      <li
                        key={planet.name}
                        className="group relative flex items-center gap-x-6 rounded-lg py-2 px-8 text-base leading-6 hover:bg-gray-50"
                      >
                        <a
                          href={planet.href}
                          className="block font-semibold text-gray-900"
                        >
                          {planet.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <></>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </Popover.Group>
    </nav>
  );
}

export default Navigation;
