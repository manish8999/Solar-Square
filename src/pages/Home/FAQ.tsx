const FAQ = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h2 className="text-center font-extrabold text-2xl sm:text-3xl md:text-4xl mb-10">
                Frequently Asked Questions
            </h2>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">
                <div className="w-full">
                    <div className="border-b border-black border-opacity-30 flex text-sm font-semibold">
                        <button
                            className="bg-[#00008B] text-white px-6 py-2 focus:outline-none"
                            type="button"
                        >
                            General
                        </button>
                        <button
                            className="px-6 py-2 border-b border-black border-opacity-30 focus:outline-none"
                            type="button"
                        >
                            Solar Maintenance
                        </button>
                        <button
                            className="px-6 py-2 border-b border-black border-opacity-30 focus:outline-none"
                            type="button"
                        >
                            Solar Economics
                        </button>
                    </div>
                    <ul className="mt-6 space-y-4">
                        <li className="flex items-center border-b border-gray-300 pb-3">
                            <i className="fas fa-plus text-black mr-3"></i>
                            <span className="font-semibold text-sm">What is SolarSquare?</span>
                        </li>
                        <li className="flex items-center border-b border-gray-300 pb-3">
                            <i className="fas fa-plus text-black mr-3"></i>
                            <span className="font-semibold text-sm">What is a solar rooftop system?</span>
                        </li>
                        <li className="flex items-center border-b border-gray-300 pb-3">
                            <i className="fas fa-plus text-black mr-3"></i>
                            <span className="font-semibold text-sm">How does a solar rooftop system work?</span>
                        </li>
                        <li className="flex items-center border-b border-gray-300 pb-3">
                            <i className="fas fa-plus text-black mr-3"></i>
                            <span className="font-semibold text-sm">How to apply for a solar rooftop subsidy?</span>
                        </li>
                        <li className="flex items-center border-b border-gray-300 pb-3">
                            <i className="fas fa-plus text-black mr-3"></i>
                            <span className="font-semibold text-sm">What is the price of a solar system in India without a subsidy?</span>
                        </li>
                        <li className="flex items-center border-b border-gray-300 pb-3">
                            <i className="fas fa-plus text-black mr-3"></i>
                            <span className="font-semibold text-sm">Why should I go solar?</span>
                        </li>
                        <li className="flex items-center border-b border-gray-300 pb-3">
                            <i className="fas fa-plus text-black mr-3"></i>
                            <span className="font-semibold text-sm">Is solar power safe?</span>
                        </li>
                        <li className="flex items-center border-b border-gray-300 pb-3">
                            <i className="fas fa-plus text-black mr-3"></i>
                            <span className="font-semibold text-sm">What do I need to install a rooftop solar system?</span>
                        </li>
                        <li className="flex items-center border-b border-gray-300 pb-3">
                            <i className="fas fa-plus text-black mr-3"></i>
                            <span className="font-semibold text-sm">What are the different types of Solar systems?</span>
                        </li>
                        <li className="flex items-center border-b border-gray-300 pb-3">
                            <i className="fas fa-plus text-black mr-3"></i>
                            <span className="font-semibold text-sm">Do solar panels generate electricity even during monsoon and winter?</span>
                        </li>
                        <li className="flex items-center border-b border-gray-300 pb-3">
                            <i className="fas fa-plus text-black mr-3"></i>
                            <span className="font-semibold text-sm">Does a rooftop solar PV generate power during a power failure?</span>
                        </li>
                        <li className="flex items-center border-b border-gray-300 pb-3">
                            <i className="fas fa-plus text-black mr-3"></i>
                            <span className="font-semibold text-sm">How much electricity does a solar plant produce?</span>
                        </li>
                        <li className="flex items-center border-b border-gray-300 pb-3">
                            <i className="fas fa-plus text-black mr-3"></i>
                            <span className="font-semibold text-sm">What kind of appliances can I use on Solar Power?</span>
                        </li>
                    </ul>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative">
                        <img
                            alt="Portrait of a smiling man wearing a blue polo shirt and blue cap with SolarSquare logo, circular crop with a blue circle partially behind"
                            className="rounded-full object-cover w-48 sm:w-56 md:w-72"
                            height="510"
                            src="https://sse-website.s3.ap-south-1.amazonaws.com/home-page/FAQ_new.webp"
                            width="510"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
