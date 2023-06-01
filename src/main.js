import { Router } from "@reach/router";

// COMPONENTS & ROUTES
import { AppContext } from "./_components";
import { AlertPopper } from "./_components/alert";
import { HeaderSection } from "./head";
import { NavigationSection } from "./head/navigation";
import PageNotFound from "./404";
import { FanZone } from "./fan/zone";
import { AccountSection } from "./_account";
import { Merchandise } from "./home/merchandise";
import { Dashboard } from "./admin";
import { UserProfile } from "./profile";

// The App Function
export function App() {

  return (
    <AppContext>
      <NavigationSection />
      <Router>
        <HeaderSection path="/" />
        <FanZone path="/fanzone" />
        <AccountSection path="/account/*" />
        <Merchandise path="/merchandise-shop" />
        <Dashboard path="/admin/*" />
        <UserProfile path="/profile/*" />
        <PageNotFound default />
      </Router>
      <AlertPopper />
    </AppContext>
  );
}
