import { Router } from "@reach/router";

// COMPONENTS and ROUTES
import { AppContext } from "./_components";
import { AlertPopper } from "./_components/alert";
import { HeaderSection } from "./head";
import { NavigationSection } from "./head/navigation";
import PageNotFound from "./404";
import { SignIn } from "./_account/signin";
import { FanZone } from "./fan/zone";

// The App Function
export function App() {
  return (
    <AppContext>
      <NavigationSection />
      <Router>
        <HeaderSection path="/" />
        <FanZone path="/fanzone" />
        <SignIn path="/signin" />
        <PageNotFound default />
      </Router>
      <AlertPopper/>
    </AppContext>
  );
}
