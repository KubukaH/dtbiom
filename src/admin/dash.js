import { useRoutes } from 'react-router-dom';

import { SideMenu } from "./sideMenu";
import { StatisticsSection } from "./stats";
import PageNotFound from '../404';
import { PrivateRoute } from '../_components/routes/private';
import { cookieStore } from './cookie';

cookieStore.renewToken();

function Dashboard() {
  const element = useRoutes([
    { 
      path: '', 
      element: <SideMenu />,
      children: [
        { index: true, element: <StatisticsSection /> },
        { path: '*', element: <PageNotFound /> }
      ]
    }
  ]);

  return (
    <PrivateRoute roles={['Admin', 'Creator']}>
      <div className="relative grid w-full h-screen grid-cols-12">
        {element}
      </div>
    </PrivateRoute>
  );
}

export { Dashboard };