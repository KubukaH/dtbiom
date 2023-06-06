import { Outlet, useNavigate } from 'react-router-dom';

import { FooterSection } from "../foot";
import { NavigationSection } from "../head/navigation";

export const ComponentWrapper = () => {
  const params = new URL(document.location.href);
  const searchParams = new URLSearchParams(params.hash);
  const navigate = useNavigate();

  let recovery_token = searchParams.get("#recovery_token");

  if ( recovery_token !== (undefined || null) ) {
    navigate(`/account/recover-account?recovery_token=${recovery_token.slice(0,-1)}`)
  }

  return (
    <div>
      <NavigationSection />
        <Outlet />
      <FooterSection />
    </div>
  );
}
