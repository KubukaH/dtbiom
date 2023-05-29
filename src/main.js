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
import { ForgotPassword } from "./_account/forgotPassword";
import { RecoverAccount } from "./_account/recoverAccount";
import { Dashboard } from "./admin";
import { SideMenu } from "./admin/sideMenu";
import { StatisticsSection } from "./admin/stats";
import { ConfirmUser } from "./admin/confrm";
import { UserProfile } from "./profile";

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
          <ForgotPassword path="forgot-password" />
          <RecoverAccount path="recover-account" />
        </AccountSection>
        <Merchandise path="/merchandise-shop" />
        <SideMenu path='/admin'>
          <ConfirmUser path='/' />
          <StatisticsSection path='users' />
        </SideMenu>
        <UserProfile path='profile' />
        <PageNotFound default />
      </Router>
      <AlertPopper />
    </AppContext>
  );
}
