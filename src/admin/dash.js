import { Router } from "@reach/router";
import { SideMenu } from "./sideMenu";
import { StatisticsSection } from "./stats";

export const Dashboard = () => {
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