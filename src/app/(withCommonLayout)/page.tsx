import AboutUs from "@/components/UI/HomePage/AboutUs/AboutUs";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import SearchBloodDonor from "@/components/UI/HomePage/SearchBloodDonor/SearchBloodDonor";
import Testimonials from "@/components/UI/HomePage/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      {/* <SearchBloodDonor /> */}
      <Testimonials />
    </>
  );
};

export default HomePage;