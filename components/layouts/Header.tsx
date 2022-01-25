import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Transition, Dialog } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Routes from '@/data/Routes';
import NavBar from '@/components/nav/NavBar';
import ToggleTheme from '@/components/ToggleTheme';

export default function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center px-2 lg:px-0">
            <div className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <MenuIcon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setOpenMobileMenu(true)}
              />
            </div>
            <div className="hidden lg:block lg:ml-6">
              <div className="flex space-x-4">
                <NavBar routes={Routes.nav}></NavBar>
              </div>
            </div>
          </div>
          <div className="flex items-center px-2 lg:px-0">
            <ToggleTheme></ToggleTheme>
          </div>
        </div>
      </div>

      <Transition.Root show={openMobileMenu} as={Fragment}>
        <Dialog as="div" className="z-20 fixed inset-0 overflow-hidden" onClose={setOpenMobileMenu}>
          <div className="absolute inset-0 overflow-hidden">
            <Dialog.Overlay className="absolute inset-0" />

            <div className="fixed inset-y-0 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="-translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="-translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white dark:bg-gray-800 shadow-xl overflow-y-scroll">
                    <div className="max-w-7xl px-2 sm:px-4 lg:px-8">
                      <div className="relative flex items-center justify-between h-16">
                        <div className="flex items-center px-2 lg:px-0">
                          <div className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <XIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                              onClick={() => setOpenMobileMenu(false)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                      {Routes.nav.map((route) => (
                        <Link key={route.name} href={route.link} passHref>
                          <a
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                            onClick={() => setOpenMobileMenu(false)}
                          >
                            {route.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
