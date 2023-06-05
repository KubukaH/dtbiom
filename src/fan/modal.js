import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { alertService } from '../_components/alert/service';
import { SendUs } from '../home';

export default function MessageModal({ user }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true)
  }

  if (!user) return alertService.info("You must be logged in.");

  return (
    <>
      <button
        type='button'
        className="block group shrink-0 rounded-full bg-transparent p-1 shadow-sm"
        onClick={openModal}
      >
        <span className="sr-only text-gray-600">Chat</span>
        <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-white" />
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
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
            <div className="flex min-h-full items-center p-2 lg:p-4 justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[853px] h-[480px] lg:h-[532px] transform overflow-hidden rounded-2xl bg-white p-0 text-left align-middle shadow-xl transition-all overflow-y-auto scroll-smooth">
                  <SendUs user={user} closeModal={closeModal} />
                </Dialog.Panel>
              </Transition.Child>
              <button
                type="button"
                className="absolute top-8 lg:end-60 md:end-1/2 sm:end-1/2 z-50 rounded-full border-[.5px] border-red-300 bg-transparent p-1 md:border-none"
                onClick={closeModal}
              >
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 md:h-6 md:w-6 text-pink-700 lg:text-red-300 hover:text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
