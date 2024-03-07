import { Fragment, useState } from "react";

import {
  Bars3Icon,
  ChevronDoubleDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Popover, Transition, Dialog, Disclosure } from "@headlessui/react";

import { solarPlanets } from "../data/solarPlanets";

function Navigation() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <>
      <nav className="mx-auto flex items-center justify-between p-6 lg:p-8">
        <div className="flex ">
          <a href="#home" className="font-logo p-1.5 text-lg">
            AboveTheSky
          </a>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 md:hidden"
          onClick={() => setIsBurgerMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        <Popover.Group className="hidden md:flex md:gap-x-4 lg:gap-x-12 items-center">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="p-1 flex items-center gap-x-1 text-base tracking-wide font-main uppercase text-gray-900 border-2 rounded-lg">
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
                          className="group relative flex items-center gap-x-6 rounded-lg py-2 px-8 text-base tracking-wide hover:bg-gray-50"
                        >
                          <a
                            href={planet.href}
                            className="block font-main text-gray-900"
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
          <a
            href="#"
            className="font-main text-base tracking-wide uppercase  text-gray-900"
          >
            Lorem ipsum
          </a>
          <a
            href="#"
            className="font-main text-base tracking-wide uppercase  text-gray-900"
          >
            Lorem ipsum
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={isBurgerMenuOpen}
        onClose={setIsBurgerMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 max-w sm:ring-1 sm:ring-gray-900/10">
          <div className="flex justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-red-500 bg-gray-300"
              onClick={() => setIsBurgerMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        The Solar system
                        <ChevronDoubleDownIcon
                          className={`${open ? "rotate-180 transition" : ""}
                    h-5 w-5 flex-none text-gray-400
                      `}
                        />
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

export default Navigation;
