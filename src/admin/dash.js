import { useRoutes } from 'react-router-dom';

import { SideMenu } from "./sideMenu";
import { StatisticsSection } from "./stats";
import PageNotFound from '../404';
import { PrivateRoute } from '../_components/routes/private';

const routes = [
  { 
    path: '', 
    element: <SideMenu />,
    children: [
      { index: true, element: <StatisticsSection /> },
      { path: '*', element: <PageNotFound /> }
    ]
  }
];

export const Dashboard = () => {
  const element = useRoutes(routes);

  return (
    <PrivateRoute roles={['Admin', 'Creator']}>
      <div className="relative grid w-full h-screen grid-cols-12">
        {element}
      </div>
    </PrivateRoute>
  );
}
