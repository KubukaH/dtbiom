const WelcomeSection = () => {
  return (
    <section className="text-white bg-[radial-gradient(at_center_bottom,_#fde68a,_#7c3aed,_#0c4a6e)]">
      <div className="px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-green-600">
            D.T. BiO Mudimba Music.

            <span className="sm:block text-xl">
              Samukele! Tigashire! Tutambule! Welcome!
            </span>
          </h1>

          <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
            Get all updates on D.T BiO Mudimba and The Kaani Stars Band. Don't move away without liking the page and commenting on our social media pages listed below.
          </p>

        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;