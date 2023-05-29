import { navigate } from "@reach/router";

const PageNotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-fuchsia-300">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-[#FF6A3D] px-2 text-sm text-white rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5" 
        type="button"
        onClick={() => navigate(-1, {replace: true})}
      >
          <a
            className="relative inline-block text-sm font-medium text-[#faf7f6] group active:text-orange-500 focus:outline-none focus:ring"
            href='#'
          >
            <span
              className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>

            <span className="relative block px-8 py-3 bg-fuchsia-400 border border-current">
              Go Back
            </span>
          </a>
        </button>
    </main>
  );
}

export default PageNotFound;