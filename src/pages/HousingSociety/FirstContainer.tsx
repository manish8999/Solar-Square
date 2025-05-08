import { useState } from "react";



function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            src: "/Seawood-1-min.png",
            alt: "Aerial view of a housing society rooftop with multiple solar panels installed on the roofs surrounded by trees and buildings",
        },
        {
            src: "/seawood-2-min.png",
            alt: "Placeholder image showing solar panels on a rooftop with blue sky background",
        },
        {
            src: "/seaworrd-3-min.png",
            alt: "Placeholder image showing solar panels on a rooftop with trees around",
        },
    ];

    function goToIndex(index: any) {
        setCurrentIndex(index);
    }

    return (
        <div className="relative w-full rounded-xl overflow-hidden">
            <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-auto object-cover rounded-xl"
                width={720}
                height={400}
            />
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        onClick={() => goToIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full cursor-pointer ${idx === currentIndex ? "bg-white opacity-100" : "bg-white opacity-50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}


const FirstContainer = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0B2A83] to-[#0B0E2B] px-4 py-10">
            <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
                <div className="lg:w-1/2 max-w-xl text-white">
                    <h1 className="font-semibold text-2xl lg:text-3xl leading-tight">
                        Slash Your Society's Electricity Bills by 90%
                    </h1>
                    <h2 className="font-semibold text-xl lg:text-2xl text-[#00A3D6] mt-1 leading-tight">
                        with SolarSquare!
                    </h2>
                    <p className="text-sm lg:text-base mt-2 mb-6">
                        Switch to rooftop solar and enjoy unbeatable savings
                    </p>
                    <Slider />
                </div>
                <form
                    autoComplete="off"
                    className="bg-white rounded-2xl p-8 w-full max-w-md shadow-lg"
                >
                    <div className="mb-5">
                        <label
                            className="block text-xs font-semibold text-gray-700 mb-1"
                            htmlFor="fullname"
                        >
                            Full Name
                            <span className="text-red-600">*</span>
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2A83]"
                            id="fullname"
                            required
                            type="text"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            className="block text-xs font-semibold text-gray-700 mb-1"
                            htmlFor="housing"
                        >
                            Name of Housing Society
                            <span className="text-red-600">*</span>
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2A83]"
                            id="housing"
                            required
                            type="text"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            className="block text-xs font-semibold text-gray-700 mb-1"
                            htmlFor="pincode"
                        >
                            Pin code
                            <span className="text-red-600">*</span>
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2A83]"
                            id="pincode"
                            required
                            type="text"
                        />
                    </div>
                    <div className="mb-5 flex flex-col sm:flex-row sm:space-x-6 gap-4">
                        <div className="flex-1">
                            <label
                                className="block text-xs font-semibold text-gray-700 mb-1"
                                htmlFor="whatsapp"
                            >
                                WhatsApp number
                                <span className="text-red-600">*</span>
                            </label>
                            <input
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2A83]"
                                id="whatsapp"
                                required
                                type="text"
                            />
                        </div>
                        <div className="flex-1">
                            <label
                                className="block text-xs font-semibold text-gray-700 mb-1"
                                htmlFor="monthlybill"
                            >
                                Monthly Electricity Bill
                                <span className="text-red-600">*</span>
                            </label>
                            <select
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2A83]"
                                id="monthlybill"
                                required
                            >
                                <option value="0-50000" selected>
                                    0 - 50000
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-5">
                        <p className="text-xs font-semibold text-gray-700 mb-2">
                            What is your designation in Housing Society?
                            <span className="text-red-600">*</span>
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <button
                                type="button"
                                className="text-xs border border-gray-400 rounded-md px-3 py-1 hover:bg-gray-100"
                            >
                                Management committee member
                            </button>
                            <button
                                type="button"
                                className="text-xs border border-gray-400 rounded-md px-3 py-1 hover:bg-gray-100"
                            >
                                Resident
                            </button>
                            <button
                                type="button"
                                className="text-xs border border-gray-400 rounded-md px-3 py-1 hover:bg-gray-100"
                            >
                                Builder
                            </button>
                            <button
                                type="button"
                                className="text-xs border border-gray-400 rounded-md px-3 py-1 hover:bg-gray-100"
                            >
                                Facility Manager
                            </button>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            className="block text-xs font-semibold text-gray-700 mb-1"
                            htmlFor="agmstatus"
                        >
                            AGM approval status
                            <span className="text-red-600">*</span>
                        </label>
                        <select
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B2A83]"
                            id="agmstatus"
                            required
                        >
                            <option disabled selected value="">
                                Select Approval Status
                            </option>
                        </select>
                    </div>
                    <div className="mb-6 flex items-center space-x-2 text-xs text-gray-500">
                        <input
                            type="checkbox"
                            id="agree"
                            className="w-4 h-4 text-[#0B2A83] border-gray-300 rounded focus:ring-0"
                            defaultChecked
                        />
                        <label htmlFor="agree" className="select-none">
                            I agree to SolarSquare's{' '}
                            <a href="#" className="underline hover:text-[#0B2A83]">
                                terms of service
                            </a>{' '}
                            &amp;{' '}
                            <a href="#" className="underline hover:text-[#0B2A83]">
                                privacy policy
                            </a>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#0B2A83] to-[#0B0E2B] text-white font-semibold text-sm py-2 rounded-full hover:brightness-110 transition"
                    >
                        Submit Details
                    </button>
                </form>
            </div>
            
        </div>
    )
}


export default FirstContainer;