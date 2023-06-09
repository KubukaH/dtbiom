import { useNavigate } from "react-router-dom";

export const NewUser = () => {
  const navigate = useNavigate();

  return (
    <form className="mt-8 w-1/3 mx-auto grid grid-cols-6 gap-6">
      <div className="col-span-6">
        <h2 className="text-3xl text-center font-semibold mb-8">Add new user</h2>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="FirstName"
          className="block after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-gray-700"
        >
          First Name
        </label>

        <input
          type="text"
          id="FirstName"
          name="first_name"
          className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="LastName"
          className="block after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-gray-700"
        >
          Last Name
        </label>

        <input
          type="text"
          id="LastName"
          name="last_name"
          className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </div>

      <div className="col-span-6">
        <label htmlFor="Email" className="block after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-gray-700">
          Email
        </label>

        <input
          type="email"
          id="Email"
          name="email"
          className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </div>

      <div className="col-span-3 sm:flex sm:items-center sm:gap-4">
        <button
          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          type="submit"
        >
          Create
        </button>
      </div>

      <div className="col-span-3 justify-end sm:flex sm:items-center mr-0 sm:gap-4">
        <button
          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          type="button"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </form>
  );
}
