


const HousingSocietyCard = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-center font-extrabold text-lg sm:text-xl md:text-2xl leading-tight mb-3">
                Sneak-Peek Into Our Housing Societies With Big Savings
            </h2>
            <p className="text-center text-sm sm:text-base mb-8">
                200+ Housing societies across 20+ cities have switched to solar with us.
            </p>
            <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-8 max-w-5xl mx-auto">
                <img
                    src="https://storage.googleapis.com/a1aa/image/acbf5d18-38f6-4939-340f-017d85f22d6e.jpg"
                    alt="Aerial view of a tall apartment building rooftop covered with solar panels and surrounding buildings"
                    className="rounded-xl w-full md:w-[600px] object-cover"
                    height="400"
                    width="600"
                />
                <div className="max-w-md">
                    <h3 className="font-bold text-base sm:text-lg mb-2">
                        Godrej Infinity Housing Society
                    </h3>
                    <p className="text-sm sm:text-base mb-6 leading-relaxed">
                        This is our largest CHS installation in Pune, with a 400 kW solar system installed across common areas. This large-scale system is poised to deliver significant savings for society.
                    </p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm sm:text-base">
                        <div>
                            <p className="font-bold">May 2023</p>
                            <p>Commissioned</p>
                        </div>
                        <div>
                            <p className="font-bold">₹64,89,000</p>
                            <p>Lifetime Savings</p>
                        </div>
                        <div>
                            <p className="font-bold">Just 1 year</p>
                            <p>Time to Break Even</p>
                        </div>
                        <div>
                            <p className="font-bold">₹60 lakhs</p>
                            <p>Subsidy Received</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HousingSocietyCard;