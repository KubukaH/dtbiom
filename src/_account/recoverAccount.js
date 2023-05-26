import { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import useLoading from "../_components/extras/loading";
import { auth_strategy } from "../_db/auth";
import { useInput } from "../_components";
import { alertService } from "../_components/alert/service";

export function RecoverAccount() {
  const [isLoading, load] = useLoading(false);
  const TokenStatus = {
    Validating: 'Validating',
    Valid: 'Valid',
    Invalid: 'Invalid'
  }

  const [token, setToken] = useState(null);
  const [tokenStatus, setTokenStatus] = useState(TokenStatus.Validating);

  useEffect(() => {
    let params = new URL(document.location).searchParams;
    let recovery_token = params.get('recovery_token');

    navigate(location.pathname, { replace: true });

    auth_strategy.recover(recovery_token, true).then((response) => {
      setToken(response);
      setTokenStatus(TokenStatus.Valid);
    }).catch(() => {
      setTokenStatus(TokenStatus.Invalid);
    });
  },[]);

  function theForm() {
    const password = useInput("");
    const password_confirm = useInput("");
    const user = auth_strategy.currentUser();

    const onSubmit = (e) => {
      e.preventDefault();
      alertService.clear();
      if (
        !password.value ||
        !password_confirm
      ) {
        return alertService.warn("Blank fields detected.", { keepAfterRouteChange: false });
      }
      if ( password.value !== password_confirm.value ) {
        return alertService.error("Passwords don't match!", { keepAfterRouteChange: false });
      }
      load(user.update({password: password.value})).then(() => {
        alertService.success("Successfully changed your password.", { keepAfterRouteChange: true });
        navigate(-1, { replace: true });
      }).catch((error) => {
        alertService.error(error, { keepAfterRouteChange: false });
      });
    }
  
    return (
      <form onSubmit={onSubmit} className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="FirstName"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
  
          <input
            type="password"
            id="password"
            name="password"
            className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            {...password.bind}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="FirstName"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
  
          <input
            type="password"
            id="password_confirm"
            name="password_confirm"
            className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            {...password_confirm.bind}
          />
        </div>
  
        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button
            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            type="submit"
            disabled={isLoading}
          >
            Reset Password
          </button>
        </div>
      </form>
    );
  }

  function theBody() {
    switch (tokenStatus) {
      case TokenStatus.Valid:
        return theForm();
      case TokenStatus.Invalid:
        return <div>Token validation failed, if the token has expired you can get a new one at the <Link to="/account/forgot-password" className="text-indigo-400 font-semibold">forgot password</Link> page.</div>;
      case TokenStatus.Validating:
        return <div>Validating token for {token}</div>;
    }
  }

  return (
    <div>
      <h2 className="text-3xl text-center font-semibold mb-8"> Reset Password</h2>
      {theBody()}
    </div>
  );
}
