const SolarGuide = () => {
    return (
      <div className="bg-[#0cc9f9] min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ">
          <div className="lg:w-1/2 text-left space-y-6">
            <h1 className="text-[#00007f] font-extrabold text-3xl sm:text-4xl leading-tight max-w-md">
              A Guide To Going Solar
              <br />
              For Housing Societies
            </h1>
            <p className="text-black max-w-md text-sm sm:text-base font-normal leading-relaxed">
              Learn everything you need to know before installing a rooftop solar system in your society.
            </p>
            <ul className="mt-6 space-y-3 text-xs sm:text-sm text-[#00007f] font-normal">
              {['How much can you save by going solar', "What's the right solar size for your society", 'What technologies should you choose', 'Common myths about rooftop solar'].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#00007f] rounded-full inline-block"></span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-8 bg-gradient-to-r from-[#00007f] to-[#000000] text-white font-semibold text-sm sm:text-base rounded-full px-6 py-3 hover:scale-105 transition-transform"
            >
              Download for free
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            <img
              alt="Open book showing pages with India map and solar energy information graphics"
              className="w-60 sm:w-72 md:w-80 lg:w-96 shadow-lg rounded transform transition duration-300 hover:rotate-0 hover:scale-105"
              style={{ transform: "rotate(-10deg)" }}
              src="/CHS-Page-1-mock-with-shadow+1.png"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default SolarGuide;
  