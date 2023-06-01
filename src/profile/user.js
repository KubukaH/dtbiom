import { Router } from "@reach/router";
import { ProfileDetials } from "./prof";
import { EditProfile } from "./edit";
import { useCTX } from "../_components";
import { history } from "../_components/history";

export const UserProfile = () => {
  const { user } = useCTX();

  if (user === null) {
    history.navigate('/account/signin', {replace:true});
  }
  
  return (
    <section className="flex flex-wrap bg-white m-1 h-[96vh] border rounded-md p-4 overflow-auto">
      <div className="container mx-auto">
        <Router>
          <ProfileDetials path='/' />
          <EditProfile path='/edit' />
        </Router>
      </div>
    </section>
  );
}
