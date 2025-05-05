import { useState, useEffect } from "react";
import ConsultationForm from "./ConsultationForm";
import FeaturesSection from "./FeaturesSection";
import LocationsGrid from "./LocationsGrid";
import WhoWeAre from "./WhoWeAre";
import FAQ from "./FAQ";

const sliderData = [
  {
    id: 1,
    image: "/slider-1.jpg",
    title: "Clean Solar Energy",
    description: "Power your home with clean, renewable energy.",
  },
  {
    id: 2,
    image: "/slider-2.jpg",
    title: "Zero Electricity Bills",
    description: "Reduce your monthly expenses with solar solutions.",
  },
  {
    id: 3,
    image: "/slider-3.jpg",
    title: "Eco-Friendly Future",
    description: "Join the movement for a greener planet.",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={sliderData[currentIndex].image}
          alt={sliderData[currentIndex].title}
          className="absolute w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white px-4 text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-md">
            {sliderData[currentIndex].title}
          </h2>
          <p className="text-md md:text-2xl max-w-2xl drop-shadow-md">
            {sliderData[currentIndex].description}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-8 ">
        <img
          src="/Homes-India-banner.gif"
          alt="Solar Animation"
          className=" h-auto mb-4"
        />
      </div>

      <ConsultationForm />

      <FeaturesSection />

      <LocationsGrid />

      <WhoWeAre />

      <FAQ />
    </>
  );
};

export default Home;
