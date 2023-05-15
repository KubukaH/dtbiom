export function SendUs() {
  return (
  <section className="bg-gray-100">
    <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-4 lg:grid-cols-5">
        <div className="lg:col-span-2 lg:py-12">
          <p className="max-w-xl text-lg">
            Leave a message. You should choose how the message will be available: 
          </p>
          <ul className="items-start px-3 py-4">
            <li className="flex-row text-sm list-item font-thin font-sans mb-2" >
              <i className="fixed flex h-2 w-2 bg-fuchsia-500 rounded-full overflow-hidden mt-1.5 mr-4" ></i>
              <span className="ml-4">Selecting <code>Private</code>, only BiO will be able to read the message.</span>
            </li>
            <li className="text-sm list-item font-thin font-sans">
              <i className="fixed flex h-2 w-2 bg-fuchsia-500 rounded-full overflow-hidden mt-1.5" ></i>
              <span className="ml-4" >Selecting <code>Public</code>, your message appear in the feed and all users and visitors will be able to read it.</span>
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
          <form action="" className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">Name</label>
              <input
                className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">Phone</label>
                <input
                  className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
              <div>
                <input
                  className="peer sr-only"
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
                >
                  <span className="text-sm font-medium"> Private </span>
                </label>
              </div>

              <div>
                <input
                  className="peer sr-only"
                  id="option3"
                  type="radio"
                  tabIndex="-1"
                  name="option"
                />

                <label
                  htmlFor="option3"
                  className="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-fuchsia-300 peer-checked:bg-fuchsia-500 peer-checked:text-white cursor-pointer"
                  tabIndex="0"
                >
                  <span className="text-sm font-medium"> Other </span>
                </label>
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">Message</label>

              <textarea
                className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm"
                placeholder="Message"
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-gradient-to-br from-fuchsia-400 to-fuchsia-300 px-5 py-3 font-medium text-white sm:w-auto hover:bg-gradient-to-tl hover:from-fuchsia-600 hover:to-fuchsia-400 hover:transition-opacity hover:shadow-md"
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