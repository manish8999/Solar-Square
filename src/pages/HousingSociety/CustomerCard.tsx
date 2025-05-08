const customerData = [
    {
        name: "Shrikanth Aithala",
        location1: "Mont Vert Finesse CHSL",
        location2: "Pashan Pune",
        testimonial: `"We chose Solar Square after evaluating more than 10 other vendor proposals because we thought they were the most flexible and responsive to our queries. Once the project started, we were impressed with their professionalism and meticulous approach. It is not easy to deal with housing societies, where each member has a say in how the project should be executed. I am glad that Solar Square is focused on this segment and has the right attitude and skills to make such complex projects a success. Their team has exceeded our expectations."`
    },
    {
        name: "Mr. Prashant",
        location1: "MC Purva Fairmont, HSR",
        location2: "Bengaluru, Karnataka",
        testimonial: `"We chose SolarSquare as our preferred vendor as their specification for the Rooftop Solar PV system was the best at that time and gave us confidence in their technical abilities to execute the project. They were very cooperative with our requests and suggestions. They executed the project flawlessly. The installation occurred in the COVID years, which was an added challenge that Solar Square worked through to complete the project. Post installation, the preventive maintenance and service have been very good. I would recommend SolarSquare without hesitation."`
    }
];

function CustomerCards({ name, location1, location2, testimonial }: { name: string, location1: string, location2: string, testimonial: string }) {
    return (
        <div className="border border-blue-400 rounded-md bg-blue-50 flex-1">
            <div className="px-4 py-3 border-b border-blue-400">
                <h3 className="font-semibold text-sm text-black mb-1">{name}</h3>
                <p className="text-xs text-gray-800 mb-0.5">{location1}</p>
                <p className="text-xs text-gray-500">{location2}</p>
            </div>
            <div className="px-4 py-4 text-xs text-black leading-tight">
                {testimonial}
            </div>
        </div>
    );
}

const CustomerCard = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-center font-semibold text-lg leading-6 text-black mb-6">
                A Glimpse of Our Customer’s Solar Journey
            </h2>
            <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
                {customerData.map((customer, index) => (
                    <CustomerCards key={index} {...customer} />
                ))}
            </div>
            <div className="flex justify-center mt-4 space-x-2 text-gray-400 text-xs">
                <span>•</span>
                <span>•</span>
            </div>
        </div>
    );
};

export default CustomerCard;
