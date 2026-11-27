import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Transition, Dialog } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Routes } from '@/data/Routes';
import NavBar from '@/components/nav/NavBar';
import ToggleTheme from '@/components/ToggleTheme';
import SlideOver from '@/components/layouts/Slideover';

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

      <SlideOver show={openMobileMenu} onClose={() => setOpenMobileMenu(false)}>
        {Routes.nav.map((route) => (
          <Link key={route.name} href={route.link} passHref>
            <a
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
              onClick={() => setOpenMobileMenu(false)}
            >
              {route.name}
            </a>
          </Link>
        ))}
      </SlideOver>
    </>
  );
}
