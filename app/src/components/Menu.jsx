import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

const HamburgerMenu = () => {
  return (
    <div className="w-56 text-right z-50">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md z-50 px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 ">
            <div class="space-y-2">
              <span class="block w-5 h-0.5 bg-clRed"></span>
              <span class="block w-5 h-0.5 bg-clRed"></span>
              <span class="block w-5 h-0.5 bg-clRed"></span>
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 z-50 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <a
                  href="#Home"
                  className="px-2 py-2 text-sm group flex w-full items-center rounded-md"
                >
                  Início
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="#Activities"
                  className="px-2 py-2 text-sm group flex w-full items-center rounded-md"
                >
                  Como atuamos?
                </a>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <a
                  href="#Impacts"
                  className="px-2 py-2 text-sm group flex w-full items-center rounded-md"
                >
                  Impactos
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="#Testimonies"
                  className="px-2 py-2 text-sm group flex w-full items-center rounded-md"
                >
                  Depoimentos
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
