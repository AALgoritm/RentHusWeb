import { Link } from "react-router-dom";
import LogoDark from "../../assets/LogoDark.png";
import logo from "../../assets/logo.png";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
        <div className="max-w-2xl text-center">
          <div className="mb-6">
            <img
              src={logo}
              alt="Rent Hus i Örebro AB"
              className="h-24 md:h-32 mx-auto block dark:hidden"
            />
            <img
              src={LogoDark}
              alt="Rent Hus i Örebro AB"
              className="h-24 md:h-32 mx-auto hidden dark:block"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-gray-200 leading-tight mb-6">
            Välkommen till{" "}
            <span className="text-teal-600 dark:text-teal-400">
              Rent Hus i Örebro AB
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-900 dark:text-gray-300 mb-4">
            Ditt självklara städbolag i Örebro.
          </p>
          <p className="text-lg text-zinc-900 dark:text-gray-300 mb-8">
            Vi på Rent Hus finns här för att förenkla din vardag genom att
            erbjuda pålitliga och effektiva städtjänster av kvalité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white bg-teal-700 hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-teal-700/30"
            >
              Boka Möte
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md border border-teal-600 text-teal-700 hover:text-teal-800 hover:bg-teal-50 hover:border-teal-700 transition-all duration-300 dark:border-teal-500 dark:text-teal-400 dark:hover:text-teal-300 dark:hover:bg-teal-900/30 dark:hover:border-teal-400"
            >
              Våra Tjänster
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
