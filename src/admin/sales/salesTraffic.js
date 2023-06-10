export const SalesTraffic = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-5">
      <article className="inline-block rounded-lg border border-gray-100 bg-white p-6 m-3">
        <div className="card-body">
          <table className="table-auto w-full mt-5 text-right">
            <caption className="caption-top">
              <div className="flex flex-row justify-between items-center">
                <h1 className="font-extrabold text-lg">best sellers</h1>
                <a href="#" className="btn-gray text-sm">view all</a>
              </div>
            </caption>
            <thead>
              <tr>
                <td className="py-4 font-extrabold text-sm text-left">product</td>
                <td className="py-4 font-extrabold text-sm">price</td>
                <td className="py-4 font-extrabold text-sm">sold</td>
                <td className="py-4 font-extrabold text-sm">profit</td>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="py-4 text-sm text-gray-600 flex flex-row items-center text-left">
                  <div className="w-8 h-8 overflow-hidden mr-3">
                    <img src="img/sneakers.svg" className="object-cover" />
                  </div>
                  Sneakers and Tennis 
                </td>
                <td className="py-4 text-xs text-gray-600">$ <span className="num-2"></span></td>
                <td className="py-4 text-xs text-gray-600"><span className="num-3"></span></td>
                <td className="py-4 text-xs text-gray-600">$ <span className="num-4"></span></td>
              </tr>
              <tr className="">
                <td className="py-4 text-sm text-gray-600 flex flex-row items-center">
                  <div className="w-8 h-8 overflow-hidden mr-3">
                    <img src="img/socks.svg" className="object-cover" />
                  </div>
                  Crazy Socks & Graphic Socks for Men
                </td>
                <td className="py-4 text-xs text-gray-600">$ <span className="num-2"></span></td>
                <td className="py-4 text-xs text-gray-600"><span className="num-3"></span></td>
                <td className="py-4 text-xs text-gray-600">$ <span className="num-4"></span></td>
              </tr>
              <tr className="">
                <td className="py-4 text-sm text-gray-600 flex flex-row items-center">
                  <div className="w-8 h-8 overflow-hidden mr-3">
                    <img src="img/soccer.svg" className="object-cover" />
                  </div>
                  Adidas Soccer Ball
                </td>
                <td className="py-4 text-xs text-gray-600">$ <span className="num-2"></span></td>
                <td className="py-4 text-xs text-gray-600"><span className="num-3"></span></td>
                <td className="py-4 text-xs text-gray-600">$ <span className="num-4"></span></td>
              </tr>
              <tr className="">
                <td className="py-4 text-sm text-gray-600 flex flex-row items-center">
                  <div className="w-8 h-8 overflow-hidden mr-3">
                    <img src="img/food.svg" className="object-cover" />
                  </div>
                  Best Chocolate Chip Cookies
                </td>
                <td className="py-4 text-xs text-gray-600">$ <span className="num-2"></span></td>
                <td className="py-4 text-xs text-gray-600"><span className="num-3"></span></td>
                <td className="py-4 text-xs text-gray-600">$ <span className="num-4"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
      <article className="inline-block rounded-lg border border-gray-100 bg-white p-6 m-3">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="">
              <tr>
                <th className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                  <label htmlFor="SelectAll" className="sr-only">Select All</label>
        
                  <input
                    type="checkbox"
                    id="SelectAll"
                    className="h-5 w-5 rounded border-gray-300"
                  />
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Date of Birth
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Role
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Salary
                </th>
              </tr>
            </thead>
        
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                  <label className="sr-only" htmlFor="Row1">Row 1</label>
        
                  <input
                    className="h-5 w-5 rounded border-gray-300"
                    type="checkbox"
                    id="Row1"
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
              </tr>
        
              <tr>
                <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                  <label className="sr-only" htmlFor="Row2">Row 2</label>
        
                  <input
                    className="h-5 w-5 rounded border-gray-300"
                    type="checkbox"
                    id="Row2"
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Jane Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
              </tr>
        
              <tr>
                <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                  <label className="sr-only" htmlFor="Row3">Row 3</label>
        
                  <input
                    className="h-5 w-5 rounded border-gray-300"
                    type="checkbox"
                    id="Row3"
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Gary Barlow
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
      {/*<article className="inline-block rounded-lg border border-gray-100 bg-white p-6 m-3">    
        <div className="card-body">
          <h2 className="font-bold text-lg mb-10">Recent Orders</h2>
          <table className="table-fixed w-full">
            <thead className="text-left">
              <tr>
                <th className="w-1/2 pb-10 text-sm font-extrabold tracking-wide">customer</th>
                <th className="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">Product</th>
                <th className="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">Invoice</th>
                <th className="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">price</th>
                <th className="w-1/4 pb-10 text-sm font-extrabold tracking-wide text-right">status</th>
              </tr>
            </thead>
            <tbody className="text-left text-gray-600">
              <tr>
                <th className="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center">
                    <div className="w-8 h-8 overflow-hidden rounded-full">
                        <img src="img/user2.jpg" className="object-cover" />
                    </div>
                    <p className="ml-3 name-1">user name</p>                    
                </th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span className="num-4"></span></th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span className="num-2"></span></th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>
                <th className="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center">
                    <div className="w-8 h-8 overflow-hidden rounded-full">
                        <img src="img/user3.jpg" className="object-cover" />
                    </div>
                    <p className="ml-3 name-1">user name</p>                    
                </th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span className="num-4"></span></th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span className="num-2"></span></th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>
              </tr>

              <tr>
                <th className="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center">
                    <div className="w-8 h-8 overflow-hidden rounded-full">
                        <img src="img/user2.jpg" className="object-cover" />
                    </div>
                    <p className="ml-3 name-1">user name</p>                    
                </th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span className="num-4"></span></th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span className="num-2"></span></th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>
              </tr>
              <tr>
                <th className="mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center w-full">
                    <div className="w-8 h-8 overflow-hidden rounded-full">
                        <img src="img/user1.jpg" className="object-cover" />
                    </div>
                    <p className="ml-3 name-1">user name</p>                    
                </th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span className="num-4"></span></th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span className="num-2"></span></th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>
              </tr>
              <tr>
                <th className="w-1/2 mb-4 text-xs font-extrabold tracking-wider flex flex-row items-center ">
                    <div className="w-8 h-8 overflow-hidden rounded-full">
                        <img src="img/user3.jpg" className="object-cover" />
                    </div>
                    <p className="ml-3 name-1">user name</p>                    
                </th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">Nike Sport</th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">#<span className="num-4"></span></th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">$<span className="num-2"></span></th>
                <th className="w-1/4 mb-4 text-xs font-extrabold tracking-wider text-right">shipped</th>
              </tr>
            </tbody>
          </table>
        </div>
      </article> */}
    </div>
  );
}