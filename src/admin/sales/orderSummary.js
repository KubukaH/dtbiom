export const OrderSummary = () => {
  return (
    <article className="m-2 rounded-lg border border-gray-100 bg-white p-6 overflow-hidden lg:col-span-2 col-span-1 flex lg:flex-row flex-col">
      <div className="border-r border-gray-200 w-2/3 lg:w-full lg:mb-5">
        <div className="p-5 flex flex-row flex-wrap justify-between items-center">
            <h2 className="font-bold text-lg">Order Summary</h2>
            <div className="flex flex-row justify-center items-center">
                <a href="#" className="btn mr-4 text-sm py-2 block">month</a>
                <a href="#" className="btn-shadow text-sm py-2 block">week</a>
            </div>
        </div>          
        <div id="SummaryChart"></div>

      </div>
      <div className="w-1/3 lg:w-full">
        <div className="p-5 border-b border-gray-200">
            <h2 className="font-bold text-lg mb-6">Sales History</h2>
            <div className="flex flex-row justify-between mb-3">
                <div className="">
                    <h4 className="text-gray-600 font-thin">Puma Shoes</h4>
                    <p className="text-gray-400 text-xs font-hairline">30 min ago</p>
                </div>
                <div className="text-sm font-medium">
                    <span className="text-green-400">+</span> $250
                </div>
            </div>
            <div className="flex flex-row justify-between mb-3">
                <div className="">
                    <h4 className="text-gray-600 font-thin">Google Pixel 4 xl</h4>
                    <p className="text-gray-400 text-xs font-hairline">1 day ago</p>
                </div>
                <div className="text-sm font-medium">
                    <span className="text-red-400">-</span> $10
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="">
                    <h4 className="text-gray-600 font-thin">Nike Air Jordan</h4>
                    <p className="text-gray-400 text-xs font-hairline">2 hour ago</p>
                </div>
                <div className="text-sm font-medium">
                    <span className="text-red-400">-</span> $98
                </div>
            </div>
        </div>
        <div className="p-5">
            <h2 className="font-bold text-lg mb-2">Sales History</h2>
            <strong className="text-teal-400 font-extrabold text-xl">$82,950.96</strong>

            <div className="bg-gray-300 h-2 rounded-full mt-2 relative">
                <div className="rounded-full bg-teal-400 h-full w-3/4 shadow-md"></div>
            </div>
        </div>
      </div>
    </article>
  );
}
