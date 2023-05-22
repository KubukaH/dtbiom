import { Dialog, Transition } from '@headlessui/react';
import { Link } from '@reach/router';
import { Fragment, useState } from 'react';

export default function PrivacyPolicy() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Link 
        className="text-gray-500 transition hover:opacity-75" 
        to="#privacy-policy"
        onClick={ openModal }
      >
        Privacy Policy
      </Link>
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
                <Dialog.Panel className="w-full max-w-[653px] h-[80vh] transform overflow-y-auto overflow-hidden bg-white p-4 text-left align-middle shadow-xl transition-all">
                  <PolicyDetails />
                </Dialog.Panel>
              </Transition.Child>
              <button
                type="button"
                className="absolute top-12 md:end-[350px] md:top-8 z-50 rounded-full border-[.5px] border-red-300 bg-transparent p-1 md:border-none"
                onClick={closeModal}
              >
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 md:h-6 md:w-6 text-red-300 hover:text-red-400"
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


const PolicyDetails = () => {
  return (
    <section>
    <h1 className='text-3xl mb-3'>Privacy Policy for D.T BiO Mudimba Music</h1>

    <p className='text-[12px] font-mono mt-2'>At D.T BiO Mudimba Music, accessible from https://www.dtbiom.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by D.T BiO Mudimba Music and how we use it.</p>
    
    <p className='text-[12px] font-mono mt-2'>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
    
    <h2 className='text-2xl my-2'>Log Files</h2>
    
    <p className='text-[12px] font-mono mt-2'>D.T BiO Mudimba Music follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicygenerator.org">Privacy Policy Generator</a>.</p>
    
    <h2 className='text-2xl my-2'>Cookies and Web Beacons</h2>
    
    <p className='text-[12px] font-mono mt-2'>Like any other website, D.T BiO Mudimba Music uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
    
    <h2 className='text-2xl my-2'>Google DoubleClick DART Cookie</h2>
    
    <p className='text-[12px] font-mono mt-2'>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>
    
    
    <h2 className='text-2xl my-2'>Privacy Policies</h2>
    
    <p className='text-[12px] font-mono mt-2'>You may consult this list to find the Privacy Policy for each of the advertising partners of D.T BiO Mudimba Music.</p>
    
    <p className='text-[12px] font-mono mt-2'>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on D.T BiO Mudimba Music, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
    
    <p className='text-[12px] font-mono mt-2'>Note that D.T BiO Mudimba Music has no access to or control over these cookies that are used by third-party advertisers.</p>
    
    <h2 className='text-2xl my-2'>Third Party Privacy Policies</h2>
    
    <p className='text-[12px] font-mono mt-2'>D.T BiO Mudimba Music's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
    
    <p className='text-[12px] font-mono mt-2'>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>
    
    <h2 className='text-2xl my-2'>Children's Information</h2>
    
    <p className='text-[12px] font-mono mt-2'>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
    
    <p className='text-[12px] font-mono mt-2'>D.T BiO Mudimba Music does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
    
    <h2 className='text-2xl my-2'>Online Privacy Policy Only</h2>
    
    <p className='text-[12px] font-mono mt-2'>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in D.T BiO Mudimba Music. This policy is not applicable to any information collected offline or via channels other than this website.</p>
    
    <h2 className='text-2xl my-2'>Consent</h2>
    
    <p className='text-[12px] font-mono mt-2'>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>									
    </section>
  );
}
