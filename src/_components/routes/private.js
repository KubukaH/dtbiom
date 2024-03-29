import { Navigate } from "react-router-dom";
import { auth_strategy } from "../../_db/auth";

export const PrivateRoute = (props) => {
  const user = auth_strategy.currentUser();

  if (!user) {
    return <Navigate to="/account/signin" state={{ from: props.location }} replace />;
  }

  // check if route is restricted by role
  if (props.roles && props.roles.indexOf(user.app_metadata.roles) === 0) {
    // role not authorized so redirect to home page
    return <Navigate to='/' />
  }

  return props.children;
}
