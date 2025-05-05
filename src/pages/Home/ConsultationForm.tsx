
const ConsultationForm = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-900 to-blue-800 flex flex-col md:flex-row items-center justify-center px-4 py-12">
      <div className="w-full md:w-1/2 text-white mb-10 md:mb-0 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Schedule a <span className="text-cyan-400">FREE consultation</span> with us today!
        </h2>
        <p className="text-md md:text-lg max-w-md">
          Get genuine advice from our solar experts.
          <br />
          No pressure, book only if you are satisfied!
        </p>
      </div>

      <div className="w-full md:w-1/2 max-w-md bg-white text-black rounded-xl shadow-lg p-6">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name *</label>
            <input type="text" className="w-full border rounded-md p-2 mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">WhatsApp number *</label>
            <input type="text" className="w-full border rounded-md p-2 mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Monthly Electricity Bill *</label>
            <div className="flex flex-wrap gap-2 mt-2">
              <button type="button" className="border rounded-full px-4 py-1">Less than ₹1500</button>
              <button type="button" className="border rounded-full px-4 py-1">₹1500 – ₹2500</button>
              <button type="button" className="border rounded-full px-4 py-1">₹2500 – ₹4000</button>
              <button type="button" className="border rounded-full px-4 py-1">₹4000 – ₹8000</button>
              <button type="button" className="border rounded-full px-4 py-1">More than ₹8000</button>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium">Pin code *</label>
              <input type="text" className="w-full border rounded-md p-2 mt-1" />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium">City</label>
              <input type="text" className="w-full border rounded-md p-2 mt-1" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full border rounded-md p-2 mt-1" />
          </div>

          <div className="flex items-start space-x-2 text-sm">
            <input type="checkbox" className="mt-1" />
            <p>I agree to SolarSquare's <a href="#" className="text-blue-500 underline">terms of service</a> & <a href="#" className="text-blue-500 underline">privacy policy</a></p>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-cyan-600 transition"
          >
            Yes! Reduce my electricity bill
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
