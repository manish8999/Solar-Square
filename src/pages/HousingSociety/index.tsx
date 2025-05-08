import FirstContainer from "./FirstContainer";
import WhyChooseUs from "./WhyChooseUs";
import LocationCard from "./LocationCard";
import SolarCard from "./SolarCard";
import SolarGuide from "./SolarGuide";
import HousingSocietyCard from "./HousingSocietyCard";
import CustomerCard from "./CustomerCard";
import Safety from "./Safety";
import FAQComponent from "./FAQComponent";

const HousingSociety = () => {
    return (
        <>
            <FirstContainer />

            <div className="w-full flex flex-col items-center justify-center mt-8 ">
                <img
                    src="/Homes-India-banner.gif"
                    alt="Solar Animation"
                    className=" h-auto mb-4"
                />
            </div>


            <WhyChooseUs />

            <LocationCard />

            <SolarCard />

            <SolarGuide />

            <HousingSocietyCard />

            <CustomerCard />

            <Safety />

            <FAQComponent />

        </>
    )
}


export default HousingSociety;