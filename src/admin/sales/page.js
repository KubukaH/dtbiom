import { OrderSummary } from "./orderSummary";
import congr from '../../assets/imgs/congrats.svg';
import { SalesTraffic } from "./salesTraffic";

const tops = [
  {
    product: "Skinny Jeans",
    percentage: "67.81%",
    total: "$404.31",
    cost: "$840.94"
  },
  {
    product: "Slim-fit T-shirts",
    percentage: "69.25%",
    total: "$520.32",
    cost: "$268.21"
  },
  {
    product: "Torn Jeans",
    percentage: "89.25%",
    total: "$245.21",
    cost: "$425.02"
  },
]

export const SalesPage = () => {
  const congrats = new URL(congr, import.meta.url);

  return (
    <>
    <div className="grid grid-cols-3 gap-5">
      <article className="m-2 inline-block rounded-lg border border-gray-100 bg-white p-6 col-span-1">
        <div className="h-full flex flex-col justify-between">
          <div>
            <h1 className="text-lg font-bold tracking-wide">Congratulations Moe!</h1>
            <p className="text-gray-600 mt-2">Best seller of the month</p>
          </div>
          <div className="flex flex-row mt-10 items-end">
            <div className="flex-1">
              <h1 className="font-extrabold text-4xl text-teal-400">$89k</h1>
              <p className="mt-3 mb-4 text-xs text-gray-500">You have done 57.6% more sales today.</p>
              <a href="#" className="btn-shadow py-3">
                view sales
              </a>
            </div>
    
            <div className="flex-1 ml-10 w-32 h-32 lg:w-auto lg:h-auto overflow-hidden">
              <img className="object-cover" src={congrats}  />
            </div>
          </div>
        </div>
      </article>
      <OrderSummary />
    </div>
    <div className="grid grid-cols-5 gap-4">
      {tops.map((item, i) => (
        <article
          className="m-2 inline-block rounded-lg border border-gray-100 bg-white p-6"
          key={i}
        >
          {
            item.cost < item.total ? (
              <div
                className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <span className="text-xs font-medium"> {item.percentage} </span>
              </div>
            ) : (
              <div className="mt-1 flex gap-1 text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
                <p className="flex gap-2 text-xs">
                  <span className="font-medium"> 67.81% </span>
                  <span className="text-gray-500"> Since last week </span>
                </p>
              </div>
            )
          }
    
          <div>
            <strong className="block text-sm font-medium text-gray-500"> {item.product} </strong>
    
            <p>
              <span className="text-2xl font-medium text-gray-900"> {item.total} </span>
    
              <span className="text-xs text-gray-500"> from {item.cost} </span>
            </p>
          </div>
        </article>
      ))}
    </div>
    <SalesTraffic />
    </>
  );
}
