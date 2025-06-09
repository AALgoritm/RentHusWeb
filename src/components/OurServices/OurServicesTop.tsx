import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import cars from "../../assets/cars.jpg";

const OurServicesTop: React.FC = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Rent Hus{" "}
              <span className="text-teal-600 dark:text-teal-400">Tjänster</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-4">
              Det enda du behöver inom städ
            </h2>
            <p className="text-lg text-zinc-700 dark:text-gray-300 mb-8">
              Vi erbjuder professionella städtjänster anpassade efter dina
              behov. Kvalitet, pålitlighet och kundnöjdhet står alltid i fokus.
            </p>

            <Link to="/contact" className="inline-block">
              <button className="cursor-pointer inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white bg-teal-700 hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-teal-700/30">
                Boka möte
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>

          <div className="md:w-1/2">
            <img
              src={cars}
              alt="Rent Hus service vehicles"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesTop;
