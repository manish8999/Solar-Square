
const locations = [
  {
    title: "Gujarat",
    cities: "Ahmedabad, Surat",
    image: "/images/gujarat.png",
  },
  {
    title: "Maharashtra",
    cities: "Nagpur, Pune, Nashik, Chhatrapati Sambhajinagar, Kolhapur, Amravati",
    image: "/images/maharashtra.png",
  },
  {
    title: "Madhya Pradesh",
    cities: "Bhopal, Indore, Jabalpur, Gwalior",
    image: "/images/madhyapradesh.png",
  },
  {
    title: "Karnataka",
    cities: "Bengaluru, Mysuru",
    image: "/images/karnataka.png",
  },
  {
    title: "Rajasthan",
    cities: "Jaipur",
    image: "/images/rajasthan.png",
  },
  {
    title: "Uttar Pradesh",
    cities: "Lucknow, Varanasi, Ghaziabad, Kanpur",
    image: "/images/uttarpradesh.png",
  },
  {
    title: "Others",
    cities: "Delhi NCR, Telangana",
    image: "/images/others.png",
  },
];

const LocationsGrid = () => {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 w-full max-w-xs text-center"
          >
            <img
              src={loc.image}
              alt={loc.title}
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{loc.title}</h3>
            <p className="text-sm text-gray-600">{loc.cities}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsGrid;
