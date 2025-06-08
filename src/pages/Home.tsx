import CarinaHome from "@/components/HomePage/CarinaHome";
import HeroSection from "@/components/HomePage/HeroSection";
import OurServices from "@/components/HomePage/OurServices";
import Warranty from "@/components/HomePage/Warranty";
import WipeStove from "@/components/HomePage/WipeStove";
import WorkHere from "@/components/HomePage/WorkHere";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <HeroSection />
        <WipeStove className="my-8" />
        <CarinaHome />
        <OurServices />
        <Warranty />
        <WorkHere className="my-8" />
      </div>
    </>
  );
};
export default Home;
