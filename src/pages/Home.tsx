import CarinaHome from "@/components/HomePage/CarinaHome";
import HeroSection from "@/components/HomePage/HeroSection";
import WipeStove from "@/components/HomePage/WipeStove";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <HeroSection />
        <WipeStove className="my-8" />
        <CarinaHome />
      </div>
    </>
  );
};
export default Home;
