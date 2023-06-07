import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCTX } from "../_components";
import { ConfirmUser } from "./confrm";
import TermsAndConditions from "../policies/termsOfUse";
import PrivacyPolicy from "../policies/privacyPolicy";
import { CookiesPolicy } from "../policies/cookiePolicy";
import useLoading from "../_components/extras/loading";
import { servicePack } from "./cookie";

export const SideMenu = () => {
  const [isLoading, load] = useLoading();
  const [cookie, setCookie] = useState({});

  const { user } = useCTX();
  const navigate = useNavigate();

  const handleLogout = () => {
    load(user.logout()).then(() => {
      servicePack.logout();
      navigate('/');
    }).catch((error) => alert(error));
  }

  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("username="))
      ?.split("=")[1];

    setCookie(cookieValue);
  },[]);

  return (
    <>
    <div className="inline-flex max-h-screen flex-col col-span-1 justify-between border-e bg-white">
      <div>
        <div className="inline-flex h-16 w-16 items-center justify-center">
          <span
            className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
          >
            {user.user_metadata.full_name.slice(0,1).toUpperCase()}
          </span>
        </div>
    
        <div className="border-t border-gray-100">
          <nav aria-label="Main Nav" className="flex flex-col p-2">
            <div className="py-4">
              <Link
                to=""
                className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
    
                <span
                  className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                >
                  General
                </span>
              </Link>
            </div>
    
            <ul className="space-y-1 border-t border-gray-100 pt-4">
              <li>
                <Link
                  to="/admin/users"
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
    
                  <span
                    className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                  >
                    Teams
                  </span>
                </Link>
              </li>
    
              <li>
                <Link
                  to="/admin/billing"
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
    
                  <span
                    className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                  >
                    Billing
                  </span>
                </Link>
              </li>
    
              <li>
                <Link
                  to="/admin/invoices"
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
    
                  <span
                    className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                  >
                    Invoices
                  </span>
                </Link>
              </li>
    
              <li>
                <Link
                  to="/admin/profile"
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
    
                  <span
                    className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                  >
                    Account
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
        <form onSubmit={handleLogout}>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            disabled={isLoading}
          >
            {!isLoading
              ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              )
              : 
              <div className="inline-flex items-center justify-center space-x-1 animate-pulse">
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
              </div>
            }
    
            <span
              className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
            >
              Logout
            </span>
          </button>
        </form>
      </div>
    </div>
    <div className="h-full col-span-11 bg-white flex flex-wrap overflow-y-auto w-full">
      <div className="w-full">
        {
          cookie ? <Outlet /> : <ConfirmUser />
        }
        <div className="my-4 w-2/3 mx-auto border-t border-gray-300">
          <div className="sm:flex sm:items-center sm:justify-between">
            <nav aria-label="Footer Navigation - Support">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <TermsAndConditions />
                </li>
    
                <li>
                  <PrivacyPolicy />
                </li>
    
                <li>
                  <CookiesPolicy />
                </li>
              </ul>
            </nav>
    
            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; {new Date().getFullYear()}. D.T. BiO Mudimba Music. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
