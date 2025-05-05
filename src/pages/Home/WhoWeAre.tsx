


const WhoWeAre = () => {
    return (
        <>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-center font-extrabold text-2xl sm:text-3xl mb-10">
                    Who are we?
                </h2>
                <div className="relative max-w-4xl mx-auto mb-12">
                    <div className="flex justify-center items-center gap-6 flex-wrap">
                        <img
                            alt="Group of people cutting a cake under solar panels"
                            className="rounded-xl object-cover w-[140px] h-[220px]"
                            src="https://storage.googleapis.com/a1aa/image/b660776c-434d-45ea-970f-fc2acfcf1e6d.jpg"
                            width={140}
                            height={220}
                        />
                        <img
                            alt="Blue square decorative shape"
                            className="w-10 h-10 rounded-sm flex-shrink-0"
                            src="https://storage.googleapis.com/a1aa/image/dc9ef1b0-3afe-4c60-1795-a129aef3d8f3.jpg"
                            width={40}
                            height={40}
                        />
                        <img
                            alt="Group photo of team posing in a room"
                            className="rounded-xl object-cover w-[180px] h-[140px]"
                            src="https://storage.googleapis.com/a1aa/image/047b9abf-8cb8-4cff-37a8-52034da7af99.jpg"
                            width={180}
                            height={140}
                        />
                        <img
                            alt="Blue square decorative shape"
                            className="w-10 h-10 rounded-sm flex-shrink-0"
                            src="https://storage.googleapis.com/a1aa/image/dc9ef1b0-3afe-4c60-1795-a129aef3d8f3.jpg"
                            width={40}
                            height={40}
                        />
                        <img
                            alt="Team in blue shirts sitting at table with laptops"
                            className="rounded-xl object-cover w-[180px] h-[120px]"
                            src="https://storage.googleapis.com/a1aa/image/e52df635-1429-4b5f-e57a-0160e27c43e4.jpg"
                            width={180}
                            height={120}
                        />
                    </div>
                    <div className="flex justify-center items-center gap-6 flex-wrap mt-4">
                        <img
                            alt="Three people in blue shirts standing outdoors"
                            className="rounded-xl object-cover w-[100px] h-[120px]"
                            src="https://storage.googleapis.com/a1aa/image/c82684f5-489a-42bf-a80f-118841b58a20.jpg"
                            width={100}
                            height={120}
                        />
                        <img
                            alt="Dark blue square decorative shape"
                            className="w-14 h-12 rounded-md flex-shrink-0"
                            src="https://storage.googleapis.com/a1aa/image/678078bf-e424-4e23-46bd-debc6bc8c6dc.jpg"
                            width={40}
                            height={40}
                        />
                        <img
                            alt="Two people playing foosball indoors"
                            className="rounded-xl object-cover w-[160px] h-[110px]"
                            src="https://storage.googleapis.com/a1aa/image/4988f0cc-5e40-4330-b25f-572986752586.jpg"
                            width={160}
                            height={110}
                        />
                        <img
                            alt="Dark blue square decorative shape"
                            className="w-28 h-24 rounded-md flex-shrink-0"
                            src="https://storage.googleapis.com/a1aa/image/678078bf-e424-4e23-46bd-debc6bc8c6dc.jpg"
                            width={120}
                            height={100}
                        />
                    </div>
                </div>
                <p className="max-w-3xl mx-auto text-center text-sm sm:text-base text-gray-900 mb-14">
                    We are a group of 1000+ engineers, MBAs, scientists, creative thinkers driven by the single vision of accelerating adoption of solar in homes.
                </p>
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-gray-100 rounded-xl px-6 py-4">
                        <h3 className="text-3xl font-extrabold text-blue-900 leading-none mb-1">4.8</h3>
                        <p className="font-semibold text-gray-900 text-sm">rating on Google with 6000+ reviews</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl px-6 py-4">
                        <h3 className="text-3xl font-extrabold text-blue-900 leading-none mb-1">10+</h3>
                        <p className="font-semibold text-gray-900 text-sm">years of experience</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl px-6 py-4">
                        <h3 className="text-3xl font-extrabold text-blue-900 leading-none mb-1">25,000+</h3>
                        <p className="font-semibold text-gray-900 text-sm">homes solarised</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl px-6 py-4">
                        <h3 className="text-3xl font-extrabold text-blue-900 leading-none mb-1">₹90+ Cr</h3>
                        <p className="font-semibold text-gray-900 text-sm">
                            Savings for families across India
                            <br />
                            (2020 – 2025)
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhoWeAre;
