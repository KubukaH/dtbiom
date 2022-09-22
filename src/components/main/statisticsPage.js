const StatisticsPage = () => {
  return (
  <section className="bg-[radial-gradient(at_center_bottom,_#fde68a,_#7c3aed,_#0c4a6e)]">
    <div className="px-4 py-12 mx-auto max-w-screen-xl md:py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          People trust our music
        </h2>

        <p className="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
          “I have no special talents. I am only passionately curious.” ― Albert Einstein
        </p>
      </div>

      <div className="mt-8 sm:mt-12">
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div
            className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg dark:border-gray-800"
          >
            <dt
              className="order-last text-lg font-medium text-pink-500 dark:text-pink-400"
            >
              Follwers on Facebook
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              27K
            </dd>
          </div>

          <div
            className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg dark:border-gray-800"
          >
            <dt
              className="order-last text-lg font-medium text-pink-500 dark:text-pink-400"
            >
              YouTube Subscribers
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              15.4K
            </dd>
          </div>

          <div
            className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg dark:border-gray-800"
          >
            <dt
              className="order-last text-lg font-medium text-pink-500 dark:text-pink-400"
            >
              Singles Releases
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">3</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
  );
}

export default StatisticsPage;