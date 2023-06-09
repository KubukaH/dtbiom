import { useRoutes } from 'react-router-dom';

import { SideMenu } from "./sideMenu";
import { StatisticsSection } from "./stats";
import PageNotFound from '../404';
import { PrivateRoute } from '../_components/routes/private';
import { cookieStore } from './cookie';
import { SalesPage } from './sales';
import { UsersPage } from './users/userspage';
import { NewUser, UsersList } from './users';
import { AdminProfileDetails } from './profile/details';
import { EditProfile } from './profile/edit';

cookieStore.renewToken();

function Dashboard() {
  const element = useRoutes([
    { 
      path: '', 
      element: <SideMenu />,
      children: [
        { index: true, element: <SalesPage /> },
        { path: 'invoices', element: <StatisticsSection /> },
        { 
          path: 'users/*', 
          element: <UsersPage />,
          children: [
            { index: true, element: <UsersList /> },
            { path: 'new-user', element: <NewUser /> }
          ]
        },
        { path: 'profile', element: <AdminProfileDetails /> },
        { path: 'profile/edit', element: <EditProfile /> },
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