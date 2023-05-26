import { Link, navigate } from "@reach/router";
import useLoading from "../_components/extras/loading";
import { auth_strategy } from "../_db/auth";
import { useInput } from "../_components";
import { alertService } from "../_components/alert/service";

export function SignIn() {
  const [isLoading, load] = useLoading(false);

  const email = useInput("");
  const password = useInput("");

  const onSubmit = (e) => {
    e.preventDefault();
    alertService.clear();
    if (
      !email.value || 
      !password.value
    ) {
      return alertService.warn("Either Email Field/Password Field or both are blank.", {
        keepAfterRouteChange: false
      });
    }
    load(auth_strategy.login(email.value, password.value, true)).then(() => {
      alertService.success(" Loged In", {
        keepAfterRouteChange: true
      });
      navigate(-1, { replace: true });
    }).catch((error) => {
      alertService.error(error, { keepAfterRouteChange: false });
    });
  }

  document.title =  `sign in`;

  return (
    <form onSubmit={onSubmit} className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-6">
        <h2 className="text-3xl text-center font-semibold mb-8">Login</h2>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="UserEmail"
          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="email"
            id="UserEmail"
            placeholder="Email"
            name="email"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            {...email.bind}
          />

          <span
            className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            Email
          </span>
        </label>
        {/*<label
          htmlFor="FirstName"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>

        <input
          type="email"
          id="email"
          name="email"
          className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />*/}
      </div>

      <div className="col-span-6 sm:col-span-3">
        {/*<label
          htmlFor="Password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <input
          type="password"
          id="Password"
          name="password"
          className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />*/}
        <label
          htmlFor="UserEmail"
          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="password"
            id="UserPassword"
            placeholder="Password"
            name="password"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            {...password.bind}
          />

          <span
            className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            Password
          </span>
        </label>
      </div>

      <Link to="/account/forgot-password" className="col-span-6 block text-end sm:items-center sm:gap-4 text-indigo-400">
        Forgot Password?
      </Link>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          type="submit"
          disabled={isLoading}
        >
          Sign In
          {isLoading && 
            <div class="inline-flex items-center justify-center ml-2 space-x-2 animate-pulse">
              <div class="w-3 h-3 bg-blue-400 rounded-full"></div>
              <div class="w-3 h-3 bg-green-400 rounded-full"></div>
              <div class="w-3 h-3 bg-pink-400 rounded-full"></div>
          </div>
          }
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Don't have an account?
          <Link to="/account/signup" className="text-gray-700 underline ml-1">Sign Up</Link>.
        </p>
      </div>
    </form>
  );
}
