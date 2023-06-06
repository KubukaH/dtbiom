import { useEffect } from "react";
import { Link } from "react-router-dom";

export const AccountRedirect = () => {
  useEffect(() => {
    const loc = document.location.pathname;
    if (loc === 'account') {
      <Navigate to='/account/signin' />
    }
  },[]);

  return (
    <div className="bg-white justify-center mx-auto">
      <h1 className="text-pink-200 text-base">Redirecting ...</h1>
      <ul className="list-desc marker:bg-fuchsia-600">
        <li>
          <Link to='signin' className='text-purple-400 text-base' >Sign In</Link>
        </li>
          <Link to='signup' className='text-purple-400 text-base'>New User</Link>
        <li>
        </li>
      </ul>
    </div>
  );
}
