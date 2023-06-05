import { Router } from "@reach/router";

import { SideMenu } from "./sideMenu";
import { StatisticsSection } from "./stats";
import { useCTX } from "../_components";
import { history } from "../_components/history";
import { useEffect } from "react";
import { NavigationSection } from "../head/navigation";
import TermsAndConditions from "../policies/termsOfUse";
import PrivacyPolicy from "../policies/privacyPolicy";
import { CookiesPolicy } from "../policies/cookiePolicy";

export const Dashboard = () => {
  const {user} = useCTX();

  useEffect(() => {
    if (user === null) {
      history.navigate('/account/signin', { replace:true });
    }
  },[]);

  return (
    <>
    <NavigationSection />
    <main className="bg-white w-full h-full" >
      <Router>
        <SideMenu path="/">
          <StatisticsSection path="users" />
        </SideMenu>
      </Router>
    </main>
    <div className="pt-12 mt-12 border-t border-gray-100">
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
    </>
  );
}
