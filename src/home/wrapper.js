import { FooterSection } from "../foot";
import { NavigationSection } from "../head/navigation";
import { history } from "../_components/history";

export const ComponentWrapper = ({ children }) => {
  const params = new URL(document.location.href);
  const searchParams = new URLSearchParams(params.hash);

  let recovery_token = searchParams.get("#recovery_token");

  if ( recovery_token !== (undefined || null) ) {
    history.navigate(`/account/recover-account?recovery_token=${recovery_token.slice(0,-1)}`)
  }

  return (
    <div>
      <NavigationSection />
        {children}
      <FooterSection />
    </div>
  );
}
