import { Link, navigate } from "@reach/router";
import useLoading from "../_components/extras/loading";
import { useInput } from "../_components";
import { auth_strategy } from "../_db/auth";
import { alertService } from "../_components/alert/service";
import TermsAndConditions from "../policies/termsOfUse";
import PrivacyPolicy from "../policies/privacyPolicy";

export const SignUp = () => {
  const [isLoading, load] = useLoading(false);

  const first_name = useInput("");
  const last_name = useInput("");
  const email = useInput("");
  const password = useInput("");
  const terms_of_use = useInput(true);
  const confirm_password = useInput("");

  const onSubmit = e => {
    e.preventDefault();
    alertService.clear();

    if(
      !email.value || 
      !first_name.value || 
      !last_name.value ||
      !password.value ||
      !terms_of_use.value ||
      password.value !== confirm_password.value
    ) {
      alertService.warn("Check blank fields in the Form.", {
        keepAfterRouteChange: false
      });
    } else {
      const user_metadata = {
        full_name: `${first_name.value} ${last_name.value}`
      }
      const app_metadata = {
        roles: ['User']
      }
      load(auth_strategy.signup(email.value, password.value, user_metadata, app_metadata)).then(() => {
        alertService.success("Account created!", {
          keepAfterRouteChange: true
        });
        navigate("/account/signin", { replace: true });
      }).catch((err) => alertService.error(err, { keepAfterRouteChange: false }));
    }
  }

  document.title =  `sign up`;

  return (
    <form onSubmit={onSubmit} className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-6">
        <h2 className="text-3xl text-center font-semibold mb-8">Sign Up</h2>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="FirstName"
          className="block after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-gray-700"
        >
          First Name
        </label>

        <input
          type="text"
          id="FirstName"
          name="first_name"
          className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          {...first_name.bind}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="LastName"
          className="block after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-gray-700"
        >
          Last Name
        </label>

        <input
          type="text"
          id="LastName"
          name="last_name"
          className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          {...last_name.bind}
        />
      </div>

      <div className="col-span-6">
        <label htmlFor="Email" className="block after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-gray-700">
          Email
        </label>

        <input
          type="email"
          id="Email"
          name="email"
          className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          {...email.bind}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="Password"
          className="block after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <input
          type="password"
          id="Password"
          name="password"
          className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          {...password.bind}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="PasswordConfirmation"
          className="block after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-gray-700"
        >
          Password Confirmation
        </label>

        <input
          type="password"
          id="PasswordConfirmation"
          name="password_confirmation"
          className="w-full rounded-lg border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          {...confirm_password.bind}
        />
      </div>

      <div className="col-span-6">
        <label htmlFor="MarketingAccept" className="flex gap-4">
          <input
            type="checkbox"
            id="MarketingAccept"
            name="marketing_accept"
            className="h-5 w-5 rounded-md border border-fuchsia-300 p-3 text-sm focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-300 invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            {...terms_of_use.bind}
          />

          <span className="text-sm text-gray-700 before:content-['*'] before:mr-0.5 before:text-red-500">
            I want to receive emails about events, product updates and
            company announcements.
          </span>
        </label>
      </div>

      <div className="col-span-6">
        <p className="text-sm text-gray-500">
          By creating an account, you agree to our{" "}
          <TermsAndConditions />{" "}
          and{" "}
          <PrivacyPolicy />.
        </p>
      </div>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          type="submit"
          disabled={isLoading}
        >
          Create an account
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Already have an account?
          <Link to="/account/signin" className="text-gray-700 underline ml-2">Log in</Link>.
        </p>
      </div>
    </form>

  );
}
