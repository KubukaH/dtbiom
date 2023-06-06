import { useRoutes } from "react-router-dom";
import { ProfileDetials } from "./prof";
import { EditProfile } from "./edit";
import { PrivateRoute } from "../_components/routes/private";

const routes = [
  {
    index: true, element: <ProfileDetials />
  },
  {
    path: 'edit', element: <EditProfile />
  }
];

export const UserProfile = () => {
  const navigate = useRoutes(routes);
  
  return (
    <PrivateRoute>
      <section className="flex flex-wrap bg-white">
        <div className="container mx-auto">
          {navigate}
        </div>
      </section>
    </PrivateRoute>
  );
}
