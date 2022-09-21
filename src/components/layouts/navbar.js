/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const biologo = new URL('../../assets/dtbm.svg', import.meta.url);

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

window.optionChange = function() {
  return {
    optionActive: true,
    optionInactive: true,
    activeEl: false,
    previousEl: false,
    elData: {
      topPos: 0,
      leftPos: 0,
      widthSize: 0,
      heightSize: 0,
    },
    findElData() {
      if (! this.activeEl) {
        return
      }
  
      this.elData.widthSize = `${this.activeEl.getBoundingClientRect().width}px` || 0
      this.elData.heightSize = `${this.activeEl.getBoundingClientRect().height}px` || 0
      this.elData.topPos = `${this.activeEl.offsetTop}px` || 0
      this.elData.leftPos = `${this.activeEl.offsetLeft}px` || 0
    },
    chn() {
      this.optionActive = true;
      this.previousEl = $el;
      this.activeEl = $el;
    }
  };
};

const navOption = 
`<div
    x-data="optionChange()"
    x-init="
      previousEl = optionActive ? $refs.optionActive : $refs.optionInacive
      activeEl = previousEl
    "
    x-effect="findElData"
    class="relative"
  >
  <span
    class="bg-indigo-100 border border-indigo-200 absolute transition-all duration-300 rounded-full"
    :style="{
      top: elData.topPos,
      left: elData.leftPos,
      width: elData.widthSize,
      height: elData.heightSize
    }"
  ></span>

  <div class="flex items-center gap-2 text-sm font-medium">
    <button
      class="rounded-full px-4 py-2 relative transition text-sm font-medium"
      @click="chn()"
      :class="{
        'text-indigo-700': activeEl == $el,
        'text-gray-500 hover:text-indigo-700': activeEl !== $el
      }"
      @mouseover="activeEl = $el"
      @mouseleave="activeEl = previousEl"
      x-ref="optionActive"
    >
      Dashboard
    </button>

    <button
      class="rounded-full px-4 py-2 relative transition"
      x-on:click="chn(oa = false)"
      :class="{
        'text-amber-700': activeEl == $el,
        'text-gray-500 hover:text-amber-700': activeEl !== $el
      }"
      x-on:mouseover="activeEl = $el"
      x-on:mouseleave="activeEl = previousEl"
      x-ref="optionActive"
    >
      Team
    </button>

    <button
      class="rounded-full px-4 py-2 relative transition"
      x-on:click="chn(oa = false)"
      :class="{
        'text-amber-700': activeEl == $el,
        'text-gray-500 hover:text-amber-700': activeEl !== $el
      }"
      x-on:mouseover="activeEl = $el"
      x-on:mouseleave="activeEl = previousEl"
      x-ref="optionActive"
    >
      Projects
    </button>

    <button
      class="rounded-full px-4 py-2 relative transition"
      x-on:click="chn(oa = false)"
      :class="{
        'text-amber-700':activeEl === $el,
        'text-gray-500 hover:text-amber-700': activeEl !== $el
      }"
      x-on:mouseover="activeEl = $el"
      x-on:mouseleave="activeEl = previousEl"
      x-ref="optionB"
    >
      Calender
    </button>
  </div>
</div>`

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
};

export default function NavigationBar() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
  };

  function openModal() {
    setIsOpen(true)
  };

  return (
    <Disclosure as="nav" className="bg-gradient-to-b from-orange-200 via-lime-500 to-zinc-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/*<img
                    className="block lg:hidden h-8 w-auto"
                    src={biologo}
                    alt="Workflow"
                  />*/}
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={biologo}
                    alt="D.T Mudimba"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <div dangerouslySetInnerHTML={{ __html: navOption }} />
                    {/*navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))*/}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button 
                      className="px-8 py-2 text-sm font-medium border rounded-full border-indigo-300 hover:bg-white hover:text-red-500"
                      onClick={openModal}
                    >
                      <span className="sr-only">Get Started</span>
                      <span>Get Started</span>
                    </Menu.Button>
                  </div>
                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                      </Transition.Child>

                      <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                              <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                              >
                                Sign UP NOW
                              </Dialog.Title>
                              <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                  Your details will be kept safely in our database. Yuou agree to our terms and conditions.
                                </p>
                                <p>
                                  Signup Coming up soon...
                                </p>
                              </div>

                              <div className="mt-4">
                                <button
                                  type="button"
                                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                  onClick={closeModal}
                                >
                                  Got it, thanks!
                                </button>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>
                </Menu>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  {/*<div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>*/}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
