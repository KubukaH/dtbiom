import { Disclosure } from '@headlessui/react';
import { HomeIcon, LockClosedIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from '@reach/router';

import UserMenu from './user.menu';
import MessageModal from '../fan/modal';
import biologo from "../assets/imgs/bio-mud-page-logo.jpg";
import { useCTX } from '../_components';

export function NavigationSection() {
  const logo = new URL(biologo, import.meta.url);
  const { user } = useCTX();

  return (
    <Disclosure as="nav" className="navribbon">
      {({ open }) => (
        <>
        <div className="mx-auto max-w-7xl px-2">
          <div className="relative flex items-center justify-end hover:shadow-orange-200 py-1">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md px-1.5 py-0.5 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-5 w-5" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-5 w-5" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="hidden h-5 w-auto lg:block rounded-full"
                  src={logo}
                  alt="Bio Mudimba"
                />
              </div>
              <div className="lg:hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href='#'
                    className='text-white hover:bg-gray-700 hover:text-white rounded-md px-1.5 py-0.5 text-sm font-medium'
                    aria-current='page'
                  >
                    DTBioMudimbaMusic
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center lg:pr-6 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-4">
              <Link
                to="/"
                className="block group shrink-0 rounded-full bg-transparent p-1 shadow-sm"
              >
                <span className="sr-only">Home</span>
                <HomeIcon className="h-5 w-5 text-white" aria-hidden="true" />
                {/*<span
                  className="absolute bottom-full h-full top-[50px] end-28 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                >
                  Home
                </span>*/}
              </Link>
              <span
                aria-hidden="true"
                className="block h-6 w-px rounded-full bg-gray-200"
              />
              <MessageModal user={user} />
              <span
                aria-hidden="true"
                className="block h-6 w-px rounded-full bg-gray-200"
              />
  
              {/* Profile dropdown */}
              {
                user ? ( <UserMenu logo={logo} /> ) : (
                  <Link to="/account/signin" className="block group shrink-0 rounded-full p-1 bg-transparent shadow-sm">
                    <span className="sr-only">Login</span>
                    <LockClosedIcon className="h-5 w-5 text-white" aria-hidden="true" />
                  </Link>
                )
              }
            </div>
          </div>
        </div>
        </>
      )}
    </Disclosure>
  );
}
