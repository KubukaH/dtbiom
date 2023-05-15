import biologo from "../assets/imgs/bio-mud-page-logo.jpg";

export function NavigationSection() {
  const logo = new URL(biologo, import.meta.url);

  return (
    <div aria-label="Page Header" className="fixed z-20 navribbon">
      <div className="px-4 py-0 lg:py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="block shrink-0 rounded-full bg-transparent p-2.5 shadow-sm"
            >
              <span className="sr-only text-gray-600">Notifications</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </a>
          </div>
    
          <span
            aria-hidden="true"
            className="block h-6 w-px rounded-full bg-gray-200"
          ></span>
    
          <a href="#" className="block shrink-0 bg-transparent">
            <span className="sr-only">Profile</span>
            <img
              alt="Mudimba"
              src={logo}
              className="lg:w-10 lg:h-10 h-6 w-6 rounded-full object-cover"
            />
          </a>
        </div>

      </div>
    </div>
  );
}