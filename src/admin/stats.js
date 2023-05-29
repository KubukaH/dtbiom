const items = [
  {
    percentage: "67.81%",
    total: "$404.31",
    cost: "$240.94"
  },
  {
    percentage: "69.25%",
    total: "$520.32",
    cost: "$268.21"
  },
  {
    percentage: "89.25%",
    total: "$245.21",
    cost: "$125.02"
  },
  {
    percentage: "89.25%",
    total: "$245.21",
    cost: "$125.02"
  },
  {
    percentage: "89.25%",
    total: "$245.21",
    cost: "$125.02"
  },
  {
    percentage: "89.25%",
    total: "$245.21",
    cost: "$125.02"
  },
  {
    percentage: "89.25%",
    total: "$245.21",
    cost: "$125.02"
  },
  {
    percentage: "89.25%",
    total: "$245.21",
    cost: "$125.02"
  },
  {
    percentage: "89.25%",
    total: "$245.21",
    cost: "$125.02"
  },
  {
    percentage: "89.25%",
    total: "$245.21",
    cost: "$125.02"
  },
  {
    percentage: "89.25%",
    total: "$245.21",
    cost: "$125.02"
  },
  {
    percentage: "89.25%",
    total: "$245.21",
    cost: "$125.02"
  },
  {
    percentage: "89.25%",
    total: "$245.21",
    cost: "$125.02"
  },
  {
    percentage: "89.25%",
    total: "$245.21",
    cost: "$125.02"
  },
  {
    percentage: "89.25%",
    total: "$245.21",
    cost: "$125.02"
  },
];

export const StatisticsSection = () => {
  return (
    <>
    {items.map((item, i) => (
      <article
        className="m-2 inline-block rounded-lg border border-gray-100 bg-white p-6"
        key={i}
      >
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
  
        <div>
          <strong className="block text-sm font-medium text-gray-500"> Profit </strong>
  
          <p>
            <span className="text-2xl font-medium text-gray-900"> {item.total} </span>
  
            <span className="text-xs text-gray-500"> from {item.cost} </span>
          </p>
        </div>
      </article>
    ))}

    <article
      className="flex flex-col col-span-6 rounded-lg border border-gray-100 bg-white p-6"
    >
      <div className="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
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

        <span className="text-xs font-medium"> 67.81% </span>
      </div>

      <div>
        <strong className="block text-sm font-medium text-gray-500"> Profit </strong>

        <p>
          <span className="text-2xl font-medium text-gray-900"> $240.94 </span>

          <span className="text-xs text-gray-500"> from $404.32 </span>
        </p>
      </div>
    </article>
    <article className="rounded-lg col-span-6 border border-gray-100 bg-white p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Profit</p>
    
          <p className="text-2xl font-medium text-gray-900">$240.94</p>
        </div>
    
        <span className="rounded-full bg-blue-100 p-3 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </span>
      </div>
    
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
    </article>
    </>
  );
}
