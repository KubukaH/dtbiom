import { Link, useNavigate } from "react-router-dom";
import useLoading from "../_components/extras/loading";
import { auth_strategy } from "../_db/auth";
import { useCTX, useInput } from "../_components";
import { alertService } from "../_components/alert/service";

export function ConfirmUser() {
  const [isLoading, load] = useLoading(false);
  const navigate = useNavigate();

  const { user } = useCTX();
  const password = useInput("");

  const onSubmit = (e) => {
    e.preventDefault();
    alertService.clear();
    
    if (
      !password.value
    ) {
      return alertService.warn("Password required.", {
        keepAfterRouteChange: false
      });
    }
    load(auth_strategy.login(user.email, password.value, true)).then(() => {
      localStorage.setItem("admin_cookie", true);

      alertService.success(" Loged In", {
        keepAfterRouteChange: true
      });

      navigate('/admin', { replace: true });
    }).catch((error) => {
      alertService.error(error, { keepAfterRouteChange: false });
    });
  }

  return (
    <article
    className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] w-96 mx-auto"
    >
    <form onSubmit={onSubmit} className="bg-white rounded-xl overflow-hidden p-2">
      <div className="col-span-6">
        <h2 className="text-3xl text-center font-semibold mb-8">Confirm Password</h2>
        <p className="text-sm font-light text-pink-400">This is a secure end point therefore we want to confirm it's really your account.</p>
      </div>

      <div className="col-span-6">
        <label
          htmlFor="UserPassword"
          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="password"
            id="UserPassword"
            placeholder="Password"
            name="password"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            {...password.bind}
          />

          <span
            className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            Password
          </span>
        </label>
      </div>

      <Link to="/" className="col-span-6 block text-end sm:items-center sm:gap-4 text-indigo-400">
        Back to Home
      </Link>

      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          type="submit"
          disabled={isLoading}
        >
          {isLoading 
            ? 
            <div class="inline-flex items-center justify-center ml-2 space-x-2 animate-pulse">
              <div class="w-1 h-1 bg-blue-400 rounded-full"></div>
              <div class="w-1 h-1 bg-green-400 rounded-full"></div>
              <div class="w-1 h-1 bg-pink-400 rounded-full"></div>
            </div>
            :
            'Confirm'
          }
        </button>
      </div>
    </form>
    </article>
  );
}
