import { Link } from "@reach/router";
import { HomeIcon, LockOpenIcon } from "@heroicons/react/24/outline";

import MessageModal from "../fan/modal";
import { useCTX } from "../_components";
import biologo from "../assets/imgs/bio-mud-page-logo.jpg";

export function NavigationSection() {
  const logo = new URL(biologo, import.meta.url);
  const { user } = useCTX();

  return (
    <div aria-label="Page Header" className="fixed z-20 navribbon">
      <div className="px-4 py-1.5 lg:py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end gap-4">
          
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="block shrink-0 rounded-full bg-transparent p-1 shadow-sm"
            >
              <span className="sr-only text-gray-600">Home</span>
              <HomeIcon className="h-5 w-5 text-white" />
            </Link>
          </div>

          <span
            aria-hidden="true"
            className="block h-6 w-px rounded-full bg-gray-200"
          ></span>
          
          <div className="flex items-center gap-4">
            <MessageModal />
          </div>
    
          <span
            aria-hidden="true"
            className="block h-6 w-px rounded-full bg-gray-200"
          ></span>
    
          {
            user ? (
              <Link to="/profile" className="block shrink-0 bg-transparent">
                <span className="sr-only">Profile</span>
                <img
                  alt="Mudimba"
                  src={logo}
                  className="lg:w-8 lg:h-8 h-5 w-5 rounded-full object-cover"
                />
              </Link>
            ) : (
              <Link to="/account/signin" className="block shrink-0 rounded-full p-1 bg-transparent shadow-sm">
                <span className="sr-only">Login</span>
                <LockOpenIcon className="h-5 w-5 text-white" />
              </Link>
            )
          }
        </div>

      </div>
    </div>
  );
}