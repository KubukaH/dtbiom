import { Router } from "@reach/router";

// COMPONENTS & ROUTES
import { AppContext } from "./_components";
import { AlertPopper } from "./_components/alert";
import { NavigationSection } from "./head/navigation";
import PageNotFound from "./404";
import { AccountSection } from "./_account";
import { Dashboard } from "./admin";
import { ScrollTop } from "./_components/scroll";
import { ComponentWrapper, Merchandise } from "./home";
import { HeaderSection } from "./head";
import { FanZone } from "./fan";
import { UserProfile } from "./profile";

// The App Function
export function App() {

  return (
    <AppContext>
      <ScrollTop>
        <NavigationSection />
        <Router>
          <ComponentWrapper path='/'>
            <HeaderSection path='/' />
            <Merchandise path='merchandise-shop' />
            <FanZone path='fanzone' />
            <UserProfile path='profile/*' />
            <PageNotFound default />
          </ComponentWrapper>
          <AccountSection path="/account/*" />
          <Dashboard path="/admin/*" />
          <PageNotFound default />
        </Router>
      </ScrollTop>
      <AlertPopper />
    </AppContext>
  );
}
