import { useCTX } from "../_components";
import blank_avatar from "../assets/imgs/blank-avatar.jpg";

export const ProfileDetials = () => {
  const { user } = useCTX();
  const avatar = new URL(blank_avatar, import.meta.url);
  
  return (
    <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto my-40">
      <div className="flex justify-center">
        <img src={avatar} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/>
      </div>
    
      <div className="mt-16">
        <h1 className="font-bold text-center text-3xl text-gray-900">
          {user.user_metadata.full_name}
        </h1>
        <div className="gap-2 space-x-2">
        {
          user.app_metadata.roles ? user.app_metadata.roles.map((role) => (
            <p className="inline-flex start-1/2 flex-row first:ml-24 lg:first:ml-60 text-sm text-gray-400 font-medium" key={role}>
              {role}
            </p>
          )) : <p className="inline-block items-center text-center text-sm text-gray-400 font-medium ml-1">User</p>
        }
        </div>
        <p>
            <span>
                
            </span>
        </p>
        <div className="my-5 px-6">
          <a href="#" className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Connect with <span className="font-bold">@dtbiomudimba</span></a>
        </div>
        <div className="flex justify-between items-center my-5 px-6">
          <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
          <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
          <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
          <a href="/profile/edit" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Edit</a>
        </div>

        <div className="w-full">
          <h3 className="font-medium text-gray-900 text-left px-6">Recent activites</h3>
            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
              <a href="#" className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                Updated his status
                <span className="text-gray-500 text-xs">24 min ago</span>
              </a>

              <a href="#" className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                Added new profile picture
                <span className="text-gray-500 text-xs">42 min ago</span>
              </a>

              <a href="#" className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                Posted new article in <span className="font-bold">#Web Dev</span>
                <span className="text-gray-500 text-xs">49 min ago</span>
              </a>

              <a href="#" className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                Edited website settings
                <span className="text-gray-500 text-xs">1 day ago</span>
              </a>

              <a href="#" className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden">
                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                Added new rank
                <span className="text-gray-500 text-xs">5 days ago</span>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}
