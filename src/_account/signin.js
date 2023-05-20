import { Link } from "@reach/router";

export function SignIn() {

  return (
    <form action="#" className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="FirstName"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>

        <input
          type="text"
          id="FirstName"
          name="first_name"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
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
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
        />
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
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
