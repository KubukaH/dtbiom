import { Router } from "@reach/router";

// COMPONENTS & ROUTES
import { AppContext } from "./_components";
import { AlertPopper } from "./_components/alert";
import { HeaderSection } from "./head";
import { NavigationSection } from "./head/navigation";
import PageNotFound from "./404";
import { FanZone } from "./fan/zone";
import { AccountSection } from "./_account";
import { SignIn } from "./_account/signin";
import { SignUp } from "./_account/signup";
import { Merchandise } from "./home/merchandise";

// The App Function
export function App() {
  return (
    <AppContext>
      <NavigationSection />
      <Router>
        <HeaderSection path="/" />
        <FanZone path="/fanzone" />
        <AccountSection path="/account">
          <SignIn path="signin" />
          <SignUp path="signup" />
        </AccountSection>
        <Merchandise path="/merchandise-shop" />
        <PageNotFound default />
      </Router>
      <AlertPopper />
    </AppContext>
  );
}
