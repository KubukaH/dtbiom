import { Link, navigate } from "@reach/router";
import useLoading from "../_components/extras/loading";
import { useInput } from "../_components";
import { auth_strategy } from "../_db/auth";
import { alertService } from "../_components/alert/service";

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

    if(
      !email.value || 
      !first_name.value || 
      !last_name.value ||
      !password.value ||
      !terms_of_use.value ||
      password.value !== confirm_password.value
    ) {
      alertService.error("Check blank fields in the Form.")
    } else {
      load(auth_strategy.signup(first_name.value, last_name.value, email.value, password.value, terms_of_use.value)).then(() => {
        alertService.success("Account created!");
        navigate("/account/signin", { replace: true });
      }).catch((err) => alertService.error(err));
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="FirstName"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>

        <input
          type="text"
          id="FirstName"
          name="first_name"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          {...first_name.bind}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="LastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>

        <input
          type="text"
          id="LastName"
          name="last_name"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          {...last_name.bind}
        />
      </div>

      <div className="col-span-6">
        <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
          Email
        </label>

        <input
          type="email"
          id="Email"
          name="email"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          {...email.bind}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="Password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <input
          type="password"
          id="Password"
          name="password"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          {...password.bind}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="PasswordConfirmation"
          className="block text-sm font-medium text-gray-700"
        >
          Password Confirmation
        </label>

        <input
          type="password"
          id="PasswordConfirmation"
          name="password_confirmation"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          {...confirm_password.bind}
        />
      </div>

      <div className="col-span-6">
        <label htmlFor="MarketingAccept" className="flex gap-4">
          <input
            type="checkbox"
            id="MarketingAccept"
            name="marketing_accept"
            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
            {...terms_of_use.bind}
          />

          <span className="text-sm text-gray-700">
            I want to receive emails about events, product updates and
            company announcements.
          </span>
        </label>
      </div>

      <div className="col-span-6">
        <p className="text-sm text-gray-500">
          By creating an account, you agree to our
          <Link to="#" className="text-gray-700 underline mx-2">
            terms and conditions
          </Link>
          and
          <Link to="#" className="text-gray-700 underline ml-2">privacy policy</Link>.
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
