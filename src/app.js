import { useRoutes } from "react-router-dom";
import { CommingSoon } from "./components/comming";
import MainLayout from "./components/layouts/main";
import WelcomeSection from "./components/main/welcome";

const routes = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      {index: true, element: <WelcomeSection />}
    ]
  },
];

export function App() {
  const element = useRoutes(routes);
  return element;
}
