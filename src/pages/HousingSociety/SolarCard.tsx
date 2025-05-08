



const SolarCard = () => {

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <h2 className="text-center font-extrabold text-lg md:text-xl mb-6">
                Sahi Solar, Guaranteed Savings
            </h2>
            <p className="max-w-4xl mx-auto text-center text-sm md:text-base mb-6 leading-relaxed">
                The right solar ensures reliability, longevity, and proper savings. At SolarSquare, our advanced IIT-Bombay-approved WindPro Mount™ structures withstand wind speeds up to 170 kmph, offering unmatched safety and durability
            </p>
            <p className="max-w-4xl mx-auto text-center text-sm md:text-base mb-12 leading-relaxed">
                With our money-back guarantee, we ensure your savings are secure—if your solar system doesn’t generate the promised units, we’ll compensate you for the shortfall. Furthermore, our global standard in chemical anchoring ensures a leakage-free rooftop. We also offer a ₹1-lakh leakage-free guarantee
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-12 max-w-5xl mx-auto text-center">
                <div className="flex flex-col items-center max-w-xs">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/0f3aacd8-3035-4a67-dbcf-8969a1b4f4ee.jpg"
                        alt="Icon of a calculator with a blue badge on bottom right"
                        className="mb-3"
                        width={40}
                        height={40}
                    />
                    <h3 className="font-extrabold text-xs md:text-sm leading-tight mb-2">
                        Save more with Government Subsidy
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed">
                        Avail ₹18,000 per kW subsidy (up to ₹90 lakhs) under government schemes.
                    </p>
                </div>
                <div className="flex flex-col items-center max-w-xs">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/efa1ab4a-3c5d-4342-8826-e4bd5532fe00.jpg"
                        alt="Icon of stacked coins with a rupee symbol and a clock"
                        className="mb-3"
                        width={40}
                        height={40}
                    />
                    <h3 className="font-extrabold text-xs md:text-sm leading-tight mb-2">
                        Financing Options, Tailored for You
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed">
                        Choose from OPEX, CAPEX, or our Zero Investment plan to switch to solar with ease.
                    </p>
                </div>
                <div className="flex flex-col items-center max-w-xs">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/2e7ffaae-d700-45cd-8d27-edb9ec3bb453.jpg"
                        alt="Icon of a bill with text and lines"
                        className="mb-3"
                        width={40}
                        height={40}
                    />
                    <h3 className="font-extrabold text-xs md:text-sm leading-tight mb-2">
                        When will you break even?
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed">
                        The break even period is anywhere between 1 to 4 years depending on electricity tariffs and your choice of components.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default SolarCard;
