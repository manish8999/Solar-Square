



const Safety = () => {
    return (
        <div className="bg-white text-[#0B1120] font-poppins">
            <section className="max-w-7xl mx-auto px-4 pt-10 text-center">
                <h2 className="font-semibold text-xl md:text-2xl">
                    Your Safety, Our Obsession
                </h2>
                <p className="text-sm md:text-base mt-1 mb-6 max-w-xl mx-auto">
                    We ensure state-of-the-art safety measures during and after post-installation
                </p>
                <div className="flex justify-center space-x-16 mb-10">
                    <img
                        alt="ISO logo with blue globe and text ISO"
                        className="h-10 w-auto"
                        height="40"
                        src="https://storage.googleapis.com/a1aa/image/426bb15c-5119-445a-f52f-3eb00a412f33.jpg"
                        width="60"
                    />
                    <img
                        alt="BIS logo with red and blue triangle and text"
                        className="h-10 w-auto"
                        height="40"
                        src="https://storage.googleapis.com/a1aa/image/5ebe5ef7-2987-4611-9143-e87f3e5860f9.jpg"
                        width="60"
                    />
                    <img
                        alt="IEC logo blue square with white text IEC"
                        className="h-10 w-auto"
                        height="40"
                        src="https://storage.googleapis.com/a1aa/image/076b2c50-5a14-4594-ce35-ef0e99915546.jpg"
                        width="60"
                    />
                </div>
                <h3 className="font-semibold text-lg md:text-xl mb-4">
                    Certified by Leading Organizations
                </h3>
                <div className="flex justify-center space-x-14 mb-16">
                    <img
                        alt="UL Certified logo black and white"
                        className="h-14 w-auto"
                        height="60"
                        src="https://storage.googleapis.com/a1aa/image/124f001b-03fd-404c-166c-764f78bd6888.jpg"
                        width="50"
                    />
                    <img
                        alt="CII logo purple text in rectangle"
                        className="h-10 w-auto"
                        height="40"
                        src="https://storage.googleapis.com/a1aa/image/6ce13922-f6b1-4c07-ed82-5b8b86c4aefe.jpg"
                        width="50"
                    />
                    <img
                        alt="TUV SUD octagon blue logo"
                        className="h-12 w-auto"
                        height="50"
                        src="https://storage.googleapis.com/a1aa/image/159a01c5-3437-4e0d-a239-9ce7ba3477fc.jpg"
                        width="50"
                    />
                    <img
                        alt="Government of India emblem blue gear and lion"
                        className="h-12 w-auto"
                        height="50"
                        src="https://storage.googleapis.com/a1aa/image/9ade658c-702f-4eb0-1a8f-281ee93476d3.jpg"
                        width="50"
                    />
                </div>
            </section>
            <section className="bg-[#F9F9F9] py-10">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="font-semibold text-xl md:text-2xl mb-6">In the News</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <article className="bg-white rounded-md shadow-sm overflow-hidden">
                            <img
                                alt="Three people in blue shirts standing near a white van with SolarSquare branding"
                                className="w-full object-cover"
                                height="220"
                                src="https://storage.googleapis.com/a1aa/image/e7fe259c-ddb4-435a-25db-a7409efdce97.jpg"
                                width="400"
                            />
                            <div className="p-3 text-xs text-[#6B7280]">DEC 12, 2024 – FORBES</div>
                            <h3 className="px-3 font-semibold text-sm md:text-base leading-tight">
                                How SolarSquare has a chance to become a home energy brand in India
                            </h3>
                            <a className="block px-3 py-2 text-xs text-blue-600 hover:underline" href="#">
                                Read More
                            </a>
                        </article>
                        <article className="bg-white rounded-md shadow-sm overflow-hidden">
                            <img
                                alt="Three people in blue shirts smiling with colorful background"
                                className="w-full object-cover"
                                height="220"
                                src="https://storage.googleapis.com/a1aa/image/c2b9efb7-6340-492a-ecb2-34fd4e4e6163.jpg"
                                width="400"
                            />
                            <div className="p-3 text-xs text-[#6B7280]">DEC 12, 2024 – BUSINESS TODAY</div>
                            <h3 className="px-3 font-semibold text-sm md:text-base leading-tight">
                                SolarSquare raises $40 million in one of India’s largest solar VC deals, Lightspeed leads the round
                            </h3>
                            <a className="block px-3 py-2 text-xs text-blue-600 hover:underline" href="#">
                                Read More
                            </a>
                        </article>
                        <article className="bg-white rounded-md shadow-sm overflow-hidden">
                            <img
                                alt="Three people in blue shirts holding Fresh Funding sign with money background"
                                className="w-full object-cover"
                                height="220"
                                src="https://storage.googleapis.com/a1aa/image/31d1eaf1-eb19-4e80-04dc-bbeeba8fa0cf.jpg"
                                width="400"
                            />
                            <div className="p-3 text-xs text-[#6B7280]">DEC 12, 2024 – THE HINDU</div>
                            <h3 className="px-3 font-semibold text-sm md:text-base leading-tight">
                                SolarSquare raises $40 million in Series B funding round
                            </h3>
                            <a className="block px-3 py-2 text-xs text-blue-600 hover:underline" href="#">
                                Read More
                            </a>
                        </article>
                    </div>
                    <div className="flex justify-center mt-8 space-x-4 text-gray-400 text-lg">
                        <i className="fas fa-circle"></i>
                        <i className="far fa-circle"></i>
                        <i className="far fa-circle"></i>
                        <i className="far fa-circle"></i>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Safety;