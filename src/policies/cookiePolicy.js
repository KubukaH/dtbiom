import { XMarkIcon, BellIcon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Link } from '@reach/router';

export function CookiesPolicy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <Link 
      to="#cookies" 
      className="text-gray-500 transition hover:opacity-75"
      onClick={() => setIsOpen(true)}
    >
      Cookies
    </Link>
    <Transition appear show={isOpen} as={Fragment}>
      <aside className="bg-indigo-600 fixed bottom-4 start-1 lg:start-4 z-50 w-full lg:w-1/4 md:w-1/3 h-1/3">
        <div className="py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex-1 flex items-center overflow-auto h-12">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <BellIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="block">Cookies Policy</span>
              </p>
            </div>
            {/*<div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
              >
                More ...
              </a>
            </div>*/}
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className='p-1 items-start m-1 border border-dotted border-fuchsia-700 rounded-md bg-slate-200 '>
          <h2 className='font-semibold text-[16px] text-gray-400 mb-2'>D.T BiO Mudimba Music uses "cookies".</h2>
          <p className="inline text-gray-400 text-[11px] text-justify">These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
        </div>
      </aside>
    </Transition>
    </>
  );
};
