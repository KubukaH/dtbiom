import { useRoutes } from "react-router-dom";

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

const routes = [
  {
    path: '',
    element: <ComponentWrapper />,
    children: [
      {
        index: true, element: <HeaderSection /> 
      },
      {
        path: 'merchandise-shop', element: <Merchandise  />
      },
      {
        path: 'fanzone', element:  <FanZone />
      },
      {
        path: 'profile/*', 
        element: <UserProfile />
      },
      {path: '*', element: <PageNotFound />}
    ]
  },
  {
    path: "/account/*",
    element: <AccountSection />
  },
  {path: "/admin/*", element: <Dashboard />},
  {path: '*', element: <PageNotFound />}
];

// The App Function
export function App() {
  const element = useRoutes(routes);

  return (
    <AppContext>
      <ScrollTop>
        <NavigationSection />
        {element}
      </ScrollTop>
      <AlertPopper />
    </AppContext>
  );
}
