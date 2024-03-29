import { useInput } from "../_components";
import { alertService } from "../_components/alert/service";
import useLoading from "../_components/extras/loading";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export const SubscribeMe = () => {
  const [isLoading, load] = useLoading(false);
  const email = useInput('');
  
  const handleSubmit = e => {
    load(fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "subscribe", email: email.value })
    }))
      .then(() => {
        alertService.success("Your email has been captured correctly.");
      })
      .catch(error => alertService.error(error));

    e.preventDefault();
  };

  return (
    <section className="bg-gradient-to-r from-fuchsia-300 via-fuchsia-200 to-fuchsia-500">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Get our news directly to your inbox
          </h2>
    
          <p className="hidden text-[21px]/6 font-['Cormorant_Garamond'] text-gray-500 sm:mt-4 sm:block">
            Don't miss a show by D.T Bio Mudimba. Leave your email below and we will inbox you directly about our upcoming events, performances and appearances. We will also send you information about our merchandise. 
          </p>
        </div>
    
        <div className="mx-auto mt-8 max-w-xl">
          <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">Email</label>
    
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                {...email.bind}
              />
            </div>
    
            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              disabled={isLoading}
            >
              <span className="text-sm font-medium"> Subscribe </span>
              {isLoading 
                ? 
                <div className="inline-flex items-center justify-center ml-2 space-x-1 animate-pulse">
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                </div>
                :
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              }
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
