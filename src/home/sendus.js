import { useState } from "react";

import { alertService } from "../_components/alert/service";
import { useInput } from "../_components";
import useLoading from "../_components/extras/loading";
import { newCollection } from "../_db/operations";

export function SendUs({ closeModal }) {
  const [count, setCount] = useState(376);
  const [isLoading, load] = useLoading();
  const [message, setMessage] = useState('');
  const [state, setState] = useState({
    private: false,
    public: true,
    other: false
  });

  const names = useInput('');
  const email = useInput('');
  const phonenumber = useInput('');

  const colName = "Message";

  const submit = async (e) => {
    alertService.clear();
    e.preventDefault();
    const response = await newCollection({
      email: email.value,
      names: names.value,
      message: message,
      phonenumber: phonenumber.value,
      ...state,
      status: 'Pending'
    }, colName);
    setState({
      ...state,
      result: response.ref.value.id
    });
  }

  const onSubmit = (e) => load(submit(e)).then(
    () => {
      closeModal();
      alertService.info("Thank you for getting in touch. :)", {keepAfterRouteChange: false});
    }
  ).catch(
    (error) => alertService.error(error, {keepAfterRouteChange: false})
  );

  return (
  <section className="bg-gray-100">
    <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-4 lg:grid-cols-5">
        <div className="lg:col-span-2 lg:py-12">
          <p className="max-w-xl text-lg">
            Leave a message. You should choose how the message will be available: 
          </p>
          <ul role="list" className="marker:text-fuchsia-500 list-disc pl-5 space-y-3 my-3 ml-2 ">
            <li className="flex-row text-sm list-item font-thin font-sans" >
              <span>Selecting <code>Private</code>, only BiO will be able to read the message.</span>
            </li>
            <li className="text-sm list-item font-thin font-sans">
              <span>Selecting <code>Public</code>, your message appear in the feed and all users and visitors will be able to read it.</span>
            </li>
          </ul>
          <p>We value your privacy.</p>

          <div className="mt-8">
            <a href="#" className="text-2xl font-bold text-pink-600">
              +263 77 548 6117
            </a>

            <address className="mt-2 not-italic">
              Physical Address,
              Kani Stars Band,
              Ntabazinduna
            </address>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-lg lg:col-span-3">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">Name</label>
              <input
                className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                placeholder="Name"
                type="text"
                id="name"
                {...names.bind}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  {...email.bind}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">Phone</label>
                <input
                  className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  {...phonenumber.bind}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
              <div>
                <input
                  className="sr-only peer"
                  id="option1"
                  type="radio"
                  tabIndex="-1"
                  name="option"
                />

                <label
                  htmlFor="option1"
                  className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-fuchsia-300 peer-checked:bg-fuchsia-500 peer-checked:text-white cursor-pointer"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Public </span>
                </label>
              </div>

              <div>
                <input
                  className="peer sr-only"
                  id="option2"
                  type="radio"
                  tabIndex="-1"
                  name="option"
                />

                <label
                  htmlFor="option2"
                  className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-fuchsia-300 peer-checked:bg-fuchsia-500 peer-checked:text-white cursor-pointer"
                  tabIndex="0"
                  defaultChecked='true'
                >
                  <span className="text-sm font-medium"> Private </span>
                </label>
              </div>

              <div>
                <input
                  className="sr-only peer"
                  id="option3"
                  type="radio"
                  tabIndex="-1"
                  name="option"
                />

                <label
                  htmlFor="option3"
                  className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-fuchsia-300 peer-checked:bg-fuchsia-500 peer-checked:text-white cursor-pointer"
                  tabIndex="0"
                  aria-disabled="true"
                >
                  <span className="text-sm font-medium"> Other </span>
                </label>
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">Message</label>

              <textarea
                minLength={3}
                maxLength={375}
                className="peer is-dirty in-range:focus:border-fuchsia-300 in-range:border-fuchsia-300 focus:ring-1 in-range:focus:ring-fuchsia-300 out-of-range:text-pink-600 out-of-range:border-pink-500 out-of-range:focus:border-pink-500 out-of-range:focus:ring-1 out-of-range:ring-pink-500 out-of-range:focus:ring-pink-500 focus:outline-none w-full rounded-lg p-1 text-sm"
                placeholder="Message"
                rows="8"
                id="message"
                onChange={(e) => {
                  setCount(376 - e.target.value.length);
                  setMessage(e.target.value)
                }}
                value={message}
                required
              ></textarea>
              <p className="block text-end text-[10px] text-gray-600 -mt-1 mr-1 after:content-['left'] after:ml-0.5 after:text-gray-500">{count - 1} characters</p>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-auto bg-gradient-to-br from-fuchsia-400 to-fuchsia-300 px-5 py-3 font-medium text-white sm:w-auto hover:bg-gradient-to-tl hover:from-fuchsia-600 hover:to-fuchsia-400 hover:shadow-md duration-500 hover:bg-right-top"
                disabled={isLoading}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
}
