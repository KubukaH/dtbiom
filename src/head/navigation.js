import { Disclosure } from '@headlessui/react';
import { HomeIcon, LockOpenIcon } from '@heroicons/react/24/outline';
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
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-end lg:w-32 lg:h-12 h-10 w-44">
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-4">
            <Link
              to="/"
              className="block shrink-0 rounded-full bg-transparent p-1 shadow-sm"
            >
              <span className="sr-only">Home</span>
              <HomeIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </Link>
            <span
              aria-hidden="true"
              className="block h-6 w-px rounded-full bg-gray-200"
            ></span>
            <MessageModal user={user} />
            <span
              aria-hidden="true"
              className="block h-6 w-px rounded-full bg-gray-200"
            ></span>

            {/* Profile dropdown */}
            {
              user ? ( <UserMenu logo={logo} user={user} /> ) : (
                <Link to="/account/signin" className="block shrink-0 rounded-full p-1 bg-transparent shadow-sm">
                  <span className="sr-only">Login</span>
                  <LockOpenIcon className="h-5 w-5 text-white" aria-hidden="true" />
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
