import { Router } from "@reach/router";

import { SideMenu } from "./sideMenu";
import { StatisticsSection } from "./stats";
import { useCTX } from "../_components";
import { history } from "../_components/history";
import { useEffect } from "react";

export const Dashboard = () => {
  const {user} = useCTX();

  useEffect(() => {
    if (user === null) {
      history.navigate('/account/signin', { replace:true });
    }
  },[]);

  return (
    <main className="bg-white w-full h-full" >
      <Router>
        <SideMenu path="/">
          <StatisticsSection path="users" />
        </SideMenu>
      </Router>
    </main>
  );
}
