import { Router, redirectTo } from "@reach/router";

import { SideMenu } from "./sideMenu";
import { StatisticsSection } from "./stats";
import { useCTX } from "../_components";

export const Dashboard = () => {
  const { user } = useCTX();

  if (user.app_metadata.roles !== ("Creator" || "Admin")) return redirectTo("/");

  return (
    <main className="bg-white w-full h-full" >
      <Router>
        <SideMenu path="/">
          <StatisticsSection path="/admin/users" />
        </SideMenu>
      </Router>
    </main>
  );
}
