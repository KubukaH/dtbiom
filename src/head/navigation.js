import { Link } from "@reach/router";
import { HomeIcon, LockOpenIcon } from "@heroicons/react/24/outline";

import MessageModal from "../fan/modal";
import biologo from "../assets/imgs/bio-mud-page-logo.jpg";
import { auth_strategy } from "../_db/auth";
import UserMenu from "./user.menu";

export function NavigationSection() {
  const logo = new URL(biologo, import.meta.url);
  const user = auth_strategy.currentUser();

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
            user ? ( <UserMenu logo={logo} user={user} /> ) : (
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
