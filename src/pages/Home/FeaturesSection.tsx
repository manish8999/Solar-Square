import { FaCalculator, FaWind, FaTools, FaWater } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Why choose SolarSquare for your solar installation
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="flex items-start space-x-4">
          <FaCalculator className="text-4xl text-blue-700" />
          <div>
            <h3 className="text-lg font-bold">Easy Financing Plans</h3>
            <p className="text-sm text-gray-700">
              Switching to solar made easy & affordable with our EMI plans
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaWind className="text-4xl text-blue-700" />
          <div>
            <h3 className="text-lg font-bold">Cyclone-Proof, Safe Rooftop Solar</h3>
            <p className="text-sm text-gray-700">
              Safe installations that can handle scary storms and winds up to 170 kmph speeds
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaWater className="text-4xl text-blue-700" />
          <div>
            <h3 className="text-lg font-bold">₹1 Lakh Guarantee Against Water Leakage</h3>
            <p className="text-sm text-gray-700">
              Systems secured to your roof with “chemical anchoring” to prevent water leakage
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaTools className="text-4xl text-blue-700" />
          <div>
            <h3 className="text-lg font-bold">5-Year Professional Maintenance Included</h3>
            <p className="text-sm text-gray-700">
              Quarterly deep cleaning, health checks & repairs included
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-cyan-400 text-white font-semibold px-6 py-2 rounded-md hover:bg-cyan-500 transition">
          Know More
        </button>
      </div>
    </div>
  );
};

export default FeaturesSection;
