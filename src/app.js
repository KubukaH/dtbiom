import { useRoutes } from "react-router-dom";
import { CommingSoon } from "./components/comming";
import MainLayout from "./components/layouts/main";

const routes = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      {index: true, element: <CommingSoon />}
    ]
  },
];

export function App() {
  const element = useRoutes(routes);
  return element;
}
