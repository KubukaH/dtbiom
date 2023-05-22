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
      return alertService.error("Either Email Field/Password Field or both are blank.");
    }
    load(auth_strategy.login(email.value, password.value, true)).then(() => {
      alertService.success(" Loged In");
      navigate(-1, { replace: true });
    }).catch((error) => {
      alertService.error(error);
    });
  }

  document.title =  `sign in`;

  return (
    <form onSubmit={onSubmit} className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-3">
        <label
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
          {...email.bind}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
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
          {...password.bind}
        />
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          type="submit"
          disabled={isLoading}
        >
          Sign In
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Don't have an account?
          <Link to="/account/signup" className="text-gray-700 underline ml-1">Sign Up</Link>.
        </p>
      </div>
    </form>
  );
}
