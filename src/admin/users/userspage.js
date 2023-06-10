import { Link, Outlet } from "react-router-dom";

const UsersPage = () => {
  return (
    <article className="w-[95%] mx-auto my-4 h-full rounded-lg border border-gray-100 bg-white">
      <div className="flex flex-row justify-between items-center w-full bg-gradient-to-r from-fuchsia-900 to-purple-700 overflow-hidden p-3 rounded-t-lg">
        <h1 className="font-semibold text-lg text-gray-100">Manage users.</h1>
        <input
          type="search"
          placeholder="Search user"
          className="w-1/4 rounded-md border-none bg-fuchsia-700 p-2 text-white shadow-sm transition focus:outline-none focus:ring focus:ring-yellow-400"
        />
        <Link className="bg-transparent border rounded-lg border-gray-200 text-gray-300 p-1" to='new-user' >
          New user
        </Link>
      </div>
      <div className="overflow-x-auto">
        <Outlet />
      </div>
    </article>
  );
}

export { UsersPage };