import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import cars from "../../assets/cars.jpg";

const Warranty = () => {
  const [offset, setOffset] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        const elementTop = parallaxRef.current.offsetTop;
        const elementHeight = parallaxRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;

        if (
          scrollPosition + viewportHeight > elementTop &&
          scrollPosition < elementTop + elementHeight
        ) {
          const relativeScroll = scrollPosition - elementTop;
          setOffset(relativeScroll * 0.4);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={parallaxRef}
      className="relative h-[60vh] flex items-center justify-center overflow-hidden py-16"
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${cars})`,
          transform: `translateY(${offset}px)`,
        }}
      />

      <div className="container px-4 flex items-center justify-center">
        <div className="bg-teal-700/90 p-8 md:p-12 rounded-lg max-w-2xl text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Städgaranti
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed">
            Städgaranti är vårt ord till dig om kvalitet och tillfredsställelse.
            Vår garanti innebär att om du mot förmodan skulle vara missnöjd med
            något i vår städning, åtar vi oss att åtgärda detta.
          </p>
          <Button
            className="mt-4 md:mt-6 px-6 py-2 md:px-8 md:py-4 bg-transparent border border-white text-white hover:bg-white/10 transition-all duration-300"
            asChild
          >
            <Link
              to="/contact"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Boka möte
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
